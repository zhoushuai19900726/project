<template>
  <a-modal
    title="新建档案"
    :width="1200"
    :visible="visible"
    :confirmLoading="loading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <!-- :footer="openType === 2?null:true" -->
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
            :disabled="openType ===2"
          />
        </a-form-item>
        <a-form-item label="姓名">
          <a-input
            v-decorator="['fullName', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="姓名"
            :disabled="openType ===2"
          />
        </a-form-item>
        <a-form-item label="曾用名">
          <a-input
            v-decorator="['nameUsedBefore']"
            placeholder="曾姓名"
            :disabled="openType ===2"
          />
        </a-form-item>
        <a-form-item label="性别">
          <a-select
            v-decorator="['gender', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
            :disabled="openType ===2"
          >
            <a-select-option value="0">男</a-select-option>
            <a-select-option value="1">女</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="出生日期">
          <a-date-picker
            v-decorator="['birthday']"
            placeholder="null"
            :disabled="openType ===2"
          />
        </a-form-item>
        <a-form-item label="民族">
          <a-select
            v-decorator="['nation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请选择"
            :disabled="openType ===2"
          >
            <a-select-option value="0">汉</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="籍贯(省市区)">
          <a-cascader
            v-if="openType !==2"
            placeholder="籍贯"
            :disabled="openType ===2"
            :field-names="{ label: 'name', value: 'name', children: 'children' }"
            :options="options"
            @change="onChange($event,'NATIVE',true)"
            :loadData="loadDatas"
            v-decorator="['nativePlace', {rules: [{required: true, message: '请输入'}]}]"
          />
          <a-input
            v-else
            :disabled="openType ===2"
            v-decorator="['nativePlaces']"
            placeholder="现住地"
          />
        </a-form-item>
        <a-form-item label="籍贯">
          <a-input
            v-decorator="['nativePlaceDetail']"
            placeholder="籍贯"
            :disabled="openType ===2"
          />
        </a-form-item>
        <a-form-item label="婚姻状况">
          <a-select
            :disabled="openType ===2"
            placeholder="请选择"
            v-decorator="['marital']"
          >
            <a-select-option value="0">已婚</a-select-option>
            <a-select-option value="1">未婚</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="政治面貌">
          <a-select
            :disabled="openType ===2"
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
            :disabled="openType ===2"
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
            :disabled="openType ===2"
            v-decorator="['religiousBelife']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="职业类别">
          <a-select
            :disabled="openType ===2"
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
            :disabled="openType ===2"
            v-decorator="['occupation']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="服务处所">
          <a-input
            :disabled="openType ===2"
            v-decorator="['servicePlace']"
            placeholder="服务处所"
          />
        </a-form-item>
        <a-form-item label="联系类型">
          <a-select
            :disabled="openType ===2"
            v-decorator="['contactType']"
            placeholder="请选择"
          >
            <a-select-option value="0">无</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item label="联系方式">
          <a-input
            :disabled="openType ===2"
            v-decorator="['contactInformation', {rules: [{required: true, message: '请输入'}]}]"
            placeholder="请输入"
          />
        </a-form-item>
        <a-form-item label="户籍地(省市区)">
          <a-cascader
            v-if="openType!==2"
            :disabled="openType ===2"
            placeholder="户籍地"
            :field-names="{ label: 'name', value: 'name', children: 'children' }"
            :options="options"
            :loadData="loadDatas"
            v-decorator="['placeDomicile', {rules: [{required: true, message: '请输入'}]}]"
          />
          <a-input
            v-else
            :disabled="openType ===2"
            v-decorator="['placeDomiciles']"
            placeholder="现住地"
          />
        </a-form-item>
        <a-form-item label="户籍地">
          <a-input
            :disabled="openType ===2"
            v-decorator="['placeDomicileDetail']"
            placeholder="户籍地"
          />
        </a-form-item>
        <a-form-item label="户籍地详址">
          <a-input
            :disabled="openType ===2"
            v-decorator="['placeDomicileAddress']"
            placeholder="户籍地详址"
          />
        </a-form-item>
        <a-form-item label="现住址(省市区)">
          <a-cascader
            v-if="openType!==2"
            :disabled="openType ===2"
            :field-names="{ label: 'name', value: 'name', children: 'children' }"
            :options="optionss"
            :loadData="loadDatass"
            placeholder="请选择"
            v-decorator="['currentResidence', {rules: [{required: true, message: '请输入'}]}]"
          />
          <a-input
            v-else
            :disabled="openType ===2"
            v-decorator="['currentResidences']"
            placeholder="现住地"
          />
        </a-form-item>
        <a-form-item label="现住地">
          <a-input
            :disabled="openType ===2"
            v-decorator="['currentResidenceDetail']"
            placeholder="现住地"
          />
        </a-form-item>
        <a-form-item label="现住地详址">
          <a-input
            :disabled="openType === 2"
            v-decorator="['currentResidenceAddress']"
            placeholder="现住地详址"
          />
        </a-form-item>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
// import { getAddress } from '@/api/manage'
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
  'currentResidenceDetail',
  'currentResidences',
  'nativePlaces',
  'placeDomiciles'
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
    openType: {
      type: Number,
      default: () => null
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
      default: null
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
    return {
      form: this.$form.createForm(this)
      // options: [],
      // optionss: []
    }
  },
  created () {
    console.log(this.options)
    console.log(this.model)
    // console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      console.log(this.model)
      console.log(this.options)
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })

    // *************
    // var that = this
    // var option = this.$root.address.concat([])
    // // console.log(option)
    // option.forEach(item => {
    //   item.isLeaf = false
    // })
    // this.options = option
    // getAddress().then((res) => {
    //   res.ret.forEach(item => {
    //     item.isLeaf = false
    //   })
    //   that.optionss = res.ret
    //   // console.log(this.optionss)
    // })
  },
  methods: {
  }
}
</script>
