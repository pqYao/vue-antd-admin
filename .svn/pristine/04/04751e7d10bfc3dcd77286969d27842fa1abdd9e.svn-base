<template>
  <div>
    <!-- 查询条件 -->
    <SearchForm
      ref="SearchForm"
      :searchList="searchList"
      name="查询条件"
      @on-filter="toSearch"
      stateCode="createProject"
    ></SearchForm>
    <!-- 查询结果 -->
    <a-card>
      <Heading name="查询结果">
        <a-button type="primary" @click="addNew">
          <i :class="['iconfont', 'icon-xinzeng']"></i>
          创建采购项目
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
        size="small"
        :loading="pageData.loading"
        :pagination="false"
        :columns="columns"
        :dataSource="dataSource"
        :rowSelection="{
          fixed: true,
          selectedRowKeys: selectedRowKeys,
          onChange: onSelectChange,
          getCheckboxProps: getCheckboxProps
        }"
        :scroll="{ x: 1350 }"
        rowKey="projectId"
      >
        <a
          slot="projectCode"
          slot-scope="text, record"
          @click="handleDetail(record)"
          >{{ text }}</a
        >
        <template slot="purchaseType" slot-scope="text">{{
          dictionary.purchaseType[text]
        }}</template>
        <template slot="approveState" slot-scope="text">
          {{ dictionary.approveState[text] }}
        </template>
        <template slot="operationState" slot-scope="text">
          {{ text ? operationState[text] : "" }}
        </template>
        <template slot="purchaseType" slot-scope="text">{{
          dictionary.purchaseType[text]
        }}</template>
        <template slot="entrustFlag" slot-scope="text">{{
          text === "1" ? "是" : "否"
        }}</template>
        <template slot="prequalficationFlag" slot-scope="text">{{
          (text == "1" && "是") || (text == "0" && "否") || "--"
        }}</template>

        <template slot="action" slot-scope="record">
          <a-space :size="8">
            <a
              v-if="
                record.createId === user.userId && record.approveState === '1'
              "
              @click="handleEdit(record)"
              >编辑</a
            >
            <a v-else @click="handleDetail(record)">查看</a>

            <a-popconfirm
              title="是否删除此项目?"
              ok-text="确认"
              cancel-text="取消"
              @confirm="deleteById(record.projectId)"
            >
              <a
                v-if="
                  record.createId === user.userId && record.approveState === '1'
                "
                >删除</a
              >
            </a-popconfirm>

            <a-popover content="此功能暂不支持">
              <a> 业务流程跟踪 </a>
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
import { findProjectInfoByPage, deleteProjectInfo } from "@/services/bid";
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
    title: "是否委托",
    dataIndex: "entrustFlag",
    scopedSlots: { customRender: "entrustFlag" },
    width: 80,
    align: "center"
  },
  {
    title: "创建时间",
    dataIndex: "createDate",
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
    width: 100,
    align: "center"
  },
  {
    title: "操作",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "action" },
    fixed: "right"
  }
];

const dataSource = [];

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
    type: "select",
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
  name: "QueryList",
  components: { Heading, SearchForm, Pagination },
  data() {
    return {
      columns: columns,
      dataSource: dataSource,
      searchList: searchList,
      selectedRowKeys: [],
      selectedRows: [],
      filter: {},
      pageData: pageData,
      operationState: []
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary", "user"]),
    hasSelectedRowKeys() {
      return !!this.selectedRowKeys.length == 0 ? false : true;
    }
  },
  created() {
    this.getData();
    this.getOperationState();
  },
  activated() {
    this.$refs.SearchForm.handleReset();
    this.pageData.page = 1;
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
    toSearch(data) {
      this.filter = data;
      this.pageData.page = 1;
      this.getData();
    },
    getOperationState() {
      operationStateMap("createProject").then(result => {
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
      findProjectInfoByPage(param).then(res => {
        const resData = res.data;
        const responseResult = resData.responseResult;
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
    onSelectChange(data, row) {
      this.selectedRowKeys = data;
      this.selectedRows = row;
    },
    addNew() {
      this.$router.push({
        path: "/bid/prepare/add"
      });
    },
    handleEdit(record) {
      this.$router.push({
        path: `/bid/prepare/edit/${record.projectId}`
      });
    },
    handleDetail(record) {
      this.$router.push({
        path: `/bid/prepare/detail/${record.projectId}`
      });
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
      let projectIds = id || this.selectedRowKeys.join(",");
      deleteProjectInfo(projectIds).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.selectedRowKeys = [];
          this.$message.warning(responseResult);
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
    },
    // 选择框的默认属性配置
    getCheckboxProps(record) {
      return {
        props: {
          disabled: !(
            this.user.userId == record.createId && record.approveState == 1
          )
        }
      };
    }
  }
};
</script>
