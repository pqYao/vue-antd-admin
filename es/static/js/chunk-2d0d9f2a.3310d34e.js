(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d9f2a"],{"6a09":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchForm",{ref:"SearchForm",attrs:{name:"查询条件",stateCode:"entrust",searchList:e.searchList},on:{"on-filter":e.handleSearch}}),a("a-card",[a("Heading",{attrs:{name:"查询结果"}}),a("a-table",{attrs:{size:"small",pagination:!1,rowKey:"projectId",scroll:{x:1400},loading:e.pageData.loading,columns:e.columns,dataSource:e.dataSource},scopedSlots:e._u([{key:"projectCode",fn:function(t,n){return a("a",{on:{click:function(t){return e.handleProjectDetail(n)}}},[e._v(e._s(t))])}},{key:"purchaseType",fn:function(t){return[e._v(e._s(e.dictionary.comparatePurchaseType[t]))]}},{key:"entrustFlag",fn:function(t){return[e._v(e._s("1"===t?"是":"否"))]}},{key:"prequalficationFlag",fn:function(t){return[e._v(e._s(("1"==t?"是":"0"==t&&"否")||"--"))]}},{key:"approveState",fn:function(t){return[e._v(" "+e._s(e.dictionary.approveState[t])+" ")]}},{key:"operationState",fn:function(t){return[e._v(" "+e._s(t?e.operationState[t]:"")+" ")]}},{key:"action",fn:function(t){return[a("a-space",{attrs:{size:8}},[t.createId===e.user.userId&&"1"===t.approveState?a("a",{on:{click:function(a){return e.handleEdit(t)}}},[e._v("编辑")]):a("a",{on:{click:function(a){return e.handleEntrustDetail(t)}}},[e._v("查看")]),a("a-popover",{attrs:{content:"此功能暂不支持"}},[a("a",[e._v("业务流程跟踪")])])],1)]}}])}),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageData.total>0,expression:"pageData.total > 0"}],attrs:{value:e.pageData.page,pageSize:e.pageData.limit,total:e.pageData.total},on:{change:e.sizeChange,showSizeChange:e.pageChange}})],1)],1)},r=[],i=(a("4de4"),a("4160"),a("a9e3"),a("ac1f"),a("1276"),a("159b"),a("5530")),o=a("5880"),s=a("5acc"),c=a("8ab7"),l=a("325f"),p=a("7f97"),d=a("7775"),u={limit:15,total:0,page:1,loading:!1},h=[{title:"序号",dataIndex:"number",align:"center",customRender:function(e,t,a){return"".concat((u.page-1)*u.limit+a+1)},width:60},{title:"项目编码",dataIndex:"projectCode",width:150,align:"center",scopedSlots:{customRender:"projectCode"}},{title:"项目名称",dataIndex:"projectName",ellipsis:!0},{title:"采购方式",dataIndex:"purchaseType",scopedSlots:{customRender:"purchaseType"},width:80,align:"center"},{title:"是否资格预审",dataIndex:"prequalficationFlag",scopedSlots:{customRender:"prequalficationFlag"},width:100,align:"center"},{title:"是否委托",dataIndex:"entrustFlag",scopedSlots:{customRender:"entrustFlag"},width:80,align:"center"},{title:"代理机构名称",dataIndex:"agencyOrgName",align:"center",width:200,ellipsis:!0},{title:"项目创建时间",dataIndex:"projectCreateDate",width:180,align:"center"},{title:"审批状态",dataIndex:"approveState",width:80,align:"center",scopedSlots:{customRender:"approveState"}},{title:"业务状态",dataIndex:"operationState",scopedSlots:{customRender:"operationState"},width:80,align:"center"},{title:"操作",align:"center",width:140,scopedSlots:{customRender:"action"},fixed:"right"}],g=[{type:"input",label:"项目编码",key:"projectCode"},{type:"input",label:"项目名称",key:"projectName"},{type:"comparatePurchaseType",label:"采购方式",key:"purchaseType"},{type:"flag",label:"资格预审",key:"prequalficationFlag",flag:!0},{type:"flag",label:"是否委托",key:"entrustFlag"},{type:"input",label:"代理机构名称",key:"agencyOrgName"},{type:"select",label:"审批状态",key:"approveState"},{type:"operationState",label:"业务状态",key:"operationState"},{type:"date",label:"项目创建时间",key:"projectCreateDate"}],f={name:"entrust",components:{Heading:c["default"],SearchForm:s["a"],Pagination:l["default"]},data:function(){return{columns:h,dataSource:[],searchList:g,filter:{},pageData:u,operationState:[]}},computed:Object(i["a"])({},Object(o["mapGetters"])("account",["dictionary","user"])),created:function(){this.getData(),this.getOperationState()},activated:function(){this.$refs.SearchForm.handleReset(),this.filter={},this.pageData.page=1,this.getData()},watch:{operationState:{handler:function(e){return e},immediate:!0,deep:!0}},methods:{handleSearch:function(e){this.filter=e,this.pageData.page=1,this.getData()},getOperationState:function(){var e=this;Object(p["d"])("entrust").then((function(t){var a=t.data;if("0000"===a.errCode){var n={};for(var r in a.responseResult){var i=r.split("_");n[i[0]]||(n[i[0]]=[]),n[i[0]][i[1]]=a.responseResult[r]}for(var o in n)e.operationState=n[o]}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)})}))},getData:function(){var e=this,t=Object.assign({limit:this.pageData.limit,page:this.pageData.page},this.filter);this.pageData.loading=!0,Object(d["r"])(t).then((function(t){var a=t.data,n=a.responseResult;if("0000"==a.errCode){var r=n.data,i=n.total;e.dataSource=r,0!=e.dataSource.length&&e.dataSource.forEach((function(t){e.$set(t,"isCanbeFinish",!1)})),e.pageData.total=Number(i)}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)});e.pageData.loading=!1}))},handleEdit:function(e){this.$router.push({path:"/compare/prepare/entrust-edit/".concat(e.projectId),query:{entrustId:e.entrustId}})},handleEntrustDetail:function(e){this.$router.push({path:"/compare/prepare/entrust-detail/".concat(e.projectId)})},handleProjectDetail:function(e){this.$router.push({path:"/compare/prepare/detail/".concat(e.projectId)})},fnJudgeCanbeFinish:function(e){Object(d["cb"])(e.entrustId).then((function(t){var a=t.data;"0000"==a.errCode?e.isCanbeFinish=!0:e.isCanbeFinish=!1}))},fnConfirm:function(e){var t=this;e.isCanbeFinish?Object(d["g"])(e.entrustId).then((function(e){var a=e.data;if("0000"===a.errCode){var n=a.responseResult;t.$message.success(n),t.getData()}else t.$error({title:"错误提示",content:t.BASE.handleErrorMsg(a)})})):this.$router.push({path:"/compare/prepare/entrust-edit/".concat(e.projectId),query:{entrustId:e.entrustId}})},sizeChange:function(e,t){this.pageData.page=e,this.pageData.limit=t,this.getData()},pageChange:function(e,t){this.pageData.page=e,this.pageData.limit=t,this.getData()}}},m=f,S=a("2877"),y=Object(S["a"])(m,n,r,!1,null,null,null);t["default"]=y.exports}}]);