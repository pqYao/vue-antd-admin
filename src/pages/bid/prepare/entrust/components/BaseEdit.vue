<template>
  <a-card class="entrust-base-edit">
    <Heading name="基本信息">
      <a-button type="primary" @click="handlePreview">
        <i :class="['iconfont', 'icon-yulancopy']"></i>
        预览
      </a-button>
      <a-button type="primary" @click="handleSubmit" :disabled="isConnect">
        <i :class="['iconfont', 'icon-baocun']"></i>
        保存
      </a-button>
    </Heading>
    <div class="entrust-base-edit-wrapper">
      <a-form
        layout="horizontal"
        :form="form"
        class="es-form"
        @keydown.native.enter.prevent="handleSubmit"
      >
        <p class="title">{{ formData.agencyOrgName }}代理公司:</p>
        <p>
          我司的{{ formData.projectName }}项目拟采用{{
            formData.purchaseTypeName
          }}方式，经研究，现委托贵司作为本项目的招标代理机构。
        </p>
        <tinymce
          v-if="tinymceRefresh"
          v-model="formData.content"
          :height="300"
        />
        <p>
          本委托函自我司发出之日起生效，至本项目全部招标代理工作完成之日终止。
        </p>
        <a-row>
          <a-col :md="8" :sm="24" offset="16">
            <a-form-item label="招标人" v-bind="ItemLayout">
              <a-input
                @change="e => tendereeChange(e.target.value)"
                maxLength="10"
                v-decorator="[
                  `tenderee`,
                  {
                    rules: [{ required: true, message: '请输入招标人' }],
                    validateTrigger: ['blur'],
                    initialValue: formData.tenderee || ''
                  }
                ]"
                placeholder="请输入招标人"
                allowClear
              ></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </div>
  </a-card>
</template>
<script>
import Tinymce from "@/components/Tinymce";
import Heading from "@/components/heading/Heading";
import { findEntrust, updateEntrust } from "@/services/bid";
export default {
  name: "entrust-base-edit",
  components: { Tinymce, Heading },
  data() {
    return {
      form: this.$form.createForm(this),
      formData: {},
      projectId: "",
      ItemLayout: {
        labelCol: {
          span: 10
        },
        wrapperCol: {
          span: 14
        }
      },
      tinymceRefresh: true,
      isConnect: false
    };
  },
  created() {
    this.handleInit();
  },
  activated() {
    this.handleInit();
  },
  methods: {
    handleInit() {
      this.projectId = this.$route.params.id;
      this.handleGetData();
    },
    handleGetData() {
      findEntrust(this.projectId).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.formData = responseResult;
          this.tinymceRefresh = false;
          this.$nextTick(() => {
            this.tinymceRefresh = true;
          });
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll(
        this.BASE.formScrollOptions,
        (error, values) => {
          if (error) {
            return;
          }
          for (let i in values) {
            this.formData[i] = values[i];
          }
          this.isConnect = true;
          this.updateInfo();
        }
      );
    },
    handlePreview() {
      this.$router.push({
        path: `/entrust-preview/${this.formData.entrustId}`,
        query: {
          agencyOrgName: this.formData.agencyOrgName,
          projectName: this.formData.projectName,
          content: this.formData.content,
          tenderee: this.formData.tenderee,
          purchaseTypeName: this.formData.purchaseTypeName
        }
      });
    },
    tendereeChange(value) {
      this.formData.tenderee = value;
    },
    updateInfo() {
      updateEntrust(this.formData).then(res => {
        const resData = res.data;
        if (resData.errCode === "0000") {
          const { responseResult } = resData;
          this.projectId = responseResult.projectId;
          this.$message.success("更新成功", 3);
          this.handleGetData();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
        this.isConnect = false;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.editor-content {
  margin-top: 20px;
}
.entrust-base-edit-wrapper {
  background: #f3f8ff;
  padding: 0 50px;
  .title {
    margin-left: -30px;
  }
}
</style>
