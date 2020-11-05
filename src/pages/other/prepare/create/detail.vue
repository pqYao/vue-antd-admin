<template>
  <div>
    <span id="基本信息"> </span>
    <BaseView @send-data="getData"></BaseView>
    <span id="产品明细"> </span>
    <Product :baseData="baseData" :isDetail="true"></Product>
    <Anchor :anchorList="anchorList"> </Anchor>
  </div>
</template>
<script>
import BaseView from "./components/BaseView";
// import file from "./components/file";
import Product from "./components/Product";
import Anchor from "@/components/anchor/Anchor";

export default {
  components: { BaseView, Anchor, Product },
  data() {
    return {
      anchorList: ["基本信息", "附件管理", "项目情况说明", "产品明细"],
      baseData: {}
    };
  },
  watch: {
    baseData: {
      handler(val) {
        return val;
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getData(data) {
      this.baseData = data;
    }
  }
};
</script>
