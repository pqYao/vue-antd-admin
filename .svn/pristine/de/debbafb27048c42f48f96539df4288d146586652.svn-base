<template>
  <a-card>
    <div class="entrust-preview">
      <h3 style="text-align:center">招标代理委托函</h3>
      <div class="title">
        {{ agencyOrgName || formData.agencyOrgName }}代理公司：
      </div>
      <div>
        我司的{{ projectName || formData.projectName }}项目拟采用{{
          purchaseTypeName || formData.purchaseTypeName
        }}方式，经研究，现委托贵司作为本项目的招标代理机构。
      </div>
      <div v-html="content || formData.content"></div>
      <div>
        本委托函自我司发出之日起生效，至本项目全部招标代理工作完成之日终止。
      </div>
      <div style="text-align:right">
        招标人：{{ tenderee || formData.tenderee }}
      </div>
      <div style="text-align:right">
        {{
          formData.operationFinishDate
            ? moment(formData.operationFinishDate).format("YYYY年MM月DD日")
            : moment(new Date()).format("YYYY年MM月DD日")
        }}
      </div>
    </div>
  </a-card>
</template>
<script>
import moment from "moment";
import { findProviderEntrust } from "@/services/bid";

export default {
  name: "entrust-preview",
  data() {
    return {
      formData: {}
    };
  },
  computed: {
    // 内部委托函
    content() {
      return this.$route.query.content || "";
    },
    tenderee() {
      return this.$route.query.tenderee || "";
    },
    agencyOrgName() {
      return this.$route.query.agencyOrgName || "";
    },
    projectName() {
      return this.$route.query.projectName || "";
    },
    purchaseTypeName() {
      return this.$route.query.projectName || "";
    },
    // 供应商委托函
    projectId() {
      return this.$route.query.projectId || "";
    }
  },
  created() {
    // 供应商委托函预览查询
    if (this.projectId) {
      this.getData();
    }
  },
  methods: {
    moment,
    getData() {
      findProviderEntrust(this.projectId).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          const { responseResult } = resData;
          this.formData = responseResult;
        } else {
          this.$error({
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.entrust-preview {
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
