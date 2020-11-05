import { basic } from "@/services/api";
import { request, METHOD } from "@/utils/request";

/**
 * 字典值
 */
export async function map(dicTypeCode, dicNumber) {
  return request(`${basic}/dict/dictionarys/map`, METHOD.POST, {
    dicNumber: dicTypeCode || "",
    dicTypeCode: dicNumber || ""
  });
}

/**
 * 字典值
 */
export async function operationStateMap(stateCode) {
  return request(`${basic}/dict/operationState/map`, METHOD.POST, {
    stateTypeCode: "",
    stateCode: stateCode,
    stateNumber: ""
  });
}

/**
 * 组织机构树
 */
export async function selectDeptTree() {
  return request(`${basic}/dept/selectDeptTree`, METHOD.GET);
}

/**
 * 产品层级树
 */
export async function findProductLevelTree() {
  return request(`${basic}/product/findProductLevelTree`, METHOD.GET);
}

/**
 * 产品分页
 */
export async function selectProductInfoByPage(data) {
  return request(`${basic}/product/selectProductInfoByPage`, METHOD.GET, data);
}

/**
 * 获得模板信息
 */
export async function findTemplateInfoByPage(data) {
  return request(`${basic}/template/findTemplateInfoByPage`, METHOD.GET, data);
}

export default {
  map,
  selectDeptTree,
  findProductLevelTree,
  selectProductInfoByPage
};
