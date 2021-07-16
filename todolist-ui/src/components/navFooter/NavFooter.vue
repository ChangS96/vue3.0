<template>
  <div class="foot">
    <span>总计：{{list.length}}个  / 已完成：{{isComplete}}个</span>
    <button @click="clear" v-if="isComplete > 0">清除已完成</button>
  </div>
</template>

<script>
  import {defineComponent,computed} from 'vue'

  export default defineComponent({
    name: 'navFooter',
    //接受父组件穿过来的任务列表
    props:{
      list:{
        type:Array,
        require:true
      }
    },
    setup(props,ctx) {
      //筛选出已完成的任务数
      let isComplete = computed(()=>{
        let arr = props.list.filter((item)=>{
          return item.complete
        });
        return arr.length
      });
      //筛选出要清除的传递的任务给父组件
      let clear = () => {
        let arr = props.list.filter((item)=>{
          return item.complete === false
        });
        ctx.emit('clear',arr)
      };
      return {
        isComplete,
        clear
      }
    }
  })
</script>

<style scoped lang="scss">
  .foot {
    width: 91%;
    height: 34px;
    margin: 5px auto;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #123651;
    span{
      float:left;
      margin-left:10px;
    }
    button {
      float: right;
      margin: 5px 6px 5px 0;

    }
  }

</style>