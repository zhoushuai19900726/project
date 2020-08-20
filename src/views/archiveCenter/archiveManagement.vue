<template>
  <page-header-wrapper>
    <history></history>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="公民身份证号码">
                <a-input
                  v-model="queryParam.idCard"
                  placeholder
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="姓名">
                <a-input
                  v-model="queryParam.fullName"
                  placeholder
                />
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="曾用名">
                  <a-input
                    v-model="queryParam.nameUsedBefore"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="性别">
                  <a-select
                    v-model="queryParam.gender"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="男">男</a-select-option>
                    <a-select-option value="女">女</a-select-option>n>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="出生日期">
                  <a-date-picker
                    v-model="queryParam.birthday"
                    style="width: 100%"
                    placeholder="请输入出生日期"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="民族">
                  <a-select
                    v-model="queryParam.nation"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="汉">汉</a-select-option>
                    <a-select-option value="壮族">壮族</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="籍贯">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'NATIVE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="婚姻状况">
                  <a-select
                    placeholder="请选择"
                    v-model="queryParam.marital"
                    default-value=""
                  >
                    <a-select-option value="已婚">已婚</a-select-option>
                    <a-select-option value="未婚">未婚</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="政治面貌">
                  <a-select
                    v-model="queryParam.politicalOutlook"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="党员">党员</a-select-option>
                    <a-select-option value="共青团员">共青团员</a-select-option>
                    <a-select-option value="群众">群众</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="学历">
                  <a-select
                    v-model="queryParam.education"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="高中">高中</a-select-option>
                    <a-select-option value="中专">中专</a-select-option>
                    <a-select-option value="大专">大专</a-select-option>
                    <a-select-option value="大学本科">大学本科</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="宗教信仰">
                  <a-select
                    v-model="queryParam.religiousBelife"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="职业类别">
                  <a-select
                    v-model="queryParam.occupationCatgory"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="">无</a-select-option>
                    <a-select-option value="企业单位负责人">企业单位负责人</a-select-option>
                    <a-select-option value="务农">务农</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="职业">
                  <a-select
                    v-model="queryParam.occupation"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="">无</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="服务处所">
                  <a-input
                    v-model="queryParam.servicePlace"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="联系类型">
                  <a-select
                    v-model="queryParam.contactType"
                    placeholder="请选择"
                    default-value=""
                  >
                    <a-select-option value="">无</a-select-option>
                    <a-select-option value="邮箱">邮箱</a-select-option>
                    <a-select-option value="手机号">手机号</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="联系方式">
                  <a-input
                    v-model="queryParam.contactInformation"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'PLACE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍门(楼)详址">
                  <a-input
                    v-model="queryParam.placeDomicileAddress"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住址">
                  <a-cascader
                    :options="options"
                    placeholder="请选择"
                    @change="onChange($event,'CURRENT')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住门(楼)详址">
                  <a-input
                    v-model="queryParam.currentResidenceAddress"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
            </template>
            <a-col
              :md="!advanced && 8 || 24"
              :sm="24"
            >
              <span
                class="table-page-search-submitButtons"
                :style="advanced && { float: 'right', overflow: 'hidden' } || {} "
              >
                <a-button
                  type="primary"
                  @click="$refs.table.refresh(true)"
                >查询</a-button>
                <a-button
                  style="margin-left: 8px"
                  @click="() => this.queryParam = {}"
                >重置</a-button>
                <a
                  @click="toggleAdvanced"
                  style="margin-left: 8px"
                >
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'" />
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button
          type="primary"
          icon="plus"
          @click="handleAdd"
        >新建</a-button>
        <a-dropdown
          v-action:edit
          v-if="selectedRowKeys.length > 0"
        >
          <a-menu slot="overlay">
            <a-menu-item key="1">
              <a-icon type="delete" />删除
            </a-menu-item>
            <!-- lock | unlock -->
            <a-menu-item key="2">
              <a-icon type="lock" />锁定
            </a-menu-item>
          </a-menu>
          <a-button style="margin-left: 8px">
            批量操作
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
        :scroll="{ x:true}"
      >

        <!-- 序号 -->
        <span
          slot="serial"
          slot-scope="text, record, index"
        >{{ index + 1 }}</span>

        <!-- 身份证号为了防止超出 限制了显示的长度 -->
        <span
          slot="idCard"
          slot-scope="text"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 姓名的自定义 -->
        <span
          slot="fullName"
          slot-scope="text"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 曾用名的自定义 -->
        <span
          slot="nameUsedBefore"
          slot-scope="text"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 地址的自定义 -->
        <span
          slot="nativePlace"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 联系方式的自定义 -->
        <span
          slot="contactInformation"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 户籍地 户籍地详细地址  现住址 现住详细地址 -->
        <span
          slot="placeDomicile"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <span
          slot="placeDomicileAddress"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <span
          slot="currentResidence"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <span
          slot="currentResidenceAddress"
          slot-scope="text"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ text }}</ellipsis>
        </span>

        <!-- 以后可能会有修改和显示的需求 -->
        <span
          slot="action"
          slot-scope="text, record"
        >
          <template>
            <a @click="handleEdit(record)">修改</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">查看</a>
            <a-divider type="vertical" />
            <a @click="handleDel(record)">删除</a>
          </template>
        </span>
      </s-table>

      <create-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :options="options"
        :model="mdl"
        @cancel="handleCancel"
        @ok="handleOk"
      />
      <step-by-step-modal
        ref="modal"
        @ok="handleOk"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getRoleList, getServiceList } from '@/api/manage'
