<template>
  <div>
    <!-- 查询条件 -->
    <SearchForm
      ref="SearchForm"
      name="查询条件"
      stateCode="entrust"
      :searchList="searchList"
      @on-filter="handleSearch"
    ></SearchForm>
    <!-- 查询结果 -->
    <a-card>
      <Heading name="查询结果"></Heading>
      <a-table
        size="small"
        :pagination="false"
        rowKey="projectId"
        :scroll="{ x: true }"
        :loading="pageData.loading"
        :columns="columns"
        :dataSource="dataSource"
      >
        <!-- 点击项目编号跳转 -->
        <!-- <a
          slot="projectCode"
          slot-scope="text, record"
          @click="handleProjectDetail(record)"
          >{{ text }}</a
        > -->
        <!-- 采购方式 -->
        <template slot="purchaseType" slot-scope="text">{{
          dictionary.purchaseTypeAll[text]
        }}</template>
        <!-- 是否委托 -->
        <template slot="entrustFlag" slot-scope="text">{{
          text === "1" ? "是" : "否"
        }}</template>
        <!-- 是否资格预审 -->
        <template slot="prequalficationFlag" slot-scope="text">{{
          (text == "1" && "是") || (text == "0" && "否") || "--"
        }}</template>
        <!-- 操作 -->
        <template slot="action" slot-scope="record">
          <a-space :size="8">
            <a @click="handlePreview(record)">查看</a>
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
import { findProviderEntrustByPage } from "@/services/bid";

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
    width: 80
  },

  {
    title: "项目编码",
    dataIndex: "projectCode",
    width: 180,
    align: "center",
    scopedSlots: { customRender: "projectCode" }
  },
  {
    title: "项目名称",
    dataIndex: "projectName"
  },
  {
    title: "采购方式",
    dataIndex: "purchaseType",
    scopedSlots: { customRender: "purchaseType" },
    width: 100,
    align: "center"
  },
  {
    title: "是否资格预审",
    dataIndex: "prequalficationFlag",
    scopedSlots: { customRender: "prequalficationFlag" },
    width: 130,
    align: "center"
  },
  {
    title: "是否委托",
    dataIndex: "entrustFlag",
    scopedSlots: { customRender: "entrustFlag" },
    width: 100,
    align: "center"
  },
  {
    title: "操作",
    align: "center",
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
    type: "purchaseTypeAll",
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
  }
];

export default {
  name: "entrust",
  components: { Heading, SearchForm, Pagination },
  data() {
    return {
      columns,
      dataSource: [],
      searchList,
      filter: {},
      pageData,
      operationState: []
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary", "user"])
  },
  created() {
    this.getData();
  },
  activated() {
    this.$refs.SearchForm.handleReset();
    this.filter = {};
    this.pageData.page = 1;
    this.getData();
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
      this.getData();
    },
    getData() {
      let param = Object.assign(
        {
          limit: this.pageData.limit,
          page: this.pageData.page
        },
        this.filter
      );
      this.pageData.loading = true;
      findProviderEntrustByPage(param).then(res => {
        const resData = res.data;
        const responseResult = resData.responseResult;
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = data;
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
    handleEdit(record) {
      this.$router.push({
        path: `/bid/prepare/entrust-edit/${record.projectId}`,
        query: {
          entrustId: record.entrustId
        }
      });
    },
    handlePreview(record) {
      this.$router.push({
        path: `/entrust-preview/${record.entrustId}`,
        query: {
          projectId: record.projectId,
        }
      });
    },
    handleProjectDetail(record) {
      this.$router.push({
        path: `/bid/prepare/detail/${record.projectId}`
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
