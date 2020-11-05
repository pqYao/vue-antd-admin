<template>
  <div class="bs-sign-up-detail-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseType"
      :projectData="projectData">
    </project-info>
    <sign-up-vendor
      id="报名供应商"
      :pageType=0
      :projectData="projectData"
    ></sign-up-vendor>
    <confirmed-vendor
      id="确认报名供应商"
      :pageType=0
    ></confirmed-vendor>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
  import {mixins} from "./mixins.js";
  export default {
    name: 'bs-sign-up-detail',
    mixins: [mixins],
    data() {
      return {}
    },
    methods: {},
  };
</script>