// import { getRoleList, getArchiveManagement } from '@/api/manage'

import StepByStepModal from './modules/StepByStepModal'
import CreateForm from './modules/CreateForm'

const columns = [
  {
    title: '#',
    scopedSlots: { customRender: 'serial' },
    fixed: 'left'
  },
  {
    title: '公民身份证号',
    dataIndex: 'idCard',
    width: '100',
    scopedSlots: { customRender: 'idCard' }
  },
  {
    title: '姓名',
    dataIndex: 'fullName',
    width: 100,
    scopedSlots: { customRender: 'fullName' }
  },
  {
    title: '曾用名',
    dataIndex: 'nameUsedBefore',
    width: 100,
    scopedSlots: { customRender: 'nameUsedBefore' }
  },
  {
    title: '性别',
    dataIndex: 'gender'
    // scopedSlots: { customRender: 'status' }
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    sorter: true
  },
  {
    title: '民族',
    dataIndex: 'nation'
    // width: '150px',
    // scopedSlots: { customRender: 'action' }
  },
  {
    title: '籍贯',
    dataIndex: 'nativePlace',
    scopedSlots: { customRender: 'nativePlace' }
  },
  {
    title: '婚姻状况',
    dataIndex: 'marital'
  },
  {
    title: '政治面貌',
    dataIndex: 'politicalOutlook'
  },
  {
    title: '学历',
    dataIndex: 'education'
  },
  {
    title: '宗教信仰',
    dataIndex: 'religiousBelife'
  },
  {
    title: '职业类别',
    dataIndex: 'occupationCatgory'
  },
  {
    title: '职业',
    dataIndex: 'occupation'
  },
  {
    title: '服务处所',
    dataIndex: 'servicePlace'
  },
  {
    title: '联系类型',
    dataIndex: 'contactType'
  },
  {
    title: '联系方式',
    dataIndex: 'contactInformation',
    scopedSlots: { customRender: 'contactInformation' }
  },
  {
    title: '户籍地',
    dataIndex: 'placeDomicile',
    scopedSlots: { customRender: 'placeDomicile' }
  },
  {
    title: '户籍门(楼)详址',
    dataIndex: 'placeDomicileAddress',
    scopedSlots: { customRender: 'placeDomicileAddress' }
  },
  {
    title: '现住址',
    dataIndex: 'currentResidence',
    scopedSlots: { customRender: 'currentResidence' }
  },
  {
    title: '现住地详址',
    dataIndex: 'currentResidenceAddress',
    scopedSlots: { customRender: 'currentResidenceAddress' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    scopedSlots: { customRender: 'action' },
    fixed: 'right'
  }
]

const statusMap = {
  0: {
    status: 'default',
    text: '关闭'
  },
  1: {
    status: 'processing',
    text: '运行中'
  },
  2: {
    status: 'success',
    text: '已上线'
  },
  3: {
    status: 'error',
    text: '异常'
  }
}

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    CreateForm,
    StepByStepModal
  },
  data () {
    this.columns = columns
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 籍贯的三级联动列表
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ],
      // 加载数据方法 必须为 Promise 对象
      // loadData: (parameter) => {
      //   const requestParameters = Object.assign({}, parameter, this.queryParam)
      //   console.log('loadData request parameters:', requestParameters)
      //   // console.log(getArchiveManagement)
      //   // return false
      //   return getArchiveManagement(requestParameters).then((res) => {
      //     console.log(res)

      //     return res.result
      //   })
      // },

      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getServiceList(requestParameters).then((res) => {
          return res.result
        })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
    statusFilter (type) {
      return statusMap[type].text
    },
    statusTypeFilter (type) {
      return statusMap[type].status
    }
  },
  created () {
    getRoleList({ t: new Date() })
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    // 籍贯更改的时候
    onChange (e, type) {
      // console.log(e, type)
      if (type === 'NATIVE') {
        this.queryParam.nativePlaceProvince = e[0]
        this.queryParam.nativePlaceCity = e[1]
        this.queryParam.nativePlaceRegion = e[2]
        console.log(this.queryParam)
      } else if (type === 'PLACE') {
        this.queryParam.placeDomicileProvince = e[0]
        this.queryParam.placeDomicileCity = e[1]
        this.queryParam.placeDomicileRegion = e[2]
      } else if (type === 'CURRENT') {
        this.queryParam.currentResidenceProvince = e[0]
        this.queryParam.currentResidenceCity = e[1]
        this.queryParam.currentResidenceRegion = e[2]
      }
    },
    handleAdd () {
      this.mdl = null
      this.visible = true
    },
    handleEdit (record) {
      console.log(record)
      this.visible = true
      this.mdl = { ...record }
      // 地址的处理
      // this.mdl/
    },
    handleDel (record) {
      // 执行删除的操作
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          // console.log('values', values.birthday._d)
          console.log(values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then((res) => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`${record.no} 订阅成功`)
      } else {
        this.$message.error(`${record.no} 订阅失败，规则已关闭`)
      }
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
<style lang="less" scoped>
/deep/.ant-modal-content {
  height: 750px;
  overflow-y: scroll;
}
</style>
