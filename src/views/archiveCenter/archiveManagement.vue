<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline" v-bind="formLayout">
          <a-row>
            <a-col :md="8" :sm="24">
              <a-form-item label="公民身份证号码">
                <a-input v-model="queryParam.idCard" placeholder />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="姓名asda">
                <a-input v-model="queryParam.name" placeholder />
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="姓asdfas名">
                <a-input v-model="queryParam.name" placeholder />
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
    </a-card>
    <history></history>
  </page-header-wrapper>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'ArchiveManagement',
    data () {
      return {
        history: [],
        queryParam: [],
        formLayout: {
          labelCol: {
            span: 2,
            offset: 2
          }
        }
      }
    },
    computed: {
      ...mapState(['browseRecords'])
    },
    mounted () {
      console.log(this.browseRecords)
    },
    created () {
      this.history = JSON.parse(localStorage.getItem('browseHistory'))
    }
  }
</script>

<style lang="less">

  .browseRecords{
    position: absolute;
    right:100px;
    top: 10px;
    z-index: 100;
    .browseRecords-item{
      float: left;
      margin: 10px;
      cursor: pointer;
    }
    //bottom: 0;
    //right: 0;
    //margin: auto;
  }
</style>
