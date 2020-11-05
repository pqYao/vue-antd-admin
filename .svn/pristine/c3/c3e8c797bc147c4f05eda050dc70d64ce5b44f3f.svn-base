<template>
  <div>
    <a-card>
      <Heading :name="name" />
      <a-table
        size="small"
        :pagination="false"
        rowKey="projectId"
        :scroll="{ x: true }"
        :loading="pageData.loading"
        :columns="columns"
        :dataSource="dataSource"
      >
        <!-- 操作 -->
        <template slot="action">
          <a-space :size="8"> </a-space>
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
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";
import { operationStateMap } from "@/services/basic";
import {
  findEntrustByPage,
  compeleteEntrust,
  validateEntrustInfo
} from "@/services/bid";

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
    title: "文件类型",
    dataIndex: "projectCode",
    width: 180,
    align: "center",
    scopedSlots: { customRender: "projectCode" }
  },
  {
    title: "文件名称",
    dataIndex: "projectName"
  },
  {
    title: "文件大小",
    dataIndex: "purchaseType",
    scopedSlots: { customRender: "purchaseType" },
    width: 100,
    align: "center"
  },
  {
    title: "上传时间",
    dataIndex: "prequalficationFlag",
    scopedSlots: { customRender: "prequalficationFlag" },
    width: 130,
    align: "center"
  },
  {
    title: "操作",
    align: "center",
    scopedSlots: { customRender: "action" },
    fixed: "right"
  }
];

export default {
  name: "entrust",
  components: { Heading, Pagination },
  data() {
    return {
      columns,
      dataSource: [],
      filter: {},
      pageData,
      operationState: []
    };
  },
  props: {
    name: {
      type: [String],
      default: ""
    }
  },
  computed: {
    ...mapGetters("account", ["dictionary", "user"])
  },
  created() {
    this.getData();
    this.getOperationState();
  },
  activated() {
    this.$refs.SearchForm.handleReset();
    this.filter = {};
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
      this.getData();
    },
    getOperationState() {
      operationStateMap("entrust").then(result => {
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
    getData() {
      let param = Object.assign(
        {
          limit: this.pageData.limit,
          page: this.pageData.page
        },
        this.filter
      );
      this.pageData.loading = true;
      findEntrustByPage(param).then(res => {
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
    handleEntrustDetail(record) {
      this.$router.push({
        path: `/bid/prepare/entrust-detail/${record.projectId}`
      });
    },
    handleProjectDetail(record) {
      this.$router.push({
        path: `/bid/prepare/detail/${record.projectId}`
      });
    },
    fnJudgeCanbeFinish(record) {
      validateEntrustInfo(record.entrustId).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          record.isCanbeFinish = true;
        } else {
          record.isCanbeFinish = false;
        }
      });
    },
    fnConfirm(record) {
      if (record.isCanbeFinish) {
        compeleteEntrust(record.entrustId).then(res => {
          const resData = res.data;
          if (resData.errCode === "0000") {
            const { responseResult } = resData;
            this.$message.success(responseResult);
            this.getData();
          } else {
            this.$error({
              title: "错误提示",
              content: this.BASE.handleErrorMsg(resData)
            });
          }
        });
      } else {
        this.$router.push({
          path: `/bid/prepare/entrust-edit/${record.projectId}`,
          query: {
            entrustId: record.entrustId
          }
        });
      }
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
