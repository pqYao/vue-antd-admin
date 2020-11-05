import { mapGetters } from "vuex";
import { getProjectInfoData } from "@/services/response";
export const mixins = {
	components: {
	  ProjectInfo: () => import("@/components/descriptions/ProjectInfo"),
	  ConfirmedVendor: () => import("./components/ConfirmedVendor"), 
	  SignUpVendor: () => import("./components/SignUpVendor"), 
	  Anchor: () => import("@/components/anchor/Anchor")
	},
	data() {
		return {
			baseData: {},
			projectData: {},
			anchorList: ["项目信息", "报名供应商", '确认报名供应商']
		}
	},
	computed: {
	  ...mapGetters("account", ["dictionary"])
	},
	created() {
    this.fnGetProjectData();
  },
  activated() {
    this.fnGetProjectData();
  },
	methods: {
		//获取项目信息
		fnGetProjectData() {
	    getProjectInfoData(this.$route.params.id).then(res => {
				const resData = res.data;
				if (resData.errCode == "0000") {
					this.projectData = resData.responseResult || {};
				} else {
					this.$error({
		        content: this.BASE.handleErrorMsg(resData)
		      });
				}
	    });
	  }
	}
}