<template>
  <div class="selectBox">
    回退至：
    <a-select default-value="1" style="width: 120px" @change="handleChange">
      <a-select-option value="1"> 项目创建 </a-select-option>
    </a-select>
  </div>
</template>
<script>
export default {
  //   watch: {
  //     show: {
  //       handler(val) {
  //         this.visible = val;
  //       },
  //       immediate: true,
  //       deep: true,
  //     },
  //   },
  methods: {
    handleChange() {},
  },
};
</script>
<style lang="less" scoped>
.selectBox {
  text-align: center;
}

</style>


  