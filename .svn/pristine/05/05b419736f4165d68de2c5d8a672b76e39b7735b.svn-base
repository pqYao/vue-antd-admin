<template>
  <div class="bid-submit-edit-wrapper">
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
    <bid-bond
      id="投标保证金"
      :pageType=1
      :operationState="operationState"
      :payMode="payMode">
    </bid-bond>
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
  name: 'bid-submit-edit',
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