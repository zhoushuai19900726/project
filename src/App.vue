<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
import { mapState, mapMutations } from 'vuex'
import { getSelect, getAddress, group } from '@/api/manage'
export default {
  data () {
    return {
      commonSelect: [
        {
          name: '性别',
          type: 'sex'
        },
        {
          name: '民族',
          type: 'nation'
        },
        {
          name: '婚姻状况',
          type: 'marray'
        },
        {
          name: '政治面貌',
          type: 'politicalOutlook'
        },
        {
          name: '学历',
          type: 'education'
        },
        {
          name: '宗教信仰',
          type: 'religiousBelife'
        },
        {
          name: '职业类别',
          type: 'occupationCatgory'
        },
        {
          name: '职业',
          type: 'occupation'
        },
        {
          name: '联系类型',
          type: 'contactType'
        }
      ]
    }
  },
  computed: {
    locale () {
      // 只是为了切换语言时，更新标题
      const { title } = this.$route.meta
      title && (setDocumentTitle(`${i18nRender(title)} - ${domTitle}`))

      return this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
    },
    ...mapState({
      // 动态主路由
      browseRecords: state => state.browseRecords
    })
  },
  created () {
    var that = this
    this.commonSelect.forEach(item => {
      if (that.$root[item.type].length !== 0) {
        return false
      }
      that.getSelect(item.name, item.type)
    })
    // if (this.$root.address.length === 0) {
    //   this.getAddress()
    // }
    this.getGroup()
  },
  methods: {
    ...mapMutations(['addRecords']),
    // 根据id查询字典组
    getGroup () {
      return group().then(res => {
        console.log(res)
      })
    },
    getSelect (text, type) {
      var that = this
      return getSelect(text).then((res) => {
        // console.log(res)
        if (res.ret !== null) {
          that.$root[type] = res.ret.dictionaryList
          console.log(that.$root[type])
        }
      })
    },
    getAddress () {
      var that = this
      return getAddress().then((res) => {
        console.log(res)
        that.$root.address = res.ret.concat()
      })
    }
  },
  mounted () {
    console.log(this.browseRecords)
    var that = this
    this.$router.beforeEach((to, from, next) => {
      // console.log('监听路由', from)
      that.addRecords(from)
      // 本地存储
      // if (from.path === '/') {
      //   next()
      // }
      var browseHistory = localStorage.getItem('browseHistory')
      var browseHistoryMsg = {
        path: '',
        title: ''
      }
      browseHistoryMsg.path = from.path
      browseHistoryMsg.title = from.meta.title
      if (from.path === '/') {
        browseHistoryMsg.title = '首页'
      }
      if (browseHistory == null) {
        var arr = []
        arr.push(browseHistoryMsg)
        browseHistory = JSON.stringify(arr)
      } else {
        // eslint-disable-next-line no-redeclare
        var arr = JSON.parse(browseHistory)
        // 去重
        if (arr.length > 6) {
          arr.splice(arr.length - 1, 1)
        }
        for (var i = 0; i < arr.length; i++) {
          if (browseHistoryMsg.path === arr[i].path) {
            arr.splice(i, 1)
            break
          }
        }
        arr.unshift(browseHistoryMsg)
        // console.log(arr, arr.length)
        //  arr.push(browseHistoryMsg)
        browseHistory = JSON.stringify(arr)
      }
      localStorage.setItem('browseHistory', browseHistory)
      next()
    })

    if (this.$root.address.length === 0) {
      this.getAddress()
    }
  }
}
</script>
<style lang="less">
.table-page-search-wrapper .ant-form-inline .ant-form-item > .ant-form-item-label {
  width: 147px;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 4px;
  height: 8px;
  background: rgba(0, 0, 0, 0.1);
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.5);
}
</style>
