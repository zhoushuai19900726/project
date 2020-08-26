<template>
  <a-modal
    title="留守人员"
    :width="1200"
    :visible="visible"
    :confirmLoading="loading"
    :footer="null"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <div
        v-if="openType === 0 || openType === 3"
        style="text-align: center; margin-bottom: 20px;"
      >
        <!--        这个地方要写一个搜索框，新增数据的时候显示     -->
        <!--        <a-input-search placeholder="请输入查询条件" style="width: 500px;" enter-button />-->
        <a-select
          mode="multiple"
          label-in-value
          :value="value"
          placeholder="请输入想要新增用户的信息  如身份证号码/姓名等  选中后点击回车"
          style="width: 500px"
          :filter-option="false"
          :maskClosable="false"
          :not-found-content="fetching ? undefined : null"
          @search="fetchUser"
          @change="handleChange"
        >
          <a-spin
            v-if="fetching"
            slot="notFoundContent"
            size="small"
          />
          <a-select-option
            v-for="d in data"
            :key="d.id"
          >
            {{d.fullName}}-{{ d.idCard }}
          </a-select-option>
        </a-select>
        <a-button type="primary">搜索</a-button>
      </div>
      <a-form
        :form="form"
        v-bind="formLayout"
        ref="common"
      >
        <a-card title="档案资料">
          <a-form-item
            v-show="false"
            label="主键ID"
          >
            <a-input
              v-decorator="['id']"
              disabled
            />
          </a-form-item>
          <a-row>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="公民身份证号">
                <a-input
                  v-decorator="['idCard', {rules: [{required: true, message: '请输入'}]}]"
                  placeholder="公民身份证号"
                  :disabled="openType !== 3"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="姓名">
                <a-input
                  v-decorator="['fullName', {rules: [{required: true, message: '请输入'}]}]"
                  placeholder="姓名"
                  :disabled="openType !== 3"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="曾用名">
                <a-input
                  v-decorator="['nameUsedBefore']"
                  placeholder="曾用名"
                  :disabled="openType !== 3"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="性别">
                <a-select
                  v-decorator="['gender', {rules: [{required: true, message: '请输入'}]}]"
                  placeholder="请选择"
                  :disabled="openType !== 3"
                >
                  <a-select-option value="0">男</a-select-option>
                  <a-select-option value="1">女</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="出生日期">
                <a-date-picker
                  :disabled="openType !== 3"
                  v-decorator="['birthday']"
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
                  v-decorator="['nation', {rules: [{required: true, message: '请输入'}]}]"
                  placeholder="请选择"
                  :disabled="openType !== 3"
                >
                  <a-select-option value="0">汉</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="籍贯(省市区)">
                <a-input
                  disabled
                  v-show="openType ===3"
                  v-decorator="['nativePlaces']"
                  placeholder="初始地址为空"
                />
                <a-cascader
                  placeholder="请输入新地址"
                  :disabled="openType !==3"
                  :field-names="{ label: 'name', value: 'name', children: 'children' }"
                  :options="options"
                  @change="onChange($event,'NATIVE',true)"
                  :loadData="loadDatas"
                  v-decorator="['nativePlace']"
                />

              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="籍贯">
                <a-input
                  v-decorator="['nativePlaceDetail']"
                  placeholder="籍贯"
                  :disabled="openType !== 3"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="婚姻状况">
                <a-select
                  :disabled="openType !== 3"
                  placeholder="请选择"
                  v-decorator="['marital']"
                >
                  <a-select-option value="0">已婚</a-select-option>
                  <a-select-option value="1">未婚</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="政治面貌">
                <a-select
                  :disabled="openType !== 3"
                  v-decorator="['politicalOutlook']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">党员</a-select-option>
                  <a-select-option value="1">共青团员</a-select-option>
                  <a-select-option value="2">群众</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="学历">
                <a-select
                  :disabled="openType !== 3"
                  v-decorator="['education']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">高中</a-select-option>
                  <a-select-option value="1">中专</a-select-option>
                  <a-select-option value="2">大专</a-select-option>
                  <a-select-option value="3">大学本科</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="宗教信仰">
                <a-select
                  :disabled="openType !== 3"
                  v-decorator="['religiousBelife']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="职业类别">
                <a-select
                  :disabled="openType !== 3"
                  v-decorator="['occupationCatgory']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">无</a-select-option>
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
                  :disabled="openType !== 3"
                  v-decorator="['occupation']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="服务处所">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['servicePlace']"
                  placeholder="服务处所"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="联系类型">
                <a-select
                  :disabled="openType !== 3"
                  v-decorator="['contactType']"
                  placeholder="请选择"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="联系方式">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['contactInformation', {rules: [{required: true, message: '请输入'}]}]"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="户籍地(省市区)">
                <a-input
                  disabled
                  v-show="openType ===3"
                  v-decorator="['placeDomiciles']"
                  placeholder="初始地址为空"
                />
                <a-cascader
                  :disabled="openType !== 3"
                  :options="options"
                  :loadData="loadDatas"
                  v-decorator="['placeDomicile']"
                  placeholder="请选择新地址"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="户籍地">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['placeDomicileDetail']"
                  placeholder="户籍地"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="户籍门(楼)详址">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['placeDomicileAddress']"
                  placeholder="户籍门(楼)详址"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="现住址(省市区)">
                <a-input
                  disabled
                  v-show="openType ===3"
                  v-decorator="['currentResidences']"
                  placeholder="初始地址为空"
                />
                <a-cascader
                  :disabled="openType !== 3"
                  :options="options"
                  placeholder="请选择新地址"
                  :loadData="loadDatass"
                  v-decorator="['currentResidence']"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="现住地">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['currentResidenceDetail']"
                  placeholder="现住地"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
            >
              <a-form-item label="现住地详址">
                <a-input
                  :disabled="openType !== 3"
                  v-decorator="['currentResidenceAddress']"
                  placeholder="现住地详址"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
              style="float: right;text-align: right"
            >
              <span class="table-page-search-submitButtons">
                <a-button
                  v-if="this.openType !== 3"
                  type="primary"
                  @click="editCommon"
                >编辑</a-button>
                <a-button
                  style="margin-left: 8px"
                  v-if="this.openType === 3"
                  @click="submitCommon"
                  type="primary"
                >提交</a-button>
              </span>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
      <a-form
        :form="form1"
        v-bind="formLayout"
        ref="special"
      >
        <a-card title="新增留守人员">
          <a-row>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="健康状况">
                <a-input
                  v-decorator="['health']"
                  placeholder="请输入健康状况"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="个人年收入">
                <a-input
                  v-decorator="['personalAnnualIncome']"
                  placeholder="请输入个人年收入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="人户一致标识">
                <a-select
                  placeholder="请选择"
                  :disabled="openType === 2"
                  v-decorator="['householdIdentity', {rules: [{required: true, message: '请输入'}]}]"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="留守人员类型">
                <a-select
                  placeholder="请选择"
                  :disabled="openType === 2"
                  v-decorator="['leftBehindType', {rules: [{required: true, message: '请输入'}]}]"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员身份证号码">
                <a-input
                  v-decorator="['mainFamilyMemberIdCard']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员姓名">
                <a-input
                  v-decorator="['mainFamilyMemberName']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员健康状况">
                <a-input
                  v-decorator="['mainFamilyMemberHealth']"
                  placeholder="请输入户主姓名"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="与留守人员关系">
                <a-input
                  v-decorator="['leftBehindRelationship']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员联系类型">
                <a-select
                  placeholder="请选择"
                  :disabled="openType === 2"
                  v-decorator="['mainFamilyMembersContactType']"
                >
                  <a-select-option value="0">无</a-select-option>
                </a-select>
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员联系方式">
                <a-input
                  v-decorator="['mainFamilyMembersContactInformation']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <!-- 缺一个三级联动 -->
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭主要成员工作详细地址">
                <a-input
                  v-decorator="['mainFamilyMembersWorkAddress']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="家庭年收入">
                <a-input
                  v-decorator="['annulFamilyIncome']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="困难及诉求">
                <a-input
                  v-decorator="['difficultiesAndDemands']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="12"
              :sm="24"
            >
              <a-form-item label="帮扶情况">
                <a-input
                  v-decorator="['assistance']"
                  placeholder="请输入"
                />
              </a-form-item>
            </a-col>
            <a-col
              :md="8"
              :sm="24"
              style="float: right;text-align: right"
            >
              <span class="table-page-search-submitButtons">
                <a-button
                  type="primary"
                  v-if="this.openType === 0 || this.openType === 1"
                  style="margin-left: 8px"
                  @click="submitSpecial"
                >保存</a-button>
              </span>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import moment from 'moment'
