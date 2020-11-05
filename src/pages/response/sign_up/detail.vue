<template>
  <div class="sign-up-detail-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseTypeAll"
      :projectData="projectData">
    </project-info>
    <contact-info 
      id="联系人信息"
      :pageType=0
      :baseData="baseData">
    </contact-info>
    <!-- 显示内容较少，暂不需要锚 -->
    <!-- <Anchor :anchorList="anchorList"></Anchor> -->
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
    methods: {},
  };
</script>