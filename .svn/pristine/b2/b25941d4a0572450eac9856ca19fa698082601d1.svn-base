<template>
  <div class="sign-up-edit-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseTypeAll"
      :projectData="projectData">
    </project-info>
    <purchase-files
      id="采购文件"
      :pageType=1
      :operationState="operationState"
      :payMode="payMode">
    </purchase-files>
    <!-- 当项目为招标类采购项目时，系统才展示本模块 -->
    <bid-bond
      v-if="projectData.purchaseType == 1 || projectData.purchaseType == 2"
      id="投标保证金"
      :pageType=1
      :operationState="operationState"
      :payMode="payMode">
    </bid-bond>
    <answer-info
      id="应答信息"
      :pageType=1>
    </answer-info>
    <!-- 审批操作 -->
    <audit-button>
      <a-button 
        type="primary" 
        @click="fnCheckInvitation">
        澄清发布&查看
      </a-button>
    </audit-button>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
import {mixins} from "./mixins.js";

export default {
  name: 'sign-up-edit',
  mixins: [mixins],
  components: {
    AuditButton: () => import("@/components/button/AuditButton")
  },
  data() {
    return {
    }
  },
  created() {
    this.fnGetProjectData();
  },
  activated() {
    this.fnGetProjectData();
  },
  methods: {
    fnCheckInvitation() {
      this.$message.info("暂不支持此功能");
      // this.$router.push({
      //   path: `/bid/prepare/detail/${this.projectData.projectId}`
      // });
    }
  },
};
</script>