import pick from 'lodash.pick'
import debounce from 'lodash/debounce'
import { searchArchiveManagement, editArchiveManagement } from '@/api/manage'
import { editftBehindPopulation } from '@/api/actualPopulation'
// 表单字段
const fields = [
  // 'description',
  'id',
  'idCard',
  'fullName',
  'nameUsedBefore',
  'gender',
  'birthday',
  'nation',
  'nativePlace',
  'nativePlaceDetail',
  'marital',
  'politicalOutlook',
  'education',
  'religiousBelife',
  'occupationCatgory',
  'occupation',
  'servicePlace',
  'contactType',
  'contactInformation',
  // 户籍地
  'placeDomicile',
  // 户籍门(楼)详址
  'placeDomicileAddress',
  'placeDomicileDetail',
  // 现住址
  'currentResidence',
  // 现住地详址
  'currentResidenceAddress',
  'currentResidenceDetail',
  'currentResidences',
  'nativePlaces',
  'placeDomiciles'
]
const field = [
  'health',
  'personalAnnualIncome',
  'householdIdentity',
  'leftBehindType',
  'mainFamilyMemberIdCard',
  'mainFamilyMemberName',
  'mainFamilyMemberHealth',
  'leftBehindRelationship',
  'mainFamilyMembersContactType',
  'mainFamilyMembersContactInformation',
  'mainFamilyMembersWork',
  'mainFamilyMembersWorkAddress',
  'annulFamilyIncome',
  'difficultiesAndDemands',
  'assistance'
]

