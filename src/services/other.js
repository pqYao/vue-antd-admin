import { prepare, tender } from "@/services/api";
import { request, METHOD } from "@/utils/request";
// import qs from "qs";

// 招标采购
// 采购项目分页
export async function findProjectInfoByPage(data) {
  return request(
    `${prepare}/otherProject/findProjectInfoByPage`,
    METHOD.GET,
    data
  );
}
// 新增采购项目
export async function addProjectInfo(data) {
  return request(`${prepare}/otherProject/addProjectInfo`, METHOD.POST, data);
}
// 查询采购项目
export async function findProjectInfoById(projectId) {
  return request(
    `${prepare}/otherProject/findProjectInfoByPage/${projectId}`,
    METHOD.GET
  );
}
// 更新采购项目
export async function updateProjectInfo(data) {
  return request(
    `${prepare}/otherProject/updateProjectInfo
    `,
    METHOD.PUT,
    data
  );
}
// 删除采购项目
export async function deleteProjectInfo(projectIds) {
  return request(
    `${prepare}/otherProject/deleteProjectInfo/${projectIds}
    `,
    METHOD.DELETE
  );
}
// 验证项目名称是否重复
export async function validateProjectName(projectId, projectName) {
  return request(`${prepare}/otherProject/validateProjectName`, METHOD.GET, {
    projectName: projectName,
    projectId: projectId
  });
}
// 查询采购项目情况说明信息
export async function findProjectExplain(projectId) {
  return request(
    `${prepare}/otherProject/findProjectExplain/${projectId}
    `,
    METHOD.GET
  );
}
// 更新采购项目情况说明信息
export async function updateProjectExplain(data) {
  return request(
    `${prepare}/otherProject/updateProjectExplain
    `,
    METHOD.PUT,
    data
  );
}
// 查询采购项目产品明细信息
export async function findProductInfoByPage(data) {
  return request(
    `${prepare}/otherProject/findProductInfoByPage`,
    METHOD.GET,
    data
  );
}
// 查询已选中的产品id字符串
export async function findProjectDetailString(projectId) {
  return request(
    `${prepare}/otherProject/findProjectDetailString/${projectId}`,
    METHOD.GET
  );
}
//新增采购项目产品明细
export async function addProductInfo(productIds, projectId) {
  return request(`${prepare}/otherProject/addProductInfo`, METHOD.POST, {
    productIds: productIds,
    projectId: projectId
  });
}
//更新采购项目产品明细
export async function updateProductInfo(data) {
  return request(`${prepare}/otherProject/updateProductInfo`, METHOD.PUT, data);
}
// 删除采购项目产品明细
export async function deleteProductInfo(projectDetailIds) {
  return request(
    `${prepare}/otherProject/deleteProductInfo/${projectDetailIds}
    `,
    METHOD.DELETE
  );
}
// 验证项目信息是否完整
export async function validateProjectInfo(projectId) {
  return request(
    `${prepare}/otherProject/validateProjectInfo/${projectId}`,
    METHOD.GET
  );
}
// 立项完成
export async function projectCompeleted(projectId) {
  return request(
    `${prepare}/otherProject/projectCompeleted/${projectId}`,
    METHOD.PUT
  );
}
// 提交审批
export async function projectSubmit(projectId) {
  return request(
    `${prepare}/otherProject/projectSubmit/${projectId}`,
    METHOD.PUT
  );
}

