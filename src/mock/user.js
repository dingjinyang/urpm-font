const Mock = require("mockjs");
const Random = Mock.Random;
Random.extend({
  roles: function() {
    const roles = [
      ["root"],
      ["admin"],
      ["user"],
      ["root", "user"],
      ["root", "admin"],
      ["admin", "user"],
      ["root", "admin", "user"]
    ];
    return this.pick(roles);
  }
});
export default {
  /** 用户登陆 */
  login: Mock.mock("/login", {
    code: 200,
    data: {
      token: "vuetify-admin-token"
    }
  }),
  /** 获取用户信息 */
  getUserInfo: Mock.mock("/user/info", {
    code: 200,
    data: {
      // roles: "@ROLES",
      roles: ["admin"],
      permissions: [
        "role:insert",
        "role:update",
        "permission:select",
        "user:select",
        "user:update",
        "user:insert",
        "role:select"
      ],
      name: "@NAME",
      avatar:
        // "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
        "https://d36jcksde1wxzq.cloudfront.net/saas-mega/whiteFingerprint.png"
    }
  }),
  /** 用户登出 */
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  }),
  /** 用户列表 */
  userAll: Mock.mock(
    /\/user\/all\?pageNum=[1-9]\d*&pageSize=[1-9]\d*/,
    // "/user/all?pageNum=1&pageSize=10",
    "get",
    {
      code: 200,
      meg: "success",
      data: {
        list: [
          {
            account: "@NAME",
            regTime: "@DATETIME",
            username: "@CNAME"
          }
        ],
        pageNum: 1,
        pageSize: 10,
        total: 5,
        pages: 1
      }
    }
  )
};
