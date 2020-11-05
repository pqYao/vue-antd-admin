<template>
  <div class="divide-tender-detail-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseType"
      :projectData="projectData">
    </project-info>
    <divide-tender-info 
      id="分标明细"
      :pageType=0
      :projectData="projectData">
    </divide-tender-info>
    <product-info 
      id="产品明细"
      :pageType=0
      :projectData="projectData">
    </product-info>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
import {mixins} from "./mixins.js";
export default {
  name: 'divide-tender-detail',
  mixins: [mixins],
  components: {
    ProjectInfo: () => import("@/components/descriptions/ProjectInfo")
  },
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