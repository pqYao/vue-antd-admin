<template>
  <div>
    <a-card>
      <Heading name="维护项目文件">
        <template v-if="this.pageType == 1">
          <a-button type="primary" @click="handleUpdate('tenderFileName')"
            >维护项目文件</a-button
          >
          <a-button type="primary" @click="handleUpdate('offerWay')"
            >维护报价方式</a-button
          >
          <a-button type="primary" @click="handleUpdate('tenderMoney')"
            >标书费用</a-button
          >
          <a-button type="primary" @click="handleShow()">{{
            show ? "收起查询" : "展开查询"
          }}</a-button>
          <a-button type="primary" @click="handleSubmit" :disabled="isConnect">
            <i :class="['iconfont', 'icon-baocun']"></i>
            保存
          </a-button>
        </template>
      </Heading>
      <a-card v-if="show">
        <a-form
          layout="horizontal"
          :form="searchForm"
          class="es-form-small"
          @keydown.native.enter.prevent="handleSearch"
        >
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item label="标" v-bind="BASE.searchItemLayout">
                <a-select
                  label-in-value
                  @change="handleSubtenderNameChange"
                  v-decorator="[
                    `subtenderId`,
                    {
                      initialValue: subtenderId
                    }
                  ]"
                >
                  <a-select-option
                    v-for="(m, i) in subtenderData"
                    :class="{ 'hide-select-item': !m }"
                    :key="i"
                    :value="`${m.id}`"
                    >{{ m.name }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="包" v-bind="BASE.searchItemLayout">
                <a-select
                  :disabled="!subtenderName"
                  label-in-value
                  @change="handleSubcontractChange"
                  v-decorator="[
                    `subcontractingId`,
                    {
                      initialValue: subcontractingId
                    }
                  ]"
                >
                  <a-select-option
                    v-for="(m, i) in subcontractData"
                    :class="{ 'hide-select-item': !m }"
                    :key="i"
                    :value="`${m.id}`"
                    >{{ m.name }}</a-select-option
                  >
                </a-select>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <span style="float: right;margin-right: 30px; margin-top: 4px;">
                <a-space :size="8">
                  <a-button type="primary" @click="handleGetData"
                    >查询</a-button
                  >
                  <a-button @click="handleReset">重置</a-button>
                </a-space>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </a-card>
      <a-form :form="form" @submit="handleSubmit">
        <a-table
          class="es-table"
          size="small"
          :bordered="true"
          :loading="pageData.loading"
          :pagination="false"
          :columns="columns"
          :dataSource="dataSource"
          rowKey="tenderFileId"
          :scroll="{ x: 1300 }"
          :rowSelection="
            this.pageType == 0
              ? null
              : {
                  fixed: true,
                  selectedRowKeys: selectedRowKeys,
                  onChange: onSelectChange
                }
          "
        >
          <!-- 标书费用 -->
          <template slot="tenderMoney" slot-scope="text, record, index">
            <a-form-item v-if="pageType == 1">
              <a-input
                allowClear
                v-decorator="[
                  `tenderMoney${index}`,
                  {
                    rules: [{ required: true, validator: validTenderMoney }],
                    validateTrigger: ['blur'],
                    initialValue: text
                  }
                ]"
                @change="
                  e =>
                    onCellChange(
                      e.target.value,
                      record.tenderFileId,
                      'tenderMoney'
                    )
                "
                style="margin: -5px 0;width:100%"
              />
            </a-form-item>
            <span v-else>{{ text }}</span>
          </template>
          <!-- 报价方式 -->
          <template slot="offerWay" slot-scope="text, record, index">
            <a-form-item v-if="pageType == 1">
              <a-select
                v-decorator="[
                  `offerWay${index}`,
                  {
                    validateTrigger: ['blur'],
                    rules: [{ required: true, message: '请选择报价方式' }],
                    initialValue: text
                  }
                ]"
                @change="e => onCellChange(e, record.tenderFileId, 'offerWay')"
              >
                <a-select-option
                  v-for="(m, i) in dictionary.cmpOfferWay"
                  :class="{ 'hide-select-item': !m }"
                  :key="i"
                  :value="`${i}`"
                  >{{ m }}</a-select-option
                >
              </a-select>
            </a-form-item>
            <span v-else>{{ dictionary.cmpOfferWay[text] }}</span>
          </template>

          <template slot="action" slot-scope="record">
            <a-space :size="8">
              <a>上传采购文件</a>
              <a-popconfirm
                title="是否删除此行采购文件?"
                ok-text="确认"
                cancel-text="取消"
                @confirm="deleteById(record.tenderFileId)"
              >
                <a>删除采购文件</a>
              </a-popconfirm>
            </a-space>
          </template>
        </a-table>
      </a-form>
      <pagination
        v-if="this.pageType == 0"
        :value="pageData.page"
        :pageSize="pageData.limit"
        v-show="pageData.total > 0"
        :total="pageData.total"
        @change="sizeChange"
        @showSizeChange="pageChange"
      ></pagination>
    </a-card>
    <a-modal
      title="批量维护项目文件"
      width="80%"
      :centered="true"
      :maskClosable="false"
      v-if="tenderFileNameVisible"
      v-model="tenderFileNameVisible"
      @ok="handleOk('tenderFileName')"
    >
      <!-- <ProductSelect ref="product"></ProductSelect> -->
    </a-modal>
    <a-modal
      title="批量维护报价方式"
      width="40%"
      height="200px"
      :centered="true"
      :maskClosable="false"
      v-if="offerWayVisible"
      v-model="offerWayVisible"
      @ok="handleOk('offerWay')"
    >
      <a-select @change="offerWayChange" style="width: 100%">
        <a-select-option
          v-for="(m, i) in dictionary.cmpOfferWay"
          :class="{ 'hide-select-item': !m }"
          :key="i"
          :value="`${i}`"
          >{{ m }}</a-select-option
        >
      </a-select>
    </a-modal>
    <a-modal
      title="批量维护标书费用"
      width="40%"
      height="200px"
      :centered="true"
      :maskClosable="false"
      v-if="tenderMoneyVisible"
      v-model="tenderMoneyVisible"
      @ok="handleOk('tenderMoney')"
    >
      <a-input style="width: 100%" @change="tenderMoneyChange" />
    </a-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";
