import { userinfo } from "@/services/api";
import { request, METHOD } from "@/utils/request";

/**
 * 供应商
 */
export async function findAgencyInfoByPage(data) {
  return request(
    `${userinfo}/agencyInfo/findAgencyInfoByPage`,
    METHOD.GET,
    data
  );
}

/**
 * 代理机构项目经理分页查询
 */
export async function findUserInfoByPage(data) {
  return request(`${userinfo}/userInfo/findUserInfoByPage`, METHOD.GET, data);
}

/**
 * 供应商联系人分页查询
 */
export async function vendorUserInfoByPage(data) {
  return request(`${userinfo}/vendorUserInfo/findVendorUserInfoByPage`, METHOD.GET, data);
}

/**
 * 查询邀请供应商的组件
 */
export async function findVendorInfoByPage(data) {
  return request(`${userinfo}/agencyInfo/findVendorInfoByPage`, METHOD.GET, data);
}


export default {
  findAgencyInfoByPage
};
