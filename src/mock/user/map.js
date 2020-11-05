import Mock from "mockjs";

Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/map`, "get", () => {
  let result = {};
  result.code = 0;
  result.data = {
    purchaseType_1: "公开招标",
    purchaseType_2: "邀请招标",
    itemState_1: "草稿",
    itemState_2: "审批中",
    itemState_3: "审批完成",
    operationState_1: "未立项完成",
    operationState_2: "已立项完成",
  };
  return result;
});
