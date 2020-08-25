import request from '@/utils/request'
// import qs from 'qs'

// 基本链接
// const baseUrl = 'http://127.0.0.1:'
// 文佳406-1
const baseUrl = 'http://192.168.1.106:'
// 周帅gaopin02
// const baseUrl = 'http://192.168.1.112:'

const api = {
  // 学校周边重点人口 查询
  getKeyAroundSchool: baseUrl + '/smartCity/governKeyAroundSchool/findGovernKeyAroundSchoolPage',
  // 学校周边重点人口 添加/修改
  editKeyAroundSchool: baseUrl + '/smartCity/governKeyAroundSchool/findGovernKeyAroundSchoolPage',
  // 学校周边重点人口 删除
  deleteKeyAroundSchool: baseUrl + '/smartCity/governKeyAroundSchool/findGovernKeyAroundSchoolPage'
}
export default api
  // 学校周边重点人口 查询
export function getKeyAroundSchool (parameter) {
  return request({
    url: api.getKeyAroundSchool,
    data: parameter,
    method: 'POST'
  })
}
// 学校周边重点人口 添加/修改
export function editKeyAroundSchool (parameter) {
  return request({
    url: api.editKeyAroundSchool,
    data: parameter,
    method: 'POST'
  })
}
// 学校周边重点人口 删除
export function deleteKeyAroundSchool (parameter) {
  return request({
    url: api.deleteKeyAroundSchool,
    data: parameter,
    method: 'POST'
  })
}