<template>
  <a-card class="confirm-vendor-wrapper">
    <Heading name="确认报名供应商"></Heading>
    <a-table
      bordered
      size="small"
      rowKey="providerEnrollId"
      :loading="pageData.loading"
      :pagination="false"
      :columns="columns"
      :dataSource="dataSource"
      :scroll="{ x: true }">
    </a-table>
    <pagination
      v-if="pageType == 1"
      :value="pageData.page"
      :pageSize="pageData.limit"
      v-show="pageData.total > 0"
      :total="pageData.total"
      @change="sizeChange"
      @showSizeChange="pageChange"
    ></pagination>
  </a-card>
</template>

<script>
import { mapGetters } from "vuex";
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";
import { getConfirmedVendorData } from "@/services/bid";

export default {
  name: "confirm-vendor",
  components: { Pagination, Heading },
  props: {
    //0: 详情; 1: 编辑
    pageType: {
      type: [Number, String],
      default: 1
    },
    isRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageData: {
        limit: 15,
        total: 0,
        page: 1,
        loading: false
      },
      dataSource: [],
      columns: [
        {
          title: "序号",
          dataIndex: "number",
          align: "center",
          customRender: (text, record, index) =>
            `${(this.pageData.page - 1) * this.pageData.limit + index + 1}`,
          width: 60
        },
        {
          title: "供应商名称",
          dataIndex: "providerName"
        },
        {
          title: "供应商编码",
          dataIndex: "providerCode",
          align: "center"
        },
        {
          title: "联系人",
          dataIndex: "linkman",
          align: "center"
        },
        {
          title: "电话",
          dataIndex: "linkmanPhone",
          align: "center"
        }
      ]
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary"])
  },
  created() {
    this.fnGetData();
  },
  watch: {
    isRefresh(val) {
      val && this.fnGetData();
    }
  },
  methods: {
    fnGetData() {
      let param = {
        limit: this.pageData.limit,
        page: this.pageData.page,
        projectId: this.$route.params.id
      };
      this.pageData.loading = true;
      getConfirmedVendorData(param).then(res => {
        const resData = res.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode == "0000") {
          const { data, total } = responseResult;
          this.dataSource = data;
          this.pageData.total = Number(total);
          this.$emit('finish-get-data');
        } else {
         this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.pageData.loading = false;
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
