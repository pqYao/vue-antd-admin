(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f4ab"],{d8cd:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("SearchForm",{ref:"SearchForm",attrs:{searchList:e.searchList,name:"查询条件",stateCode:"createProject"},on:{"on-filter":e.toSearch}}),a("a-card",[a("Heading",{attrs:{name:"查询结果"}},[a("a-button",{attrs:{type:"primary"},on:{click:e.addNew}},[a("i",{class:["iconfont","icon-xinzeng"]}),e._v(" 创建采购项目 ")]),a("a-popconfirm",{attrs:{disabled:!this.hasSelectedRowKeys,title:"确定批量删除?","ok-text":"确认","cancel-text":"取消"},on:{confirm:e.handleDelete}},[a("a-button",{attrs:{type:"primary"},on:{click:function(t){return e.handleDelete(0)}}},[a("i",{class:["iconfont","icon-weibiaoti544"]}),e._v(" 批量删除 ")])],1)],1),a("a-table",{attrs:{size:"small",loading:e.pageData.loading,pagination:!1,columns:e.columns,dataSource:e.dataSource,rowSelection:{fixed:!0,selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,getCheckboxProps:e.getCheckboxProps},scroll:{x:1350},rowKey:"projectId"},scopedSlots:e._u([{key:"projectCode",fn:function(t,n){return a("a",{on:{click:function(t){return e.handleDetail(n)}}},[e._v(e._s(t))])}},{key:"purchaseType",fn:function(t){return[e._v(e._s(e.dictionary.purchaseType[t]))]}},{key:"approveState",fn:function(t){return[e._v(" "+e._s(e.dictionary.approveState[t])+" ")]}},{key:"operationState",fn:function(t){return[e._v(" "+e._s(t?e.operationState[t]:"")+" ")]}},{key:"entrustFlag",fn:function(t){return[e._v(e._s("1"===t?"是":"否"))]}},{key:"prequalficationFlag",fn:function(t){return[e._v(e._s(("1"==t?"是":"0"==t&&"否")||"--"))]}},{key:"action",fn:function(t){return[a("a-space",{attrs:{size:8}},[t.createId===e.user.userId&&"1"===t.approveState?a("a",{on:{click:function(a){return e.handleEdit(t)}}},[e._v("编辑")]):a("a",{on:{click:function(a){return e.handleDetail(t)}}},[e._v("查看")]),a("a-popconfirm",{attrs:{title:"是否删除此项目?","ok-text":"确认","cancel-text":"取消"},on:{confirm:function(a){return e.deleteById(t.projectId)}}},[t.createId===e.user.userId&&"1"===t.approveState?a("a",[e._v("删除")]):e._e()]),a("a-popover",{attrs:{content:"此功能暂不支持"}},[a("a",[e._v(" 业务流程跟踪 ")])])],1)]}}])}),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageData.total>0,expression:"pageData.total > 0"}],attrs:{value:e.pageData.page,pageSize:e.pageData.limit,total:e.pageData.total},on:{change:e.sizeChange,showSizeChange:e.pageChange}})],1)],1)},r=[],i=(a("4de4"),a("a15b"),a("a9e3"),a("ac1f"),a("1276"),a("5530")),o=a("5880"),c=a("5acc"),s=a("8ab7"),l=a("325f"),d=a("35a4"),p=a("7f97"),u={limit:15,total:0,page:1,loading:!1},h=[{title:"序号",dataIndex:"number",align:"center",customRender:function(e,t,a){return"".concat((u.page-1)*u.limit+a+1)},width:60},{title:"项目编码",dataIndex:"projectCode",width:150,align:"center",scopedSlots:{customRender:"projectCode"}},{title:"项目名称",dataIndex:"projectName",ellipsis:!0},{title:"采购方式",dataIndex:"purchaseType",scopedSlots:{customRender:"purchaseType"},width:80,align:"center"},{title:"是否资格预审",dataIndex:"prequalficationFlag",scopedSlots:{customRender:"prequalficationFlag"},width:100,align:"center"},{title:"是否委托",dataIndex:"entrustFlag",scopedSlots:{customRender:"entrustFlag"},width:80,align:"center"},{title:"创建时间",dataIndex:"createDate",width:180,align:"center"},{title:"审批状态",dataIndex:"approveState",width:80,align:"center",scopedSlots:{customRender:"approveState"}},{title:"业务状态",dataIndex:"operationState",scopedSlots:{customRender:"operationState"},width:100,align:"center"},{title:"操作",align:"center",width:180,scopedSlots:{customRender:"action"},fixed:"right"}],g=[],f=[{type:"input",label:"项目编码",key:"projectCode"},{type:"input",label:"项目名称",key:"projectName"},{type:"select",label:"采购方式",key:"purchaseType"},{type:"flag",label:"资格预审",key:"prequalficationFlag",flag:!0},{type:"flag",label:"是否委托",key:"entrustFlag"},{type:"date",label:"创建日期",key:"createDate"},{type:"select",label:"审批状态",key:"approveState"},{type:"operationState",label:"业务状态",key:"operationState"}],y={name:"QueryList",components:{Heading:s["default"],SearchForm:c["a"],Pagination:l["default"]},data:function(){return{columns:h,dataSource:g,searchList:f,selectedRowKeys:[],selectedRows:[],filter:{},pageData:u,operationState:[]}},computed:Object(i["a"])(Object(i["a"])({},Object(o["mapGetters"])("account",["dictionary","user"])),{},{hasSelectedRowKeys:function(){return 0!=!!this.selectedRowKeys.length}}),created:function(){this.getData(),this.getOperationState()},activated:function(){this.$refs.SearchForm.handleReset(),this.pageData.page=1,this.filter={},this.getData()},watch:{operationState:{handler:function(e){return e},immediate:!0,deep:!0}},methods:{toSearch:function(e){this.filter=e,this.pageData.page=1,this.getData()},getOperationState:function(){var e=this;Object(p["d"])("createProject").then((function(t){var a=t.data;if("0000"===a.errCode){var n={};for(var r in a.responseResult){var i=r.split("_");n[i[0]]||(n[i[0]]=[]),n[i[0]][i[1]]=a.responseResult[r]}for(var o in n)e.operationState=n[o]}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)})}))},getData:function(){var e=this,t=Object.assign({limit:this.pageData.limit,page:this.pageData.page},this.filter);this.pageData.loading=!0,Object(d["C"])(t).then((function(t){var a=t.data,n=a.responseResult;if("0000"==a.errCode){var r=n.data,i=n.total;e.dataSource=r,e.pageData.total=Number(i)}else e.$error({title:"错误提示",content:e.BASE.handleErrorMsg(a)});e.pageData.loading=!1}))},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectedRows=t},addNew:function(){this.$router.push({path:"/bid/prepare/add"})},handleEdit:function(e){this.$router.push({path:"/bid/prepare/edit/".concat(e.projectId)})},handleDetail:function(e){this.$router.push({path:"/bid/prepare/detail/".concat(e.projectId)})},handleDelete:function(e){if(!this.hasSelectedRowKeys)return this.$message.warning("请选择要删除的数据！"),!1;0!=e&&this.deleteById()},deleteById:function(e){var t=this,a=e||this.selectedRowKeys.join(",");Object(d["r"])(a).then((function(e){var a=e.data;if("0000"===a.errCode){var n=a.responseResult;t.selectedRowKeys=[],t.$message.warning(n),t.getData()}}))},sizeChange:function(e,t){this.pageData.page=e,this.pageData.limit=t,this.getData()},pageChange:function(e,t){this.pageData.page=e,this.pageData.limit=t,this.getData()},getCheckboxProps:function(e){return{props:{disabled:!(this.user.userId==e.createId&&1==e.approveState)}}}}},m=y,S=a("2877"),v=Object(S["a"])(m,n,r,!1,null,null,null);t["default"]=v.exports}}]);