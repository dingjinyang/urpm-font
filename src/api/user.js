import "../plugins/axios";

// eslint-disable-next-line no-unused-vars,no-undef
const _axios = axios;

/**
 * 用户登录
 * @param data
 * @returns {*}
 */
export function login(data) {
  return _axios.post("/user/login", data);
}

/**
 * 获取用户信息
 * @returns {*}
 */
export function getUserInfo() {
  return _axios.get("/user/info");
}

export function getUserPermissions() {
  return _axios.get(`/permission/user`);
}

export function getAllUser(pageNum = 1, pageSize = 10) {
  return _axios.get(`/user/all`, { params: { pageNum, pageSize } });
}
