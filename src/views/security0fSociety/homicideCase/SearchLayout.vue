<template>
  <page-header-wrapper
    :tab-list="tabList"
    :tab-active-key="tabActiveKey"
    :tab-change="handleTabChange"
  >
    <template v-slot:content>
      <div class="ant-pro-page-header-search">
        <a-input-search size="large" style="width: 80%; max-width: 522px;">
          <template v-slot:enterButton>
            搜索
          </template>
        </a-input-search>
      </div>
    </template>
    <router-view />
  </page-header-wrapper>
</template>

<script>
const getActiveKey = (path) => {
  switch (path) {
    case '/security0fSociety/homicideCase/basicInformation-List':
      return '1'
    case '/security0fSociety/homicideCase/criminalSuspect-List':
      return '2'
    case '/security0fSociety/homicideCase/victim-List':
      return '3'
    default:
      return '1'
  }
}
export default {
  name: 'SearchLayout',
  data () {
    return {
      tabList: [
        { key: '1', tab: '命案基本信息' },
        { key: '2', tab: '命案犯罪嫌疑人' },
        { key: '3', tab: '命案受害人' }
      ],
      tabActiveKey: '1',
      search: true
    }
  },
  created () {
    this.tabActiveKey = getActiveKey(this.$route.path)

    this.$watch('$route', (val) => {
      this.tabActiveKey = getActiveKey(val.path)
    })
  },
  methods: {
    handleTabChange (key) {
      this.tabActiveKey = key
      switch (key) {
        case '1':
          this.$router.push('/security0fSociety/homicideCase/basicInformation/List')
          break
        case '2':
          this.$router.push('/security0fSociety/homicideCase/criminalSuspect/List')
          break
        case '3':
          this.$router.push('/security0fSociety/homicideCase/victim/List')
          break
        default:
          this.$router.push('/workplace')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ant-pro-page-header-search {
  text-align: center;
  margin-bottom: 16px;
}
</style>
