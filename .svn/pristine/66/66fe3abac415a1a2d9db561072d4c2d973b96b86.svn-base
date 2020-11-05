<template>
  <a-row type="flex">
    <a-col :flex="1">
      <a-card>
        <Heading name="层级"></Heading>
        <a-tree
          v-if="treeData.length > 0"
          show-line
          @select="onSelect"
          :tree-data="this.treeData"
          :defaultExpandAll="autoExpandParent"
          :defaultSelectedKeys="selectedKeys"
        />
      </a-card>
    </a-col>
    <a-col :flex="4">
      <div>
        <!-- 查询结果 -->
        <a-card>
          <Heading name="查询结果">
            <a-button
              type="primary"
              @click="handleSubmit"
              :disabled="isConnect"
            >
              <i :class="['iconfont', 'icon-baocun']"></i>
              保存
            </a-button>
            <a-button type="primary" @click="handleAdd()">
              <i :class="['iconfont', 'icon-xinzeng']"></i>
              新增
            </a-button>
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
          </Heading>
          <a-table
            class="es-table"
            size="small"
            :loading="pageData.loading"
            :pagination="false"
            :columns="columns"
            :dataSource="dataSource"
            :rowSelection="{
              fixed: true,
              selectedRowKeys: selectedRowKeys,
              onChange: onSelectChange
            }"
            :scroll="{ x: true }"
            rowKey="subcontractingId"
          >
            <template
              slot="subcontractingName"
              slot-scope="text, record, index"
            >
              <a-form :form="form" @submit="handleSubmit">
                <a-form-item>
                  <a-input
                    allowClear
                    v-decorator="[
                      `subcontractingName${index}`,
                      {
                        validateTrigger: ['blur'],
                        rules: [
                          { required: true, validator: checkSubContract }
                        ],
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
            :value="pageData.page"
            :pageSize="pageData.limit"
            v-show="pageData.total > 0"
            :total="pageData.total"
            @change="sizeChange"
            @showSizeChange="pageChange"
          ></pagination>
        </a-card>
      </div>
    </a-col>
  </a-row>
</template>

<script>
import { mapGetters } from "vuex";
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";
import {
  cptForfindSubContractOfTender,
  addSubContractForSingle,
  deleteSubContract,
  findSubContractForContract,
  validateSubContractName,
  updateSubContract
} from "@/services/other";
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
    customRender: (text, record, index) =>
      `${(pageData.page - 1) * pageData.limit + index + 1}`,
    width: 100
  },
  {
    title: "包名",
    dataIndex: "subcontractingName",
    scopedSlots: { customRender: "subcontractingName" }
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
  name: "sub-contract-select",
  components: { Pagination, Heading },
  props: {
    projectId: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      treeData: [],
      selectedKeys: [],
      columns: columns,
      dataSource: dataSource,
      selectedRowKeys: [],
      selectedRows: [],
      autoExpandParent: true,
      isConnect: false,
      curRecord: {},
      pageData: {
        limit: 15,
        total: 0,
        page: 1,
        loading: false
      }
    };
  },
  computed: {
    hasSelectedRowKeys() {
      return !!this.selectedRowKeys.length == 0 ? false : true;
    },
    ...mapGetters("account", ["dictionary"])
  },
  watch: {
    treeData: {
      handler(val) {
        return val;
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getData();
      this.findTree();
    },
    findTree() {
      cptForfindSubContractOfTender(this.projectId).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          const { responseResult } = resData;
          this.treeData.push(responseResult);
          this.treeData.forEach(item => {
            if (item.children.length > 0) {
              if (!item.selectable) {
                item.children.forEach(items => {
                  this.recursive(items);
                });
                return;
              }
              this.selectedKeys = [`${item.key}`];
              this.getData();
            }
          });
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    recursive(item) {
      if (!item.selectable) {
        if (item.children == null) {
          return;
        }
        item.children.forEach(ff => {
          this.recursive(ff);
        });
        return;
      }
      if (this.selectedKeys.length > 0) {
        return;
      }
      this.selectedKeys = [`${item.key}`];
      this.getData();
    },
    onSelect(selectedKeys) {
      this.selectedKeys = selectedKeys;
      (this.pageData.page = 1), this.getData();
    },
    getData() {
      let param = Object.assign({
        limit: this.pageData.limit,
        page: this.pageData.page,
        subtenderId: this.selectedKeys[0] || "",
        projectId: this.projectId || ""
      });
      this.pageData.loading = true;
      this.dataSource = [];
      findSubContractForContract(param).then(res => {
        const resData = res.data;
        const responseResult = res.data.responseResult;
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = [...data];
          this.pageData.total = Number(total);
          this.$emit("getData");
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.pageData.loading = false;
      });
    },
    fnFocus(e, record) {
      this.curRecord = record;
    },
    checkSubContract(rule, value, callback) {
      if (!this.BASE.CheckIsNullOrEmpty(value)) {
        callback("请输入包名");
        return;
      }
      let subcontractingId = "";
      if (this.BASE.ObjectIsNull(this.curRecord)) {
        callback();
        return;
      }
      this.dataSource.forEach(element => {
        if (
          !!this.curRecord.subcontractingId &&
          this.curRecord.subcontractingId == element.subcontractingId
        ) {
          subcontractingId = element.subcontractingId;
        }
      });
      validateSubContractName(
        this.projectId,
        this.selectedKeys[0],
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
    handleAdd() {
      if (!this.selectedKeys) {
        this.$message.warning("请先在左侧选中标！");
        return;
      }
      addSubContractForSingle(this.projectId, this.selectedKeys.join(",")).then(
        res => {
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
        }
      );
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
          this.$message.warning(responseResult);
          this.selectedRowKeys = [];
          this.getData();
        }
      });
    },
    onSelectChange(data, row) {
      this.selectedRowKeys = data;
      this.selectedRows = row;
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
    },
    getRes() {
      return this.selectedRowKeys;
    },
    handleSubmit(e) {
      e.preventDefault(e);
      this.form.validateFields(error => {
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
    }
  }
};
</script>
