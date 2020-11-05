import { prepare, tender } from "@/services/api";
import { request, METHOD } from "@/utils/request";
// import qs from "qs";

/**
 * 采购项目
 */

// 采购项目分页
export async function findProjectInfoByPage(data) {
  return request(
    `${prepare}/esBProject/findProjectInfoByPage`,
    METHOD.GET,
    data
  );
}
// 新增采购项目
export async function addProjectInfo(data) {
  return request(`${prepare}/esBProject/addProjectInfo`, METHOD.POST, data);
}
// 查询采购项目
export async function findProjectInfoById(projectId) {
  return request(
    `${prepare}/esBProject/findProjectInfoByPage/${projectId}`,
    METHOD.GET
  );
}
// 更新采购项目
export async function updateProjectInfo(data) {
  return request(
    `${prepare}/esBProject/updateProjectInfo
    `,
    METHOD.PUT,
    data
  );
}
// 删除采购项目
export async function deleteProjectInfo(projectIds) {
  return request(
    `${prepare}/esBProject/deleteProjectInfo/${projectIds}
    `,
    METHOD.DELETE
  );
}
// 验证项目名称是否重复
export async function validateProjectName(projectId, projectName) {
  return request(`${prepare}/esBProject/validateProjectName`, METHOD.GET, {
    projectName: projectName,
    projectId: projectId
  });
}
// 查询采购项目情况说明信息
export async function findProjectExplain(projectId) {
  return request(
    `${prepare}/esBProject/findProjectExplain/${projectId}
    `,
    METHOD.GET
  );
}
// 更新采购项目情况说明信息
export async function updateProjectExplain(data) {
  return request(
    `${prepare}/esBProject/updateProjectExplain
    `,
    METHOD.PUT,
    data
  );
}
// 查询采购项目产品明细信息
export async function findProductInfoByPage(data) {
  return request(
    `${prepare}/esBProject/findProductInfoByPage`,
    METHOD.GET,
    data
  );
}
// 查询已选中的产品id字符串
export async function findProjectDetailString(projectId) {
  return request(
    `${prepare}/esBProject/findProjectDetailString/${projectId}`,
    METHOD.GET
  );
}
//新增采购项目产品明细
export async function addProductInfo(productIds, projectId) {
  return request(`${prepare}/esBProject/addProductInfo`, METHOD.POST, {
    productIds: productIds,
    projectId: projectId
  });
}
//更新采购项目产品明细
export async function updateProductInfo(data) {
  return request(`${prepare}/esBProject/updateProductInfo`, METHOD.PUT, data);
}
// 删除采购项目产品明细
export async function deleteProductInfo(projectDetailIds) {
  return request(
    `${prepare}/esBProject/deleteProductInfo/${projectDetailIds}
    `,
    METHOD.DELETE
  );
}
// 验证项目信息是否完整
export async function validateProjectInfo(projectId) {
  return request(
    `${prepare}/esBProject/validateProjectInfo/${projectId}`,
    METHOD.GET
  );
}
// 立项完成
export async function projectCompeleted(projectId) {
  return request(
    `${prepare}/esBProject/projectCompeleted/${projectId}`,
    METHOD.PUT
  );
}
// 提交审批
export async function projectSubmit(projectId) {
  return request(
    `${prepare}/esBProject/projectSubmit/${projectId}`,
    METHOD.PUT
  );
}

/**
 * 分标
 */