// 分包详情页面-包名重复验证
export async function validateSubContractName(
  projectId,
  subtenderId,
  subcontractingId,
  subContractName
) {
  return request(
    `${prepare}/otherSubContract/validateSubContractName`,
    METHOD.GET,
    {
      projectId: projectId,
      subtenderId: subtenderId,
      subcontractingId: subcontractingId,
      subContractName: subContractName
    }
  );
}
// 分包详情页面-项目信息
export async function findSubContractForProject(projectId) {
  return request(
    `${prepare}/otherSubContract/findSubContractForProject/${projectId}
    `,
    METHOD.GET
  );
}
// 项目分包管理分页查询
export async function findSubContractForPage(data) {
  return request(
    `${prepare}/otherSubContract/findSubContractForPage`,
    METHOD.GET,
    data
  );
}
// 分包详情页面-分包信息
export async function findSubContractForContract(data) {
  return request(
    `${prepare}/otherSubContract/findSubContractForContract`,
    METHOD.GET,
    data
  );
}
// 分包详情页面-产品信息
export async function findSubContractForDetail(data) {
  return request(
    `${prepare}/otherSubContract/findSubContractForDetail`,
    METHOD.GET,
    data
  );
}
// 分包完成
export async function finishSubContract(data) {
  return request(
    `${prepare}/otherSubContract/finishSubContract`,
    METHOD.POST,
    data
  );
}
// 分包详情页面-快捷分包
export async function addSubContractForFast(projectId) {
  return request(
    `${prepare}/otherSubContract/addSubContractForFast`,
    METHOD.POST,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-删除包
export async function deleteSubContract(ids) {
  return request(
    `${prepare}/otherSubContract/deleteSubContract/${ids}
    `,
    METHOD.DELETE
  );
}
// 分包详情页面-修改包
export async function updateSubContract(data) {
  return request(
    `${prepare}/otherSubContract/updateSubContract`,
    METHOD.PUT,
    data
  );
}
// 分包编辑页-关联产品选择组件-项目、标、包信息查询
export async function cptForfindContractingTenderProjectInfo(data) {
  return request(
    `${prepare}/otherSubContract/cptForfindContractingTenderProjectInfo`,
    METHOD.GET,
    data
  );
}
// 分包编辑页-关联产品选择组件-产品明细分页查询（右侧）
export async function cptForfindContractingTenderProjectDetailInfo(data) {
  return request(
    `${prepare}/otherSubContract/cptForfindContractingTenderProjectDetailInfo`,
    METHOD.GET,
    data
  );
}
// 分包编辑页-分标组件-标信息查询（左侧）
export async function cptForfindSubContractOfTender(projectId) {
  return request(
    `${prepare}/otherSubContract/cptForfindSubContractOfTender`,
    METHOD.GET,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-新增包（单个）
export async function addSubContractForSingle(projectId, subtenderId) {
  return request(
    `${prepare}/otherSubContract/addSubContractForSingle`,
    METHOD.POST,
    {
      projectId: projectId,
      subtenderId: subtenderId
    }
  );
}
// 分包详情页面-包明细关联产品
export async function relevanceSubContractDetailProduct(projectId, subIds) {
  return request(
    `${prepare}/otherSubContract/relevanceSubContractDetailProduct`,
    METHOD.POST,
    {
      projectId: projectId,
      subIds: subIds
    }
  );
}
// 分包编辑页-关联产品组件-查询该单据包ID+标明细ID组合IDS
export async function cptForFindSubContractOfDetailIds(projectId) {
  return request(
    `${prepare}/otherSubContract/cptForFindSubContractOfDetailIds`,
    METHOD.GET,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-修改包明细
export async function updateSubContractDetail(data) {
  return request(
    `${prepare}/otherSubContract/updateSubContractDetail`,
    METHOD.PUT,
    data
  );
}
// 分包详情页面-删除包明细
export async function deleteSubContractDetail(ids) {
  return request(
    `${prepare}/otherSubContract/deleteSubContractDetail/${ids}`,
    METHOD.DELETE
  );
}

/**
 * 委托函
 */

// 采购项目委托函记录表分页查询
export async function findEntrustByPage(data) {
  return request(`${prepare}/otherEntrust/findEntrustByPage`, METHOD.GET, data);
}
// 查询采购项目委托函记录信息
export async function findEntrust(entrustId) {
  return request(
    `${prepare}/otherEntrust/findEntrust/${entrustId}`,
    METHOD.GET
  );
}
// 更新采购项目委托函记录信息
export async function updateEntrust(data) {
  return request(`${prepare}/otherEntrust/updateEntrust`, METHOD.PUT, data);
}
// 验证委托函议填写信息是否完整
export async function validateEntrustInfo(entrustId) {
  return request(
    `${prepare}/otherEntrust/validateEntrustInfo/${entrustId}`,
    METHOD.GET
  );
}
// 委托函编辑完成
export async function compeleteEntrust(entrustId) {
  return request(
    `${prepare}/otherEntrust/compeleteEntrust/${entrustId}`,
    METHOD.PUT
  );
}
// 委托函提交审批
export async function submitEntrust(entrustId) {
  return request(
    `${prepare}/otherEntrust/submitEntrust/${entrustId}`,
    METHOD.PUT
  );
}

/**
 * 发标
 */
// 发标分页查询
export async function findSendTenderInfoByPage(data) {
  return request(
    `${tender}/otherSendTender/findSendTenderInfoByPage`,
    METHOD.GET,
    data
  );
}
// 查询项目文件信息
export async function findSendTenderFileByPage(data) {
  return request(
    `${tender}/otherSendTender/findSendTenderFileByPage`,
    METHOD.GET,
    data
  );
}
// 项目文件查询条件-标
export async function findSubTenderInfo(tenderVindicateId) {
  return request(
    `${tender}/otherSendTender/findSubTenderInfo/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 项目文件查询条件-包
export async function findSubContractingInfo(tenderVindicateId, subTenderId) {
  return request(
    `${tender}/otherSendTender/findSubContractingInfo`,
    METHOD.GET,
    {
      tenderVindicateId: tenderVindicateId,
      subTenderId: subTenderId
    }
  );
}
// 更新项目文件信息
export async function updateSendTenderFile(data) {
  return request(
    `${tender}/otherSendTender/updateSendTenderFile`,
    METHOD.PUT,
    data
  );
}
// 查询招标时间信息
export async function findSendTenderTime(tenderVindicateId) {
  return request(
    `${tender}/otherSendTender/findSendTenderTime/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 新增招标时间信息
export async function addSendTenderTime(data) {
  return request(
    `${tender}/otherSendTender/addSendTenderTime`,
    METHOD.POST,
    data
  );
}
// 更新招标时间信息
export async function updateSendTenderTime(data) {
  return request(
    `${tender}/otherSendTender/updateSendTenderTime`,
    METHOD.PUT,
    data
  );
}
//查询邀请供应商信息
export async function findSendTenderVendorByPage(data) {
  return request(
    `${tender}/otherSendTender/findSendTenderVendorByPage`,
    METHOD.GET,
    data
  );
}
// 邀请供应商-包关联供应商信息
export async function relevanceSendTenderVendor(
  businessKeyString,
  projectId,
  tenderVindicateId
) {
  return request(
    `${tender}/otherSendTender/relevanceSendTenderVendor`,
    METHOD.POST,
    {
      businessKeyString: businessKeyString,
      projectId: projectId,
      tenderVindicateId: tenderVindicateId
    }
  );
}
// 邀请供应商-查询已选中邀请供应商的标识IDS(包id-供应商id,包id-供应商id,...)
export async function findSelectVendorBusinessKey(tenderVindicateId) {
  return request(
    `${tender}/otherSendTender/findSelectVendorBusinessKey/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 邀请供应商-删除邀请供应商信息
export async function deleteSendTenderVendorInfo(tenderVendorIds) {
  return request(
    `${tender}/otherSendTender/deleteSendTenderVendorInfo/${tenderVendorIds}`,
    METHOD.DELETE
  );
}
// 公告/邀请函-查询公告/邀请函信息查询
export async function findSendTenderNotice(tenderVindicateId, noticeType) {
  return request(`${tender}/otherSendTender/findSendTenderNotice`, METHOD.GET, {
    tenderVindicateId: tenderVindicateId,
    // 类型：1公告 2邀请函
    noticeType: noticeType
  });
}
// 公告/邀请函-新增公告/邀请函信息
export async function addSendTenderNotice(data) {
  return request(
    `${tender}/otherSendTender/addSendTenderNotice`,
    METHOD.POST,
    data
  );
}
// 公告/邀请函-更新公告/邀请函信息
export async function updateSendTenderNotice(data) {
  return request(
    `${tender}/otherSendTender/updateSendTenderNotice`,
    METHOD.PUT,
    data
  );
}
// 验证发标信息是否完整
export async function validateSendTenderInfo(tenderVindicateId) {
  return request(
    `${tender}/otherSendTender/validateSendTenderInfo/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 确认发标
export async function sendTenderFinish(tenderVindicateId) {
  return request(
    `${tender}/otherSendTender/sendTenderFinish/${tenderVindicateId}`,
    METHOD.PUT
  );
}

/**
 * 公告变更
 */
//公告变更查询界面
export async function getNoticeChangeList(data) {
  return request(
    `${tender}/otherNoticeChange/findNoticeChangeForPage`,
    METHOD.GET,
    data
  );
}
//根据ID查询公告更改的详细信息
export async function getNoticeChangeDetail(data) {
  return request(
    `${tender}/otherNoticeChange/findNoticeChangeRecordsInfo`,
    METHOD.GET,
    data
  );
}
//获取公告变更记录表的数据
export async function getNoticeChangeRecordList(data) {
  return request(
    `${tender}/otherNoticeChange/findNoticeChangeRecordsForPage`,
    METHOD.GET,
    data
  );
}
//提交公告变更
export async function submitNoticeChange(id) {
  return request(
    `${tender}/otherNoticeChange/toSubmitNoticeChange/${id}`,
    METHOD.PUT
  );
}
//保存公告变更
export async function signAndSaveNoticeChange(data) {
  return request(
    `${tender}/otherNoticeChange/updateNoticeChangeRecordsInfo`,
    METHOD.PUT,
    data
  );
}
// 公告变更记录分页查询
export async function findNoticeChangeRecordsForPage(data) {
  return request(
    `${tender}/otherNoticeChange/findNoticeChangeRecordsForPage`,
    METHOD.GET,
    data
  );
}
export default {
  findProjectInfoByPage,
  addProjectInfo,
  findProjectInfoById,
  updateProjectInfo,
  deleteProjectInfo,
  validateProjectName,
  findProjectExplain,
  updateProjectExplain,
  findProductInfoByPage
};
