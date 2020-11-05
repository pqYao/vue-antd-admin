import Anchor from "@/components/anchor/Anchor";
import { mapGetters } from "vuex";
import { findProjectInfoById } from "@/services/compare";
export const mixins = {
  components: {
    Anchor
  },
  data() {
    return {
      projectData: {},
      divideTenderDataLength: 0,
      anchorList: ["项目信息", "分标明细", "产品明细"]
    };
  },
  computed: {
    ...mapGetters("account", ["dictionary"])
  },
  created() {
    this.fnGetProjectData();
  },
  methods: {
    fnGetProjectData() {
      findProjectInfoById(this.$route.params.id).then(res => {
        const resData = res.data;
        if (resData.errCode == "0000") {
          this.projectData = resData.responseResult;
        } else {
          this.$error({
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    }
  }
};
