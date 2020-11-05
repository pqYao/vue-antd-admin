<template>
  <div>
    <set-file :pageType="0" id="维护项目文件"></set-file>
    <set-time-view id="招标时间设置"></set-time-view>
    <!-- 邀请招标才展示   -->
    <supplier
      :pageType="0"
      id="邀请供应商"
      v-if="
        purchaseType == '2' ||
          purchaseType == '4' ||
          purchaseType == '6' ||
          purchaseType == '8'
      "
    ></supplier>
    <notice-view
      id="公告"
      :noticeName="noticeName"
      :noticeType="1"
      v-if="
        purchaseType == '1' ||
          purchaseType == '3' ||
          purchaseType == '5' ||
          purchaseType == '7'
      "
    ></notice-view>
    <!-- <file name="公告附件" id="公告附件"></file> -->
    <invitation-view
      :noticeName="noticeName"
      :noticeType="2"
      id="邀请函"
      v-if="
        purchaseType == '2' ||
          purchaseType == '4' ||
          purchaseType == '6' ||
          purchaseType == '8'
      "
    ></invitation-view>
    <!-- <file name="邀请函附件" id="邀请函附件"></file> -->
    <audit-button>
      <a-popover content="此功能暂不支持">
        <a-button type="primary" disabled>业务流程追踪</a-button>
      </a-popover>
    </audit-button>
    <Anchor :anchorList="anchorList"> </Anchor>
  </div>
</template>
<script>
import { mixins } from "./mixins.js";
export default {
  name: "enturst-detail",
  mixins: [mixins],
  computed: {
    noticeName() {
      return (
        (this.purchaseType == 1 && "招标公告") ||
        ((this.purchaseType == 3 ||
          this.purchaseType == 5 ||
          this.purchaseType == 7) &&
          "采购公告") ||
        ((this.purchaseType == "2" ||
          this.purchaseType == "4" ||
          this.purchaseType == "6" ||
          this.purchaseType == "8") &&
          "邀请函")
      );
    }
  },
  activated() {
    if (this.noticeName) {
      this.anchorList[2] = "公告";
    } else {
      this.anchorList[3] = "邀请函";
    }
  }
};
</script>
