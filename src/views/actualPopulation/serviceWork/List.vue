<template>
  <page-header-wrapper>
    <history></history>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form v-bind="formLayout">
          <a-row>
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
                <a-form-item label="籍贯(省市区)">
                  <a-cascader
                    :field-names="{ label: 'name', value: 'name', children: 'children' }"
                    :options="options"
                    :loadData="loadDatas"
                    placeholder="请选择"
                    changeOnSelect
                    @change="onChange($event,'NATIVE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="籍贯">
                  <a-input
                    v-model="queryParam.nativePlace"
                    style="width: 100%"
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
                <a-form-item label="户籍地(省市区)">
                  <a-cascader
                    :field-names="{ label: 'name', value: 'name', children: 'children' }"
                    :options="options"
                    :loadData="loadDatas"
                    placeholder="请选择"
                    changeOnSelect
                    @change="onChange($event,'PLACE')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地">
                  <a-input
                    v-model="queryParam.placeDomicile"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="户籍地详址">
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
                <a-form-item label="现住地(省市区)">
                  <a-cascader
                    :field-names="{ label: 'name', value: 'name', children: 'children' }"
                    :options="optionss"
                    :loadData="loadDatass"
                    placeholder="请选择"
                    changeOnSelect
                    @change="onChange($event,'CURRENT')"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住地">
                  <a-input
                    v-model="queryParam.currentResidence"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="现住地详址">
                  <a-input
                    v-model="queryParam.currentResidenceAddress"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="就业方向">
                  <a-input-number
                    v-model="queryParam.employmentDirection"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="失业原因">
                  <a-input-number
                    v-model="queryParam.unemploymentReasons"
                    style="width: 100%"
                  />
                </a-form-item>
              </a-col>

              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="人员类型">
                  <a-select
                    v-model="queryParam.personnelType"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">失业</a-select-option>
                    <a-select-option value="1">未就业</a-select-option>
                  </a-select>
                </a-form-item>
              </a-col>
              <a-col
                :md="8"
                :sm="24"
              >
                <a-form-item label="有无就业愿望">
                  <a-select
                    v-model="queryParam.employmentDesire"
                    placeholder="请选择"
                    default-value="0"
                  >
                    <a-select-option value="0">有</a-select-option>
                    <a-select-option value="1">无</a-select-option>
                  </a-select>
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
          slot-scope="text, record"
        >
          <ellipsis
            :length="7"
            tooltip
          >
            <!-- {{ text}} -->
            {{record.governRealPopulation.idCard}}
            <!-- {{index}} -->
          </ellipsis>
        </span>

        <!-- 姓名的自定义 -->
        <span
          slot="fullName"
          slot-scope="text,record"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ record.governRealPopulation.fullName }}</ellipsis>
        </span>

        <!-- 曾用名的自定义 -->
        <span
          slot="nameUsedBefore"
          slot-scope="text,record"
        >
          <ellipsis
            :length="7"
            tooltip
          >{{ record.governRealPopulation.nameUsedBefore }}</ellipsis>
        </span>

        <!-- 性别 -->
        <span
          slot="gender"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.gender }}
        </span>
        <!-- 出生日期 -->

        <span
          slot="birthday"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.birthday }}
        </span>

        <!-- 民族 -->
        <span
          slot="nation"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nation }}
        </span>

        <!-- 籍贯(省市区) -->
        <span
          slot="nativePlaceCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlaceCity }}
        </span>
        <span
          slot="nativePlaceRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlaceRegion }}
        </span>
        <span
          slot="nativePlace"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.nativePlace }}
        </span>

        <!-- 婚姻状况 -->
        <span
          slot="marital"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.marital }}
        </span>

        <!-- 政治面貌 -->
        <span
          slot="politicalOutlook"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.politicalOutlook }}
        </span>

        <!-- 学历 -->
        <span
          slot="education"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.education }}
        </span>

        <!-- 宗教信仰 -->
        <span
          slot="religiousBelife"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.religiousBelife }}
        </span>

        <!-- 职业类别 -->
        <span
          slot="occupationCatgory"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.occupationCatgory }}
        </span>

        <!-- 职业 -->
        <span
          slot="occupation"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.occupation }}
        </span>

        <!-- 服务处所 -->
        <span
          slot="servicePlace"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.servicePlace }}
        </span>

        <!-- 联系类型 -->
        <span
          slot="contactType"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.contactType }}
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

        <!-- 户籍地(省市区) -->
        <span
          slot="placeDomicileProvince"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileProvince }}
        </span>
        <span
          slot="placeDomicileCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileCity }}
        </span>
        <span
          slot="placeDomicileRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.placeDomicileRegion }}
        </span>

        <!-- 户籍地 户籍地详细地址  现住址 现住详细地址 -->
        <span
          slot="placeDomicile"
          slot-scope="text,record"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ record.governRealPopulation.placeDomicile }}</ellipsis>
        </span>

        <span
          slot="placeDomicileAddress"
          slot-scope="text,record"
        >
          <ellipsis
            :length="10"
            tooltip
          >{{ record.governRealPopulation.placeDomicileAddress }}</ellipsis>
        </span>
        <!-- 现住址(省市区) -->
        <span
          slot="currentResidenceProvince"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceProvince }}
        </span>
        <span
          slot="currentResidenceCity"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceCity }}
        </span>
        <span
          slot="currentResidenceRegion"
          slot-scope="text,record"
        >
          {{ record.governRealPopulation.currentResidenceRegion }}
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
            <a @click="handleEdit(record)">编辑</a>
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
        :model="mdl"
        :openType="openType"
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
// import { getRoleList, getServiceList } from '@/api/manage'
import { getRoleList, editArchiveManagement, delArchiveManagement, getAddress } from '@/api/manage'
import { getEmploymentServices } from '@/api/actualPopulation'
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
    dataIndex: 'gender',
    scopedSlots: { customRender: 'gender' }
  },
  {
    title: '出生日期',
    dataIndex: 'birthday',
    sorter: true,
    scopedSlots: { customRender: 'birthday' }
  },
  {
    title: '民族',
    dataIndex: 'nation',
    // width: '150px',
    scopedSlots: { customRender: 'nation' }
  },
  {
    title: '籍贯(省)',
    dataIndex: 'nativePlaceProvince',
    scopedSlots: { customRender: 'nativePlaceProvince' }
  },
  {
    title: '籍贯(市)',
    dataIndex: 'nativePlaceCity',
    scopedSlots: { customRender: 'nativePlaceCity' }
  },
  {
    title: '籍贯(区)',
    dataIndex: 'nativePlaceRegion',
    scopedSlots: { customRender: 'nativePlaceRegion' }
  },
  {
    title: '籍贯',
    dataIndex: 'nativePlace',
    scopedSlots: { customRender: 'nativePlace' }
  },
  {
    title: '婚姻状况',
    dataIndex: 'marital',
    scopedSlots: { customRender: 'marital' }
  },
  {
    title: '政治面貌',
    dataIndex: 'politicalOutlook',
    scopedSlots: { customRender: 'politicalOutlook' }
  },
  {
    title: '学历',
    dataIndex: 'education',
    scopedSlots: { customRender: 'education' }

  },
  {
    title: '宗教信仰',
    dataIndex: 'religiousBelife',
    scopedSlots: { customRender: 'religiousBelife' }
  },
  {
    title: '职业类别',
    dataIndex: 'occupationCatgory',
    scopedSlots: { customRender: 'occupationCatgory' }
  },
  {
    title: '职业',
    dataIndex: 'occupation',
    scopedSlots: { customRender: 'occupation' }
  },
  {
    title: '服务处所',
    dataIndex: 'servicePlace',
    scopedSlots: { customRender: 'servicePlace' }
  },
  {
    title: '联系类型',
    dataIndex: 'contactType',
    scopedSlots: { customRender: 'contactType' }
  },
  {
    title: '联系方式',
    dataIndex: 'contactInformation',
    scopedSlots: { customRender: 'contactInformation' }
  },
  {
    title: '户籍地(省)',
    dataIndex: 'placeDomicileProvince',
    scopedSlots: { customRender: 'placeDomicileProvince' }
  },
  {
    title: '户籍地(市)',
    dataIndex: 'placeDomicileCity',
    scopedSlots: { customRender: 'placeDomicileCity' }
  },
  {
    title: '户籍地(区)',
    dataIndex: 'placeDomicileRegion',
    scopedSlots: { customRender: 'placeDomicileRegion' }
  },
  {
    title: '户籍地',
    dataIndex: 'placeDomicile',
    scopedSlots: { customRender: 'placeDomicile' }
  },
  {
    title: '户籍门地详址',
    dataIndex: 'placeDomicileAddress',
    scopedSlots: { customRender: 'placeDomicileAddress' }
  },
  {
    title: '现住址',
    dataIndex: 'currentResidence',
    scopedSlots: { customRender: 'currentResidence' }
  },
  {
    title: '现住址(省)',
    dataIndex: 'currentResidenceProvince',
    scopedSlots: { customRender: 'currentResidenceProvince' }
  },
  {
    title: '现住址(市)',
    dataIndex: 'currentResidenceCity',
    scopedSlots: { customRender: 'currentResidenceCity' }
  },
  {
    title: '现住址(区)',
    dataIndex: 'currentResidenceRegion',
    scopedSlots: { customRender: 'currentResidenceRegion' }
  },
  {
    title: '现住地详址',
    dataIndex: 'currentResidenceAddress',
    scopedSlots: { customRender: 'currentResidenceAddress' }
  },
  {
    title: '就业方向',
    dataIndex: 'employmentDirection',
    scopedSlots: { customRender: 'employmentDirection' }
  },
  {
    title: '失业原因',
    dataIndex: 'unemploymentReasons',
    scopedSlots: { customRender: 'unemploymentReasons' }
  },
  {
    title: '人员类型',
    dataIndex: 'personnelType',
    scopedSlots: { customRender: 'personnelType' }
  },
  {
    title: '有无就业愿望',
    dataIndex: 'employmentDesire',
    scopedSlots: { customRender: 'employmentDesire' }
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
    this.formLayout = {
      labelCol: {
        xs: { span: 1 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 2 },
        sm: { span: 15 }
      }
    }
    return {
      type: 0,
      // 打开createform的类型 0 新增 1 修改 2 查看
      openType: 0,
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 籍贯的三级联动列表
      options: [],
      optionss: [],
      // 加载数据方法 必须为 Promise 对象
      loadData: (parameter) => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        // console.log(getArchiveManagement)
        // return false
        if (requestParameters.birthday) {
          requestParameters.birthday = this.parseUtcTime(requestParameters.birthday)
        }
        return getEmploymentServices(requestParameters).then((res) => {
          console.log(res)
          return res.result
        })
      },

      // loadData: (parameter) => {
      //   const requestParameters = Object.assign({}, parameter, this.queryParam)
      //   console.log('loadData request parameters:', requestParameters)
      //   return getServiceList(requestParameters).then((res) => {
      //     return res.result
      //   })
      // },
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
    var that = this
    getRoleList({ t: new Date() })
    var option = this.$root.address.concat([])
    // console.log(option)
    option.forEach(item => {
      item.isLeaf = false
    })
    this.options = option
    // *******
    getAddress().then((res) => {
      res.ret.forEach(item => {
        item.isLeaf = false
      })
      that.optionss = res.ret
      console.log(this.optionss)
    })
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
    // 选择对数据进行增、查‘改
    changeOpenType (num) {
      this.openType = num
    },
    loadDatas (selectedOptions) {
      // var that = this
      const targetOption = selectedOptions[selectedOptions.length - 1]
      // console.log(targetOption)
      console.log(this.optionss)
      targetOption.loading = true
      // if(type=='籍贯' && selectedOptions ==5){
      //   return
      // }
      getAddress(targetOption.code).then((res) => {
        console.log(this.type)
        console.log(res)
        targetOption.loading = false
        res.ret.forEach((item) => {
          if (selectedOptions.length === 2) {
            item.isLeaf = true
          } else {
            item.isLeaf = false
          }
        })
        targetOption.children = res.ret
        this.options = [...this.options]
      })
    },
    loadDatass (selectedOptions) {
      // var that = this
      const targetOption = selectedOptions[selectedOptions.length - 1]
      // console.log(targetOption)
      console.log(this.optionss)
      targetOption.loading = true
      // if(type=='籍贯' && selectedOptions ==5){
      //   return
      // }
      getAddress(targetOption.code).then((res) => {
        targetOption.loading = false
        res.ret.forEach((item) => {
          if (selectedOptions.length === 4) {
            item.isLeaf = true
          } else {
            item.isLeaf = false
          }
        })
        targetOption.children = res.ret
        this.optionss = [...this.optionss]
      })
    },
    // 籍贯更改的时候
    onChange (e, type) {
      // console.log(e.length)
      if (type === 'NATIVE' || type === 'PLACE') {
        this.type = 0
      } else if (type === 'CURRENT') {
        this.type = 1
      }
      // console.log(this.type)
      // var that = this
      console.log(e, this.type)
      if (this.type === 0 && e.length === 3) {
        console.log(22222)
        this.queryParam.nativePlaceProvince = e[0]
        this.queryParam.nativePlaceCity = e[1]
        this.queryParam.nativePlaceRegion = e[2]
        console.log(this.queryParam)
      } else if (this.type === 0 && e.length === 3) {
        this.queryParam.placeDomicileProvince = e[0]
        this.queryParam.placeDomicileCity = e[1]
        this.queryParam.placeDomicileRegion = e[2]
      } else if (this.type === 1 && e.length === 5) {
        this.queryParam.currentResidenceProvince = e[0]
        this.queryParam.currentResidenceCity = e[1]
        this.queryParam.currentResidenceRegion = e[2]
        this.queryParam.currentResidenceStreet = e[3]
        this.queryParam.currentResidenceCommunity = e[4]
      }
      console.log(this.queryParam)
    },
    // 新增档案
    handleAdd () {
      this.mdl = null
      this.openType = 0
      this.visible = true
    },
    // 编辑档案
    handleEdit (record) {
      // 地址的解析
      record.nativePlace = [
        record.currentResidenceProvince,
        record.currentResidenceCity,
        record.currentResidenceRegion
      ]
      record.placeDomicile = [
        record.placeDomicileCity,
        record.placeDomicileProvince,
        record.placeDomicileRegion
      ]
      record.currentResidence = [
        record.currentResidenceCity,
        record.currentResidenceProvince,
        record.currentResidenceRegion,
        record.currentResidenceStreet,
        record.currentResidenceCommunity
      ]
      this.openType = 1
      this.visible = true
      this.mdl = { ...record }
      // 地址的处理
      // this.mdl/
    },
    handleDel (record) {
      // 执行删除的操作
      console.log(record)
      var id = record.id
      var arr = [id]
      return delArchiveManagement(arr).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.$message.info('删除成功')
          this.$refs.table.refresh()
        } else {
          this.$message.error('删除失败')
          this.$refs.table.refresh()
        }
      })
    },
    // 将utc时间解析为本地时间
    parseUtcTime (time) {
      var date = moment.parseZone(time).local().format('YYYY-MM-DD')
      console.log(date)
      return date
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          // console.log('values', values.birthday._d)
          console.log(values)
          var obj = values
          var nativeArr = obj.nativePlace
          // console.log(nativeArr)
          var native = obj.nativePlaceDetail
          obj.nativePlaceProvince = nativeArr[0]
          obj.nativePlaceCity = nativeArr[1]
          obj.nativePlaceRegion = nativeArr[2]
          obj.nativePlace = native
          // 删除无用的 nativePlaceDetail 字段
          delete obj.nativePlaceDetail
          obj.birthday = this.parseUtcTime(obj.birthday)
          obj.placeDomicileProvince = obj.placeDomicile[0]
          obj.placeDomicileCity = obj.placeDomicile[1]
          obj.placeDomicileRegion = obj.placeDomicile[2]
          obj.placeDomicile = obj.placeDomicileDetail
          // 删除无用的 placeDomicile 字段
          delete obj.placeDomicileDetail
          console.log(obj.currentResidence)
          obj.currentResidenceProvince = obj.currentResidence[0]
          obj.currentResidenceCity = obj.currentResidence[1]
          obj.currentResidenceRegion = obj.currentResidence[2]
          obj.currentResidenceStreet = obj.currentResidence[3]
          obj.currentResidenceCommunity = obj.currentResidence[4]
          obj.currentResidence = obj.currentResidenceDetail
          // 日期的处理
          obj.birthday = obj.birthday + ' 00:00:00'
          // 删除无用的 placeDomicile 字段
          delete obj.currentResidenceDetail
          delete obj.id
          // var arr = Object.keys(obj)
          // console.log(obj, arr.length)
          // 调用接口进行修改
          if (this.openType === 0) {
            return editArchiveManagement(obj).then((res) => {
              console.log(res)
              // return res.result
              if (res.code === 200) {
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
              } else {
                this.visible = false
                this.confirmLoading = false
                this.$message.error(res.msg)
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()
              }
            })
          } else if (this.openType === 1) {
            // console.log(this.mdl.id)
            obj.id = this.mdl.id
            return editArchiveManagement(obj).then((res) => {
              console.log(res)
              // return res.result
              if (res.code === 200) {
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
                this.visible = false
                this.confirmLoading = false
                this.$message.error(res.msg)
                // 重置表单数据
                form.resetFields()
                // 刷新表格
                this.$refs.table.refresh()
              }
            })
          } else {
            return false
          }
          // if (values.id > 0) {
          //   // 修改 e.g.
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       resolve()
          //     }, 1000)
          //   }).then((res) => {
          //     this.visible = false
          //     this.confirmLoading = false
          //     // 重置表单数据
          //     form.resetFields()
          //     // 刷新表格
          //     this.$refs.table.refresh()

          //     this.$message.info('修改成功')
          //   })
          // } else {
          //   // 新增
          // }
        } else {
          // console.log('youwentyi')
          this.$message.error('请填写必要信息')
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    // 修改弹框
    handleSub (record) {
      // 地址的解析
      record.nativePlace = [
        record.currentResidenceProvince,
        record.currentResidenceCity,
        record.currentResidenceRegion
      ]
      record.placeDomicile = [
        record.placeDomicileProvince,
        record.placeDomicileCity,
        record.placeDomicileRegion
      ]
      record.currentResidence = [
        record.currentResidenceProvince,
        record.currentResidenceCity,
        record.currentResidenceRegion,
        record.currentResidenceStreet,
        record.currentResidenceCommunity
      ]
      record.currentResidences = record.currentResidence.join('/')
      record.placeDomiciles = record.placeDomicile.join('/')
      record.nativePlaces = record.nativePlace.join('/')
      console.log(record.currentResidences)
      this.openType = 2
      this.visible = true
      this.mdl = { ...record }
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