//获取查询列表
export async function findSubTenderByPage(data) {
  return request(
    `${prepare}/esBSubTender/findSubTenderForPage`,
    METHOD.GET,
    data
  );
}
//获取项目信息
export async function getProjectInfoData(projectId) {
  return request(
    `${prepare}/esBSubTender/findSubTenderForProject/${projectId}`,
    METHOD.GET
  );
}
//获取分标明细
export async function getDivideTenderDetail(data) {
  return request(
    `${prepare}/esBSubTender/findSubTenderForTender`,
    METHOD.GET,
    data
  );
}
//分标完成
export async function fnFinishDivideTender(data) {
  return request(`${prepare}/esBSubTender/finishSubTender`, METHOD.POST, data);
}
//项目回退
export async function fnProjectBack(projectId) {
  return request(
    `${prepare}/esBSubTender/finishSubTender/${projectId}`,
    METHOD.DELETE
  );
}
// 快捷分标
export async function addSubTenderForFast(data) {
  return request(
    `${prepare}/esBSubTender/addSubTenderForFast`,
    METHOD.POST,
    data
  );
}
//新增标
export async function addDivideTender(data) {
  return request(
    `${prepare}/esBSubTender/addSubTenderForSingle`,
    METHOD.POST,
    data
  );
}
//修改标
export async function updateDivideTender(data) {
  return request(`${prepare}/esBSubTender/updateSubTender`, METHOD.PUT, data);
}
//删除标
export async function deleteDivideTender(ids) {
  return request(
    `${prepare}/esBSubTender/deleteSubTender/${ids}`,
    METHOD.DELETE
  );
}
//获取产品明细数据
export async function getProductInfoDataByDivideTender(data) {
  return request(
    `${prepare}/esBSubTender/findSubTenderForDetail`,
    METHOD.GET,
    data
  );
}
//关联产品-获取项目树
export async function getProjectInfoTree(data) {
  return request(
    `${prepare}/esBSubTender/cptForfindTenderProjectInfo`,
    METHOD.GET,
    data
  );
}
//关联产品-获取产品
export async function getProductSelectedData(data) {
  return request(
    `${prepare}/esBSubTender/cptForfindTenderProjectDetailInfo`,
    METHOD.GET,
    data
  );
}
//为分标添加产品
export async function addProductInfoForDivideTender(data) {
  return request(
    `${prepare}/esBSubTender/relevanceSubTenderDetailProduct`,
    METHOD.POST,
    data
  );
}
//修改产品明细
export async function updateProductInfoForDivideTender(data) {
  return request(
    `${prepare}/esBSubTender/updateSubTenderDetail`,
    METHOD.PUT,
    data
  );
}
//批量删除产品明细
export async function deleteProductInfoForDivideTender(ids) {
  return request(
    `${prepare}/esBSubTender/deleteSubTenderDetail/${ids}`,
    METHOD.DELETE
  );
}
//获取已选产品数据
export async function getSelectedDataForDivideTender(data) {
  return request(
    `${prepare}/esBSubTender/cptForFindSubTenderOfDetailIds`,
    METHOD.GET,
    data
  );
}

/**
 * 分包
 */

