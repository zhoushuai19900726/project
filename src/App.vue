<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-config-provider>
</template>

<script>
import { domTitle, setDocumentTitle } from '@/utils/domUtil'
import { i18nRender } from '@/locales'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
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
  methods: {
    ...mapMutations(['addRecords'])
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
  }
}
</script>
