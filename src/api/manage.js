import request from '@/utils/request'
import qs from 'qs'

// 基本链接
const baseUrl = 'http://60.205.246.7:'
// 文佳406
// const baseUrl = 'http://192.168.1.106:'
// 周帅gaopin02
// const baseUrl = 'http://192.168.1.112:'

const selectArr = [
  {
    title: '性别',
    code: 'GENDER'
  },
  {
    title: '民族',
    code: 'NATION'
  },
  {
    title: '婚姻状况',
    code: 'MARITAL'
  },
  {
    title: '政治面貌',
    code: 'POLITICAL_OUTLOOK'
  },
  {
    title: '学历',
    code: 'EDUCATION'
  },
  {
    title: '宗教信仰',
    code: 'RELIGIOUS_BELIEF'
  },
  {
    title: '职业类别',
    code: 'OCCUPATION_CATEGORY'
  },
  {
    title: '职业',
    code: 'OCCUPATION'
  },
  {
    title: '联系类型',
    code: 'CONTACT_TYPE'
  },
  {
    title: '标识',
    code: 'FLAG'
  },
  {
    title: '人员关系',
    code: 'RELATIONSHIP'
  },
  {
    title: '证件类型',
    code: 'DOCUMENT_TYPE'
  },
  {
    title: '住所类型',
    code: 'RESIDENCE_TYPE'
  },
  {
    title: '人员类型',
    code: 'PERSONNEL_TYPE'
  },
  {
    title: '残疾程度',
    code: 'DISABILITY_DEGREE'
  },
  {
    title: '残疾类型',
    code: 'DISABILITY_TYPE'
  },
  {
    title: '劳动能力',
    code: 'LABOR_CAPACITY'
  },
  {
    title: '供养标准',
    code: 'SUPPORT_STANDARD'
  },
  {
    title: '供养形式',
    code: 'SUPPORT_FORMS'
  },
  {
    title: '生育证类型',
    code: 'BIRTH_CERTIFICATE_TYPE'
  },
  {
    title: '节育类型',
    code: 'BIRTH_CONTROL_TYPE'
  },
  {
    title: '政策生育类型',
    code: 'POLICY_FERTILITY_TYPE'
  },
  {
    title: '奖励救助类型',
    code: 'REWARD_ASSISTANCE_TYPE'
  },
  {
    title: '危险性评估类型',
    code: 'RISK_ASSESSMENT_TYPE'
  },
  {
    title: '矫正类别',
    code: 'CORRECTION_CATEGORY'
  },
  {
    title: '案件类别',
    code: 'CASES_TYPE'
  },
  {
    title: '接收方式',
    code: 'RECEIVING_MODE'
  },
  {
    title: '矫正解除(终止)类型',
    code: 'CORRECTION_RELEASE_TYPE'
  },
  {
    title: '诊断类型',
    code: 'DIAGNOSIS_TYPE'
  },
  {
    title: '危险性评估等级',
    code: 'RISK_ASSESSMENT_LEVEL'
  },
  {
    title: '危害程度',
    code: 'HARM_DEGREE'
  }
]

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  // 获取所有的省份地址
  address: baseUrl + '/smartCity/addressLibrary/findSubordinateAddressLibrary',
  // 获取下拉的内容
  select: baseUrl + '/smartCity/dictionaryGroup/findDictionaryGroupByCode',
  // 搜索人员档案
  searchArchiveManagement: baseUrl + '/smartCity/governRealPopulation/findGovernRealPopulationByLikeContent',
  // 获取人员档案
  archiveManagement: baseUrl + '/smartCity/governRealPopulation/findGovernRealPopulationPage',
  // 修改人员档案
  editArchiveManagement: baseUrl + '/smartCity/governRealPopulation/insertGovernRealPopulation',
  // 删除人员档案
  delArchiveManagement: baseUrl + '/smartCity/governRealPopulation/deleteGovernRealPopulation',
  // 查询地址库
  findSubordinateAddressLibrary: baseUrl + '/smartCity/addressLibrary/findSubordinateAddressLibrary',
  // 刑满释放人口 查询列表
  getGovernReleasePrisoners: baseUrl + '/smartCity/governReleasePrisoners/findGovernReleasePrisonersPage',
  //  刑满释放人口 详情
  GovernReleasePrisonersDetail: baseUrl + '/smartCity/governReleasePrisoners/echoGovernReleasePrisoners',
  // 刑满释放人口 添加修改
  editGovernReleasePrisoners: baseUrl + '/smartCity/governReleasePrisoners/insertGovernReleasePrisoners',
  // 刑满释放人口 删除
  deleteGovernReleasePrisoners: baseUrl + '/smartCity/governReleasePrisoners/deleteGovernReleasePrisoners',
  // 社区矫正人口 查询
  getGovernCommunityCorrectionStaff: baseUrl + '/smartCity/governCommunityCorrectionStaff/findGovernCommunityCorrectionStaffPage',
  // 社区矫正人口 详情
  governCommunityCorrectionStaffDetail: baseUrl + '/smartCity/governCommunityCorrectionStaff/echoGovernCommunityCorrectionStaff',
  // 社区矫正人口 添加/修改
  editgovernCommunityCorrectionStaff: baseUrl + '/smartCity/governCommunityCorrectionStaff/insertGovernCommunityCorrectionStaff',
  // 社区矫正人口 删除
  deletegovernCommunityCorrectionStaff: baseUrl + '/smartCity/governCommunityCorrectionStaff/deleteGovernCommunityCorrectionStaff',
  // 肇事 精神障碍患者 查询
  getGovernMentalDisordersPage: baseUrl + '/smartCity/governMentalDisorders/findGovernMentalDisordersPage',
  // 肇事 精神障碍患者 详情
  governMentalDisordersDetail: baseUrl + '/smartCity/governMentalDisorders/echoGovernMentalDisorders',
  // 肇事 精神障碍患者 添加/修改
  editGovernMentalDisorders: baseUrl + '/smartCity/governMentalDisorders/insertGovernMentalDisorders',
  // 肇事 精神障碍患者 删除
  deleteGovernMentalDisorders: baseUrl + '/smartCity/governMentalDisorders/deleteGovernMentalDisorders',
  // 吸毒人口 查询
  getGovernDrugAddicts: baseUrl + '/smartCity/governDrugAddicts/findGovernDrugAddictsPage',
  // 吸毒人口 添加/修改
  editGovernDrugAddicts: baseUrl + '/smartCity/governDrugAddicts/insertGovernDrugAddicts',
  // 吸毒人口 删除
  deleteGovernDrugAddicts: baseUrl + '/smartCity/governDrugAddicts/deleteGovernDrugAddicts',
  // 艾滋病人 查询
  getGovernAidsRisk: baseUrl + '/smartCity/governAidsRiskPersonnel/findGovernAidsRiskPersonnelPage',
  // 艾滋病人 添加/修改
  editGovernAidsRisk: baseUrl + '/smartCity/governAidsRiskPersonnel/insertGovernAidsRiskPersonnel',
  // 艾滋病人 删除
  deleteGovernAidsRisk: baseUrl + '/smartCity/governAidsRiskPersonnel/deleteGovernAidsRiskPersonnel',
  // 重点青少年人口 查询
  getGovernKeyYouth: baseUrl + '/smartCity/governKeyYouth/findGovernKeyYouthPage',
  // 重点青少年人口 添加/修改
  editGovernKeyYouth: baseUrl + '/smartCity/governKeyYouth/insertGovernKeyYouth',
  // 重点青少年人口 删除
  deleteGovernKeyYouth: baseUrl + '/smartCity/governKeyYouth/deleteGovernKeyYouth',
  // 重点信访人口 查询
  getGovernKeyPetitioners: baseUrl + '/smartCity/governKeyPetitioners/findGovernKeyPetitionersPage',
  // 重点信访人口 添加/修改
  editGovernKeyPetitioners: baseUrl + '/smartCity/governKeyPetitioners/insertGovernKeyPetitioners',
  // 重点信访人口 删除
  deleteGovernKeyPetitioners: baseUrl + '/smartCity/governKeyPetitioners/deleteGovernKeyPetitioners'

}

