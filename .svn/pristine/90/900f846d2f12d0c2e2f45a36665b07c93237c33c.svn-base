<template>
  <div>
    <a-card>
      <Heading name="招标时间设置"></Heading>
      <Descriptions :list="baseList" :param="formData"></Descriptions>
    </a-card>
  </div>
</template>
<script>
import Heading from "@/components/heading/Heading";
import Descriptions from "@/components/descriptions/Description";
import { findSendTenderTime } from "@/services/other";

export default {
  components: { Heading, Descriptions },
  data() {
    return {
      formData: {},
      explainData: {},
      baseList: [
        {
          label: "采购文件售卖开始时间",
          key: "bidingDocSaleStart",
          show: true
        },
        {
          label: "采购文件售卖截止时间",
          key: "bidingDocSaleEnd",
          show: true
        },
        { label: "售卖天数", key: "bidingDocSaleDays", show: true },
        {
          label: "应答截止时间",
          key: "tenderOffTime",
          show: true
        },
        { label: "开标地点", key: "tenderAddress", show: true },
        { label: "投标天数", key: "tenderDays", show: true }
      ]
    };
  },
  created() {
    this.handleGetData();
  },
  methods: {
    handleGetData() {
      findSendTenderTime(this.$route.params.id).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          const { responseResult } = resData;
          this.formData = responseResult;
          this.$emit("send-data", this.formData);
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
