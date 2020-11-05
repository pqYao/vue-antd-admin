const base = {
  //判断数据是否为Null或者undefined或者为空字符串
  CheckIsNullOrEmpty(value) {
    //正则表达式用于判斷字符串是否全部由空格或换行符组成
    var reg = /^\s*$/;
    //返回值为true表示不是空字符串
    return value != null && value != undefined && !reg.test(value);
  },
  // 判断是否是空对象
  ObjectIsNull(value) {
    return JSON.stringify(value) === "{}";
  },
  // 去掉时分秒
  DeleteTime(value) {
    return value.substr(0,10);
  },
  // 从数组获取数据拼接字符串并用逗号隔开  arr:数组 key:所取得字段值
  getStrByJs(arr, key) {
    let str = "";
    for (var i = 0; i < arr.length; i++) {
      str += arr[i][`${key}`] + ",";
    }
    //去掉最后一个逗号
    if (str.length > 0) {
      str = str.substr(0, str.length - 1);
    }
    return str;
  },
  //表单的滚动行为配置
  formScrollOptions: {
    // first: true,//碰到第一个失败了的校验规则后停止校验
    scroll: {
      offsetBottom: 200 //表单元素距离页面底部的距离
    }
  },
  //编辑表单布局（三列两列穿插的情况）
  oneItemLayout: {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 14
    }
  },
  twoItemLayout: {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 19
    }
  },
  threeItemLayout: {
    labelCol: {
      span: 3
    },
    wrapperCol: {
      span: 21
    }
  },
  // 查询表单布局 三列
  searchItemLayout: {
    labelCol: {
      span: 6
    },
    wrapperCol: {
      span: 16
    }
  },
  radioStyle: {
    display: "block",
    height: "30px",
    lineHeight: "30px"
  },
  //正则校验
  reg: {
    moneyRegHasZero: /(^[1-9][0-9]{0,11}$)|(^[1-9][0-9]{0,11}\.[0-9]{0,3}[1-9]$)|(^[0-9]\.[0-9]{0,3}[1-9]$)|(^0$)/,
    //金额校验规则(不能为0, 最长12位|千亿, 至多4位小数)
    moneyReg: /(^[1-9][0-9]{0,11}$)|(^[1-9][0-9]{0,11}\.[0-9]{1,4}$)|(^[0-9]\.[1-9][0-9]{0,3}$)|(^[0-9]\.[0-9][1-9][0-9]{0,2}$)|(^[0-9]\.[0-9]{0,2}[1-9][0-9]$)|(^[0-9]\.[0-9]{0,3}[1-9]$)/,
    //数量校验规则(不能为0, 最长12位|千亿, 至多2位小数)
    mountReg: /(^[1-9][0-9]{0,11}$)|(^[1-9][0-9]{0,11}\.[0-9]{1,2}$)|(^[0-9]\.[1-9][0-9]{0,1}$)|(^[0-9]\.[0-9]{0,1}[1-9]$)/
  },
  //输入框处理xss
  handleInput(data) {
    if (!isNaN(data)) return data;
    let str = String(data).replace(/(^\s*)|(\s*$)/g, "");
    return str == "undefined" || str == "null"
      ? ""
      : str
      ? String(str)
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
      : str;
  },
  //处理错误信息
  handleErrorMsg(res) {
    let str = res.customMess;
    if (str) {
      str = str.replace(/<br\s{0,}\/>/g, "</br>");
    } else {
      str = "接口异常，请联系管理员！";
    }
    return h => {
      let strMap = [],
        arr = [];
      //数组去重去空字符串
      arr = Array.from(new Set(str.split("</br>").filter(ele => ele != "")));
      if (arr.length > 1) {
        strMap = arr.map(ele => {
          return h("p", {}, ele);
        });
        return h(
          "p",
          {
            style: {
              textAlign: "left"
            }
          },
          strMap
        );
      } else if (arr.length == 1) {
        return arr[0];
      } else {
        return "接口异常，请联系管理员！";
      }
    };
  }
};
export default base;