import {
  findSendTenderFileByPage,
  updateSendTenderFile,
  findSubTenderInfo,
  findSubContractingInfo
} from "@/services/compare";

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
    width: 60,
    customRender: (text, record, index) =>
      `${(pageData.page - 1) * pageData.limit + index + 1}`
  },
  {
    title: "项目名称",
    dataIndex: "projectName",
    width: 200,
    ellipsis: true
  },
  {
    title: "项目编码",
    dataIndex: "projectCode",
    align: "center",
    width: 150,
  },
  {
    title: "标",
    dataIndex: "subtenderName",
    align: "center",
    width: 100,
    ellipsis: true
  },
  {
    title: "包",
    dataIndex: "subcontractingName",
    align: "center",
    width: 100,
    ellipsis: true
  },
  {
    title: "标书费用",
    dataIndex: "tenderMoney",
    scopedSlots: { customRender: "tenderMoney" },
    align: "center",
    width: 200
  },
  {
    title: "报价方式",
    dataIndex: "offerWay",
    scopedSlots: { customRender: "offerWay" },
    align: "center",
    width: 240
  },
  {
    title: "采购文件",
    dataIndex: "tenderFileName",
    align: "center",
    width: 200,
    ellipsis: true
  },
  {
    title: "操作",
    align: "center",
    scopedSlots: { customRender: "action" },
    width: 200,
    fixed: "right"
  }
];

