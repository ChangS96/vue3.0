<template>
   <div class="box">
      <h3>父组件</h3>
      <label >
         <input v-model="sendParent" type="text" placeholder="发送至子">
         <br>
         <input v-model="getChild" type="text" disabled placeholder="接收子">
      </label>
      <br>
      <hr>
      <branch-zu v-on:getChildValue="getChildValue" :sendParent="sendParent"></branch-zu>
      <button @click="goBack">返回</button>
   </div>
</template>

<script>
   import BranchZu from "../../components/branch/branchZu";
   export default {
      name: "mainZu",
      components: {BranchZu},
      data(){
         return{
            sendParent:'',
            getChild:'',
         }
      },
      methods:{
         getChildValue:function(sendChild){
            this.getChild = sendChild;
         },
         goBack(){
            this.$router.go(-1);
         },
      },
   }
</script>

<style scoped>
   .box{
      height:50%;
      margin:0 auto;
      padding-top:100px;
      background-image: url("../../assets/logo.png");
   }
</style>