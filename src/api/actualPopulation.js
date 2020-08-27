import request from '@/utils/request'
import qs from 'qs'
// 获取基本链接的地址
import baseUrl from '@/api/baseurl'

const api = {
  // 户籍人口 查询
  getRegisteredPopulation: baseUrl + '/smartCity/governRegisteredPopulation/findGovernRegisteredPopulationPage',
  // 户籍人口 添加/修改
  editRegisteredPopulation: baseUrl + '/smartCity/governRegisteredPopulation/insertGovernRegisteredPopulation',
  // 户籍人口 删除
  deleteRegisteredPopulation: baseUrl + '/smartCity/governRegisteredPopulation/deleteGovernRegisteredPopulation',
  // 流动人口 查询
  getFloatingPopulation: baseUrl + '/smartCity/governFloatingPopulation/findGovernFloatingPopulationPage',
  // 流动人口 添加/修改
  editFloatingPopulation: baseUrl + '/smartCity/governFloatingPopulation/insertGovernFloatingPopulation',
  // 流动人口 删除
  deleteFloatingPopulation: baseUrl + '/smartCity/governFloatingPopulation/deleteGovernFloatingPopulation',
  // 留守人口 查询
  getftBehindPopulation: baseUrl + '/smartCity/governLeftBehindPopulation/findGovernLeftBehindPopulationPage',
  // 留守人口 添加/修改
  editftBehindPopulation: baseUrl + '/smartCity/governLeftBehindPopulation/insertGovernLeftBehindPopulation',
  // 留守人口 删除
  deleteftBehindPopulation: baseUrl + '/smartCity/governLeftBehindPopulation/deleteGovernLeftBehindPopulation',
  // 境外人口 查询
  getOverseasPersonnel: baseUrl + '/smartCity/governOverseasPersonnel/findGovernOverseasPersonnelPage',
  // 境外人口 添加/修改
  editOverseasPersonnel: baseUrl + '/smartCity/governOverseasPersonnel/insertGovernOverseasPersonnel',
  // 境外人口 删除
  deleteOverseasPersonnel: baseUrl + '/smartCity/governOverseasPersonnel/deleteGovernOverseasPersonnel',
  // 三无老人 查询
  getThreeNonElderly: baseUrl + '/smartCity/governThreeNonElderly/findGovernThreeNonElderlyPage',
  // 三无老人 添加/修改
  editThreeNonElderly: baseUrl + '/smartCity/governThreeNonElderly/insertGovernThreeNonElderly',
  // 三无老人 删除
  deleteThreeNonElderly: baseUrl + '/smartCity/governThreeNonElderly/deleteGovernThreeNonElderly',
  // 空巢老人 查询
  getEmptyNesterPage: baseUrl + '/smartCity/governEmptyNester/findGovernEmptyNesterPage',
  // 空巢老人 添加/修改
  editEmptyNesterPage: baseUrl + '/smartCity/governEmptyNester/insertGovernEmptyNester',
  // 空巢老人 删除
  deleteEmptyNesterPage: baseUrl + '/smartCity/governEmptyNester/deleteGovernEmptyNester',
  // 死亡人口 查询
  getDeadPopulation: baseUrl + '/smartCity/governDeadPopulation/findGovernDeadPopulationPage',
  // 死亡人口 查询
  editDeadPopulation: baseUrl + '/smartCity/governDeadPopulation/insertGovernDeadPopulation',
  // 死亡人口 查询
  deleteDeadPopulation: baseUrl + '/smartCity/governDeadPopulation/deleteGovernDeadPopulation',
  // 残疾人口 查询
  getDisabledPersons: baseUrl + '/smartCity/governDisabledPersons/findGovernDisabledPersonsPage',
  // 残疾人口 添加/修改
  editDisabledPersons: baseUrl + '/smartCity/governDisabledPersons/insertGovernDisabledPersons',
  // 残疾人口 删除
  deleteDisabledPersons: baseUrl + '/smartCity/governDisabledPersons/deleteGovernDisabledPersons',
  // 低保人口 查询
  getSubsistence: baseUrl + '/smartCity/governSubsistenceAllowances/findGovernSubsistenceAllowancesPage',
  // 低保人口 添加/修改
  editSubsistence: baseUrl + '/smartCity/governSubsistenceAllowances/insertGovernSubsistenceAllowances',
  // 低保人口 删除
  deleteSubsistence: baseUrl + '/smartCity/governSubsistenceAllowances/deleteGovernSubsistenceAllowances',
  // 特困人口 查询
  getExtremelyPoorPeople: baseUrl + '/smartCity/governExtremelyPoorPeople/findGovernExtremelyPoorPeoplePage',
  // 特困人口 添加/修改
  editExtremelyPoorPeople: baseUrl + '/smartCity/governExtremelyPoorPeople/insertGovernExtremelyPoorPeople',
  // 特困人口 删除
  deleteExtremelyPoorPeople: baseUrl + '/smartCity/governExtremelyPoorPeople/deleteGovernExtremelyPoorPeople',
  // 闲散青少年 查询
  getIdleYouth: baseUrl + '/smartCity/governIdleYouth/findGovernIdleYouthPage',
  // 闲散青少年 添加/修改
  editIdleYouth: baseUrl + '/smartCity/governIdleYouth/insertGovernIdleYouth',
  // 闲散青少年 删除
  deleteIdleYouth: baseUrl + '/smartCity/governIdleYouth/deleteGovernIdleYouth',
  // 生殖保健人口 查询
  getReproductive: baseUrl + '/smartCity/governReproductiveHealth/findGovernReproductiveHealthPage',
  // 生殖保健人口 添加/修改
  editReproductive: baseUrl + '/smartCity/governReproductiveHealth/insertGovernReproductiveHealth',
  // 生殖保健人口 删除
  deleteReproductive: baseUrl + '/smartCity/governReproductiveHealth/deleteGovernReproductiveHealth',
  // 就业失业人口 查询
  getEmploymentServices: baseUrl + '/smartCity/governEmploymentServices/findGovernEmploymentServicesPage',
  // 就业失业人口 添加/修改
  editEmploymentServices: baseUrl + '/smartCity/governEmploymentServices/insertGovernEmploymentServices',
  // 就业失业人口 删除
  deleteEmploymentServices: baseUrl + '/smartCity/governEmploymentServices/deleteGovernEmploymentServices'
}

