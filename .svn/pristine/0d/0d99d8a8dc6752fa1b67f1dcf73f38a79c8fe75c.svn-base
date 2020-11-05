<template>
  <div>
    <a-card>
      <Heading name="邀请供应商">
        <template v-if="this.pageType == 1">
          <a-button type="primary" @click="handleAdd('supplier')"
            >选择供应商</a-button
          >
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
        rowKey="tenderVendorId"
        :scroll="{ x: true }"
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
        <template slot="action" slot-scope="record">
          <a-popconfirm
            title="是否确认删除所选行?"
            ok-text="确认"
            cancel-text="取消"
            @confirm="deleteById(record.tenderVendorId)"
          >
            <a style="margin-right: 8px">删除</a>
          </a-popconfirm>
        </template>
      </a-table>
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
      title="选择供应商"
      width="80%"
      :centered="true"
      :maskClosable="false"
      v-if="supplierVisible"
      v-model="supplierVisible"
      @ok="handleOk('supplier')"
    >
      <SupplierSelect ref="supplier"></SupplierSelect>
    </a-modal>
  </div>
</template>

<script>
import Heading from "@/components/heading/Heading";
import Pagination from "@/components/pagination/Pagination";
import SupplierSelect from "./supplierSelect";
import {
  findSendTenderVendorByPage,
  deleteSendTenderVendorInfo,
  relevanceSendTenderVendor,
  updateProductInfo
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
    width: 80,
    customRender: (text, record, index) =>
      `${(pageData.page - 1) * pageData.limit + index + 1}`
  },
  {
    title: "项目名称",
    dataIndex: "projectName"
  },
  {
    title: "项目编码",
    dataIndex: "projectCode",
    align: "center"
  },
  {
    title: "标",
    dataIndex: "subtenderName",
    align: "center"
  },
  {
    title: "包",
    dataIndex: "subcontractingName",
    align: "center"
  },
  {
    title: "供应商名称",
    dataIndex: "vendorName",
    align: "center"
  },
  {
    title: "供应商编码",
    dataIndex: "vendorCode",
    align: "center"
  },
  {
    title: "统一社会信用代码",
    dataIndex: "creditCode",
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
  name: "tender-supplier",
  components: { Heading, Pagination, SupplierSelect },
  props: {
    //0: 详情; 1: 编辑
    pageType: {
      type: [Number, String],
      default: 1
    }
  },
  data() {
    return {
      form: this.$form.createForm(this),
      columns,
      dataSource: [],
      selectedRowKeys: [],
      selectedRows: [],
      supplierVisible: false,
      pageData
    };
  },
  computed: {
    hasSelectedRowKeys() {
      return !!this.selectedRowKeys.length == 0 ? false : true;
    },
    tenderVindicateId() {
      return this.$route.params.id;
    },
    projectId() {
      return this.$route.query.projectId;
    }
  },
  created() {
    this.fnInit();
    this.handleGetData();
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
    handleGetData() {
      //编辑界面不展示分页，详情界面才展示
      let param = Object.assign(
        {
          limit: this.pageType == 0 ? this.pageData.limit : 10000,
          page: this.pageData.page,
          tenderVindicateId: this.tenderVindicateId
        },
        this.filter
      );
      this.pageData.loading = true;
      this.dataSource = [];
      this.selectedRowKeys = [];
      this.selectedRows = [];
      findSendTenderVendorByPage(param).then(res => {
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
    handleAdd(key) {
      this[`${key}Visible`] = true;
    },
    handleOk(key) {
      const data = this.$refs[key].getRes();
      relevanceSendTenderVendor(
        data.join(","),
        this.projectId,
        this.tenderVindicateId
      ).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.success(responseResult, 3);
          this.handleGetData();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
      this[`${key}Visible`] = false;
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
      updateProductInfo(this.dataSource).then(res => {
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
      let tenderVendorIds = id || this.selectedRowKeys.join(",");
      deleteSendTenderVendorInfo(tenderVendorIds).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.warning(responseResult);
          this.selectedRowKeys = [];
          this.handleGetData();
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
