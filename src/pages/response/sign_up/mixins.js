import { mapGetters } from "vuex";
import { getProjectInfoData, getSignUpBaseInfo } from "@/services/response";
export const mixins = {
	components: {
	  ProjectInfo: () => import("@/components/descriptions/ProjectInfo"),
	  ContactInfo: () => import("./components/ContactInfo"), 
	  // Anchor: () => import("@/components/anchor/Anchor")
	},
	data() {
		return {
			baseData: {},
			projectData: {},
			anchorList: ["项目信息", "联系人信息"]
		}
	},
	computed: {
	  ...mapGetters("account", ["dictionary", "user"])
	},
	created() {
    this.fnGetSignUpBaseInfo();
  },
  activated() {
    this.fnGetSignUpBaseInfo();
  },
	methods: {
		//获取项目信息
		fnGetProjectData(id) {
	    getProjectInfoData(id).then(res => {
				const resData = res.data;
				if (resData.errCode == "0000") {
					this.projectData = resData.responseResult || {};
				} else {
					this.$error({
		        content: this.BASE.handleErrorMsg(resData)
		      });
				}
	    });
	  },
	  //获取基本信息
	  fnGetSignUpBaseInfo(args) {
	  	let param = {
	  		providerEnrollId: args ? args : this.$route.query.sid || '',
	  		projectId: this.$route.params.id,
	  		providerId: this.user.userId
	  	}
	    getSignUpBaseInfo(param).then(res => {
				const resData = res.data;
				if (resData.errCode == "0000") {
					this.baseData = resData.responseResult || {};
					this.fnGetProjectData(this.$route.params.id);
				} else {
					this.$error({
		        content: this.BASE.handleErrorMsg(resData)
		      });
				}
	    });
	  },
	  //更新基础数据
	  fnUpdateBaseInfo(args) {
	  	this.fnGetSignUpBaseInfo(args);
	  }
	}
}