(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a3af84d"],{"629d":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",[t("Heading",{attrs:{name:"基本信息"}},[t("a-button",{attrs:{type:"primary",disabled:e.isConnect},on:{click:e.handleSubmit}},[t("i",{class:["iconfont","icon-baocun"]}),e._v(" 保存 ")])],1),t("a-form",{staticClass:"es-form",attrs:{layout:"horizontal",form:e.form},nativeOn:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.handleSubmit(a))}}},[t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"采购项目编号"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectCode",{initialValue:e.formData.projectCode||""}],expression:"[\n                `projectCode`,\n                {\n                  initialValue: formData.projectCode || ''\n                }\n              ]"}],attrs:{disabled:"",placeholder:"保存后自动生成",allowClear:""}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"项目所属年份"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectYear",{validateTrigger:["blur"],initialValue:e.formData.projectYear,rules:[{required:!0,message:"请选择项目所属年份"}]}],expression:"[\n              `projectYear`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectYear,\n                rules: [{ required: true, message: '请选择项目所属年份' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""}},[t("a-select-option",{attrs:{value:""+((new Date).getFullYear()-1)}},[e._v(" "+e._s((new Date).getFullYear()-1)+" ")]),t("a-select-option",{attrs:{value:""+(new Date).getFullYear()}},[e._v(e._s((new Date).getFullYear()))]),t("a-select-option",{attrs:{value:""+((new Date).getFullYear()+1)}},[e._v(e._s((new Date).getFullYear()+1))])],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"采购方式"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["purchaseType",{validateTrigger:["blur"],initialValue:e.formData.purchaseType,rules:[{required:!0,message:"请选择采购方式"}]}],expression:"[\n              `purchaseType`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.purchaseType,\n                rules: [{ required: true, message: '请选择采购方式' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""},on:{change:e.purchaseTypeChange}},e._l(e.dictionary.purchaseType,(function(a,r){return t("a-select-option",{key:r,class:{"hide-select-item":!a},attrs:{value:""+r}},[e._v(e._s(a))])})),1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:16,sm:24}},[t("a-form-item",e._b({attrs:{label:"采购项目名称"}},"a-form-item",e.BASE.twoItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectName",{maxLength:50,initialValue:e.formData.projectName,validateTrigger:["blur"],rules:[{required:!0,validator:e.checkProject}],getValueFromEvent:function(e){return e.target.value.replace(/[`\\|,|'`]/g,"")}}],expression:"[\n              `projectName`,\n              {\n                maxLength: 50,\n                initialValue: formData.projectName,\n                validateTrigger: ['blur'],\n                rules: [{ required: true, validator: checkProject }],\n                getValueFromEvent: event => {\n                  return event.target.value.replace(/[`\\\\|,|'`]/g, '');\n                }\n              }\n            ]"}],attrs:{placeholder:"请输入",allowClear:""}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"标包划分"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["purchaseFlag",{validateTrigger:["blur"],initialValue:e.formData.purchaseFlag,rules:[{required:!0,message:"请选择标包划分"}]}],expression:"[\n              `purchaseFlag`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.purchaseFlag,\n                rules: [{ required: true, message: '请选择标包划分' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""}},[t("a-select-option",{attrs:{value:"1"}},[e._v("是")]),t("a-select-option",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"物资类型"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["materialType",{validateTrigger:["blur"],initialValue:e.formData.materialType,rules:[{required:!0,message:"请选择物资类型"}]}],expression:"[\n              `materialType`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.materialType,\n                rules: [{ required: true, message: '请选择物资类型' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""}},e._l(e.dictionary.materialType,(function(a,r){return t("a-select-option",{key:r,class:{"hide-select-item":!a},attrs:{value:""+r}},[e._v(e._s(a))])})),1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"需求单位/部门"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["requirementName",{validateTrigger:["blur"],initialValue:e.formData.requirementName,rules:[{required:!0,message:"请选择需求单位/部门"}]}],expression:"[\n              'requirementName',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.requirementName,\n                rules: [{ required: true, message: '请选择需求单位/部门' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""},on:{click:function(a){return e.onSearch("requirementName")}}},[t("a-icon",{attrs:{slot:"suffix",type:"search"},on:{click:function(a){return e.onSearch("requirementName")}},slot:"suffix"})],1)],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"开支类型"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["expenditureType",{validateTrigger:["blur"],initialValue:e.formData.expenditureType,rules:[{required:!0,message:"请选择开支类型"}]}],expression:"[\n              `expenditureType`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.expenditureType,\n                rules: [{ required: true, message: '请选择开支类型' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""}},e._l(e.dictionary.expenditureType,(function(a,r){return t("a-select-option",{key:r,class:{"hide-select-item":!a},attrs:{value:""+r}},[e._v(e._s(a))])})),1)],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"估算金额(不含税/元)"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["predictTaxFree",{validateTrigger:["blur"],initialValue:e.formData.predictTaxFree,rules:[{required:!0,validator:e.validMoney}]}],expression:"[\n              `predictTaxFree`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.predictTaxFree,\n                rules: [{ required: true, validator: validMoney }]\n              }\n            ]"}],attrs:{placeholder:"请输入",allowClear:""}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"估算金额(含税/元)"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["predictTax",{validateTrigger:["blur"],initialValue:e.formData.predictTax,rules:[{required:!0,validator:e.validMoney}]}],expression:"[\n              `predictTax`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.predictTax,\n                rules: [{ required: true, validator: validMoney }]\n              }\n            ]"}],attrs:{placeholder:"请输入",allowClear:""}})],1)],1),"1"===e.formData.purchaseType?t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"是否资格预审"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["prequalficationFlag",{validateTrigger:["blur"],initialValue:e.formData.prequalficationFlag,rules:[{required:!0,message:"请选择是否资格预审"}]}],expression:"[\n              `prequalficationFlag`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.prequalficationFlag,\n                rules: [{ required: true, message: '请选择是否资格预审' }]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""}},[t("a-select-option",{attrs:{value:"1"}},[e._v("是")]),t("a-select-option",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1):e._e()],1),t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"是否委托"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["entrustFlag",{validateTrigger:["blur"],initialValue:e.formData.entrustFlag,rules:[{required:!0,message:"请选择是否委托"}]}],expression:"[\n              `entrustFlag`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.entrustFlag,\n                rules: [\n                  {\n                    required: true,\n                    message: '请选择是否委托'\n                  }\n                ]\n              }\n            ]"}],attrs:{placeholder:"请选择",allowClear:""},on:{change:e.entrustFlagChange}},[t("a-select-option",{attrs:{value:"1"}},[e._v("是")]),t("a-select-option",{attrs:{value:"0"}},[e._v("否")])],1)],1)],1),"1"===e.formData.entrustFlag?t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"代理机构名称"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["agencyOrgName",{validateTrigger:["blur"],initialValue:e.formData.agencyOrgName,rules:[{required:!0,message:"请选择代理机构名称"}]}],expression:"[\n              `agencyOrgName`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.agencyOrgName,\n                rules: [{ required: true, message: '请选择代理机构名称' }]\n              }\n            ]"}],attrs:{placeholder:"请选择"},on:{click:function(a){return e.onSearch("agencyOrgName")}}},[t("a-icon",{attrs:{slot:"suffix",type:"search"},on:{click:function(a){return e.onSearch("agencyOrgName")}},slot:"suffix"})],1)],1)],1):e._e(),"1"===e.formData.entrustFlag&&e.formData.agencyOrgName?t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"代理机构项目经理"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["agencyOrgManegerName",{validateTrigger:["blur"],initialValue:e.formData.agencyOrgManegerName,rules:[{required:!0,message:"请选择代理机构项目经理"}]}],expression:"[\n              `agencyOrgManegerName`,\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.agencyOrgManegerName,\n                rules: [{ required: true, message: '请选择代理机构项目经理' }]\n              }\n            ]"}],attrs:{placeholder:"请选择"},on:{click:function(a){return e.onSearch("agencyOrgManegerName")}}},[t("a-icon",{attrs:{slot:"suffix",type:"search"},on:{click:function(a){return e.onSearch("agencyOrgManegerName")}},slot:"suffix"})],1)],1)],1):e._e()],1),t("a-row",[t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"创建部门"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{attrs:{disabled:"",placeholder:"保存后自动生成"},model:{value:e.formData.createUnitName,callback:function(a){e.$set(e.formData,"createUnitName",a)},expression:"formData.createUnitName"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"创建时间"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{attrs:{disabled:"",placeholder:"保存后自动生成"},model:{value:e.formData.createDate,callback:function(a){e.$set(e.formData,"createDate",a)},expression:"formData.createDate"}})],1)],1),t("a-col",{attrs:{md:8,sm:24}},[t("a-form-item",e._b({attrs:{label:"项目经理"}},"a-form-item",e.BASE.oneItemLayout,!1),[t("a-input",{attrs:{disabled:"",placeholder:"保存后自动生成"},model:{value:e.formData.createName,callback:function(a){e.$set(e.formData,"createName",a)},expression:"formData.createName"}})],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",e._b({attrs:{label:"采购回避事项说明"}},"a-form-item",e.BASE.threeItemLayout,!1),[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectAvoid",{validateTrigger:["blur"],initialValue:e.formData.projectAvoid,rules:[{required:!0,message:"请选择采购回避事项说明"}]}],expression:"[\n              'projectAvoid',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectAvoid,\n                rules: [{ required: true, message: '请选择采购回避事项说明' }]\n              }\n            ]"}]},e._l(e.dictionary.projectAvoid,(function(a,r){return t("a-radio",{key:r,class:{"hide-select-item":!a},style:e.BASE.radioStyle,attrs:{value:""+r}},[e._v(e._s(a))])})),1)],1)],1)],1)],1),e.requirementNameVisible?t("a-modal",{attrs:{title:"选择需求单位/部门",width:"30%",centered:!0,maskClosable:!1},on:{ok:function(a){return e.handleOk("requirementName")}},model:{value:e.requirementNameVisible,callback:function(a){e.requirementNameVisible=a},expression:"requirementNameVisible"}},[t("DeptSelect",{ref:"requirementName"})],1):e._e(),e.agencyOrgNameVisible?t("a-modal",{attrs:{title:"选择代理机构名称",width:"80%",centered:!0,maskClosable:!1},on:{ok:function(a){return e.handleOk("agencyOrgName")}},model:{value:e.agencyOrgNameVisible,callback:function(a){e.agencyOrgNameVisible=a},expression:"agencyOrgNameVisible"}},[t("AgencyOrgSelect",{ref:"agencyOrgName"})],1):e._e(),e.agencyOrgManegerNameVisible?t("a-modal",{attrs:{title:"选择代理机构项目经理",width:"80%",centered:!0,maskClosable:!1},on:{ok:function(a){return e.handleOk("agencyOrgManegerName")}},model:{value:e.agencyOrgManegerNameVisible,callback:function(a){e.agencyOrgManegerNameVisible=a},expression:"agencyOrgManegerNameVisible"}},[t("AgencyOrgManegerSelect",{ref:"agencyOrgManegerName",attrs:{vendorId:e.formData.agencyOrgId}})],1):e._e()],1)},n=[],i=(t("b0c0"),t("ade3")),o=t("5530"),l=t("5880"),s=t("8ab7"),c=t("b6eb"),u=t("630a"),m=t("8d6d"),d=t("35a4"),g={name:"edit",components:{Heading:s["default"],DeptSelect:u["a"],AgencyOrgSelect:c["a"],AgencyOrgManegerSelect:m["a"]},data:function(){return{form:this.$form.createForm(this),formData:{},projectId:"",isConnect:!1,requirementNameVisible:!1,agencyOrgNameVisible:!1,agencyOrgManegerNameVisible:!1}},computed:Object(o["a"])({},Object(l["mapGetters"])("account",["dictionary"])),created:function(){this.handleInit()},watch:{formData:{handler:function(e){return e},immediate:!0,deep:!0}},methods:{handleInit:function(){this.$route.params.id?(this.projectId=this.$route.params.id,this.findProjectInfo()):this.formData.projectYear=(new Date).getFullYear()},findProjectInfo:function(){var e=this;Object(d["B"])(this.projectId).then((function(a){var t=a.data;if("0000"===t.errCode){var r=t.responseResult;e.formData=r,e.$emit("send-data",e.formData)}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)})}))},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFieldsAndScroll(this.BASE.formScrollOptions,(function(e,t){if(!e){for(var r in t)a.formData[r]=t[r];a.isConnect=!0,a.projectId?a.updateInfo():a.addNew()}}))},addNew:function(){var e=this;Object(d["d"])(this.formData).then((function(a){var t=a.data;if("0000"===t.errCode){var r=t.responseResult;e.projectId=r.projectId,e.$message.success("新增成功",3),e.findProjectInfo()}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)});e.isConnect=!1}))},updateInfo:function(){var e=this;Object(d["yb"])(this.formData).then((function(a){var t=a.data;if("0000"===t.errCode){var r=t.responseResult;e.projectId=r.projectId,e.$message.success("更新成功",3),e.findProjectInfo()}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)});e.isConnect=!1}))},checkProject:function(e,a,t){this.BASE.CheckIsNullOrEmpty(a)?Object(d["Gb"])(this.projectId||"",a).then((function(e){var a=e.data,r="";"0000"!==a.errCode?(r=a.customMess,t(r)):t()})):t("请输入采购项目名称")},setVal:function(e){for(var a in e){this.formData[a]=e[a];var t=this.form.getFieldsValue();for(var r in t)a==r&&this.form.setFieldsValue(Object(i["a"])({},a,e[a]))}},validMoney:function(e,a,t){if(this.BASE.CheckIsNullOrEmpty(a)){var r=this.BASE.reg.moneyReg;r.test(a)||t("请输入正确的金额"),t()}else t("请输入金额")},purchaseTypeChange:function(e){this.formData.purchaseType=e,"1"===e&&(this.formData.prequalficationFlag="")},entrustFlagChange:function(e){this.formData.entrustFlag=e},onSearch:function(e){this["".concat(e,"Visible")]=!0},handleOk:function(e){var a=this.$refs[e].getRes();this["".concat(e,"Visible")]=!1,"requirementName"===e&&(this.BASE.CheckIsNullOrEmpty(a.key)?this.setVal({requirementName:a.name,requirementId:a.key}):this.$message.warning("请先选择需求单位/部门！")),"agencyOrgName"===e&&(this.BASE.ObjectIsNull(a)?this.$message.warning("请先选择招标代理机构！"):this.setVal({agencyOrgName:a.vendorName,agencyOrgId:a.vendorId,agencyOrgManegerName:"",agencyOrgManegerId:""})),"agencyOrgManegerName"===e&&(this.BASE.ObjectIsNull(a)?this.$message.warning("请先选择代理机构项目经理！"):this.setVal({agencyOrgManegerName:a.realName,agencyOrgManegerId:a.userId}))}}},f=g,p=t("2877"),h=Object(p["a"])(f,r,n,!1,null,null,null);a["a"]=h.exports},"8d11":function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-card",[t("Heading",{attrs:{name:"项目情况说明"}},[e.show?t("a-button",{attrs:{type:"primary",disabled:e.isConnect},on:{click:e.handleSubmit}},[t("i",{class:["iconfont","icon-baocun"]}),e._v(" 保存 ")]):e._e()],1),e.show?t("a-form",{staticClass:"es-form",attrs:{form:e.form},nativeOn:{keydown:function(a){return!a.type.indexOf("key")&&e._k(a.keyCode,"enter",13,a.key,"Enter")?null:(a.preventDefault(),e.handleSubmit(a))}}},["2"===e.baseData.purchaseType?t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",e._b({attrs:{label:"邀请招标理由"}},"a-form-item",e.BASE.threeItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectInvite",{validateTrigger:["blur"],initialValue:e.formData.projectInvite||"",rules:[{required:!0,message:"请填写邀请招标理由"}]}],expression:"[\n              'projectInvite',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectInvite || '',\n                rules: [{ required: true, message: '请填写邀请招标理由' }]\n              }\n            ]"}],attrs:{rows:3,maxLength:1e3,allowClear:""},on:{change:function(a){return e.onCellChange(a.target.value,"projectInvite")}}}),t("span",{staticClass:"explain-info"},[e._v("限"),t("span",{staticClass:"red"},[e._v("1000")]),e._v("字，已输入"),t("span",{staticClass:"red"},[e._v(e._s(e.formData.projectInvite?e.formData.projectInvite.length:0))]),e._v("字")])],1)],1)],1):e._e(),t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",e._b({attrs:{label:"申报情况说明"}},"a-form-item",e.BASE.threeItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectDeclare",{validateTrigger:["blur"],initialValue:e.formData.projectDeclare||"",rules:[{required:!0,message:"请填写申报情况说明"}]}],expression:"[\n              'projectDeclare',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectDeclare || '',\n                rules: [{ required: true, message: '请填写申报情况说明' }]\n              }\n            ]"}],attrs:{rows:3,maxLength:1e3,allowClear:""},on:{change:function(a){return e.onCellChange(a.target.value,"projectDeclare")}}}),t("span",{staticClass:"explain-info"},[e._v("限"),t("span",{staticClass:"red"},[e._v("1000")]),e._v("字，已输入"),t("span",{staticClass:"red"},[e._v(e._s(e.formData.projectDeclare?e.formData.projectDeclare.length:0))]),e._v("字")])],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",e._b({attrs:{label:"项目描述"}},"a-form-item",e.BASE.threeItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectDescribe",{validateTrigger:["blur"],initialValue:e.formData.projectDescribe||"",rules:[{required:!0,message:"请填写项目描述"}]}],expression:"[\n              'projectDescribe',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectDescribe || '',\n                rules: [{ required: true, message: '请填写项目描述' }]\n              }\n            ]"}],attrs:{rows:3,maxLength:1e3,allowClear:""},on:{change:function(a){return e.onCellChange(a.target.value,"projectDescribe")}}}),t("span",{staticClass:"explain-info"},[e._v("限"),t("span",{staticClass:"red"},[e._v("1000")]),e._v("字，已输入"),t("span",{staticClass:"red"},[e._v(e._s(e.formData.projectDescribe?e.formData.projectDescribe.length:0))]),e._v("字")])],1)],1)],1),t("a-row",[t("a-col",{attrs:{md:24,sm:24}},[t("a-form-item",e._b({attrs:{label:"采购项目依据"}},"a-form-item",e.BASE.threeItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["projectBasis",{validateTrigger:["blur"],initialValue:e.formData.projectBasis||"",rules:[{required:!0,message:"请填写采购项目依据"}]}],expression:"[\n              'projectBasis',\n              {\n                validateTrigger: ['blur'],\n                initialValue: formData.projectBasis || '',\n                rules: [{ required: true, message: '请填写采购项目依据' }]\n              }\n            ]"}],attrs:{rows:3,maxLength:1e3,allowClear:""},on:{change:function(a){return e.onCellChange(a.target.value,"projectBasis")}}}),t("span",{staticClass:"explain-info"},[e._v("限"),t("span",{staticClass:"red"},[e._v("1000")]),e._v("字，已输入"),t("span",{staticClass:"red"},[e._v(e._s(e.formData.projectBasis?e.formData.projectBasis.length:0))]),e._v("字")])],1)],1)],1)],1):e._e()],1)},n=[],i=t("8ab7"),o=t("35a4"),l={props:{baseData:{type:Object}},components:{Heading:i["default"]},data:function(){return{form:this.$form.createForm(this),formData:{},show:!1,isConnect:!1}},watch:{baseData:{handler:function(e){return this.show=!this.BASE.ObjectIsNull(this.baseData),this.show&&this.findInfo(),e},immediate:!0,deep:!0}},methods:{findInfo:function(){var e=this;Object(o["A"])(this.baseData.projectId||this.$route.params.id).then((function(a){var t=a.data;if("0000"==t.errCode){var r=t.responseResult;e.formData=r,e.$emit("send-data",e.formData)}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)})}))},handleSubmit:function(e){var a=this;e.preventDefault(),this.form.validateFieldsAndScroll(this.BASE.formScrollOptions,(function(e,t){if(!e){for(var r in t)a.formData[r]=t[r];a.isConnect=!0,a.updateInfo()}}))},updateInfo:function(){var e=this;Object(o["xb"])(this.formData).then((function(a){var t=a.data;"0000"===t.errCode?(e.$message.success("更新成功",3),e.findInfo()):e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)}),e.isConnect=!1}))},onCellChange:function(e,a){this.formData[a]=e}}},s=l,c=t("2877"),u=Object(c["a"])(s,r,n,!1,null,null,null);a["a"]=u.exports},fa01:function(e,a,t){"use strict";var r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("a-card",[e.isDetail?t("Heading",{attrs:{name:"产品明细"}}):t("Heading",{attrs:{name:"产品明细"}},[e.show?[t("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleAdd("product")}}},[e._v("关联产品")]),t("a-popconfirm",{attrs:{disabled:!this.hasSelectedRowKeys,title:"确定批量删除?","ok-text":"确认","cancel-text":"取消"},on:{confirm:e.handleDelete}},[t("a-button",{attrs:{type:"primary"},on:{click:function(a){return e.handleDelete(0)}}},[t("i",{class:["iconfont","icon-weibiaoti544"]}),e._v(" 批量删除 ")])],1),t("a-button",{attrs:{type:"primary",disabled:e.isConnect},on:{click:e.handleSubmit}},[t("i",{class:["iconfont","icon-baocun"]}),e._v(" 保存 ")])]:e._e()],2),e.show?t("a-table",{staticClass:"es-table",attrs:{size:"small",bordered:!0,loading:e.pageData.loading,pagination:!1,columns:e.columns,dataSource:e.dataSource,rowKey:"projectDetailId",rowSelection:e.isDetail?null:{fixed:!0,selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange},scroll:{x:1e3}},scopedSlots:e._u([{key:"requirementAmout",fn:function(a,r,n){return[e.isDetail?t("span",[e._v(e._s(a))]):t("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[t("a-form-item",[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["requirementAmout"+n,{validateTrigger:["blur"],rules:[{required:!0,validator:e.checkAmount}],initialValue:a}],expression:"[\n                `requirementAmout${index}`,\n                {\n                  validateTrigger: ['blur'],\n                  rules: [{ required: true, validator: checkAmount }],\n                  initialValue: text\n                }\n              ]"}],staticStyle:{margin:"-5px 0",width:"100%"},attrs:{allowClear:""},on:{change:function(a){return e.onCellChange(a.target.value,r.projectDetailId,"requirementAmout")}}})],1)],1)]}},{key:"action",fn:function(a){return[t("a-popconfirm",{attrs:{title:"是否确认删除所选行?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(t){return e.deleteById(a.projectDetailId)}}},[t("a",[e._v("删除")])])]}}],null,!1,1790854412)}):e._e(),e.show&&this.isDetail?t("pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageData.total>0,expression:"pageData.total > 0"}],attrs:{value:e.pageData.page,pageSize:e.pageData.limit,total:e.pageData.total},on:{change:e.sizeChange,showSizeChange:e.pageChange}}):e._e()],1),e.productVisible?t("a-modal",{attrs:{title:"选择产品",width:"80%",centered:!0,maskClosable:!1},on:{ok:function(a){return e.handleOk("product")}},model:{value:e.productVisible,callback:function(a){e.productVisible=a},expression:"productVisible"}},[t("ProductSelect",{ref:"product",attrs:{projectId:e.baseData.projectId}})],1):e._e()],1)},n=[],i=(t("4de4"),t("a15b"),t("a9e3"),t("2909")),o=t("8ab7"),l=t("35a4"),s=t("325f"),c=t("4c2b"),u={limit:15,total:0,page:1,loading:!1},m=[{title:"序号",dataIndex:"number",align:"center",width:60,customRender:function(e,a,t){return"".concat((u.page-1)*u.limit+t+1)}},{title:"产品编码",dataIndex:"productCode",align:"center",width:150},{title:"产品名称",dataIndex:"productName",ellipsis:!0},{title:"单位",dataIndex:"productUnit",align:"center",width:80},{title:"需求数量",dataIndex:"requirementAmout",scopedSlots:{customRender:"requirementAmout"},align:"center"},{title:"操作",align:"center",scopedSlots:{customRender:"action"},fixed:"right",width:60}],d=[],g={name:"QueryList",components:{Heading:o["default"],Pagination:s["default"],ProductSelect:c["a"]},props:{isDetail:{type:Boolean,default:!1},baseData:{type:Object}},data:function(){return{form:this.$form.createForm(this),columns:m,dataSource:d,selectedRowKeys:[],selectedRows:[],show:!1,isConnect:!1,productVisible:!1,pageData:u}},computed:{hasSelectedRowKeys:function(){return 0!=!!this.selectedRowKeys.length}},watch:{baseData:{handler:function(e){return this.show=!this.BASE.ObjectIsNull(this.baseData),this.show&&this.getData(),e},immediate:!0,deep:!0},dataSource:{handler:function(e){return e},immediate:!0,deep:!0},isDetail:{handler:function(e){if(e){var a=Object(i["a"])(this.columns);delete a[5],this.columns=a}return e},immediate:!0,deep:!0}},created:function(){this.isDetail&&this.getData()},methods:{getData:function(){var e=this,a=Object.assign({limit:this.isDetail?this.pageData.limit:1e4,page:this.pageData.page,projectId:this.baseData.projectId},this.filter);this.pageData.loading=!0,this.dataSource=[],Object(l["y"])(a).then((function(a){var t=a.data||{},r=t.responseResult||{};if("0000"==t.errCode){var n=r.data,i=r.total;e.dataSource=n,e.pageData.total=Number(i)}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)});e.pageData.loading=!1}))},handleAdd:function(e){this["".concat(e,"Visible")]=!0},handleOk:function(e){var a=this,t=this.$refs[e].getRes();Object(l["b"])(t.join(","),this.baseData.projectId).then((function(e){var t=e.data;if("0000"===t.errCode){var r=t.responseResult;a.$message.success(r,3),a.getData()}else a.$error({title:"错误提示",content:a.BASE.handleErrorMsg(t)})})),this["".concat(e,"Visible")]=!1},checkAmount:function(e,a,t){if(this.BASE.CheckIsNullOrEmpty(a)){var r=this.BASE.reg.mountReg;r.test(a)||t("请输入0.01-999999999999.99的数值！"),t()}else t("请输入需求数量")},onCellChange:function(e,a,t){var r=Object(i["a"])(this.dataSource),n=r.filter((function(e){return a===e.projectDetailId}))[0];n&&(n[t]=e,this.dataSource=r)},handleSubmit:function(e){var a=this;e.preventDefault(e),this.form.validateFieldsAndScroll(this.BASE.formScrollOptions,(function(e){e||(a.isConnect=!0,a.updateInfo())}))},updateInfo:function(){var e=this;Object(l["vb"])(this.dataSource).then((function(a){var t=a.data;"0000"===t.errCode?(e.getData(),e.$message.success(t.responseResult,3)):e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(t)}),e.isConnect=!1}))},onSelectChange:function(e,a){this.selectedRowKeys=e,this.selectedRows=a},handleDelete:function(e){if(!this.hasSelectedRowKeys)return this.$message.warning("请选择要删除的数据！"),!1;0!=e&&this.deleteById()},deleteById:function(e){var a=this,t=e||this.selectedRowKeys.join(",");Object(l["p"])(t).then((function(e){var t=e.data;if("0000"===t.errCode){var r=t.responseResult;a.$message.warning(r),a.selectedRowKeys=[],a.getData()}}))},sizeChange:function(e,a){this.pageData.page=e,this.pageData.limit=a,this.getData()},pageChange:function(e,a){this.pageData.page=e,this.pageData.limit=a,this.getData()}}},f=g,p=t("2877"),h=Object(p["a"])(f,r,n,!1,null,null,null);a["a"]=h.exports}}]);