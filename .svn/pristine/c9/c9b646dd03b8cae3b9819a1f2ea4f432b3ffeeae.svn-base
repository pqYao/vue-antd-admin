<template>
  <div class="bid-submit-wrapper">
    <SearchForm
      ref="SearchForm"
      name="查询条件"
      stateCode="sendReply"
      :searchList="searchList"
      @on-filter="handleSearch"
    >
    </SearchForm>
    <a-card>
      <Heading name="查询结果"></Heading>
      <a-table
        size="small"
        rowKey="projectId"
        :loading="pageData.loading"
        :pagination="false"
        :scroll="{ x: 1300 }"
        :columns="columns"
        :dataSource="dataSource"
      >
        <!-- 点击项目编号跳转 -->
        <template slot="projectCode" slot-scope="text, record">
          <a @click="fnJumpPage(record)">{{ text }}</a>
        </template>
        <!-- 采购方式 -->
        <template slot="purchaseType" slot-scope="text">
          {{ dictionary.purchaseType ? dictionary.purchaseType[text] : "" }}
        </template>
        <!-- 是否委托 -->
        <template slot="entrustFlag" slot-scope="text">
          {{ text == "1" ? "是" : "否" }}
        </template>
        <!-- 是否资格预审 -->
        <template slot="prequalficationFlag" slot-scope="text">
          {{ text == "1" ? "是" : "否" }}
        </template>
        <!-- 业务状态 -->
        <template slot="operationState" slot-scope="text">
          {{ operationState[text] }}
        </template>
        <template slot="action" slot-scope="record">
          <a-space :size="8">
            <a
              v-if="
                record.operationState == 700 || record.operationState == 701
              "
              @click="handleEdit(record.projectId)"
            >
              编辑
            </a>
            <a v-else @click="handleDetail(record.projectId)">
              查看
            </a>
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
      >
      </pagination>
    </a-card>
  </div>
</template>

<script>
import Heading from "@/components/heading/Heading";
import SearchForm from "@/components/form/SearchForm";
import Pagination from "@/components/pagination/Pagination";
import { mapGetters } from "vuex";
import { operationStateMap } from "@/services/basic";
import { findProviderReplyForPage } from "@/services/bid";

export default {
  name: "bid-submit",
  components: {
    Heading,
    SearchForm,
    Pagination
  },
  data() {
    return {
      filter: {},
      operationState: [],
      pageData: {
        limit: 15,
        total: 0,
        page: 1,
        loading: false
      },
      dataSource: [],
      searchList: [
        {
          type: "input",
          label: "项目编号",
          key: "projectCode"
        },
        {
          type: "input",
          label: "项目名称",
          key: "projectName"
        },
        {
          type: "select",
          label: "采购方式",
          key: "purchaseType"
        },
        {
          type: "flag",
          label: "是否委托",
          key: "entrustFlag"
        },
        {
          type: "flag",
          label: "是否资格预审",
          key: "prequalficationFlag"
        },
        {
          type: "operationState",
          label: "业务状态",
          key: "operationState"
        },
        {
          type: "input",
          label: "代理机构名称",
          key: "agencyOrgName"
        },
        {
          type: "date",
          label: "项目创建时间",
          key: "projectCreateDate"
        }
      ],
      columns: [
        {
          title: "序号",
          dataIndex: "number",
          align: "center",
          customRender: (text, record, index) => `${index + 1}`,
          width: 60
        },
        {
          title: "项目编号",
          dataIndex: "projectCode",
          width: 150,
          align: "center",
          scopedSlots: { customRender: "projectCode" }
        },
        {
          title: "项目名称",
          ellipsis: true,
          dataIndex: "projectName",
          scopedSlots: { customRender: "projectName" }
        },
        {
          title: "采购方式",
          dataIndex: "purchaseType",
          scopedSlots: { customRender: "purchaseType" },
          width: 80,
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
          title: "是否资格预审",
          dataIndex: "prequalficationFlag",
          scopedSlots: { customRender: "prequalficationFlag" },
          width: 100,
          align: "center"
        },
        {
          title: "代理机构名称",
          dataIndex: "agencyOrgName",
          ellipsis: true,
          width: 200,
          align: "center"
        },
        {
          title: "项目创建时间",
          dataIndex: "projectCreateDate",
          width: 180,
          align: "center"
        },
        {
          title: "业务状态",
          dataIndex: "operationState",
          scopedSlots: { customRender: "operationState" },
          width: 100,
          align: "center"
        },
        {
          title: "操作",
          align: "center",
          width: 60,
          scopedSlots: { customRender: "action" },
          fixed: "right"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary", "user"])
  },
  created() {
    this.getOperationStateList();
    this.fnGetData();
  },
  activated() {
    this.$refs.SearchForm.handleReset();
    this.filter = {};
    this.pageData.page = 1;
    this.getOperationStateList();
    this.fnGetData();
  },
  methods: {
    fnGetData() {
      let param = Object.assign(
        {
          limit: this.pageData.limit,
          page: this.pageData.page
        },
        this.filter
      );
      this.pageData.loading = true;
      findProviderReplyForPage(param).then(res => {
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
    //获取业务状态的码表值
    getOperationStateList() {
      operationStateMap("sendReply").then(result => {
        const resData = result.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode === "0000") {
          let arr = {};
          for (var i in responseResult) {
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
    handleEdit(id) {
      this.$router.push({
        path: `/bid/submit/bid-submit-edit/${id}`
      });
    },
    handleDetail(id) {
      this.$router.push({
        path: `/bid/submit/bid-submit-detail/${id}`
      });
    },
    handleSearch(data) {
      this.filter = data;
      this.pageData.page = 1;
      this.fnGetData();
    },
    sizeChange(page, pageSize) {
      this.pageData.page = page;
      this.pageData.limit = pageSize;
      this.fnGetData();
    },
    pageChange(current, size) {
      this.pageData.page = current;
      this.pageData.limit = size;
      this.fnGetData();
    },
    fnJumpPage(record) {
      this.$router.push({
        path: `/bid/prepare/detail/${record.projectId}`
      });
    }
  }
};
</script>