export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    },
    // 打开modal的方式  0.新增/ 1.编辑/2.查看
    openType: {
      type: Number,
      default: () => 0
    },
    closeModal: {
      type: Function,
      default: null
    },
    loadDatas: {
      type: Function,
      default: null
    },
    loadDatass: {
      type: Function,
      default: null
    },
    options: {
      type: Array,
      default: () => null
    },
    optionss: {
      type: Array,
      default: null
    },
    onChange: {
      type: Function,
      default: null
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    // this.lastFetchId = 0
    this.fetchUser = debounce(this.fetchUser, 800)
    return {
      // 更改档案管理的档案id
      id: null,
      // 更改特殊的时候的id
      specialId: null,
      form: this.$form.createForm(this),
      form1: this.$form.createForm(this),
      isDisabled: {
        default: true,
        type: Boolean
      },
      // 搜索框的列表
      data: [],
      value: [],
      fetching: false
    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))
    field.forEach(v => this.form1.getFieldDecorator(v))
    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      console.log(this.openType)
      if (this.model.id != null) {
        this.specialId = this.model.id
        this.id = this.model.governRealPopulation.id
      }
      console.log(this.model.governRealPopulation)
      console.log(this.id)
      this.model && this.form.setFieldsValue(pick(this.model.governRealPopulation, fields))
      // console.log(this.form, this.form1)
      this.model && this.form1.setFieldsValue(pick(this.model, field))
    })
  },
  mounted () {
    console.log(this.openType)
  },
  methods: {
    // 将utc时间解析为本地时间
    parseUtcTime (time) {
      var date = moment.parseZone(time).local().format('YYYY-MM-DD')
      console.log(date)
      return date
    },
    // 更改公共字段
    editCommon () {
      if (this.id) {
        console.log(3)
        this.$emit('changeOpenType', 3)
      } else {
        this.$message.error('请先选择档案')
        return false
      }
    },
    // 保存公共字段
    submitCommon () {
      var that = this
      this.$emit('changeOpenType', 1)
      var form = this.$refs.common.form
      form.validateFieldsAndScroll((errors, values) => {
        console.log(values)
        // console.log('values', values.birthday._d)
        console.log(values)
        var obj = values
        var nativeArr = obj.nativePlace
        // console.log(nativeArr)
        var native = obj.nativePlaceDetail
        if (nativeArr != null) {
          obj.nativePlaceProvince = nativeArr[0]
          obj.nativePlaceCity = nativeArr[1]
          obj.nativePlaceRegion = nativeArr[2]
        }
        obj.nativePlace = native
        // 删除无用的 nativePlaceDetail 字段
        delete obj.nativePlaceDetail
        obj.birthday = this.parseUtcTime(obj.birthday)
        if (obj.placeDomicile != null) {
          obj.placeDomicileProvince = obj.placeDomicile[0]
          obj.placeDomicileCity = obj.placeDomicile[1]
          obj.placeDomicileRegion = obj.placeDomicile[2]
        }
        obj.placeDomicile = obj.placeDomicileDetail
        // 删除无用的 placeDomicile 字段
        delete obj.placeDomicileDetail
        console.log(obj.currentResidence)
        if (obj.currentResidence != null) {
          obj.currentResidenceProvince = obj.currentResidence[0]
          obj.currentResidenceCity = obj.currentResidence[1]
          obj.currentResidenceRegion = obj.currentResidence[2]
          obj.currentResidenceStreet = obj.currentResidence[3]
          obj.currentResidenceCommunity = obj.currentResidence[4]
        }

        obj.currentResidence = obj.currentResidenceDetail
        // 日期的处理
        obj.birthday = obj.birthday + ' 00:00:00'
        // 删除无用的 placeDomicile 字段
        delete obj.currentResidenceDetail
        delete obj.id
        delete obj.currentResidences
        delete obj.nativePlaces
        delete obj.placeDomiciles
        obj.id = this.id
        console.log(obj.id)
        return editArchiveManagement(obj).then((res) => {
          console.log(res)
          this.$message.info('修改成功')
          that.closeModal(true)
        })
      })
    },
    // 保存特殊字段
    submitSpecial () {
      var that = this
      var form = this.$refs.special.form
      var form1 = this.$refs.common.form
      form.validateFields((errors, values) => {
        console.log(values)
        if (!errors) {
          var data = { ...values }
          data.basicsId = that.id
          if (that.openType === 1) {
            console.log('我是修改')
            data.id = that.specialId
          }
          return editftBehindPopulation(data).then((res) => {
            // 重置表单数据
            form.resetFields()
            form1.resetFields()
            if (res.code === 200) {
              form.resetFields()
              that.closeModal()
              if (that.openType === 1) {
                this.$message.info('修改成功')
              } else if (that.openType === 0) {
                this.$message.info('新增成功')
              }
            } else {
              this.$message.error(res.msg)
              that.closeModal()
            }
            console.log(res)
          })
        }
      })
    },
    // 搜索框发生变化的时候请求搜索的内容
    fetchUser (value) {
      var that = this
      console.log('fetching user', value)
      // this.lastFetchId += 1
      // const fetchId = this.lastFetchId
      this.data = []
      this.fetching = true
      return searchArchiveManagement(value).then((res) => {
        console.log(res)
        that.data = res.result.data
        console.log(that.data)
        // return res.result
      })
      // fetch('https://randomuser.me/api/?results=5')
      //   .then(response => response.json())
      //   .then(body => {
      //     if (fetchId !== this.lastFetchId) {
      //       // for fetch callback order
      //       return
      //     }
      //     const data = body.results.map(user => ({
      //       text: `${user.name.first} ${user.name.last}`,
      //       value: user.login.username
      //     }))
      //     this.data = data
      //     this.fetching = false
      //   })
    },
    // 点击搜索到的列表 更改openType 并且更改父级的mdl (this.$emit('changeModel',obj))
    handleChange (value) {
      var that = this
      if (!value[0]) {
        var form = this.$refs.common.form
        form.resetFields()
        // console.log(this.value, 'meineirong')
        this.value = []
        this.$emit('changeModel', {})
        return
      }
      console.log(value)
      var name = value[0].label.split('-')[0].trim()
      var idCard = value[0].label.split('-')[1].trim()
      console.log(name.length)
      var obj = {}
      that.data.forEach(item => {
        console.log(item)
        if (item.fullName === name && item.idCard === idCard) {
          obj = item
          that.id = item.id
        }
      })
      console.log(obj)
      obj.nativePlaceDetail = obj.native
      obj.nativePlace = [
        obj.currentResidenceProvince,
        obj.currentResidenceCity,
        obj.currentResidenceRegion
      ]
      obj.placeDomicileDetail = obj.placeDomicile
      obj.placeDomicile = [
        obj.placeDomicileCity,
        obj.placeDomicileProvince,
        obj.placeDomicileRegion
      ]
      obj.currentResidenceDetail = obj.currentResidence
      obj.currentResidence = [
        obj.currentResidenceProvince,
        obj.currentResidenceCity,
        obj.currentResidenceRegion,
        obj.currentResidenceStreet,
        obj.currentResidenceCommunity
      ]
      console.log(obj)
      this.$emit('changeModel', obj)
      Object.assign(this, {
        value,
        data: [],
        fetching: false
      })
    }
  }
}
</script>
