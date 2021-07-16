<template>
   <div>
      <div style="text-align:center">
         <h3>后面紧跟一个弹框</h3>
         <button @click="outerDialog = true">弹一次啊</button>
         <button @click="jumpBtn">跳一下啊</button>
         <button @click="benBtn">蹦一下啊</button>
         <el-input v-model="num" placeHolder="上得到的值" disabled class="spa">{{num}}</el-input>
         <el-input v-model="pablum"  placeHolder="下发送的值" class="spa"></el-input>
      </div>
      <el-dialog class="out" title="外层 Dialog" :visible.sync="outerDialog" width="80%" center>
         <!-- 表单-->
         <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
               <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
               <el-col :span="9">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                  style="width: 100%;"></el-date-picker>
               </el-col>
               <el-col class="line" :span="6" style="text-align:center">———</el-col>
               <el-col :span="9">
                  <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
               </el-col>
            </el-form-item>
         </el-form>
         <!-- 多选框-->
         <template>
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
            </el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
               <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
         </template>
         <div slot="footer" class="dialog-footer">
            <el-button @click="outerDialog = false">取 消</el-button>
            <el-button type="primary" @click="innerDialog = true ">内层Dialog</el-button>
         </div>
         <el-dialog width="70%" title="内层 Dialog" :visible.sync="innerDialog" append-to-body center>
            <!--组件组件组件组件组件-->
            <dialog-page v-on:getInner="countAdd" :pablum="pablum"></dialog-page>

            <div slot="footer" class="dialog-footer">
               <el-button @click="cancel">取 消</el-button>
               <el-button type="primary" @click="addSubmit">确认</el-button>
            </div>
         </el-dialog>
      </el-dialog>
   </div>
</template>

<script>
   import DialogPage from "../../components/dialog/dialogPage";

   let cityOptions = ['上海', '北京', '广州', '深圳'];
   export default {
      name: "bomBox",
      components: {DialogPage},
      data() {
         return {
            outerDialog: false,
            innerDialog: false,
            form: {
               name: '',
               date1: '',
               date2: '',
            },
            checkAll: false,
            checkedCities: ['上海'],
            cities: cityOptions,
            isIndeterminate: true,
            num:'',
            pablum: '冫亣傲世阿萨德',
            getParent: '',
         }
      },
      methods: {
         jumpBtn(){
            this.$router.push({path:'/main'})
         },
         benBtn(){
            this.$router.push({path:'/map'})
         },
         handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
         },
         handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
         },
         countAdd: function (count) {
            this.num = count;
         },
         cancel() {
            this.innerDialog = false;
         },
         addSubmit() {
            this.innerDialog = false;
         },
      },
   }
</script>

<style scoped>
   .spa {
      display: block;
      width: 50%;
      height: 28px;
      margin: 2% auto;
   }
</style>