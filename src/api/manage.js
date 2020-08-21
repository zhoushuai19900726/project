import request from '@/utils/request'

// 基本链接
// const baseUrl = 'http://127.0.0.1:'
const baseUrl = 'http://192.168.1.113:'

const api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree',
  // 获取人员档案
  archiveManagement: baseUrl + '/smartCity/governRealPopulation/findGovernRealPopulationPage',
  // 修改人员档案
  editArchiveManagement: baseUrl + '/smartCity/governRealPopulation/insertGovernRealPopulation',
  // 删除人员档案
  delArchiveManagement: baseUrl + '/smartCity/governRealPopulation/deleteGovernRealPopulation'
}

export default api

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
