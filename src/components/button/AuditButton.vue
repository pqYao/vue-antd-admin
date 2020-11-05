<template>
  <div
    class="btn-wrapper "
    :style="
      `left:${collapsed ? '80px' : '250px'};transition: all 0.12s linear
        }`
    "
  >
  <a-space :size="20">
    <slot></slot>
  </a-space>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "audit-button",
  props: {},
  computed: {
    ...mapGetters("account", ["collapsed"])
  }
};
</script>
<style lang="less" scoped>
.btn-wrapper {
  position: fixed;
  bottom: 0px;
  right: 0;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #fff;
  box-shadow: 0 -1px 2px @shadow-color;
  z-index: 100;
}
</style>
