(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c08c6"],{"41f9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",[a("Heading",{attrs:{name:e.invitationName}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleClick("case")}}},[e._v(" 选择邀请模板 ")]),a("a-button",{attrs:{type:"primary"},on:{click:e.handlePreview}},[a("i",{class:["iconfont","icon-yulancopy"]}),e._v(" 预览 ")]),a("a-button",{attrs:{type:"primary",disabled:e.isConnect},on:{click:e.handleSubmit}},[a("i",{class:["iconfont","icon-baocun"]}),e._v(" 保存 ")])],1),a("a-form",{staticClass:"es-form es-form-bk",attrs:{layout:"horizontal",form:e.form},nativeOn:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.handleSubmit(t))}}},[a("a-row",[a("a-col",{attrs:{md:16,sm:24}},[a("a-form-item",e._b({attrs:{label:"标题"}},"a-form-item",e.BASE.twoItemLayout,!1),[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["noticeTitle",{maxLength:50,initialValue:e.formData.noticeTitle,validateTrigger:["blur"],rules:[{required:!0,message:"请输入标题"}]}],expression:"[\n              `noticeTitle`,\n              {\n                maxLength: 50,\n                initialValue: formData.noticeTitle,\n                validateTrigger: ['blur'],\n                rules: [{ required: true, message: '请输入标题' }]\n              }\n            ]"}],attrs:{placeholder:"请输入",allowClear:""}})],1)],1)],1),a("a-row",[a("a-col",{attrs:{md:24,sm:24}},[a("a-form-item",e._b({attrs:{label:"内容"}},"a-form-item",e.BASE.threeItemLayout,!1),[e.tinymceRefresh?a("tinymce",{attrs:{height:300},model:{value:e.formData.noticeContext,callback:function(t){e.$set(e.formData,"noticeContext",t)},expression:"formData.noticeContext"}}):e._e()],1)],1)],1)],1),e.caseVisible?a("a-modal",{attrs:{title:"选择模板",width:"70%",centered:!0,maskClosable:!1},on:{ok:function(t){return e.handleOk("case")}},model:{value:e.caseVisible,callback:function(t){e.caseVisible=t},expression:"caseVisible"}},[a("notice-case",{ref:"case",attrs:{purchaseType:this.purchaseType,templateType:"2"}})],1):e._e()],1)},i=[],r=a("5530"),o=a("5880"),s=a("8ab7"),c=a("d15c"),l=a("8256"),d=a("35a4"),u={name:"tender-invitation",components:{Tinymce:l["default"],Heading:s["default"],NoticeCase:c["a"]},props:{invitationName:{type:[String],default:"邀请函"}},data:function(){return{form:this.$form.createForm(this),formData:{},isConnect:!1,tenderNoticeId:"",tinymceRefresh:!0,caseVisible:!1}},computed:Object(r["a"])(Object(r["a"])({},Object(o["mapGetters"])("account",["dictionary"])),{},{tenderVindicateId:function(){return this.$route.params.id},projectId:function(){return this.$route.query.projectId},purchaseType:function(){return this.$route.query.purchaseType}}),watch:{pushSystem:{handler:function(e){return e},immediate:!0,deep:!0}},created:function(){this.handleGetData()},activated:function(){this.handleGetData()},methods:{handlePreview:function(){this.$router.push({path:"/invitation-preview/".concat(this.formData.tenderVindicateId),query:{formData:JSON.stringify(this.formData)}})},handleGetData:function(){var e=this;Object(d["L"])(this.tenderVindicateId,2).then((function(t){var a=t.data;if("0000"===a.errCode){var n=a.responseResult;e.formData=n||{},e.tinymceRefresh=!1,e.$nextTick((function(){e.tinymceRefresh=!0}))}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)})}))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFieldsAndScroll(this.BASE.formScrollOptions,(function(e,a){if(!e){for(var n in a)"pushSystem"!=n&&(t.formData[n]=a[n]);t.isConnect=!0,t.formData.tenderVindicateId=t.tenderVindicateId,t.formData.projectId=t.projectId,t.formData.noticeType=2,t.formData.tenderNoticeId?t.handleUpdate():t.handleAdd()}}))},handleClick:function(e){this["".concat(e,"Visible")]=!0},handleOk:function(e){if("case"==e){var t=this.$refs[e].getRes();if(!t)return void this.$message.warning("请选择模板！");this.formData.noticeContext="",this.formData.noticeContext=t.content}this["".concat(e,"Visible")]=!1},handleAdd:function(){var e=this;Object(d["e"])(this.formData).then((function(t){var a=t.data;if("0000"===a.errCode){var n=a.responseResult;e.formData=n||{},e.$message.success("保存成功"),e.handleGetData()}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)});e.isConnect=!1}))},handleUpdate:function(){var e=this;Object(d["Ab"])(this.formData).then((function(t){var a=t.data;if("0000"===a.errCode){var n=a.responseResult;e.$message.success(n),e.handleGetData()}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)});e.isConnect=!1}))}}},f=u,m=a("2877"),h=Object(m["a"])(f,n,i,!1,null,null,null);t["default"]=h.exports}}]);