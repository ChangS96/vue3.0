<template>
   <div>
      <el-button class="btn" type="danger" @click="outerVisible">点击打开外层 Dialog</el-button>
      <!--第一层第一层第一层第一层第一层第一层第一层第一层-->
      <el-dialog width="60%" title="dialog第一层" v-model="outerOpen" center>
         <label>
            姓名 ： <input v-model="form1.name" placeHolder="请输入姓名"/><br>
            电话 ： <input v-model="form1.phone" placeHolder="请输入联系方式"/><br>
            年龄 ： <input v-model="form1.age" placeHolder="请输入年龄"/>
         </label>
         <template #footer>
            <div class="dialog-footer">
               <el-button @click="outerCancel">取 消</el-button>
               <el-button type="primary" @click="innerSubmit">打开内层 Dialog</el-button>
            </div>
         </template>
         <!-- 第二层第二层第二层第二层第二层第二层第二层第二层-->
         <el-dialog width="30%" title="dialog第二层" v-model="innerOpen" append-to-body center>
            <label>
               姓名 ： <input v-model="form.name" placeHolder="请输入姓名"/><br>
               电话 ： <input v-model="form.phone" placeHolder="请输入联系方式"/><br>
               年龄 ： <input v-model="form.age" placeHolder="请输入年龄"/><br>
               数量 ： <input style="text-align:center;" v-model="form.count"/>
               <el-button type="danger" size="mini" @click="countNum">+吖+</el-button>
            </label>
            <template #footer>
               <div class="dialog-footer">
                  <el-button @click="Cancel">取 消</el-button>
                  <el-button type="primary" @click="Submit">确认</el-button>
               </div>
            </template>
         </el-dialog>
      </el-dialog>
   </div>
</template>

<script>
   import {ref, reactive} from 'vue'
   import {useRouter} from 'vue-router'

   export default {
      name: "Dialog",
      setup() {
         let router = useRouter();
         let form1 = reactive({
            name: '',
            phone: '',
            age: '',
         });
         let form = reactive({
            name: '',
            phone: '',
            age: '',
            count: ''
         });
         let outerOpen = ref(false);
         let innerOpen = ref(false);
         let outerVisible = () => {
            outerOpen.value = true
         };
         let outerCancel = () => {
            outerOpen.value = false
         };
         let innerSubmit = () => {
            innerOpen.value = true
         };
         let Cancel = () => {
            innerOpen.value = false
         };
         let Submit = () => {
            innerOpen.value = false;
            router.push('/dialogPage')
         };
         let countNum = () => {
            form.count++
         };

         return {
            form1,
            form,
            outerOpen,
            innerOpen,
            outerVisible,
            outerCancel,
            innerSubmit,
            Cancel,
            Submit,
            countNum,
         }
      }
   }
</script>

<style scoped>
   .btn {
      margin: 20px;
   }

   input {
      margin: 5px 0;
   }
</style>