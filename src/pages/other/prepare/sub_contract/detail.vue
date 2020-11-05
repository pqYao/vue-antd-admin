<template>
  <div>
    <span id="项目信息"> </span>
    <Project></Project>
    <span id="分包明细"> </span>
    <SubContract :isDetail="true"></SubContract>
    <span id="产品明细"> </span>
    <Product :isDetail="true"></Product>
    <Anchor :anchorList="anchorList"> </Anchor>
  </div>
</template>
<script>
import Project from "./components/Project";
import SubContract from "./components/SubContract";
import Product from "./components/Product";
import Anchor from "@/components/anchor/Anchor";

export default {
  name: 'sub-contract-detail',
  components: { Project, SubContract, Product, Anchor },
  data() {
    return {
      anchorList: ["项目信息", "分包明细", "产品明细"]
    };
  }
};
</script>
