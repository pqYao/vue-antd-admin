import Anchor from "@/components/anchor/Anchor";
import { mapGetters } from "vuex";
export const mixins = {
  components: {
    Anchor,
    SetFile: () => import("./components/SetFile"),
    SetTime: () => import("./components/SetTime"),
    SetTimeView: () => import("./components/SetTimeView"),
    Supplier: () => import("./components/Supplier"),
    Notice: () => import("./components/Notice"),
    NoticeView: () => import("./components/NoticeView"),
    AuditButton: () => import("@/components/button/AuditButton"),
    Invitation: () => import("./components/Invitation.vue"),
    InvitationView: () => import("./components/NoticeView")
  },
  data() {
    return {
      // 是否可以完成发标
      isCanbeFinish: false,
      // 锚点
      anchorList: ["维护项目文件", "招标时间设置", "邀请供应商"]
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary"]),
    tenderVindicateId() {
      return this.$route.params.id;
    },
    purchaseType() {
      return this.$route.query.purchaseType;
    }
  },
  created() {},
  methods: {}
};
