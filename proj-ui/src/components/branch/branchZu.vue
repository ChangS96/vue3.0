<template>
   <div>
      <h3>子组件</h3>
      <label>
         <input v-model="sendChild" type="text" placeholder="发送至父">
         <button @click="sendValue">发送</button>
         <br>
         <input v-model="getParent" type="text" disabled placeholder="接收父">
         <button @click="getValue">获取</button>
      </label>
   </div>
</template>

<script>
   export default {
      name: "branchZu",
      props:['sendParent'],
      data(){
         return{
            sendChild:'',
            getParent:'',
         }
      },
      methods:{
         sendValue(){
            this.$emit("getChildValue",this.sendChild)
         },
         getValue(){
            this.getParent = this.sendParent;
         },
      },
   }
</script>

<style scoped>

</style>