// 户籍人口 查询
export function getRegisteredPopulation (parameter) {
  return request({
    url: api.getRegisteredPopulation,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    // data: parameter
    data: qs.stringify(parameter)
  })
}
// 户籍人口 添加/修改
export function editRegisteredPopulation (parameter) {
  return request({
    url: api.editRegisteredPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 户籍人口 删除
export function deleteRegisteredPopulation (parameter) {
  console.log(parameter)
  return request({
    url: api.deleteRegisteredPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 流动人口 查询
export function getFloatingPopulation (parameter) {
  return request({
    url: api.getFloatingPopulation,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 流动人口 添加/修改
export function editFloatingPopulation (parameter) {
  return request({
    url: api.editFloatingPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 流动人口 删除
export function deleteFloatingPopulation (parameter) {
  return request({
    url: api.deleteFloatingPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 留守人口 查询
export function getftBehindPopulation (parameter) {
  return request({
    url: api.getftBehindPopulation,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 留守人口 添加/修改
export function editftBehindPopulation (parameter) {
  return request({
    url: api.editftBehindPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 留守人口 删除
export function deleteftBehindPopulation (parameter) {
  return request({
    url: api.deleteftBehindPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 境外人口 查询
export function getOverseasPersonnel (parameter) {
  return request({
    url: api.getOverseasPersonnel,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 境外人口 添加/修改
export function editOverseasPersonnel (parameter) {
  return request({
    url: api.editOverseasPersonnel,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 境外人口 删除
export function deleteOverseasPersonnel (parameter) {
  return request({
    url: api.deleteOverseasPersonnel,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 三无老人 查询
export function getThreeNonElderly (parameter) {
  return request({
    url: api.getThreeNonElderly,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 三无老人 添加/修改
export function editThreeNonElderly (parameter) {
  return request({
    url: api.editThreeNonElderly,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 三无老人 删除
export function deleteThreeNonElderly (parameter) {
  return request({
    url: api.deleteThreeNonElderly,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 空巢老人 查询
export function getEmptyNesterPage (parameter) {
  return request({
    url: api.getEmptyNesterPage,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 空巢老人 添加/修改
export function editEmptyNesterPage (parameter) {
  return request({
    url: api.editEmptyNesterPage,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 空巢老人 删除
export function deleteEmptyNesterPage (parameter) {
  return request({
    url: api.deleteEmptyNesterPage,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 死亡人口 查询
export function getDeadPopulation (parameter) {
  return request({
    url: api.getDeadPopulation,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 死亡人口 添加/修改
export function editDeadPopulation (parameter) {
  return request({
    url: api.editDeadPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 死亡人口 删除
export function deleteDeadPopulation (parameter) {
  return request({
    url: api.deleteDeadPopulation,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 残疾人口 查询
export function getDisabledPersons (parameter) {
  return request({
    url: api.getDisabledPersons,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 残疾人口 添加/修改
export function editDisabledPersons (parameter) {
  return request({
    url: api.editDisabledPersons,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 残疾人口 删除
export function deleteDisabledPersons (parameter) {
  return request({
    url: api.deleteDisabledPersons,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 低保人口 查询
export function getSubsistence (parameter) {
  return request({
    url: api.getSubsistence,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 低保人口 添加/修改
export function editSubsistence (parameter) {
  return request({
    url: api.editSubsistence,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 低保人口 删除
export function deleteSubsistence (parameter) {
  return request({
    url: api.deleteSubsistence,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 特困人口 查询
export function getExtremelyPoorPeople (parameter) {
  return request({
    url: api.getExtremelyPoorPeople,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 特困人口 添加/修改
export function editExtremelyPoorPeople (parameter) {
  return request({
    url: api.editExtremelyPoorPeople,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 特困人口 删除
export function deleteExtremelyPoorPeople (parameter) {
  return request({
    url: api.deleteExtremelyPoorPeople,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 闲散青少年 查询
export function getIdleYouth (parameter) {
  return request({
    url: api.getIdleYouth,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 闲散青少年 添加/修改
export function editIdleYouth (parameter) {
  return request({
    url: api.editIdleYouth,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 闲散青少年 删除
export function deleteIdleYouth (parameter) {
  return request({
    url: api.deleteIdleYouth,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 生殖保健人口 查询
export function getReproductive (parameter) {
  return request({
    url: api.getReproductive,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 生殖保健人口 添加/修改
export function editReproductive (parameter) {
  return request({
    url: api.editReproductive,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 生殖保健人口 删除
export function deleteReproductive (parameter) {
  return request({
    url: api.deleteReproductive,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 就业失业人口 查询
export function getEmploymentServices (parameter) {
  return request({
    url: api.getEmploymentServices,
    headers: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'POST',
    data: parameter
  })
}
// 就业失业人口 添加/修改
export function editEmploymentServices (parameter) {
  return request({
    url: api.editEmploymentServices,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
// 就业失业人口 删除
export function deleteEmploymentServices (parameter) {
  return request({
    url: api.deleteEmploymentServices,
    // headers: {
    //   'content-type': 'application/x-www-form-urlencoded'
    // },
    method: 'POST',
    data: parameter
  })
}
