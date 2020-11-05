import Mock from "mockjs";

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/routes`, "get", () => {
  let result = {};
  result.code = 0;
  result.data = [
    {
      router: "root",
      children: [
        {
          router: "bid",
          children: [
            {
              router: "prepare",
              authority: {
                permission: "demo",
                role: "admin"
              },
              children: [
                "create",
                {
                  router: "add",
                  invisible: true
                },
                {
                  router: "detail",
                  invisible: true
                },
                {
                  router: "edit",
                  invisible: true
                }
              ]
            }
          ]
        },
        {
          router: "exception",
          children: ["exp404", "exp403", "exp500"]
        },
        {
          router: "demo",
          icon: "file-ppt",
          path: "auth/demo",
          name: "验权页面",
          authority: {
            permission: "form",
            role: "manager"
          }
        }
      ]
    }
  ];
  return result;
});
