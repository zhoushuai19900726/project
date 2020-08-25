<template>
  <div class="browseRecords">
    <div class="browseRecords-item" style="cursor: auto">浏览记录：</div>
    <div class="browseRecords-item" v-for="(item, index) in history" :key="item.path" v-if="index < 6" @click="$router.push(item.path)">{{ item.title }}</div>
  </div>
</template>

<script>
  export default {
    name: 'history',
    data () {
      return {
        history: []
      }
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
  }
</style>