export default api
// 获取所有省份的地址
export function getAddress (parameter) {
  var data = {}
  if (parameter) {
    data.parentCode = parameter
  }
  console.log(data)
  data = qs.stringify(data)
  console.log(data)
  return request({
    url: api.address,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: data
  })
}
// 获取下拉框的数据
export function getSelect (parameter) {
  console.log(parameter)
  var data = {}
  var code = selectArr.filter(item => item.title === parameter)[0].code
  data.code = code
  return request({
    url: api.select,
    method: 'post',
    data: data
  })
}

// 每个页面新增的时候 搜索获取档案列表
export function searchArchiveManagement (parameter) {
  console.log(parameter)
  var data = {
    content: parameter,
    pageSize: 10,
    pageNo: 1
  }
  data = qs.stringify(data)
  return request({
    url: api.searchArchiveManagement,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: data
  })
}

//   // 获取人员档案
export function getArchiveManagement (parameter) {
  // console.log(parameter)
  return request({
    url: api.archiveManagement,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    data: qs.stringify(parameter)
  })
}

// 新增和修改人员档案
export function editArchiveManagement (parameter) {
  console.log(parameter)
  return request({
    url: api.editArchiveManagement,
    method: 'post',
    data: parameter
  })
}

// 删除人员档案
export function delArchiveManagement (parameter) {
  console.log(parameter)
  return request({
    url: api.delArchiveManagement,
    method: 'post',
    data: parameter
  })
}

