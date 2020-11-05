<template>
  <div class="editable-cell">
    <div v-if="editable" class="editable-cell-input-wrapper">
      <a-input
        ref="tagInput"
        :value="value"
        placeholder="请输入"
        @change="handleChange"
        @pressEnter="check"
        @blur="check"
      />
    </div>
    <div v-else class="editable-cell-text-wrapper" @click="edit">
      {{ value || " " }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    text: String,
  },
  data() {
    return {
      value: this.text,
      editable: false,
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit("change", this.value);
    },
    edit() {
      this.editable = true;
      this.$nextTick(() => {
        this.$refs.tagInput.focus();
      });
    },
  },
};
</script>
<style>
.editable-cell {
  position: relative;
  margin-left: 15px;
}
.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
  width: 180px;
  margin: 0 auto;
}
.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}
</style>