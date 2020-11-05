<template>
  <div>
    <project-info
      id="项目信息"
      url="/compare/prepare/detail"
      purchaseTypeKey="comparatePurchaseType"
      :projectData="projectData"
    >
    </project-info>
    <base-view id="基本信息"> </base-view>
    <Anchor :anchorList="anchorList"> </Anchor>
  </div>
</template>
<script>
import { mixins } from "./mixins.js";
export default {
  name: "enturst-detail",
  mixins: [mixins],
  components: {
    ProjectInfo: () => import("@/components/descriptions/ProjectInfo"),
    BaseView: () => import("./components/BaseView"),
    Anchor: () => import("@/components/anchor/Anchor")

  },
  data() {
    return {
      anchorList: ["项目信息", "基本信息"],
      projectData: {}
    };
  },
  created() {
    this.fnGetProjectData();
  },
  activated() {
    this.fnGetProjectData();
  }
};
</script>