export function getUserList (parameter) {
  return request({
    url: api.user,
    method: 'get',
    params: parameter
  })
}

export function getRoleList (parameter) {
  return request({
    url: api.role,
    method: 'get',
    params: parameter
  })
}

export function getServiceList (parameter) {
  return request({
    url: api.service,
    method: 'get',
    params: parameter
  })
}

export function getPermissions (parameter) {
  return request({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  })
}

export function getOrgTree (parameter) {
  return request({
    url: api.orgTree,
    method: 'get',
    params: parameter
  })
}

// id == 0 add     post
// id != 0 update  put
export function saveService (parameter) {
  return request({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  })
}

export function saveSub (sub) {
  return request({
    url: '/sub',
    method: sub.id === 0 ? 'post' : 'put',
    data: sub
  })
}

export function findSubordinateAddressLibrary (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.findSubordinateAddressLibrary,
    method: 'post',
    data: parameter
  })
}

// 刑满释放人口 查询列表
export function getGovernReleasePrisoners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernReleasePrisoners,
    method: 'post',
    data: parameter
  })
}

// 刑满释放人口 添加/修改
export function editGovernReleasePrisoners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernReleasePrisoners,
    method: 'post',
    data: parameter
  })
}

// 刑满释放人口 删除
export function deleteGovernReleasePrisoners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernReleasePrisoners,
    method: 'post',
    data: parameter
  })
}

// 社区矫正人口 查询
export function getGovernCommunityCorrectionStaff (parameter) {
  return request({
    url: api.getGovernCommunityCorrectionStaff,
    method: 'post',
    data: parameter
  })
}
// 社区矫正人口 添加/修改
export function editgovernCommunityCorrectionStaff (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editgovernCommunityCorrectionStaff,
    method: 'post',
    data: parameter
  })
}
// 社区矫正人口 删除
export function deletegovernCommunityCorrectionStaff (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deletegovernCommunityCorrectionStaff,
    method: 'post',
    data: parameter
  })
}
// 肇事 精神障碍患者 查询
export function getGovernMentalDisordersPage (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernMentalDisordersPage,
    method: 'post',
    data: parameter
  })
}
// 肇事 精神障碍患者 添加/修改
export function editGovernMentalDisorders (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernMentalDisorders,
    method: 'post',
    data: parameter
  })
}
// 肇事 精神障碍患者 删除
export function deleteGovernMentalDisorders (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernMentalDisorders,
    method: 'post',
    data: parameter
  })
}
// 吸毒人口 查询
export function getGovernDrugAddicts (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernDrugAddicts,
    method: 'post',
    data: parameter
  })
}
// 吸毒人口 添加/修改
export function editGovernDrugAddicts (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernDrugAddicts,
    method: 'post',
    data: parameter
  })
}
// 吸毒人口 删除
export function deleteGovernDrugAddicts (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernDrugAddicts,
    method: 'post',
    data: parameter
  })
}
// 艾滋病人 查询
export function getGovernAidsRisk (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernAidsRisk,
    method: 'post',
    data: parameter
  })
}
// 艾滋病人 添加/修改
export function editGovernAidsRisk (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernAidsRisk,
    method: 'post',
    data: parameter
  })
}
// 艾滋病人 删除
export function deleteGovernAidsRisk (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernAidsRisk,
    method: 'post',
    data: parameter
  })
}
// 重点青少年人口 查询
export function getGovernKeyYouth (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernKeyYouth,
    method: 'post',
    data: parameter
  })
}
// 重点青少年人口 修改/新增
export function editGovernKeyYouth (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernKeyYouth,
    method: 'post',
    data: parameter
  })
}
// 重点青少年人口 删除
export function deleteGovernKeyYouth (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernKeyYouth,
    method: 'post',
    data: parameter
  })
}
// 重点信访人口 查询
export function getGovernKeyPetitioners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.getGovernKeyPetitioners,
    method: 'post',
    data: parameter
  })
}
// 重点信访人口 添加/修改
export function editGovernKeyPetitioners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.editGovernKeyPetitioners,
    method: 'post',
    data: parameter
  })
}
// 重点信访人口 删除
export function deleteGovernKeyPetitioners (parameter) {
  return request({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    url: api.deleteGovernKeyPetitioners,
    method: 'post',
    data: parameter
  })
}
