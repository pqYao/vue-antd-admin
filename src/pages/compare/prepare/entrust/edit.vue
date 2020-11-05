<template>
  <div>
    <project-info
      id="项目信息"
      url="/compare/prepare/detail"
      purchaseTypeKey="comparatePurchaseType"
      :projectData="projectData"
    >
    </project-info>
    <base-edit id="基本信息"> </base-edit>
    <!-- 审批操作 -->
    <audit-button>
      <a-popover content="此功能暂不支持">
        <a-button type="primary" disabled>项目回退</a-button>
      </a-popover>
      <!-- 单据没有审批流才展示 -->
      <a-popconfirm
        :visible="isCanbeFinish"
        title="确定编辑完成?"
        @cancel="fnCancel"
        @confirm="handleCompeleted"
        @visibleChange="handleVisibleChange"
      >
        <a-button @click="fnJudgeCanbeFinish()" type="primary">
          编辑完成
        </a-button>
      </a-popconfirm>
      <!-- 单据有审批流才展示 -->
      <a-button type="primary" @click="handleSubmit">提交审批</a-button>
    </audit-button>
    <Anchor :anchorList="anchorList"> </Anchor>
  </div>
</template>
<script>
import { mixins } from "./mixins.js";
import {
  validateEntrustInfo,
  compeleteEntrust,
  submitEntrust
} from "@/services/compare";
export default {
  name: "enturst-edit",
  mixins: [mixins],
  components: {
    ProjectInfo: () => import("@/components/descriptions/ProjectInfo"),
    BaseEdit: () => import("./components/BaseEdit"),
    AuditButton: () => import("@/components/button/AuditButton"),
    Anchor: () => import("@/components/anchor/Anchor")
  },
  data() {
    return {
      anchorList: ["项目信息", "基本信息"],
      isCanbeFinish: false
    };
  },
  created() {
    this.fnGetProjectData();
  },
  activated() {
    this.fnGetProjectData();
  },
  methods: {
    fnCancel() {
      this.isCanbeFinish = false;
    },
    handleVisibleChange(visible) {
      if (!visible) {
        this.isCanbeFinish = false;
        return;
      }
    },
    fnJudgeCanbeFinish() {
      validateEntrustInfo(this.$route.query.entrustId || "").then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          this.isCanbeFinish = true;
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    handleCompeleted() {
      compeleteEntrust(this.$route.query.entrustId || "").then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.success(responseResult);
          this.$closePage(this.$route.fullPath);
        }
      });
    },
    handleSubmit() {
      submitEntrust(this.$route.query.entrustId || "").then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.$message.success(responseResult);
          this.$closePage(this.$route.fullPath);
        }
      });
    }
  }
};
</script>
