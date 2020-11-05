<template>
	<div style="display: inline-block; marginLeft: 8px">
		<a-popconfirm 
      :title="title" 
      @confirm="fnConfirm">
      <a-popover
        v-model="visible"
        placement="bottom"
        :content="hoverContent">
        <a-button type="primary" @click="fnClick">
          {{btnName}}
        </a-button>
      </a-popover>
    </a-popconfirm>
	</div>
</template>

<script>
	export default {
		name: "pop-confirm-btn",
		props: {
			title: {
				type: String,
				default: ""
			},
			hoverContent: {
				type: String,
				default: ""
			},
			btnName: {
				type: String,
				default: ""
			},
		},
		data() {
			return {
				visible: false
			}
		},
		methods: {
			fnConfirm() {
				this.$emit("confirm-action")
			},
			fnClick() {
				this.visible = false;
			}
		}
	}
</script>