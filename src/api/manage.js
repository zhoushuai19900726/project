import request from '@/utils/request'

// 基本链接
// const baseUrl = 'http://127.0.0.1:'
// 文佳406
const baseUrl = 'http://192.168.1.113:'
// 周帅gaopin02
// const baseUrl = 'http://192.168.1.106:'

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
  // 获取下拉的内容
  select: baseUrl + '/smartCity/dictionaryGroup/findDictionaryGroupByCode',
  // 获取人员档案
  archiveManagement: baseUrl + '/smartCity/governRealPopulation/findGovernRealPopulationPage',
  // 修改人员档案
  editArchiveManagement: baseUrl + '/smartCity/governRealPopulation/insertGovernRealPopulation',
  // 删除人员档案
  delArchiveManagement: baseUrl + '/smartCity/governRealPopulation/deleteGovernRealPopulation'
}

export default api
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

//   // 获取人员档案
export function getArchiveManagement (parameter) {
  return request({
    url: api.archiveManagement,
    method: 'post',
    data: parameter
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
