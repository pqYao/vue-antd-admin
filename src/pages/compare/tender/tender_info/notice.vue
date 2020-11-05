<template>
  <a-card>
    <button v-print="printObj" style="float:right">打印</button>
    <div class="notice-preview" id="printMe">
      <h2 style="text-align:center">{{ formData.noticeTitle }}</h2>
      <div v-html="formData.noticeContext"></div>
      <div style="text-align:right" v-if="formData.entrustFlag == 0">
        招标人：{{ formData.projectCreateUnitName }}
      </div>
      <div style="text-align:right" v-else>
        招标人/招标代理机构：{{
          formData.projectCreateUnitName + "/" + formData.agencyOrgName
        }}
      </div>
      <div style="text-align:right">
        {{
          formData.operationFinishDate ||
            moment(new Date()).format("YYYY年MM月DD日")
        }}
      </div>
    </div>
  </a-card>
</template>
<script>
import moment from "moment";

import { findSendTenderNoticeByProjectId } from "@/services/response";
export default {
  name: "notice-preview",
  data() {
    return {
      printObj: {
        id: "printMe",
        popTitle: "",
        extraHead: '<meta http-equiv="Content-Language"content="zh-cn"/>'
      }
    };
  },
  computed: {
    formData() {
      return JSON.parse(this.$route.query.formData);
    },
    noticeType() {
      return this.$route.query.noticeType || "";
    },
    isRequset() {
      return this.$route.query.isRequset || 0;
    }
  },
  watch: {
    isRequset: {
      handler(val) {
        // if (isRequset) {
        this.getData();
        // }
        return val;
      },
      immediate: true,
      deep: true
    }
  },
  created() {
    this.getData();
  },
  methods: {
    moment,
    getData() {
      findSendTenderNotice(this.$route.params.id, this.noticeType).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.formData = responseResult || {};
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.notice-preview {
  padding: 20px 30px;
  div {
    padding: 0 20px;
    font-size: 14px;
    line-height: 30px;
  }
  .title {
    padding: 0;
  }
}
</style>
