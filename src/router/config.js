import TabsView from "@/layouts/tabs/TabsView";
import BlankView from "@/layouts/BlankView";
import PageView from "@/layouts/PageView";

// 路由配置
const options = {
  routes: [
    {
      path: "/login",
      name: "登录页",
      component: () => import("@/pages/login")
    },

    {
      path: "*",
      name: "404",
      component: () => import("@/pages/exception/404")
    },
    {
      path: "/403",
      name: "403",
      component: () => import("@/pages/exception/403")
    },
    {
      path: "/",
      name: "首页",
      component: TabsView,
      redirect: "/login",
      children: [
        {
          path: "workplace",
          name: "工作台",
          meta: {
            icon: "icon-gongzuotai"
          },
          component: PageView,
          children: [
            {
              path: "todo",
              name: "待办",
              meta: {
                icon: "file-ppt"
              },
              component: () => import("@/pages/demo")
            }
          ]
        },
        {
          path: "view",
          name: "预览",
          meta: {
            icon: "icon-gongzuotai",
            invisible: true
          },
          component: PageView,
          children: [
            {
              path: "/entrust-preview/:id",
              name: "委托函预览",
              component: () => import("@/pages/bid/prepare/entrust/preview")
            },
            {
              path: "/notice-preview/:id",
              name: "公告预览",
              component: () => import("@/pages/bid/tender/tender_info/notice")
            },
            {
              path: "/invitation-preview/:id",
              name: "邀请函预览",
              component: () => import("@/pages/bid/tender/tender_info/notice")
            }
          ]
        },

        {
          path: "bid",
          name: "招标采购",
          meta: {
            icon: "icon-icon-bid-archive"
          },
          component: BlankView,
          children: [
            {
              path: "prepare",
              name: "招标准备",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "create",
                  name: "采购项目",
                  component: () => import("@/pages/bid/prepare/create/index")
                },
                {
                  path: "add",
                  name: "新增采购项目",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/prepare/create/add")
                },
                {
                  path: "detail/:id",
                  name: "采购项目详情",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/prepare/create/detail")
                },
                {
                  path: "edit/:id",
                  name: "采购项目编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/prepare/create/edit")
                },
                {
                  path: "divide-tender",
                  name: "分标",
                  component: () =>
                    import("@/pages/bid/prepare/divide_tender/index")
                },
                {
                  path: "divide-tender-edit/:id",
                  name: "分标编辑",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/prepare/divide_tender/edit")
                },
                {
                  path: "divide-tender-detail/:id",
                  name: "分标查看",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/prepare/divide_tender/detail")
                },
                {
                  path: "sub-contract",
                  name: "分包",
                  component: () =>
                    import("@/pages/bid/prepare/sub_contract/index")
                },
                {
                  path: "sub-contract-detail/:id",
                  name: "分包详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/prepare/sub_contract/detail")
                },
                {
                  path: "sub-contract-edit/:id",
                  name: "分包编辑",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/prepare/sub_contract/edit")
                },
                {
                  path: "entrust",
                  name: "委托函",
                  component: () => import("@/pages/bid/prepare/entrust/index")
                },
                {
                  path: "entrust-detail/:id",
                  name: "委托函详情",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/prepare/entrust/detail")
                },
                {
                  path: "entrust-edit/:id",
                  name: "委托函编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/prepare/entrust/edit")
                }
              ]
            },
            {
              path: "tender",
              name: "发标管理",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "tender-info",
                  name: "项目发标信息",
                  component: () =>
                    import("@/pages/bid/tender/tender_info/index")
                },
                {
                  path: "tender-info-detail/:id",
                  name: "查看发标信息",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/tender/tender_info/detail")
                },
                {
                  path: "tender-info-edit/:id",
                  name: "编辑发标信息",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/tender/tender_info/edit")
                },
                {
                  path: "notice-change",
                  name: "公告变更",
                  component: () =>
                    import("@/pages/bid/tender/notice_change/index")
                },
                {
                  path: "notice-change-edit/:id",
                  name: "公告变更明细",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/tender/notice_change/edit")
                },
                {
                  path: "notice-change-detail/:id",
                  name: "公告变更详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/tender/notice_change/detail")
                }
              ]
            },
            {
              path: "submit",
              name: "投标管理",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "bid-submit-sign-up",
                  name: "报名管理",
                  component: () => import("@/pages/bid/submit/sign_up/index")
                },
                {
                  path: "bid-submit-sign-up-detail/:id",
                  name: "报名管理详情",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/submit/sign_up/detail")
                },
                {
                  path: "bid-submit-sign-up-edit/:id",
                  name: "报名管理编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/submit/sign_up/edit")
                },
                {
                  path: "bid-submit",
                  name: "投标管理",
                  component: () => import("@/pages/bid/submit/bid_submit/index")
                },
                {
                  path: "bid-submit-detail/:id",
                  name: "投标管理详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/bid/submit/bid_submit/detail")
                },
                {
                  path: "bid-submit-edit/:id",
                  name: "投标管理编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/bid/submit/bid_submit/edit")
                }
              ]
            }
          ]
        },
        {
          path: "compare",
          name: "比选采购",
          meta: {
            icon: "icon-gouwuchekong"
          },
          component: BlankView,
          children: [
            {
              path: "prepare",
              name: "比选准备",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "create",
                  name: "采购项目",
                  component: () =>
                    import("@/pages/compare/prepare/create/index")
                },
                {
                  path: "add",
                  name: "新增采购项目",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/compare/prepare/create/add")
                },
                {
                  path: "detail/:id",
                  name: "采购项目详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/prepare/create/detail")
                },
                {
                  path: "edit/:id",
                  name: "采购项目编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/compare/prepare/create/edit")
                },
                {
                  path: "sub-contract",
                  name: "分包",
                  component: () =>
                    import("@/pages/compare/prepare/sub_contract/index")
                },
                {
                  path: "sub-contract-detail/:id",
                  name: "分包详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/prepare/sub_contract/detail")
                },
                {
                  path: "sub-contract-edit/:id",
                  name: "分包编辑",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/prepare/sub_contract/edit")
                },
                {
                  path: "entrust",
                  name: "委托函",
                  component: () => import("@/pages/compare/prepare/entrust/index")
                },
                {
                  path: "entrust-detail/:id",
                  name: "委托函详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/prepare/entrust/detail")
                },
                {
                  path: "entrust-edit/:id",
                  name: "委托函编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/compare/prepare/entrust/edit")
                }
              ]
            },
            {
              path: "tender",
              name: "采购信息",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "tender-info",
                  name: "谈判准备",
                  component: () =>
                    import("@/pages/compare/tender/tender_info/index")
                },
                {
                  path: "tender-info-detail/:id",
                  name: "查看谈判准备",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/tender/tender_info/detail")
                },
                {
                  path: "tender-info-edit/:id",
                  name: "编辑谈判准备",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/compare/tender/tender_info/edit")
                },
                {
                  path: "notice-change",
                  name: "公告变更",
                  component: () =>
                    import("@/pages/compare/tender/notice_change/index")
                },
                {
                  path: "notice-change-edit/:id",
                  name: "公告变更明细",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/tender/notice_change/edit")
                },
                {
                  path: "notice-change-detail/:id",
                  name: "公告变更详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/compare/tender/notice_change/detail")
                }
              ]
            },
          ]
        },
        {
          path: "other",
          name: "其他采购",
          meta: {
            icon: "icon-caigoudingdan"
          },
          component: BlankView,
          children: [
            {
              path: "prepare",
              name: "采购准备",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "create",
                  name: "采购项目",
                  component: () => import("@/pages/other/prepare/create/index")
                },
                {
                  path: "add",
                  name: "新增采购项目",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/other/prepare/create/add")
                },
                {
                  path: "detail/:id",
                  name: "采购项目详情",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/other/prepare/create/detail")
                },
                {
                  path: "edit/:id",
                  name: "采购项目编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/other/prepare/create/edit")
                },
                {
                  path: "sub-contract",
                  name: "分包",
                  component: () =>
                    import("@/pages/other/prepare/sub_contract/index")
                },
                {
                  path: "sub-contract-detail/:id",
                  name: "分包详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/prepare/sub_contract/detail")
                },
                {
                  path: "sub-contract-edit/:id",
                  name: "分包编辑",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/prepare/sub_contract/edit")
                },
                {
                  path: "entrust",
                  name: "委托函",
                  component: () => import("@/pages/other/prepare/entrust/index")
                },
                {
                  path: "entrust-detail/:id",
                  name: "委托函详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/prepare/entrust/detail")
                },
                {
                  path: "entrust-edit/:id",
                  name: "委托函编辑",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/other/prepare/entrust/edit")
                }
              ]
            },
            {
              path: "tender",
              name: "采购信息",
              meta: {
                icon: ""
              },
              component: PageView,
              children: [
                {
                  path: "tender-info",
                  name: "谈判准备",
                  component: () =>
                    import("@/pages/other/tender/tender_info/index")
                },
                {
                  path: "tender-info-detail/:id",
                  name: "查看谈判准备",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/tender/tender_info/detail")
                },
                {
                  path: "tender-info-edit/:id",
                  name: "编辑谈判准备",
                  meta: {
                    invisible: true
                  },
                  component: () => import("@/pages/other/tender/tender_info/edit")
                },
                {
                  path: "notice-change",
                  name: "公告变更",
                  component: () =>
                    import("@/pages/other/tender/notice_change/index")
                },
                {
                  path: "notice-change-edit/:id",
                  name: "公告变更明细",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/tender/notice_change/edit")
                },
                {
                  path: "notice-change-detail/:id",
                  name: "公告变更详情",
                  meta: {
                    invisible: true
                  },
                  component: () =>
                    import("@/pages/other/tender/notice_change/detail")
                }
              ]
            },
          ]
        },
        {
          path: "response",
          name: "应答管理",
          meta: {
            icon: "icon-caigoudingdan"
          },
          component: PageView,
          children: [
            {
              path: "sign-up",
              name: "报名",
              component: () => import("@/pages/response/sign_up/index")
            },
            {
              path: "sign-up-detail/:id",
              name: "报名详情",
              meta: {
                invisible: true
              },
              component: () => import("@/pages/response/sign_up/detail")
            },
            {
              path: "sign-up-edit/:id",
              name: "报名编辑",
              meta: {
                invisible: true
              },
              component: () => import("@/pages/response/sign_up/edit")
            },
            {
              path: "answer",
              name: "应答",
              component: () => import("@/pages/response/answer/index")
            },
            {
              path: "answer-detail/:id",
              name: "应答详情",
              meta: {
                invisible: true
              },
              component: () => import("@/pages/response/answer/detail")
            },
            {
              path: "answer-edit/:id",
              name: "应答编辑",
              meta: {
                invisible: true
              },
              component: () => import("@/pages/response/answer/edit")
            },
            {
              path: "answer-info-edit/:id",
              name: "应答信息编辑",
              meta: {
                invisible: true
              },
              component: () =>
                import("@/pages/response/answer/answer_info_edit")
            },
            {
              path: "answer-info-detail/:id",
              name: "应答信息查看",
              meta: {
                invisible: true
              },
              component: () =>
                import("@/pages/response/answer/answer_info_detail")
            }
          ]
        },
        {
          path: "entrust-search",
          name: "委托函",
          meta: {
            icon: "icon-ic_manage_assignprop"
          },
          component: BlankView,
          children: [
            {
              path: "entrust",
              name: "委托函查询",
              component: () => import("@/pages/entrust/index")
            },
            {
              path: "detail",
              name: "委托函详情",
              meta: {
                invisible: true
              },
              component: () => import("@/pages/exception/403")
            }
          ]
        },
        {
          path: "vds",
          name: "专家管理",
          meta: {
            icon: "icon-renyuanguanli"
          },
          component: BlankView,
          children: [
            {
              path: "404",
              name: "Exp404",
              component: () => import("@/pages/exception/404")
            },
            {
              path: "403",
              name: "Exp403",
              component: () => import("@/pages/exception/403")
            },
            {
              path: "500",
              name: "Exp500",
              component: () => import("@/pages/exception/500")
            }
          ]
        },
        {
          path: "xvv",
          name: "供应商管理",
          meta: {
            icon: "icon-ic_manage_assignprop"
          },
          component: BlankView,
          children: [
            {
              path: "404",
              name: "Exp404",
              component: () => import("@/pages/exception/404")
            },
            {
              path: "403",
              name: "Exp403",
              component: () => import("@/pages/exception/403")
            },
            {
              path: "500",
              name: "Exp500",
              component: () => import("@/pages/exception/500")
            }
          ]
        },
        {
          path: "sdc",
          name: "基础数据管理",
          meta: {
            icon: "icon-shujuguanli"
          },
          component: BlankView,
          children: [
            {
              path: "404",
              name: "Exp404",
              component: () => import("@/pages/exception/404")
            },
            {
              path: "403",
              name: "Exp403",
              component: () => import("@/pages/exception/403")
            },
            {
              path: "500",
              name: "Exp500",
              component: () => import("@/pages/exception/500")
            }
          ]
        },
        {
          path: "er",
          name: "统计分析",
          meta: {
            icon: "icon-tongjitu"
          },
          component: BlankView,
          children: [
            {
              path: "404",
              name: "Exp404",
              component: () => import("@/pages/exception/404")
            },
            {
              path: "403",
              name: "Exp403",
              component: () => import("@/pages/exception/403")
            },
            {
              path: "500",
              name: "Exp500",
              component: () => import("@/pages/exception/500")
            }
          ]
        },
        {
          name: "验权页面",
          path: "auth/demo",
          meta: {
            icon: "file-ppt",
            authority: {
              permission: "form",
              role: "manager"
            },
            component: () => import("@/pages/demo")
          }
        }
      ]
    }
  ]
};

export default options;