// 分包详情页面-包名重复验证
export async function validateSubContractName(
  projectId,
  subtenderId,
  subcontractingId,
  subContractName
) {
  return request(
    `${prepare}/esBSubContract/validateSubContractName`,
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
    `${prepare}/esBSubContract/findSubContractForProject/${projectId}
    `,
    METHOD.GET
  );
}
// 项目分包管理分页查询
export async function findSubContractForPage(data) {
  return request(
    `${prepare}/esBSubContract/findSubContractForPage`,
    METHOD.GET,
    data
  );
}
// 分包详情页面-分包信息
export async function findSubContractForContract(data) {
  return request(
    `${prepare}/esBSubContract/findSubContractForContract`,
    METHOD.GET,
    data
  );
}
// 分包详情页面-产品信息
export async function findSubContractForDetail(data) {
  return request(
    `${prepare}/esBSubContract/findSubContractForDetail`,
    METHOD.GET,
    data
  );
}
// 分包完成
export async function finishSubContract(data) {
  return request(
    `${prepare}/esBSubContract/finishSubContract`,
    METHOD.POST,
    data
  );
}
// 分包详情页面-快捷分包
export async function addSubContractForFast(projectId) {
  return request(
    `${prepare}/esBSubContract/addSubContractForFast`,
    METHOD.POST,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-删除包
export async function deleteSubContract(ids) {
  return request(
    `${prepare}/esBSubContract/deleteSubContract/${ids}
    `,
    METHOD.DELETE
  );
}
// 分包详情页面-修改包
export async function updateSubContract(data) {
  return request(
    `${prepare}/esBSubContract/updateSubContract`,
    METHOD.PUT,
    data
  );
}
// 分包编辑页-关联产品选择组件-项目、标、包信息查询
export async function cptForfindContractingTenderProjectInfo(data) {
  return request(
    `${prepare}/esBSubContract/cptForfindContractingTenderProjectInfo`,
    METHOD.GET,
    data
  );
}
// 分包编辑页-关联产品选择组件-产品明细分页查询（右侧）
export async function cptForfindContractingTenderProjectDetailInfo(data) {
  return request(
    `${prepare}/esBSubContract/cptForfindContractingTenderProjectDetailInfo`,
    METHOD.GET,
    data
  );
}
// 分包编辑页-分标组件-标信息查询（左侧）
export async function cptForfindSubContractOfTender(projectId) {
  return request(
    `${prepare}/esBSubContract/cptForfindSubContractOfTender`,
    METHOD.GET,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-新增包（单个）
export async function addSubContractForSingle(projectId, subtenderId) {
  return request(
    `${prepare}/esBSubContract/addSubContractForSingle`,
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
    `${prepare}/esBSubContract/relevanceSubContractDetailProduct`,
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
    `${prepare}/esBSubContract/cptForFindSubContractOfDetailIds`,
    METHOD.GET,
    {
      projectId: projectId
    }
  );
}
// 分包详情页面-修改包明细
export async function updateSubContractDetail(data) {
  return request(
    `${prepare}/esBSubContract/updateSubContractDetail`,
    METHOD.PUT,
    data
  );
}
// 分包详情页面-删除包明细
export async function deleteSubContractDetail(ids) {
  return request(
    `${prepare}/esBSubContract/deleteSubContractDetail/${ids}`,
    METHOD.DELETE
  );
}

/**
 * 委托函
 */

// 采购项目委托函记录表分页查询
export async function findEntrustByPage(data) {
  return request(`${prepare}/entrust/findEntrustByPage`, METHOD.GET, data);
}
// 查询采购项目委托函记录信息
export async function findEntrust(entrustId) {
  return request(`${prepare}/entrust/findEntrust/${entrustId}`, METHOD.GET);
}
// 更新采购项目委托函记录信息
export async function updateEntrust(data) {
  return request(`${prepare}/entrust/updateEntrust`, METHOD.PUT, data);
}
// 验证委托函议填写信息是否完整
export async function validateEntrustInfo(entrustId) {
  return request(
    `${prepare}/entrust/validateEntrustInfo/${entrustId}`,
    METHOD.GET
  );
}
// 委托函编辑完成
export async function compeleteEntrust(entrustId) {
  return request(
    `${prepare}/entrust/compeleteEntrust/${entrustId}`,
    METHOD.PUT
  );
}
// 委托函提交审批
export async function submitEntrust(entrustId) {
  return request(`${prepare}/entrust/submitEntrust/${entrustId}`, METHOD.PUT);
}

/**
 * 发标
 */
// 发标分页查询
export async function findSendTenderInfoByPage(data) {
  return request(
    `${tender}/sendTender/findSendTenderInfoByPage`,
    METHOD.GET,
    data
  );
}
// 查询项目文件信息
export async function findSendTenderFileByPage(data) {
  return request(
    `${tender}/sendTender/findSendTenderFileByPage`,
    METHOD.GET,
    data
  );
}
// 项目文件查询条件-标
export async function findSubTenderInfo(tenderVindicateId) {
  return request(
    `${tender}/sendTender/findSubTenderInfo/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 项目文件查询条件-包
export async function findSubContractingInfo(tenderVindicateId, subTenderId) {
  return request(`${tender}/sendTender/findSubContractingInfo`, METHOD.GET, {
    tenderVindicateId: tenderVindicateId,
    subTenderId: subTenderId
  });
}
// 更新项目文件信息
export async function updateSendTenderFile(data) {
  return request(`${tender}/sendTender/updateSendTenderFile`, METHOD.PUT, data);
}
// 查询招标时间信息
export async function findSendTenderTime(tenderVindicateId) {
  return request(
    `${tender}/sendTender/findSendTenderTime/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 新增招标时间信息
export async function addSendTenderTime(data) {
  return request(`${tender}/sendTender/addSendTenderTime`, METHOD.POST, data);
}
// 更新招标时间信息
export async function updateSendTenderTime(data) {
  return request(`${tender}/sendTender/updateSendTenderTime`, METHOD.PUT, data);
}
//查询邀请供应商信息
export async function findSendTenderVendorByPage(data) {
  return request(
    `${tender}/sendTender/findSendTenderVendorByPage`,
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
    `${tender}/sendTender/relevanceSendTenderVendor`,
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
    `${tender}/sendTender/findSelectVendorBusinessKey/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 邀请供应商-删除邀请供应商信息
export async function deleteSendTenderVendorInfo(tenderVendorIds) {
  return request(
    `${tender}/sendTender/deleteSendTenderVendorInfo/${tenderVendorIds}`,
    METHOD.DELETE
  );
}
// 公告/邀请函-查询公告/邀请函信息查询
export async function findSendTenderNotice(tenderVindicateId, noticeType) {
  return request(`${tender}/sendTender/findSendTenderNotice`, METHOD.GET, {
    tenderVindicateId: tenderVindicateId,
    // 类型：1公告 2邀请函
    noticeType: noticeType
  });
}
// 公告/邀请函-新增公告/邀请函信息
export async function addSendTenderNotice(data) {
  return request(`${tender}/sendTender/addSendTenderNotice`, METHOD.POST, data);
}
// 公告/邀请函-更新公告/邀请函信息
export async function updateSendTenderNotice(data) {
  return request(
    `${tender}/sendTender/updateSendTenderNotice`,
    METHOD.PUT,
    data
  );
}
// 验证发标信息是否完整
export async function validateSendTenderInfo(tenderVindicateId) {
  return request(
    `${tender}/sendTender/validateSendTenderInfo/${tenderVindicateId}`,
    METHOD.GET
  );
}
// 确认发标
export async function sendTenderFinish(tenderVindicateId) {
  return request(
    `${tender}/sendTender/sendTenderFinish/${tenderVindicateId}`,
    METHOD.PUT
  );
}
/**
 * 供应商委托函
 */
// 采购项目委托函记录表分页查询
export async function findProviderEntrustByPage(data) {
  return request(
    `${prepare}/providerEntrust/findEntrustByPage`,
    METHOD.GET,
    data
  );
}
// 查询采购项目委托函记录信息
export async function findProviderEntrust(projectId) {
  return request(
    `${prepare}/providerEntrust/findEntrust/${projectId}`,
    METHOD.GET
  );
}

//
/**
 * 投标
 */
//获取报名管理查询页的数据
export async function getBidSubmitSignUpList(data) {
  return request(
    `${tender}/bidProviderEnroll/findProviderEnrollForPage`,
    METHOD.GET,
    data
  );
}
//获取报名供应商表格的数据
export async function getSignUpVendorData(data) {
  return request(
    `${tender}/bidProviderEnroll/findProviderEnrollPage`,
    METHOD.GET,
    data
  );
}
//获取确认报名供应商表格的数据
export async function getConfirmedVendorData(data) {
  return request(
    `${tender}/bidProviderEnroll/findConfirmProviderEnrollPage`,
    METHOD.GET,
    data
  );
}
//确认报名
export async function getConfirmedSignUp(providerEnrollIds, checkFlag) {
  return request(
    `${tender}/bidProviderEnroll/toConfirmProviderEnrollInfo`,
    METHOD.POST,
    {
      providerEnrollIds: providerEnrollIds,
      checkFlag: checkFlag
    }
  );
}
// 投标管理分页查询
export async function findProviderReplyForPage(data) {
  return request(
    `${tender}/bidProviderReply/findProviderReplyForPage`,
    METHOD.GET,
    data
  );
}
// 采购文件分页查询
export async function findProviderReplyFilesForPage(data) {
  return request(
    `${tender}/bidProviderReply/findProviderReplyFilesForPage`,
    METHOD.GET,
    data
  );
}
// 投标保证金分页查询
export async function findProviderReplyBondsForPage(data) {
  return request(
    `${tender}/bidProviderReply/findProviderReplyBondsForPage`,
    METHOD.GET,
    data
  );
}
// 投标保证金-确认付款
export async function toConfirmBondPay(payBussId) {
  return request(`${tender}/bidProviderReply/toConfirmBondPay`, METHOD.PUT, {
    payBussId: payBussId,
    checkFlag: false
  });
}
// 采购文件-确认付款
export async function toConfirmFilePay(data) {
  return request(
    `${tender}/bidProviderReply/toConfirmFilePay`,
    METHOD.PUT,
    data
  );
}
/**
 * 公告变更
 */
//公告变更查询界面
export async function getNoticeChangeList(data) {
  return request(
    `${tender}/noticeChange/findNoticeChangeForPage`,
    METHOD.GET,
    data
  );
}
//根据ID查询公告更改的详细信息
export async function getNoticeChangeDetail(data) {
  return request(
    `${tender}/noticeChange/findNoticeChangeRecordsInfo`,
    METHOD.GET,
    data
  );
}
//获取公告变更记录表的数据
export async function getNoticeChangeRecordList(data) {
  return request(
    `${tender}/noticeChange/findNoticeChangeRecordsForPage`,
    METHOD.GET,
    data
  );
}
//提交公告变更
export async function submitNoticeChange(id) {
  return request(
    `${tender}/noticeChange/toSubmitNoticeChange/${id}`,
    METHOD.PUT
  );
}
//保存公告变更
export async function signAndSaveNoticeChange(data) {
  return request(
    `${tender}/noticeChange/updateNoticeChangeRecordsInfo`,
    METHOD.PUT,
    data
  );
}
// 公告变更记录分页查询
export async function findNoticeChangeRecordsForPage(data) {
  return request(
    `${tender}/noticeChange/findNoticeChangeRecordsForPage`,
    METHOD.GET,
    data
  );
}

// export async function findEntrustByPage(data) {
//   return request(
//     `${prepare}/entrust/findEntrustByPage`,
//     METHOD.GET,
//     data
//   );
// }
export default {
  findProjectInfoByPage,
  addProjectInfo,
  projectCompeleted,
  findProjectInfoById,
  updateProjectInfo,
  deleteProjectInfo,
  validateProjectName,
  findProjectExplain,
  updateProjectExplain,
  validateProjectInfo,
  projectSubmit,
  findProductInfoByPage
};
