import { mapGetters } from "vuex";
import { getProjectInfoData } from "@/services/response";
import { operationStateMap } from "@/services/basic";
export const mixins = {
	components: {
	  ProjectInfo: () => import("@/components/descriptions/ProjectInfo"),
	  PurchaseFiles: () => import("./components/PurchaseFiles"),
	  BidBond: () => import("./components/BidBond"),
	  AnswerInfo: () => import("./components/AnswerInfo"),
	  Anchor: () => import("@/components/anchor/Anchor")
	},
	data() {
		return {
			payMode: [],
			operationState: [],
			editOperationState: [],
			projectData: {},
			anchorList: []
		}
	},
	computed: {
	  ...mapGetters("account", ["dictionary"])
	},
	created() {
		this.getPayModeList();
	  this.fnGetProjectData();
	},
	methods: {
		fnGetProjectData() {
	    getProjectInfoData(this.$route.params.id).then(res => {
				const resData = res.data;
				if (resData.errCode == "0000") {
					this.projectData = resData.responseResult || {};
          if (this.projectData.purchaseType == 1 || this.projectData.purchaseType == 2) {
            this.anchorList = ["项目信息", "采购文件", "投标保证金", "应答信息"];
          } else {
            this.anchorList = ["项目信息", "采购文件", "应答信息"];
          }
          this.anchorList
				} else {
					this.$error({
		        content: this.BASE.handleErrorMsg(resData)
		      });
				}
	    });
	  },
	  //获取付款状态的码表值
    getPayModeList() {
      operationStateMap("payMethod").then(result => {
        const resData = result.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode === "0000") {
          let arr = {};
          for (var i in responseResult) {
            let key = i.split("_");
            if (!arr[key[0]]) arr[key[0]] = [];
            arr[key[0]][key[1]] = resData.responseResult[i];
          }
          for (const key in arr) {
            this.payMode = arr[key];
          }
          this.getOperationStateList();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
		//获取付款状态的码表值
    getOperationStateList() {
      operationStateMap("providerPay").then(result => {
        const resData = result.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode === "0000") {
          let arr = {};
          for (var i in responseResult) {
            let key = i.split("_");
            if (!arr[key[0]]) arr[key[0]] = [];
            arr[key[0]][key[1]] = resData.responseResult[i];
          }
          for (const key in arr) {
            this.operationState = arr[key];
          }
          this.getEditOperationStateList();
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
    //获取编辑状态的码表值
    getEditOperationStateList() {
      operationStateMap("providerReplyDetail").then(result => {
        const resData = result.data || {};
        const responseResult = resData.responseResult || {};
        if (resData.errCode === "0000") {
          let arr = {};
          for (var i in responseResult) {
            let key = i.split("_");
            if (!arr[key[0]]) arr[key[0]] = [];
            arr[key[0]][key[1]] = resData.responseResult[i];
          }
          for (const key in arr) {
            this.editOperationState = arr[key];
          }
        } else {
          this.$error({
            title: "错误提示",
            content: this.BASE.handleErrorMsg(resData)
          });
        }
      });
    },
	}
}