export default {
  name: "tender-file",
  components: { Heading, Pagination },
  props: {
    //0: 详情; 1: 编辑
    pageType: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      searchForm: this.$form.createForm(this, { name: "advanced_search" }),
      form: this.$form.createForm(this),
      columns: columns,
      dataSource: [],
      selectedRowKeys: [],
      selectedRows: [],
      pageData: pageData,
      isConnect: false,
      //搜索条件
      show: false,
      subtenderId: "",
      subtenderName: "",
      subcontractingId: "",
      subcontractingName: "",
      subtenderData: [],
      subcontractData: [],
      // 批量
      offerWay: "",
      tenderMoney: "",
      tenderFileNameVisible: false,
      offerWayVisible: false,
      tenderMoneyVisible: false
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary"]),
    tenderVindicateId() {
      return this.$route.params.id;
    }
  },
  created() {
    this.fnInit();
    this.handleGetData();
    this.handleGetSubTender();
  },
  methods: {
    fnInit() {
      //详情界面不展示操作列
      let arr = [...this.columns],
        index = this.columns.length - 1;
      if (this.pageType == 0) {
        arr.splice(index, 1);
      }
      this.columns = [...arr];
    },
    // 数据改变
    onCellChange(value, key, column) {
      const newData = [...this.dataSource];
      const target = newData.filter(item => key === item.tenderFileId)[0];
      if (target) {
        target[column] = value;
        this.dataSource = newData;
      }
    },
    handleGetData() {
      //编辑界面不展示分页，详情界面才展示
      let param = Object.assign(
        {
          limit: this.pageType == 0 ? this.pageData.limit : 10000,
          page: this.pageData.page,
          subcontractingName: this.subcontractingName || "",
          subtenderName: this.subtenderName || "",
          tenderVindicateId: this.tenderVindicateId
        },
        this.filter
      );
      this.pageData.loading = true;
      this.dataSource = [];
      this.selectedRowKeys = [];
      this.selectedRows = [];

      findSendTenderFileByPage(param).then(res => {
        const resData = res.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = data;
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
    // 查询标
    handleGetSubTender() {
      findSubTenderInfo(this.tenderVindicateId).then(res => {
        const resData = res.data || {};
        const responseResult = resData.responseResult || [];
        if (resData.errCode == "0000") {
          this.subtenderData = responseResult;
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.pageData.loading = false;
      });
    },
    // 查询包
    handleGetSubContract() {
      findSubContractingInfo(this.tenderVindicateId, this.subtenderId).then(
        res => {
          const resData = res.data || {};
          const responseResult = resData.responseResult || [];
          if (resData.errCode == "0000") {
            this.subcontractData = responseResult;
          } else {
            this.$error({
              title: "错误提示",
              content: this.BASE.handleErrorMsg(resData)
            });
          }
          this.pageData.loading = false;
        }
      );
    },
    // 选择标
    handleSubtenderNameChange(value) {
      this.subtenderId = value.key;
      this.subtenderName = value.label;
      this.subcontractingName = "";
      this.subcontractingId = "";
      this.handleGetSubContract();
    },
    // 选择包
    handleSubcontractChange(value) {
      this.subcontractingName = value.label;
      this.subcontractingId = value.key;
    },
    handleReset() {
      this.searchForm.resetFields();
      this.subcontractingName = null;
      this.subtenderName = "";
      this.subtenderId = "";
      this.subcontractingId = "";
    },
    handleShow() {
      this.show = !this.show;
    },
    // 费用校验
    validTenderMoney(rule, value, callback) {
      let reg = this.BASE.reg.moneyReg;
      if (!this.BASE.CheckIsNullOrEmpty(value)) {
        callback("请输入标书费用");
        return;
      }
      if (!reg.test(value)) {
        callback("请输入正确的金额");
        return;
      }
      callback();
    },
    // 保存
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
      updateSendTenderFile(this.dataSource).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          this.handleGetData();
          this.$message.success(resData.responseResult, 3);
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.isConnect = false;
      });
    },
    // 批量维护
    handleUpdate(type) {
      if (
        (type == "offerWay" || type == "tenderMoney") &&
        this.selectedRowKeys.length == 0
      ) {
        this.$message.info("请先选择要设置操作的数据！");
        return;
      }
      this[`${type}Visible`] = true;
      this.offerWay = "";
      this.tenderMoney = "";
    },
    offerWayChange(value) {
      this.offerWay = value;
    },
    tenderMoneyChange(e) {
      this.tenderMoney = e.target.value;
    },
    // 批量操作确定
    handleOk(type) {
      if (type == "offerWay" || type == "tenderMoney") {
        this.dataSource.forEach(e => {
          this.selectedRows.forEach((v, i) => {
            if (v.tenderFileId == e.tenderFileId) {
              e[type] = this[type];
              this.form.setFieldsValue({
                [`${type}${i}`]: this[type]
              });
            }
          });
        });
      }
      this[`${type}Visible`] = false;
    },
    onSelectChange(data, row) {
      this.selectedRowKeys = data;
      this.selectedRows = row;
    },
    sizeChange(page, pageSize) {
      this.pageData.page = page;
      this.pageData.limit = pageSize;
      this.handleGetData();
    },
    pageChange(current, size) {
      this.pageData.page = current;
      this.pageData.limit = size;
      this.handleGetData();
    }
  }
};
</script>
