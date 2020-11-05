<template>
  <div>
    <!-- 查询条件 -->
    <SearchForm
      ref="SearchForm"
      :searchList="searchList"
      name="查询条件"
      @on-filter="handleSearch"
      stateCode="sendTender"
    ></SearchForm>
    <!-- 查询结果 -->
    <a-card>
      <Heading name="查询结果"></Heading>
      <a-table
        size="small"
        :loading="pageData.loading"
        :pagination="false"
        :columns="columns"
        :dataSource="dataSource"
        :scroll="{ x: 1200 }"
        rowKey="tenderVindicateId"
      >
        <!-- 项目编码 -->
        <a
          slot="projectCode"
          slot-scope="text, record"
          @click="handleProjectDetail(record)"
          >{{ text }}</a
        >
        <!-- 采购方式 -->
        <template slot="purchaseType" slot-scope="text">{{
          dictionary.otherPurchaseType[text]
        }}</template>
        <!-- 审批状态 -->
        <template slot="approveState" slot-scope="text">
          {{ dictionary.approveState[text] }}
        </template>
        <!-- 业务状态 -->
        <template slot="operationState" slot-scope="text">
          {{ text ? operationState[text] : "" }}
        </template>
        <!-- 是否委托 -->
        <template slot="entrustFlag" slot-scope="text">{{
          text === "1" ? "是" : "否"
        }}</template>
        <!-- 是否资格预审 -->
        <template slot="prequalficationFlag" slot-scope="text">{{
          (text == "1" && "是") || (text == "0" && "否") || "--"
        }}</template>

        <template slot="action" slot-scope="record">
          <a-space :size="8">
            <!-- 项目发标状态为‘发标信息未维护’、“发标信息已维护” 
              若项目是否委托=“是”，则当当前登录账号=项目中“代理机构项目经理”时，显示此按钮
            若项目是否委托=“否”，则当当前登录账号=项目创建人时，显示此按钮-->
            <!-- ((record.entrustFlag == '1' &&
                  user.userId === record.agencyOrgManegerId) ||
                  (record.entrustFlag == '0' &&
            record.projectCreateId === user.userId)) &&-->
            <a v-if="record.approveState === '1'" @click="handleEdit(record)"
              >编辑</a
            >
            <a v-else @click="handleDetail(record)">查看</a>
            <!-- <a>提交审批</a> -->
            <!--  发标不存在审批流时且发标业务状态为“发标信息已保存”
                且当发标不存在审批流时且发标业务状态为“发标信息已维护”
            且当前登录账号=发标创建人时，显示此按钮-->
            <a-popover content="此功能暂不支持">
              <a>业务流程跟踪</a>
            </a-popover>
          </a-space>
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
</template>

<script>
import { mapGetters } from "vuex";
import SearchForm from "@/components/form/SearchForm";
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";

import { findSendTenderInfoByPage } from "@/services/other";
import { operationStateMap } from "@/services/basic";

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
    width: 60
  },
  {
    title: "项目编码",
    dataIndex: "projectCode",
    width: 150,
    align: "center",
    scopedSlots: { customRender: "projectCode" }
  },
  {
    title: "项目名称",
    dataIndex: "projectName",
    ellipsis: true
  },
  {
    title: "采购方式",
    dataIndex: "purchaseType",
    scopedSlots: { customRender: "purchaseType" },
    width: 120,
    align: "center"
  },
  {
    title: "是否资格预审",
    dataIndex: "prequalficationFlag",
    scopedSlots: { customRender: "prequalficationFlag" },
    width: 100,
    align: "center"
  },
  {
    title: "是否委托",
    dataIndex: "entrustFlag",
    scopedSlots: { customRender: "entrustFlag" },
    width: 80,
    align: "center"
  },
  {
    title: "项目创建时间",
    dataIndex: "projectCreateDate",
    width: 180,
    align: "center"
  },
  {
    title: "审批状态",
    dataIndex: "approveState",
    width: 80,
    align: "center",
    scopedSlots: { customRender: "approveState" }
  },
  {
    title: "业务状态",
    dataIndex: "operationState",
    scopedSlots: { customRender: "operationState" },
    width: 120,
    align: "center"
  },
  {
    title: "操作",
    align: "center",
    width: 140,
    scopedSlots: { customRender: "action" },
    fixed: "right"
  }
];

const searchList = [
  {
    type: "input",
    label: "项目编码",
    key: "projectCode"
  },
  {
    type: "input",
    label: "项目名称",
    key: "projectName"
  },
  {
    type: "otherPurchaseType",
    label: "采购方式",
    key: "purchaseType"
  },
  {
    type: "flag",
    label: "资格预审",
    key: "prequalficationFlag",
    flag: true
  },
  {
    type: "flag",
    label: "是否委托",
    key: "entrustFlag"
  },
  { type: "date", label: "创建日期", key: "createDate" },
  {
    type: "select",
    label: "审批状态",
    key: "approveState"
  },
  {
    type: "operationState",
    label: "业务状态",
    key: "operationState"
  }
];

export default {
  name: "tender-info",
  components: { Heading, SearchForm, Pagination },
  data() {
    return {
      columns: columns,
      dataSource: [],
      searchList: searchList,
      filter: {},
      pageData: pageData,
      operationState: []
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary", "user"])
  },
  created() {
    this.handleGetData();
    this.getOperationState();
  },
  activated() {
    this.$refs.SearchForm.handleReset();
    this.filter = {};
    this.pageData.page = 1;
    this.handleGetData();
  },
  watch: {
    operationState: {
      handler(val) {
        return val;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    handleSearch(data) {
      this.filter = data;
      this.pageData.page = 1;
      this.handleGetData();
    },
    // 获取业务状态
    getOperationState() {
      operationStateMap("sendTender").then(result => {
        const resData = result.data;
        if (resData.errCode === "0000") {
          let arr = {};
          for (var i in resData.responseResult) {
            let key = i.split("_");
            if (!arr[key[0]]) arr[key[0]] = [];
            arr[key[0]][key[1]] = resData.responseResult[i];
          }
          for (const key in arr) {
            this.operationState = arr[key];
          }
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    // 分页查询
    handleGetData() {
      let param = Object.assign(
        {
          limit: this.pageData.limit,
          page: this.pageData.page
        },
        this.filter
      );
      this.pageData.loading = true;
      findSendTenderInfoByPage(param).then(res => {
        const resData = res.data;
        const responseResult = resData.responseResult;
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = data;
          // 初始化
          if (this.dataSource.length != 0) {
            this.dataSource.forEach(ele => {
              this.$set(ele, "isCanbeFinish", false);
            });
          }
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
    // 编辑
    handleEdit(record) {
      this.$router.push({
        path: `/other/tender/tender-info-edit/${record.tenderVindicateId}`,
        query: {
          purchaseType: record.purchaseType,
          projectId: record.projectId
        }
      });
    },
    // 跳转项目详情
    handleProjectDetail(record) {
      this.$router.push({
        path: `/other/prepare/detail/${record.projectId}`
      });
    },
    // 查看
    handleDetail(record) {
      this.$router.push({
        path: `/other/tender/tender-info-detail/${record.tenderVindicateId}`,
        query: {
          purchaseType: record.purchaseType,
          projectId: record.projectId
        }
      });
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
