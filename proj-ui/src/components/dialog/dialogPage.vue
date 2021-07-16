<template>
   <div class="dat">
      <el-input v-model="count"></el-input>
      <el-button @click="addCount" type="primary" class="btn">增加</el-button>
      <el-input v-model="getChild" disabled placeholder="接受父组件得知"></el-input>
      <el-button @click="getValue" type="primary" class="btn">获取</el-button>
   </div>
</template>

<script>
   export default {
      name: "dialogPage",
      props: ['pablum'],
      data() {
         return {
            innerDialog: false,
            count: '1',
            getParent: '',
            getChild:'',
         }
      },
      methods: {
         addCount() {
            this.$emit("getInner", this.count++)
         },
         getValue(){
            this.getChild = this.pablum;
         }
      },
   }
</script>

<style scoped>
   .btn {
      float: right;
      height: 40px;
      margin: 1%;
   }
</style>