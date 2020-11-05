<template>
  <div>
    <a-card>
      <Heading name="分包明细">
        <template v-if="!isDetail">
          <a-button type="primary" @click="handleAdd('product')">
            分包
          </a-button>
          <pop-confirm-btn
            title="是否快捷分包?"
            hoverContent="在每个标下分1个包，并自动关联每个标下的所有产品"
            btnName="快捷分包"
            @confirm-action="addFast">
          </pop-confirm-btn>
          <a-popconfirm
            :disabled="!this.hasSelectedRowKeys"
            title="确定批量删除?"
            ok-text="确认"
            cancel-text="取消"
            @confirm="handleDelete"
          >
            <a-button type="primary" @click="handleDelete(0)">
              <i :class="['iconfont', 'icon-weibiaoti544']"></i>
              批量删除
            </a-button>
          </a-popconfirm>
          <a-button type="primary" @click="handleSubmit" :disabled="isConnect">
            <i :class="['iconfont', 'icon-baocun']"></i>
            保存
          </a-button>
        </template>
      </Heading>
      <a-table
        class="es-table"
        size="small"
        :bordered="true"
        :loading="pageData.loading"
        :pagination="false"
        :columns="columns"
        :dataSource="dataSource"
        rowKey="subcontractingId"
        :rowSelection="
          isDetail
            ? null
            : {
                fixed: true,
                selectedRowKeys: selectedRowKeys,
                onChange: onSelectChange
              }
        "
        :scroll="{ x: true }"
      >
        <template slot="subcontractingName" slot-scope="text, record, index">
          <a-form v-if="!isDetail" :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                allowClear
                v-decorator="[
                  `subcontractingName${index}`,
                  {
                    validateTrigger: ['blur'],
                    rules: [{ required: true, validator: checkSubContract }],
                    initialValue: text
                  }
                ]"
                @focus="e => fnFocus(e, record)"
                @change="
                  e =>
                    onCellChange(
                      e.target.value,
                      record.subcontractingId,
                      'subcontractingName'
                    )
                "
                style="margin: -5px 0;width:100%"
              />
            </a-form-item>
          </a-form>
          <span v-else>{{ text }}</span>
        </template>

        <template slot="bondMoney" slot-scope="text, record, index">
          <a-form v-if="!isDetail" :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                :disabled="!record.subcontractingName"
                allowClear
                v-decorator="[
                  `bondMoney${index}`,
                  {
                    validateTrigger: ['blur'],
                    rules: [{ required: true, validator: validMoney }],
                    initialValue: text
                  }
                ]"
                @change="
                  e =>
                    onCellChange(
                      e.target.value,
                      record.subcontractingId,
                      'bondMoney'
                    )
                "
                style="margin: -5px 0;width:100%"
              />
            </a-form-item>
          </a-form>
          <span v-else>{{ text }}</span>
        </template>

        <template slot="reckonMoney" slot-scope="text, record, index">
          <a-form v-if="!isDetail" :form="form" @submit="handleSubmit">
            <a-form-item>
              <a-input
                allowClear
                v-decorator="[
                  `reckonMoney${index}`,
                  {
                    validateTrigger: ['blur'],
                    rules: [{ required: true, validator: validMoney }],
                    initialValue: text
                  }
                ]"
                @change="
                  e =>
                    onCellChange(
                      e.target.value,
                      record.subcontractingId,
                      'reckonMoney'
                    )
                "
                style="margin: -5px 0;width:100%"
              />
            </a-form-item>
          </a-form>
          <span v-else>{{ text }}</span>
        </template>
        <template slot="action" slot-scope="record">
          <a-popconfirm
            title="是否确认删除所选行?"
            ok-text="确认"
            cancel-text="取消"
            @confirm="deleteById(record.subcontractingId)"
          >
            <a style="margin-right: 8px">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
      <pagination
        v-if="this.isDetail"
        :value="pageData.page"
        :pageSize="pageData.limit"
        v-show="pageData.total > 0"
        :total="pageData.total"
        @change="sizeChange"
        @showSizeChange="pageChange"
      ></pagination>
    </a-card>
    <a-modal
      title="分包"
      width="80%"
      :centered="true"
      :maskClosable="false"
      v-if="productVisible"
      v-model="productVisible"
      @ok="handleOk('product')"
    >
      <ProductSelect @getData='getData' :projectId="this.projectId" ref="product"></ProductSelect>
    </a-modal>
  </div>
</template>

<script>
import Heading from "@/components/heading/Heading";
import PopConfirmBtn from "@/components/button/PopConfirmBtn";
import {
  findSubContractForContract,
  deleteSubContract,
  updateSubContract,
  addSubContractForFast,
  validateSubContractName
} from "@/services/other";
import Pagination from "@/components/pagination/Pagination";
import ProductSelect from "./SubContractSelect";

const pageData = {
  limit: 15,
  total: 0,
  page: 1,
  loading: false
};

