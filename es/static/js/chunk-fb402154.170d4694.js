(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb402154","chunk-e2119ce0"],{"0cef":function(t,e,a){},"20ee":function(t,e,a){t.exports=a.p+"static/img/ic_tt.6b8ea247.png"},"4b47":function(t,e,a){},"8ab7":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head"},[t._m(0),a("div",{staticClass:"name"},[t._v(" "+t._s(t.name)),a("span",{staticStyle:{color:"#f5222d","font-size":"14px","font-weight":"400"}},[t._v(t._s(t.info))])]),a("span",{staticClass:"left-icon"},[t._t("leftIcon")],2),a("div",{staticClass:"button-wrapper"},[t._t("default")],2)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head-icon"},[n("img",{attrs:{src:a("20ee"),alt:""}})])}],s={name:"heading",props:{name:{type:[String,Function],default:""},info:{type:[String,Function],default:""}}},r=s,c=(a("acc2"),a("2877")),o=Object(c["a"])(r,n,i,!1,null,"e7020ed6",null);e["default"]=o.exports},"984a":function(t,e,a){"use strict";var n=a("0cef"),i=a.n(n);i.a},acc2:function(t,e,a){"use strict";var n=a("4b47"),i=a.n(n);i.a},e9dd:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{staticClass:"entrust-base-edit"},[a("Heading",{attrs:{name:"基本信息"}}),a("div",{staticClass:"entrust-base-edit-wrapper"},[a("div",{staticClass:"title"},[t._v(t._s(t.formData.agencyOrgName)+"代理公司：")]),a("div",[t._v(" 我司的"+t._s(t.formData.projectName)+"项目拟采用"+t._s(t.formData.purchaseTypeName)+"方式，经研究，现委托贵司作为本项目的招标代理机构。 ")]),a("div",{domProps:{innerHTML:t._s(t.formData.content)}}),a("div",[t._v(" 本委托函自我司发出之日起生效，至本项目全部招标代理工作完成之日终止。 ")]),a("div",{staticStyle:{"text-align":"right"}},[t._v("招标人："+t._s(t.formData.tenderee))]),a("div",{staticStyle:{"text-align":"right"}},[t._v(" "+t._s(t.formData.operationFinishDate?t.moment(t.formData.operationFinishDate).format("YYYY年MM月DD日"):t.moment(new Date).format("YYYY年MM月DD日"))+" ")])])],1)},i=[],s=a("c1df"),r=a.n(s),c=a("8ab7"),o=a("35a4"),d={name:"entrust-base-view",components:{Heading:c["default"]},data:function(){return{form:this.$form.createForm(this),formData:{},projectId:"",isConnect:!1}},created:function(){this.handleInit()},activated:function(){this.handleInit()},methods:{moment:r.a,handleInit:function(){this.projectId=this.$route.params.id,this.handleGetData()},handleGetData:function(){var t=this;Object(o["v"])(this.projectId).then((function(e){var a=e.data;if("0000"===a.errCode){var n=a.responseResult;t.formData=n}else t.$error({title:"错误提示",content:t.BASE.handleErrorMsg(a)})}))}}},f=d,l=(a("984a"),a("2877")),u=Object(l["a"])(f,n,i,!1,null,"97721418",null);e["default"]=u.exports}}]);