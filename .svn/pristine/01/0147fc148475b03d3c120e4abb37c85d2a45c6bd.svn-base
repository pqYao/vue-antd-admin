<template>
  <div class="answer-info-detail-wrapper">
    <package-info 
      id="标包信息"
      :pageType=0
      :baseData="baseData">
    </package-info>
    <quote-price
      id="报价信息"
      :pageType=0
      :baseData="baseData">
    </quote-price>
    <quote-file
      id="投标文件"
      :pageType=0
      tableName="投标文件">
    </quote-file>
    <technology-file
      id="技术文件"
      :pageType=0
      tableName="技术文件">
    </technology-file>
    <business-file
      id="商务文件"
      :pageType=0
      tableName="商务文件">
    </business-file>
    <Anchor :anchorList="anchorList"></Anchor>
  </div>
</template>

<script>
import { 
  getAnswerInfoDetailById
} from "@/services/response";

export default {
  name: 'answer-info-detail',
  components: {
    Anchor: () => import("@/components/anchor/Anchor"),
    PackageInfo: () => import("./components/PackageInfo"),
    QuotePrice: () => import("./components/QuotePrice"),
    QuoteFile: () => import("./components/FileTable"),
    TechnologyFile: () => import("./components/FileTable"),
    BusinessFile: () => import("./components/FileTable"),
  },
  data() {
    return {
      isVisibleSubmitPop: false,
      isVisibleWithdrewPop: false,
      btnType: 0,
      baseData: {},
      anchorList: ["标包信息", "报价信息", "报价文件", "技术文件", "商务文件"]
    }
  },
  created() {
    this.fnGetBaseData();
  },
  activated() {
    this.fnGetBaseData();
  },
  computed: {
    replyDetailId() {
      return this.$route.params.id
    }
  },
  methods: {
    fnGetBaseData() {
      let param = {
        providerReplayDetailId: this.replyDetailId
      }
      getAnswerInfoDetailById(param, this.replyDetailId).then(res => {
        const resData = res.data || {};
        if (resData.errCode == "0000") {
          this.baseData = resData.responseResult || {};
        } else {
         this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    }
  },
};
</script>