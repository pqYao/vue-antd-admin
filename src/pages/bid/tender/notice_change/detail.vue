<template>
	<a-card class="notice-change-edit-wrapper">
		<Heading name="公告变更">
			<a-button type="primary" @click="fnCheckChangeRecord">变更记录</a-button>
		</Heading>
		<Descriptions 
      :list="labelList" 
      :param="formData"> 
    </Descriptions>
    <!-- 审批操作 -->
    <audit-button>
      <a-button 
        type="primary"
        @click="fnView">
       	预览
      </a-button>
    </audit-button>
    <!-- 弹框查看公告变更记录 -->
    <a-modal
      v-if="changeRecordVisible"
      v-model="changeRecordVisible"
      title="变更记录"
      width="80%"
      :footer="null"
      :centered="true"
      :maskClosable="false"
      wrapClassName="change-record-wrapper">
      <notice-change-record 
        ref="linkman"
        @close-modal="fnCloseModal">
      </notice-change-record>
    </a-modal>
	</a-card>
</template>

<script>
import moment from "moment";
import { getNoticeChangeDetail } from "@/services/bid";

export default {
  name: 'notice-change-edit',
  components: {
  	Heading: () => import("@/components/heading/Heading"),
    AuditButton: () => import("@/components/button/AuditButton"),
    NoticeChangeRecord: () => import("@/components/table/ChangeRecord.vue"),
    Descriptions: () => import('@/components/descriptions/Description'),
  },
  data() {
    return {
      form: this.$form.createForm(this),
      formData: {},
    	changeRecordVisible: false,
      tinymceRefresh: true,
      labelList: [
        {
          label: "公告标题",
          key: "noticeTitle",
          show: true,
          span: 3
        },
        {
          label: "标书售卖开始时间",
          key: "bidSaletimeStart",
          show: true
        },
        {
          label: "标书售卖截止时间",
          key: "bidSaletimeEnd",
          show: true
        },
        {
          label: "投标截止时间",
          key: "tenderOffTime",
          show: true
        },
        {
          label: "内容",
          key: "noticeContent",
          show: true,
          tinymce: true,
          span: 3
        },
      ]
    }
  },
  created() {
    this.fnGetDetailInfo();
  },
  activated() {
    this.fnGetDetailInfo();
  },
  computed: {
    projectId() {
      return this.$route.params.id
    },
    noticeChangeId() {
      return this.$route.query.ncid
    }
  },
  methods: {
    moment,
    //获取公告的详细数据
    fnGetDetailInfo() {
      let param = {
        projectId: this.projectId,
        noticeChangeId: this.noticeChangeId
      }
      getNoticeChangeDetail(param).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          this.formData = resData.responseResult || {};
          this.tinymceRefresh = false;
          this.$nextTick(() => {
            this.tinymceRefresh = true;
          });
        } else {
          this.$error({
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    //预览
    fnView() {
    	this.formData.noticeContext = this.formData.noticeContent;
      this.$router.push({
        path: `/notice-preview/${this.formData.projectId}`,
        query: {
          formData: JSON.stringify(this.formData)
        }
      });
    },
    //查看变更记录
    fnCheckChangeRecord() {
      this.changeRecordVisible = true;
    },
    fnCloseModal() {
      this.changeRecordVisible = false;
    }
  }
};
</script>