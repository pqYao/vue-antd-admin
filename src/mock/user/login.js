import Mock from "mockjs";
import "@/mock/extend";

const user = Mock.mock({
  name: "@ADMIN",
  avatar: "@AVATAR",
  address: "@CITY",
  position: "@POSITION",
  userId: "1"
});
const user1 = Mock.mock({
  name: "@ADMIN",
  avatar: "@AVATAR",
  address: "@CITY",
  position: "@POSITION",
  userId: "100"
});
const user2 = Mock.mock({
  name: "@ADMIN",
  avatar: "@AVATAR",
  address: "@CITY",
  position: "@POSITION",
  userId: "200"
});
Mock.mock(`${process.env.VUE_APP_API_BASE_URL}/login`, "post", ({ body }) => {
  let result = {};
  const { name } = JSON.parse(body);
  

  if (name !== "admin" && name !== "vender" && name !== "vender1") {
    result.code = -1;
    result.message = "账户名或密码错误";
  } else {

    result.code = 0;
    result.message = Mock.mock("@TIMEFIX").CN + "，欢迎回来";
    result.data = {};
    if (name == "admin") {
      result.data.user = user;
    }
    if (name == "vender") {
      result.data.user = user1;
    }
    if (name == "vender1") {
      result.data.user = user2;
    }
    result.data.token = "Authorization:" + Math.random();
    result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000);
    result.data.permissions = [{ id: "queryForm", operation: ["add", "edit"] }];
    result.data.roles = [{ id: "admin", operation: ["add", "edit", "delete"] }];
  }
  return result;
});
