<template>
   <div>
      <hr>
      <div>
         <h3>儿收</h3>
         <span>儿接收 :</span>
         <span>
            <label>
               <input type="text" disabled v-model="zishou">
            </label>
         </span>
      </div>
      <div>
         <h3>儿发</h3>
         <span>儿发送 :</span>
         <span>
            <label>
               <input type="text" v-model="zifa">
            </label>
             <el-button type="warning" @click="ziSubmit" size="mini" style="margin-left:30px;">发送</el-button>
         </span>
      </div>
   </div>
</template>

<script>
   import {ref} from 'vue'
   import {computed} from 'vue'

   export default {
      name: "childDialog",
      props: {
         fufa: String,
      },
      setup(props, ctx) {
         // let zishou = ref('');
         //子组件接收父组件两种方式;1、自动接收 。2、点击按钮接收(注释部分)
         let zishou = computed({
            get: () => props.fufa,
         });
         // let getValue = ()=>{
         //    zishou.value = props.fufa
         // };
         let ziSubmit = () => {
            ctx.emit('getZi',zifa)
         };
         let zifa = ref('');
         return {
            zishou,
            zifa,
            ziSubmit,
            // getValue
         }
      }
   }
</script>

<style scoped>

</style>