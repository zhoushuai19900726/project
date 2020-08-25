import request from '@/utils/request'

// 基本链接
// const baseUrl = 'http://127.0.0.1:'
// 文佳406-1
const baseUrl = 'http://192.168.1.106:'
// 周帅gaopin02
// const baseUrl = 'http://192.168.1.112:'

const api = {
  // 学校周边重点人口  获取
  getGovernKeyAroundSchool: baseUrl + '/smartCity/governKeyAroundSchool/findGovernKeyAroundSchoolPage',
  // getGovernKeyAroundSchool: baseUrl + '/smartCity/addressLibrary/findSubordinateAddressLibrary',
  // 详情
  governKeyAroundSchoolDetail: baseUrl + '/smartCity/governKeyAroundSchool/echoGovernKeyAroundSchool',
  // 添加/修改
  GovernKeyAroundSchoolAddOrEdit: baseUrl + '/smartCity/governKeyAroundSchool/insertGovernKeyAroundSchool',
  // 删除
  governKeyAroundSchoolDelete: baseUrl + '/smartCity/governKeyAroundSchool/deleteGovernKeyAroundSchool'
}
export default api

// 学校周边重点人口获取
export function getGovernKeyAroundSchool (parameter) {
  return request({
    url: api.getGovernKeyAroundSchool,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 学校周边重点人口详情
export function governKeyAroundSchoolDetail (parameter) {
  return request({
    url: api.governKeyAroundSchoolDetail,
    data: parameter,
    method: 'POST'
  })
}
// 学校周边重点人口 新增/修改
export function GovernKeyAroundSchoolAddOrEdit (parameter) {
  return request({
    url: api.GovernKeyAroundSchoolAddOrEdit,
    data: parameter,
    method: 'POST'
  })
}
// 学校周边重点人口 删除
export function governKeyAroundSchoolDelete (parameter) {
  return request({
    url: api.governKeyAroundSchoolDelete,
    data: parameter,
    method: 'POST'
  })
}
