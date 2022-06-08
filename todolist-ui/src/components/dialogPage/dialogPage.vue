<template>
   <div>
      <el-button class="btn" @click="goBack" type="primary">返回</el-button>
      <div>
         <h3>父收</h3>
         <span>父接收 :</span>
         <span>
            <label>
               <input type="text" disabled v-model="fushou">
            </label>
         </span>
      </div>
      <div>
         <h3>父发</h3>
         <span>父发送 :</span>
         <span>
            <label>
               <input type="text" v-model="fufa">
            </label>
         </span>
      </div>

      <!--子组件子组件子组件子组件子组件子组件-->
      <child-dialog :fufa="fufa" @getZi="getZi"></child-dialog>
   </div>
</template>

<script>
   import {ref} from 'vue'
   import {useRouter} from 'vue-router'
   import ChildDialog from "./childDialog";
   // import {ElMessage} from 'element-plus'

   export default {
      name: "dialogPage",
      components: {ChildDialog},
      setup() {
         let router = useRouter();
         let fushou = ref('');
         let fufa = ref('');
         //父组件接收子组件的值1、2、
         let getZi = (data) => {
            fushou.value = data.value
         };
         // function getZi(data) {
         //    console.log(data);
         //    ElMessage.success({
         //       message: data.value,
         //       type: 'success'
         //    });
         //    fushou.value = data.value;
         // }
         let goBack = () => {
            router.go(-1)
         };
         return {
            fushou,
            fufa,
            goBack,
            getZi,
         }
      }
   }
</script>

<style scoped>
   .btn {
      position: absolute;
      top: 200px;
      left: 0;
      margin: 30px;
   }
</style>