const columns = [
  {
    title: "序号",
    dataIndex: "number",
    align: "center",
    width: 80,
    customRender: (text, record, index) =>
      `${(pageData.page - 1) * pageData.limit + index + 1}`
  },
  {
    title: "标名",
    dataIndex: "subTenderName",
    align: "center"
  },
  {
    title: "包名",
    dataIndex: "subcontractingName",
    scopedSlots: { customRender: "subcontractingName" },
    align: "center"
  },
  {
    title: "估算含税金额（元)",
    dataIndex: "reckonMoney",
    scopedSlots: { customRender: "reckonMoney" },
    align: "center"
  },
  {
    title: "操作",
    align: "center",
    scopedSlots: { customRender: "action" },
    fixed: "right",
    width: 80
  }
];

const dataSource = [];

export default {
  name: "sub-contract-table",
  components: { Heading, Pagination, ProductSelect, PopConfirmBtn },
  props: {
    isDetail: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: dataSource,
      projectId: this.$route.params.id,
      selectedRowKeys: [],
      selectedRows: [],
      curRecord: {},
      isConnect: false,
      productVisible: false,
      pageData: pageData
    };
  },
  watch: {
    isDetail: {
      handler(val) {
        console.log(val);
        if (val) {
          const newColumns = [...this.columns];
          delete newColumns[4];
          this.columns = newColumns;
        }
        return val;
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    hasSelectedRowKeys() {
      return !!this.selectedRowKeys.length == 0 ? false : true;
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      let param = Object.assign(
        {
          limit: this.isDetail ? this.pageData.limit : 10000,
          page: this.pageData.page,
          projectId: this.projectId
        },
        this.filter
      );
      this.dataSource = [];
      this.pageData.loading = true;
      findSubContractForContract(param).then(res => {
        const resData = res.data;
        const responseResult = res.data.responseResult;
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = data;
          this.$emit("emit-sc-length", this.dataSource.length);
          this.$emit("update-product-info");
          this.pageData.total = Number(total);
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.pageData.loading = false;
      });
    },
    handleAdd(key) {
      this[`${key}Visible`] = true;
    },
    handleOk(key) {
      this.getData();
      this[`${key}Visible`] = false;
    },
    addFast() {
      addSubContractForFast(this.projectId).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.success(responseResult, 3);
          this.getData();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    validMoney(rule, value, callback) {
      let reg = this.BASE.reg.moneyReg;
      if (!this.BASE.CheckIsNullOrEmpty(value)) {
        callback("请输入金额");
        return;
      }
      if (!reg.test(value)) {
        callback("请输入正确的金额");
      }
      callback();
    },
    fnFocus(e, record) {
      this.curRecord = record;
    },
    checkSubContract(rule, value, callback) {
      if (!this.BASE.CheckIsNullOrEmpty(value)) {
        callback("请输入包名");
        return;
      }
      if (this.BASE.ObjectIsNull(this.curRecord)) {
        callback();
        return;
      }
      let subcontractingId = "";
      let subtenderId = "";

      this.dataSource.forEach(element => {
        if (
          !!this.curRecord.subcontractingId &&
          this.curRecord.subcontractingId == element.subcontractingId
        ) {
          subtenderId = element.subtenderId;
          subcontractingId = element.subcontractingId;
        }
      });
      validateSubContractName(
        this.projectId,
        subtenderId,
        subcontractingId,
        value
      ).then(res => {
        const resData = res.data;
        let customMess = "";
        if (resData.errCode !== "0000") {
          customMess = resData.customMess;
          callback(customMess);
        } else {
          callback();
        }
      });
      this.curRecord = {};
    },
    onCellChange(value, key, column) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.subcontractingId)[0];
      if (target) {
        target[column] = value;
        this.dataSource = newData;
      }
    },
    handleSubmit(e) {
      e.preventDefault(e);
      this.form.validateFieldsAndScroll(this.BASE.formScrollOptions, error => {
        if (error) {
          return;
        }
        this.isConnect = true;
        this.updateInfo();
      });
    },
    // 更新
    updateInfo() {
      updateSubContract(this.dataSource).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          this.$message.success(resData.responseResult, 3);
          this.getData();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.isConnect = false;
      });
    },
    onSelectChange(data, row) {
      this.selectedRowKeys = data;
      this.selectedRows = row;
    },
    handleDelete(type) {
      if (!this.hasSelectedRowKeys) {
        this.$message.warning("请选择要删除的数据！");
        return false;
      }
      if (type == 0) {
        return;
      }
      this.deleteById();
    },
    // 删除
    deleteById(id) {
      let subcontractingIds = id || this.selectedRowKeys.join(",");
      deleteSubContract(subcontractingIds).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.success(responseResult);
          this.selectedRowKeys = [];
          this.getData();
        }
      });
    },
    sizeChange(page, pageSize) {
      this.pageData.page = page;
      this.pageData.limit = pageSize;
      this.getData();
    },
    pageChange(current, size) {
      this.pageData.page = current;
      this.pageData.limit = size;
      this.getData();
    }
  }
};
</script>
