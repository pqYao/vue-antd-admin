<template>
  <a-card class="sign-up-vendor-wrapper">
    <Heading name="报名供应商">
      <template v-slot:leftIcon>
        <a-popover placement="bottom">
          <template slot="content">
            <p>邀请类的供应商报名后，系统将自动确认报名。</p>
          </template>
          <a-icon type="question-circle" />
        </a-popover>
      </template>
      <div v-if="pageType == 1">
        <a-popconfirm 
          :disabled="isDisabled == 0"
          title="确定报名?" 
          @confirm="fnConfirm(1)">
          <a-button
            v-if="dataSource.length != 0 && 
              (projectData.purchaseType == 1 || 
              projectData.purchaseType == 3 || 
              projectData.purchaseType == 5 || 
              projectData.purchaseType == 7)" 
            type="primary" 
            @click="fnConfirm(2)"> 
            <!-- <i :class="['iconfont', 'icon-weibiaoti544']"></i> -->
            确认报名
          </a-button>
        </a-popconfirm>
      </div>
    </Heading>
    <a-table
      bordered
      size="small"
      rowKey="providerEnrollId"
      :loading="pageData.loading"
      :pagination="false"
      :columns="columns"
      :dataSource="dataSource"
      :scroll="{ x: true }"
      :rowSelection="pageType == 0 ? null : {
        fixed: true,
        selectedRowKeys: selectedRowKeys,
        onChange: onSelectChange,
      }">
      <!-- 报名状态 -->
      <template slot="operationState" slot-scope="text">
        {{ text ? operationState[text] : '' }}
      </template>
      <template slot="action" slot-scope="text, record">
        <!-- 200: "待报名";201: "报名中";202: "已报名待确认";203: "已过期";204: "已报名" -->
        <!-- 当‘报名状态’为【已报名】或【已报名待确认】时，系统展示本按钮 -->
        <a-popconfirm
          title="确认报名?"
          @confirm="fnConfirm(0, record.providerEnrollId)">
          <a
            v-if="record.operationState == 202 || record.operationState == 204"
            style="margin-right: 8px">
            确认报名
          </a>
        </a-popconfirm>
      </template>
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
import { getSignUpVendorData, getConfirmedSignUp } from "@/services/bid";
import { operationStateMap } from "@/services/basic";

export default {
  name: "sign-up-vendor",
  components: { Pagination, Heading },
  props: {
    //0: 详情; 1: 编辑
    pageType: {
      type: [Number, String],
      default: 1
    },
    projectData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      operationState: [],
      pageData: {
        limit: 15,
        total: 0,
        page: 1,
        loading: false
      },
      selectedRowKeys: [],
      selectedRows: [],
      dataSource: [],
      columns: [],
      columnsData: [
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
        },
        {
          title: "报名状态",
          dataIndex: "operationState",
          align: "center",
          scopedSlots: { customRender: "operationState" },
        },
        {
          title: "操作",
          dataIndex: "action",
          align: "center",
          scopedSlots: { customRender: "action" },
        },
      ]
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary"]),
    isDisabled() {
      //0: 未选确认报名的数据 1: 已选
      return this.selectedRowKeys.length == 0 ? 0 : 1
    }
  },
  created() {
    this.fnInit();
  },
  activated() {
    this.fnInit();
  },
  watch: {
    projectData() {
      this.fnInit();
    }
  },
  methods: {
    fnInit() {
      //详情界面不展示操作列
      this.columns = [];
      let arr = [...this.columnsData], index = this.columnsData.length - 1;
      // 编辑界面和公开类采购才展示操作列
      if (this.pageType == 0 || (this.pageType == 1 && 
          !(this.projectData.purchaseType == 1 || 
            this.projectData.purchaseType == 3 || 
            this.projectData.purchaseType == 5 || 
            this.projectData.purchaseType == 7)
        )) {
        arr.splice(index, 1);
      }
      this.columns = [...arr];
      this.getOperationStateList();
      this.fnGetData();
    },
    fnGetData() {
      let param = {
        limit: this.pageData.limit,
        page: this.pageData.page,
        projectId: this.$route.params.id
      };
      this.pageData.loading = true;
      getSignUpVendorData(param).then(res => {
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
    fnConfirm(type, id) {
      //type: 0 单条数据确认；1批量确认
      if (type == 2 && this.isDisabled == 0) {
        this.$message.warning("请选择确认报名的数据！");
        return;
      }
      if (type == 2) return;
      let ids = (type == 1) ? this.selectedRowKeys.join(',') : id;
      getConfirmedSignUp(ids, false).then(res => {
        const resData = res.data || {};
        if (resData.errCode == "0000") {
          this.$message.success(resData.responseResult, 3);
          this.fnGetData();
          //刷新确认报名供应商
          this.$emit('refresh-confirmed-vendor')
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      })
    },
    //获取报名状态的码表值
    getOperationStateList() {
      operationStateMap("providerEnroll").then(result => {
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
    }
  }
};
</script>
