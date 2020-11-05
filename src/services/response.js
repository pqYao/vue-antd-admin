import { tender } from "@/services/api";
import { request, METHOD } from "@/utils/request";

//获取项目信息（tender服务下通用）
export async function getProjectInfoData(projectId) {
  return request(
    `${tender}/projectAbs/findProjectAbsInfo/${projectId}`,
    METHOD.GET
  );
}

//报名
//获取查询列
export async function getSignUpList(data) {
  return request(
    `${tender}/providerEnroll/findProviderEnrollForPage`,
    METHOD.GET,
    data
  );
}
//获取基本信息
export async function getSignUpBaseInfo(data) {
  return request(
    `${tender}/providerEnroll/findProviderEnrollInfo`,
    METHOD.GET,
    data
  );
}
//保存基本信息
export async function saveSignUpBaseInfo(data) {
  return request(
    `${tender}/providerEnroll/updateProviderEnrollInfo`,
    METHOD.POST,
    data
  );
}
//提交报名
export async function submitSignUp(data) {
  return request(
    `${tender}/providerEnroll/toSubmitProviderEnrollInfo`,
    METHOD.POST,
    data
  );
}
//保存联系人信息
export async function saveContactInfo(data) {
  return request(`${tender}/esBSubTender/finishSubTender`, METHOD.POST, data);
}
//应答
//获取查询列
export async function getAnswerList(data) {
  return request(
    `${tender}/providerReply/findProviderReplyForPage`,
    METHOD.GET,
    data
  );
}
//获取采购文件的列表数据
export async function getPurchaseFilesList(data) {
  return request(
    `${tender}/providerReply/findProviderReplyFilesForPage`,
    METHOD.GET,
    data
  );
}
//采购文件-线上/线下付款（取消付款）
export async function purchaseFilesPay(data) {
  return request(`${tender}/providerReply/toProviderFilePay`, METHOD.PUT, data);
}
//获取投标保证金的列表数据
export async function getBidBondList(data) {
  return request(
    `${tender}/providerReply/findProviderReplyBondsForPage`,
    METHOD.GET,
    data
  );
}
//投标保证金-线上/线下付款（取消付款）
export async function bidBondPay(data) {
  console.log(data);
  return request(`${tender}/providerReply/toProviderBondPay`, METHOD.PUT, data);
}
//获取应答信息的列表数据
export async function getAnswerInfoList(data) {
  return request(
    `${tender}/providerReply/findProviderReplyDetailsForPage`,
    METHOD.GET,
    data
  );
}
//根据应答信息的id获取基本信息
export async function getAnswerInfoDetailById(data, id) {
  return request(
    `${tender}/providerReply/findProviderReplayDetailInfo/${id}`,
    METHOD.GET,
    data
  );
}
//保存应答信息基本信息
export async function saveAnswerDetailInfo(data) {
  return request(
    `${tender}/providerReply/updateProviderReplyDetail`,
    METHOD.PUT,
    data
  );
}
//撤回应答信息
export async function getWithdrewAnswerInfo(data) {
  return request(
    `${tender}/providerReply/toBackProviderReplyInfo`,
    METHOD.PUT,
    data
  );
}
//提交应答信息
export async function getSubmitAnswerInfo(data) {
  return request(
    `${tender}/providerReply/toSubmitProviderReplyInfo`,
    METHOD.PUT,
    data
  );
}
//电子签名
export async function answerInfoEleSign(id) {
  return request(
    `${tender}/providerReply/toEleSignProviderReplyDetail/${id}`,
    METHOD.PUT
  );
}
//加密
export async function answerInfoEncrypted(id) {
  return request(
    `${tender}/providerReply/toEncryptedProviderReplyDetail/${id}`,
    METHOD.PUT
  );
}

// 公告/邀请函-查询公告/邀请函信息(根据项目ID)
export async function findSendTenderNoticeByProjectId(projectId, noticeType) {
  return request(
    `${tender}/sendTender/findSendTenderNoticeByProjectId`,
    METHOD.GET,
    {
      projectId: projectId,
      noticeType: noticeType
    }
  );
}
