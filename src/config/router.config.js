// eslint-disable-next-line
import { UserLayout, BasicLayout, BlankLayout } from '@/layouts'
import { bxAnaalyse } from '@/core/icons'

const RouteView = {
  name: 'RouteView',
  render: (h) => h('router-view')
}

export const asyncRouterMap = [

  {
      path: '/',
      name: 'index',
      component: BasicLayout,
      meta: { title: 'menu.home' },
      redirect: '/dashboard/analysis',
      children: [
        // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/analysis',
        component: RouteView,
        meta: { title: '首页', keepAlive: true, icon: bxAnaalyse, permission: [ 'dashboard' ] },
        children: [
          {
            path: '/dashboard/analysis/:pageNo([1-9]\\d*)?',
            name: 'Analysis',
            component: () => import('@/views/dashboard/Analysis'),
            meta: { title: '统计', keepAlive: false, permission: [ 'dashboard' ] }
          }
        ]
      },

      {
        path: '/actualPopulation',
        name: 'actualPopulation',
        component: RouteView,
        redirect: '/actualPopulation/censusRegister-List',
        meta: { title: '实有人口信息', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/actualPopulation/censusRegister-List/:pageNo([1-9]\\d*)?',
            name: 'censusRegisterList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/censusRegister/List'),
            meta: { title: '户籍人口', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/flow-List/:pageNo([1-9]\\d*)?',
            name: 'flowList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/flow/List'),
            meta: { title: '流动人口', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/rear-List/:pageNo([1-9]\\d*)?',
            name: 'rearList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/rear/List'),
            meta: { title: '留守人口', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/overseasReople-List/:pageNo([1-9]\\d*)?',
            name: 'overseasReopleList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/overseasReople/List'),
            meta: { title: '境外人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/sanwu-List/:pageNo([1-9]\\d*)?',
            name: 'sanwuList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/sanwu/List'),
            meta: { title: '三无老人', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/emptyNester-List/:pageNo([1-9]\\d*)?',
            name: 'emptyNesterList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/emptyNester/List'),
            meta: { title: '空巢老人', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/death-List/:pageNo([1-9]\\d*)?',
            name: 'deathList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/death/List'),
            meta: { title: ' 死亡人口', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/disability-List/:pageNo([1-9]\\d*)?',
              name: 'disabilityList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/disability/List'),
            meta: { title: '残疾人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/basicLivingAllowance-List/:pageNo([1-9]\\d*)?',
              name: 'basicLivingAllowanceList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/basicLivingAllowance/List'),
            meta: { title: '低保人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/exceptionalPoverty-List/:pageNo([1-9]\\d*)?',
              name: 'exceptionalPovertyList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/exceptionalPoverty/List'),
            meta: { title: '特困人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/idleTeenager-List/:pageNo([1-9]\\d*)?',
              name: 'idleTeenagerList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/idleTeenager/List'),
            meta: { title: '闲散青少年', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/reproductiveHealth-List/:pageNo([1-9]\\d*)?',
              name: 'reproductiveHealthList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/reproductiveHealth/List'),
            meta: { title: '生殖保健', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/actualPopulation/serviceWork-List/:pageNo([1-9]\\d*)?',
              name: 'serviceWorkList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/actualPopulation/serviceWork/List'),
            meta: { title: '就业/失业服务', keepAlive: true, permission: [ 'table' ] }
          }
        ]
      },

      {
        path: '/house',
        name: 'house',
        component: RouteView,
        redirect: '/house/rentalHousing-List',
        meta: { title: '房屋', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/house/rentalHousing-List',
            name: 'rentalHousingList',
            component: () => import('@/views/house/rentalHousing/List'),
          meta: { title: '出租房', permission: [ 'profile' ] }
          }
        ]
      },

      {
        path: '/specialCrowd',
        name: 'specialCrowd',
        component: RouteView,
        redirect: '/specialCrowd/releasedFromPrison-List',
        meta: { title: '特殊人群信息', icon: 'table', permission: [ 'table' ] },
        children: [
          {
            path: '/specialCrowd/releasedFromPrison-List/:pageNo([1-9]\\d*)?',
            name: 'releasedFromPrisonList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/releasedFromPrison/List'),
            meta: { title: '刑满释放人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/communityCorrection-List/:pageNo([1-9]\\d*)?',
            name: 'communityCorrectionList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/communityCorrection/List'),
            meta: { title: '社区矫正人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/psychosis-List/:pageNo([1-9]\\d*)?',
            name: 'psychosisList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/psychosis/List'),
            meta: { title: '肇事肇祸等严重精神障碍患者', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/takeDrugs-List/:pageNo([1-9]\\d*)?',
            name: 'takeDrugsList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/takeDrugs/List'),
            meta: { title: '吸毒人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/Aids-List/:pageNo([1-9]\\d*)?',
            name: 'AidsList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/Aids/List'),
            meta: { title: '艾滋病危险人员', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/adolescent-List/:pageNo([1-9]\\d*)?',
            name: 'adolescentList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/adolescent/List'),
            meta: { title: '重点青少年', keepAlive: true, permission: [ 'table' ] }
          },
          {
            path: '/specialCrowd/petitionLetter-List/:pageNo([1-9]\\d*)?',
            name: 'petitionLetterList',
            hideChildrenInMenu: true, // 强制显示 MenuItem 而不是 SubMenu
            component: () => import('@/views/specialCrowd/petitionLetter/List'),
            meta: { title: '信访重点人员', keepAlive: true, permission: [ 'table' ] }
          }
        ]
      },

      {
        path: '/twoNewGroup',
        name: 'twoNewGroup',
        component: RouteView,
        redirect: '/twoNewGroup/nonpublicSectorsOfTheRconomy-List',
        meta: { title: '两新组织', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/twoNewGroup/nonpublicSectorsOfTheRconomy-List',
            name: 'nonpublicSectorsOfTheRconomyList',
            component: () => import('@/views/twoNewGroup/nonpublicSectorsOfTheRconomy/List'),
            meta: { title: '非公有制经济组织', permission: [ 'profile' ] }
          },
          {
            path: '/twoNewGroup/society-List',
            name: 'societyList',
            component: () => import('@/views/twoNewGroup/society/List'),
            meta: { title: '社会组织', permission: [ 'profile' ] }
          }
        ]
      },

      {
        path: '/security0fSociety',
        name: 'security0fSociety',
        component: RouteView,
        redirect: '/security0fSociety/keyRegion-List',
        meta: { title: '社会治安防控', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/security0fSociety/keyRegion-List',
            name: 'keyRegionList',
            component: () => import('@/views/security0fSociety/keyRegion/List'),
            meta: { title: '重点地区排查整治', permission: [ 'profile' ] }
          },
          {
            path: '/security0fSociety/homicideCase',
            name: 'homicideCase',
            component: () => import('@/views/security0fSociety/homicideCase/SearchLayout'),
            meta: { title: '命案防控', keepAlive: true, permission: [ 'table' ] },
            children: [
              {
                path: '/security0fSociety/homicideCase/basicInformation-List',
                name: 'basicInformationList',
                component: () => import('@/views/security0fSociety/homicideCase/basicInformation/List'),
                meta: { title: '命案基本信息', permission: [ 'table' ] }
              },
              {
                path: '/security0fSociety/homicideCase/criminalSuspect-List',
                name: 'criminalSuspectList',
                component: () => import('@/views/security0fSociety/homicideCase/criminalSuspect/List'),
                meta: { title: '命案犯罪嫌疑人', permission: [ 'table' ] }
              },
              {
                path: '/security0fSociety/homicideCase/victim-List',
                name: 'victimList',
                component: () => import('@/views/security0fSociety/homicideCase/victim/List'),
                meta: { title: '命案受害人', permission: [ 'table' ] }
              }
            ]
          },
          {
            path: '/security0fSociety/logistics-List',
            name: 'logisticsList',
            component: () => import('@/views/security0fSociety/logistics/List'),
            meta: { title: '寄递物流安全管理', permission: [ 'profile' ] }
          }
        ]
      },

      {
        path: '/campusSecurity',
        name: 'campusSecurity',
        component: RouteView,
        redirect: '/campusSecurity/school-List',
        meta: { title: '校园及周边安全', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/campusSecurity/school-List',
            name: 'schoolList',
            component: () => import('@/views/campusSecurity/school/List'),
          meta: { title: '学校', permission: [ 'profile' ] }
          },
          {
            path: '/campusSecurity/theKeyPersonnel-List',
              name: 'theKeyPersonnelList',
            component: () => import('@/views/campusSecurity/theKeyPersonnel/List'),
            meta: { title: '学校周边重点人员', permission: [ 'profile' ] }
          },
          {
            path: '/campusSecurity/theTeachersAndStudentsSafe-List',
              name: 'theTeachersAndStudentsSafeList',
            component: () => import('@/views/campusSecurity/theTeachersAndStudentsSafe/List'),
            meta: { title: '涉及师生安全的案(事)件', permission: [ 'profile' ] }
          }
        ]
      },

      {
        path: '/roadConvenient',
        name: 'roadConvenient',
        component: RouteView,
        redirect: '/roadConvenient/roadConvenient-List',
        meta: { title: '护路护线', icon: 'profile', permission: [ 'profile' ] },
        children: [
          {
            path: '/roadConvenient/roadConvenient-List',
            name: 'roadConvenientList',
            component: () => import('@/views/roadConvenient/roadConvenient/List'),
          meta: { title: '护路护线', permission: [ 'profile' ] }
          },
          {
            path: '/roadConvenient/theRoadCase-List',
              name: 'theRoadCaseList',
            component: () => import('@/views/roadConvenient/theRoadCase/List'),
            meta: { title: '涉及线、路案(事)件', permission: [ 'profile' ] }
          }
        ]
      }

      // other
      /*
      {
        path: '/other',
        name: 'otherPage',
        component: PageView,
        meta: { title: '其他组件', icon: 'slack', permission: [ 'dashboard' ] },
        redirect: '/other/icon-selector',
        children: [
          {
            path: '/other/icon-selector',
            name: 'TestIconSelect',
            component: () => import('@/views/other/IconSelectorView'),
            meta: { title: 'IconSelector', icon: 'tool', keepAlive: true, permission: [ 'dashboard' ] }
          },
          {
            path: '/other/list',
            component: RouteView,
            meta: { title: '业务布局', icon: 'layout', permission: [ 'support' ] },
            redirect: '/other/list/tree-list',
            children: [
              {
                path: '/other/list/tree-list',
                name: 'TreeList',
                component: () => import('@/views/other/TreeList'),
                meta: { title: '树目录表格', keepAlive: true }
              },
              {
                path: '/other/list/edit-table',
                name: 'EditList',
                component: () => import('@/views/other/TableInnerEditList'),
                meta: { title: '内联编辑表格', keepAlive: true }
              },
              {
                path: '/other/list/user-list',
                name: 'UserList',
                component: () => import('@/views/other/UserList'),
                meta: { title: '用户列表', keepAlive: true }
              },
              {
                path: '/other/list/role-list',
                name: 'RoleList',
                component: () => import('@/views/other/RoleList'),
                meta: { title: '角色列表', keepAlive: true }
              },
              {
                path: '/other/list/system-role',
                name: 'SystemRole',
                component: () => import('@/views/role/RoleList'),
                meta: { title: '角色列表2', keepAlive: true }
              },
              {
                path: '/other/list/permission-list',
                name: 'PermissionList',
                component: () => import('@/views/other/PermissionList'),
                meta: { title: '权限列表', keepAlive: true }
              }
            ]
          }
        ]
      }
      */
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/Register')
      },
      {
        path: 'register-result',
        name: 'registerResult',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/RegisterResult')
      },
      {
        path: 'recover',
        name: 'recover',
        component: undefined
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }

]
