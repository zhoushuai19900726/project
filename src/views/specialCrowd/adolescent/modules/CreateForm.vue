<template>
  <a-modal
    title="新建档案"
    :width="1000"
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
        <a-form-item label="是否累犯">
<!--          <a-input-->
<!--            v-decorator="['fullName', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="是否累犯"-->
<!--          />-->
          <a-select
            v-decorator="['recidivist', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="0">是</a-select-option>
            <a-select-option value="1">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="原罪名">
          <a-input
            v-decorator="['originalSin', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="原罪名"
          />
        </a-form-item>
        <a-form-item label="原判刑期">
          <a-input
            v-decorator="['originalSentence', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="原判刑期"
          />
        </a-form-item>
        <a-form-item label="服刑场所">
<!--          <a-date-picker-->
<!--            v-decorator="['birthday', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="请输入出生日期"-->
<!--          />-->
          <a-input
            v-decorator="['servicePlaces', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="服刑场所"
          />
        </a-form-item>
        <a-form-item label="释放日期">
<!--          <a-select-->
<!--            v-decorator="['nation', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="请选择"-->
<!--          >-->
<!--            <a-select-option value="汉">汉</a-select-option>-->
<!--          </a-select>-->
              <a-date-picker
                v-decorator="['riskAssessmentType', {rules: [{required: true, message: '请输入'}]}]"
                placeholder="释放日期"
              />
        </a-form-item>
        <a-form-item label="危险性评估类型">
<!--          <a-cascader-->
<!--            :options="options"-->
<!--            placeholder="籍贯"-->
<!--            v-decorator="['nativePlace', {rules: [{required: true, message: '请输入'}]}]"-->
<!--          />-->
              <a-select
                v-decorator="['riskAssessmentType', {rules: [{required: true, message: '请输入'}]}]"
                placeholder="请选择"
              >
                <a-select-option value="0">危险</a-select-option>
                <a-select-option value="0">正常</a-select-option>
                <a-select-option value="0">轻微</a-select-option>
              </a-select>
        </a-form-item>
        <a-form-item label="衔接日期">
          <!--<a-select
            placeholder="请选择"
            v-decorator="['marital', {rules: [{required: true, message: '请输入'}]}]"
          >
            <a-select-option value="已婚">已婚</a-select-option>
            <a-select-option value="未婚">未婚</a-select-option>
          </a-select>-->
          <a-date-picker
            v-decorator="['birthday', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="衔接日期"
          />
        </a-form-item>
        <a-form-item label="衔接情况">
          <a-input
            v-decorator="['connection', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="衔接情况"
          />
        </a-form-item>
        <a-form-item label="安置日期">
          <a-date-picker
            v-decorator="['birthday', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="安置日期"
          />
<!--          <a-select-->
<!--            v-decorator="['politicalOutlook', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="请选择"-->
<!--          >-->
<!--            <a-select-option value="党员">党员</a-select-option>-->
<!--            <a-select-option value="共青团员">共青团员</a-select-option>-->
<!--            <a-select-option value="群众">群众</a-select-option>-->
<!--          </a-select>-->
        </a-form-item>
        <a-form-item label="安置情况">
<!--          <a-select-->
<!--            v-decorator="['education', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="请选择"-->
<!--          >-->
<!--            <a-select-option value="高中">高中</a-select-option>-->
<!--            <a-select-option value="中专">中专</a-select-option>-->
<!--            <a-select-option value="大专">大专</a-select-option>-->
<!--            <a-select-option value="大学本科">大学本科</a-select-option>-->
<!--          </a-select>-->
          <a-input
            v-decorator="['resettlement', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="安置情况"
          />
        </a-form-item>
        <a-form-item label="未安置原因">
<!--          <a-select-->
<!--            v-decorator="['religiousBelife', {rules: [{required: true, message: '请输入'}]}]"-->
<!--            placeholder="请选择"-->
<!--          >-->
<!--            <a-select-option value="">无</a-select-option>-->
<!--          </a-select>-->
          <a-input
            v-decorator="['nonResettlementReasons', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="未安置原因"
          />
        </a-form-item>
        <a-form-item label="帮扶情况">
          <a-input
            v-decorator="['assistance', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="帮扶情况"
          />
        </a-form-item>
        <a-form-item label="是否重新犯罪">
          <a-select
            v-decorator="['recidivism', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
          >
            <a-select-option value="0">是</a-select-option>
            <a-select-option value="1">否</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="重新犯罪罪名">
          <a-input
            v-decorator="['recidivismName', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="重新犯罪罪名"
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
