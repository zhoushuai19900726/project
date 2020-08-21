<template>
  <a-modal
    title="新建档案"
    :width="1200"
    :visible="visible"
    :confirmLoading="loading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form
        :form="form"
        v-bind="formLayout"
      >
        <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
        <a-form-item
          v-show="model && model.id > 0"
          label="主键ID"
        >
          <a-input
            v-decorator="['id', { initialValue: 0 }]"
            disabled
          />
        </a-form-item>
        <!-- <a-form-item label="描述">
          <a-input v-decorator="['description', {rules: [{required: true, min: 5, message: '请输入至少五个字符的规则描述！'}]}]" />
        </a-form-item> -->
        <a-form-item label="公民身份证号">
          <a-input
            v-decorator="['idCard', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="公民身份证号"
          />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input
            v-decorator="['fullName', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="姓名"
          />
        </a-form-item>
        <a-form-item label="曾用名">
          <a-input
            v-decorator="['nameUsedBefore']"
            placeholder="曾姓名"
          />
        </a-form-item>
        <a-form-item label="性别">
          <a-select
            v-decorator="['gender', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="0">男</a-select-option>
            <a-select-option value="1">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="出生日期">
          <a-date-picker
            v-decorator="['birthday']"
            placeholder="请输入出生日期"
          />
        </a-form-item>
        <a-form-item label="民族">
          <a-select
            v-decorator="['nation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="0">汉</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="籍贯(省市区)">
          <a-cascader
            :options="options"
            placeholder="籍贯"
            v-decorator="['nativePlace', {rules: [{required: true, message: '请输入'}]}]"
          />
        </a-form-item>
        <a-form-item label="籍贯">
          <a-input
            v-decorator="['nativePlaceDetail']"
            placeholder="籍贯"
          />
        </a-form-item>
        <a-form-item label="婚姻状况">
          <a-select
            placeholder="请选择"
            v-decorator="['marital']"
          >
            <a-select-option value="0">已婚</a-select-option>
            <a-select-option value="1">未婚</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="政治面貌">
          <a-select
            v-decorator="['politicalOutlook']"
            placeholder="请选择"
          >
            <a-select-option value="0">党员</a-select-option>
            <a-select-option value="1">共青团员</a-select-option>
            <a-select-option value="2">群众</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="学历">
          <a-select
            v-decorator="['education']"
            placeholder="请选择"
          >
            <a-select-option value="0">高中</a-select-option>
            <a-select-option value="1">中专</a-select-option>
            <a-select-option value="2">大专</a-select-option>
            <a-select-option value="3">大学本科</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="宗教信仰">
          <a-select
            v-decorator="['religiousBelife']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="职业类别">
          <a-select
            v-decorator="['occupationCatgory']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
            <a-select-option value="企业单位负责人">企业单位负责人</a-select-option>
            <a-select-option value="务农">务农</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="职业">
          <a-select
            v-decorator="['occupation']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="服务处所">
          <a-input
            v-decorator="['servicePlace']"
            placeholder="服务处所"
          />
        </a-form-item>
        <a-form-item label="联系类型">
          <a-select
            v-decorator="['contactType']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input
            v-decorator="['contactInformation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item label="户籍地(省市区)">
          <a-cascader
            :options="options"
            v-decorator="['placeDomicile', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item label="户籍地">
          <a-input
            v-decorator="['placeDomicileDetail']"
            placeholder="户籍地"
          />
        </a-form-item>
        <a-form-item label="户籍门(楼)详址">
          <a-input
            v-decorator="['placeDomicileAddress']"
            placeholder="户籍门(楼)详址"
          />
        </a-form-item>
        <a-form-item label="现住址(省市区)">
          <a-cascader
            :options="options"
            placeholder="请选择"
            v-decorator="['currentResidence', {rules: [{required: true, message: '请输入'}]}]"
          />
        </a-form-item>
        <a-form-item label="现住地">
          <a-input
            v-decorator="['currentResidenceDetail']"
            placeholder="现住地"
          />
        </a-form-item>
        <a-form-item label="现住地街道">
          <a-input
            v-decorator="['currentResidenceStreet']"
            placeholder="现住地街道"
          />
        </a-form-item>
        <a-form-item label="现住地社区">
          <a-input
            v-decorator="['currentResidenceCommunity']"
            placeholder="现住地社区"
          />
        </a-form-item>
        <a-form-item label="现住门(楼)详址">
          <a-input
            v-decorator="['currentResidenceAddress']"
            placeholder="现住门(楼)详址"
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

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
  // 现住地街道
  'currentResidenceStreet',
  // 现住地社区
  'currentResidenceCommunity',
  'currentResidenceDetail'
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
    options: {
      type: Array,
      default: () => null
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
    return {
      form: this.$form.createForm(this)

    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      console.log(this.model)
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  }
}
</script>
