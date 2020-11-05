<template>
  <div class="sign-up-detail-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseTypeAll"
      :projectData="projectData">
    </project-info>
    <purchase-files
      id="采购文件"
      :pageType=0
      :operationState="operationState"
      :payMode="payMode">
    </purchase-files>
    <!-- 当项目为招标类采购项目时，系统才展示本模块 -->
    <bid-bond
      v-if="projectData.purchaseType == 1 || projectData.purchaseType == 2"
      id="投标保证金"
      :pageType=0
      :operationState="operationState"
      :payMode="payMode">
    </bid-bond>
    <answer-info
      id="应答信息"
      :pageType=0>
    </answer-info>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
import {mixins} from "./mixins.js";
export default {
  name: 'sign-up-detail',
  mixins: [mixins],
  data() {
    return {}
  },
  created() {
    this.fnGetProjectData();
  },
  activated() {
    this.fnGetProjectData();
  },
  methods: {},
};
</script>