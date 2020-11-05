<template>
  <div class="bs-sign-up-edit-wrapper">
    <project-info 
      id="项目信息"
      url="/bid/prepare/detail" 
      purchaseTypeKey="purchaseType"
      :projectData="projectData">
    </project-info>
    <sign-up-vendor
      id="报名供应商"
      :pageType=1
      :projectData="projectData"
      @refresh-confirmed-vendor="fnHandleRefresh"
    ></sign-up-vendor>
    <confirmed-vendor
      id="确认报名供应商"
      :pageType=1
      :isRefresh="isRefresh"
      @finish-get-data="fnHandleRefresh"
    ></confirmed-vendor>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
import {mixins} from "./mixins.js";
import { submitSignUp } from "@/services/response";

export default {
  name: 'bs-sign-up-edit',
  mixins: [mixins],
  data() {
    return {
      isRefresh: false
    }
  },
  methods: {
    fnCheckInvitation() {
      this.$message.info("此功能正在开发中");
      // this.$router.push({
      //   path: `/bid/prepare/detail/${this.projectData.projectId}`
      // });
    },
    fnConfirm() {
      let param = {
        providerEnrollId: this.baseData.providerEnrollId
      };
      submitSignUp(this.baseData.providerEnrollId, param).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          this.$message.success(resData.responseResult, 3);
          //完成后跳转到查询界面
          this.$closePage(this.$route.fullPath);
          this.$router.push({path: `/response/sign-up`});
        } else {
          this.$error({
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    fnHandleRefresh() {
      this.isRefresh = !this.isRefresh;
    }
  },
};
</script>