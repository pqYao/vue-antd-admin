(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2024cf86","chunk-e2119ce0","chunk-4f37c6f9"],{1148:function(t,e,n){"use strict";var a=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},1491:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{staticClass:"entrust-base-edit"},[n("Heading",{attrs:{name:"基本信息"}},[n("a-button",{attrs:{type:"primary"},on:{click:t.handlePreview}},[n("i",{class:["iconfont","icon-yulancopy"]}),t._v(" 预览 ")]),n("a-button",{attrs:{type:"primary",disabled:t.isConnect},on:{click:t.handleSubmit}},[n("i",{class:["iconfont","icon-baocun"]}),t._v(" 保存 ")])],1),n("div",{staticClass:"entrust-base-edit-wrapper"},[n("a-form",{staticClass:"es-form",attrs:{layout:"horizontal",form:t.form},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.handleSubmit(e))}}},[n("p",{staticClass:"title"},[t._v(t._s(t.formData.agencyOrgName)+"代理公司:")]),n("p",[t._v(" 我司的"+t._s(t.formData.projectName)+"项目拟采用"+t._s(t.formData.purchaseTypeName)+"方式，经研究，现委托贵司作为本项目的招标代理机构。 ")]),t.tinymceRefresh?n("tinymce",{attrs:{height:300},model:{value:t.formData.content,callback:function(e){t.$set(t.formData,"content",e)},expression:"formData.content"}}):t._e(),n("p",[t._v(" 本委托函自我司发出之日起生效，至本项目全部招标代理工作完成之日终止。 ")]),n("a-row",[n("a-col",{attrs:{md:8,sm:24,offset:"16"}},[n("a-form-item",t._b({attrs:{label:"招标人"}},"a-form-item",t.ItemLayout,!1),[n("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["tenderee",{rules:[{required:!0,message:"请输入招标人"}],validateTrigger:["blur"],initialValue:t.formData.tenderee||""}],expression:"[\n                `tenderee`,\n                {\n                  rules: [{ required: true, message: '请输入招标人' }],\n                  validateTrigger: ['blur'],\n                  initialValue: formData.tenderee || ''\n                }\n              ]"}],attrs:{maxLength:"10",placeholder:"请输入招标人",allowClear:""},on:{change:function(e){return t.tendereeChange(e.target.value)}}})],1)],1)],1)],1)],1)],1)},i=[],r=n("8256"),o=n("8ab7"),c=n("35a4"),s={name:"entrust-base-edit",components:{Tinymce:r["default"],Heading:o["default"]},data:function(){return{form:this.$form.createForm(this),formData:{},projectId:"",ItemLayout:{labelCol:{span:10},wrapperCol:{span:14}},tinymceRefresh:!0,isConnect:!1}},created:function(){this.handleInit()},activated:function(){this.handleInit()},methods:{handleInit:function(){this.projectId=this.$route.params.id,this.handleGetData()},handleGetData:function(){var t=this;Object(c["v"])(this.projectId).then((function(e){var n=e.data;if("0000"===n.errCode){var a=n.responseResult;t.formData=a,t.tinymceRefresh=!1,t.$nextTick((function(){t.tinymceRefresh=!0}))}else t.$error({title:"错误提示",content:t.BASE.handleErrorMsg(n)})}))},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFieldsAndScroll(this.BASE.formScrollOptions,(function(t,n){if(!t){for(var a in n)e.formData[a]=n[a];e.isConnect=!0,e.updateInfo()}}))},handlePreview:function(){this.$router.push({path:"/entrust-preview/".concat(this.formData.entrustId),query:{agencyOrgName:this.formData.agencyOrgName,projectName:this.formData.projectName,content:this.formData.content,tenderee:this.formData.tenderee,purchaseTypeName:this.formData.purchaseTypeName}})},tendereeChange:function(t){this.formData.tenderee=t},updateInfo:function(){var t=this;Object(c["ub"])(this.formData).then((function(e){var n=e.data;if("0000"===n.errCode){var a=n.responseResult;t.projectId=a.projectId,t.$message.success("更新成功",3),t.handleGetData()}else t.$error({title:"错误提示",content:t.BASE.handleErrorMsg(n)});t.isConnect=!1}))}}},l=s,u=(n("981f"),n("2877")),d=Object(u["a"])(l,a,i,!1,null,"20f05682",null);e["default"]=d.exports},"20ee":function(t,e,n){t.exports=n.p+"static/img/ic_tt.6b8ea247.png"},"408a":function(t,e,n){var a=n("c6b6");t.exports=function(t){if("number"!=typeof t&&"Number"!=a(t))throw TypeError("Incorrect invocation");return+t}},"4b47":function(t,e,n){},"7b99":function(t,e,n){},8256:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-container",class:{fullscreen:t.fullscreen},style:{width:t.containerWidth}},[n("textarea",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}})])},i=[],r=(n("4160"),n("a9e3"),n("b680"),n("159b"),["wordcount advlist anchor autolink autosave code codesample colorpicker colorpicker contextmenu directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount"]),o=r,c=["wordcount bold italic  alignleft aligncenter alignright outdent indent hr bullist numlist forecolor backcolor fullscreen"],s=c,l=n("b85c"),u=[];function d(){return window.tinymce}var f=function(t,e){var n=document.getElementById(t),a=e||function(){};if(!n){var i=document.createElement("script");i.src=t,i.id=t,document.body.appendChild(i),u.push(a);var r="onload"in i?o:c;r(i)}function o(e){e.onload=function(){this.onerror=this.onload=null;var t,n=Object(l["a"])(u);try{for(n.s();!(t=n.n()).done;){var a=t.value;a(null,e)}}catch(i){n.e(i)}finally{n.f()}u=null},e.onerror=function(){this.onerror=this.onload=null,a(new Error("Failed to load "+t),e)}}function c(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,n=Object(l["a"])(u);try{for(n.s();!(e=n.n()).done;){var a=e.value;a(null,t)}}catch(i){n.e(i)}finally{n.f()}u=null}}}n&&a&&(d()?a(null,n):u.push(a))},h=f,m="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",p={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:""},height:{type:[Number,String],required:!1,default:360},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){return window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()},methods:{init:function(){var t=this;h(m,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],height:this.height,body_class:"panel-body",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:s,menubar:this.menubar,plugins:o,contextmenu:"bold copy ",branding:!1,elementpath:!1,end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,ax_wordlimit_num:500,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",n.getContent())}))},setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},convert_urls:!1})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach((function(t){return window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'.concat(t.url,'" >'))}))}}},y=p,g=(n("9e8f"),n("2877")),v=Object(g["a"])(y,a,i,!1,null,"2f7dadb5",null);e["default"]=v.exports},"8ab7":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[t._m(0),n("div",{staticClass:"name"},[t._v(" "+t._s(t.name)),n("span",{staticStyle:{color:"#f5222d","font-size":"14px","font-weight":"400"}},[t._v(t._s(t.info))])]),n("span",{staticClass:"left-icon"},[t._t("leftIcon")],2),n("div",{staticClass:"button-wrapper"},[t._t("default")],2)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-icon"},[a("img",{attrs:{src:n("20ee"),alt:""}})])}],r={name:"heading",props:{name:{type:[String,Function],default:""},info:{type:[String,Function],default:""}}},o=r,c=(n("acc2"),n("2877")),s=Object(c["a"])(o,a,i,!1,null,"e7020ed6",null);e["default"]=s.exports},"981f":function(t,e,n){"use strict";var a=n("9fe87"),i=n.n(a);i.a},"9e8f":function(t,e,n){"use strict";var a=n("7b99"),i=n.n(a);i.a},"9fe87":function(t,e,n){},acc2:function(t,e,n){"use strict";var a=n("4b47"),i=n.n(a);i.a},b680:function(t,e,n){"use strict";var a=n("23e7"),i=n("a691"),r=n("408a"),o=n("1148"),c=n("d039"),s=1..toFixed,l=Math.floor,u=function(t,e,n){return 0===e?n:e%2===1?u(t,e-1,n*t):u(t*t,e/2,n)},d=function(t){var e=0,n=t;while(n>=4096)e+=12,n/=4096;while(n>=2)e+=1,n/=2;return e},f=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!c((function(){s.call({})}));a({target:"Number",proto:!0,forced:f},{toFixed:function(t){var e,n,a,c,s=r(this),f=i(t),h=[0,0,0,0,0,0],m="",p="0",y=function(t,e){var n=-1,a=e;while(++n<6)a+=t*h[n],h[n]=a%1e7,a=l(a/1e7)},g=function(t){var e=6,n=0;while(--e>=0)n+=h[e],h[e]=l(n/t),n=n%t*1e7},v=function(){var t=6,e="";while(--t>=0)if(""!==e||0===t||0!==h[t]){var n=String(h[t]);e=""===e?n:e+o.call("0",7-n.length)+n}return e};if(f<0||f>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(m="-",s=-s),s>1e-21)if(e=d(s*u(2,69,1))-69,n=e<0?s*u(2,-e,1):s/u(2,e,1),n*=4503599627370496,e=52-e,e>0){y(0,n),a=f;while(a>=7)y(1e7,0),a-=7;y(u(10,a,1),0),a=e-1;while(a>=23)g(1<<23),a-=23;g(1<<a),y(1,1),g(2),p=v()}else y(0,n),y(1<<-e,0),p=v()+o.call("0",f);return f>0?(c=p.length,p=m+(c<=f?"0."+o.call("0",f-c)+p:p.slice(0,c-f)+"."+p.slice(c-f))):p=m+p,p}})}}]);