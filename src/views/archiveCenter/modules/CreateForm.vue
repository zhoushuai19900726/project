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
        <a-form-item label="描述">
          <a-input v-decorator="['description', {rules: [{required: true, min: 5, message: '请输入至少五个字符的规则描述！'}]}]" />
        </a-form-item>
        <a-form-item label="公民身份证号">
          <a-input
            v-decorator="['idcard', {rules: [{required: true, message: '请输入'}]}]"
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
            v-decorator="['nameUsedBefore', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="曾姓名"
          />
        </a-form-item>
        <a-form-item label="性别">
          <a-select
            v-decorator="['gender', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="男">男</a-select-option>
            <a-select-option value="女">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="出生日期">
          <a-date-picker
            v-decorator="['birthday', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请输入出生日期"
          />
        </a-form-item>
        <a-form-item label="民族">
          <a-select
            v-decorator="['nation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="汉">汉</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="籍贯">
          <a-cascader
            :options="options"
            placeholder="籍贯"
            v-decorator="['nativePlace', {rules: [{required: true, message: '请输入'}]}]"
          />
        </a-form-item>
        <a-form-item label="婚姻状况">
          <a-select
            placeholder="请选择"
            v-decorator="['marital', {rules: [{required: true, message: '请输入'}]}]"
          >
            <a-select-option value="已婚">已婚</a-select-option>
            <a-select-option value="未婚">未婚</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="政治面貌">
          <a-select
            v-decorator="['politicalOutlook', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="党员">党员</a-select-option>
            <a-select-option value="共青团员">共青团员</a-select-option>
            <a-select-option value="群众">群众</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="学历">
          <a-select
            v-decorator="['education', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="高中">高中</a-select-option>
            <a-select-option value="中专">中专</a-select-option>
            <a-select-option value="大专">大专</a-select-option>
            <a-select-option value="大学本科">大学本科</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="宗教信仰">
          <a-select
            v-decorator="['religiousBelife', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="职业类别">
          <a-select
            v-decorator="['occupationCatgory', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="">无</a-select-option>
            <a-select-option value="企业单位负责人">企业单位负责人</a-select-option>
            <a-select-option value="务农">务农</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="职业">
          <a-select
            v-decorator="['occupation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="服务处所">
          <a-input
            v-decorator="['servicePlace', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="服务处所"
          />
        </a-form-item>
        <a-form-item label="联系类型">
          <a-select
            v-decorator="['contactType', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input
            v-decorator="['contactInformation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item label="户籍地">
          <a-cascader
            :options="options"
            v-decorator="['placeDomicile', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item label="户籍门(楼)详址">
          <a-input
            v-decorator="['placeDomicileAddress', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="户籍门(楼)详址"
          />
        </a-form-item>
        <a-form-item label="现住址">
          <a-cascader
            :options="options"
            placeholder="请选择"
            v-decorator="['currentResidence', {rules: [{required: true, message: '请输入'}]}]"
          />
        </a-form-item>
        <a-form-item label="现住门(楼)详址">
          <a-input
            v-decorator="['currentResidenceAddress', {rules: [{required: true, message: '请输入'}]}]"
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
  'description',
  'id',
  'idCard',
  'fullName',
  'nameUsedBefore',
  'gender',
  'birthday',
  'nation',
  'nativePlace',
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
  // 现住址
  'currentResidence',
  // 现住地详址
  'currentResidenceAddress'
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
