<template>
  <div class="main">
    <div v-if="list.length > 0">
      <div class="item" v-for="(item,index) in list" :key="index">
        <input type="checkbox" v-model="item.complete">
        <span>{{item.title}}</span>
        <button @click="delTodo(item,index)">删除</button>
      </div>
    </div>
    <div v-else>暂无任务</div>
  </div>
</template>

<script>
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'navMain',
    //接受父组件传过来的任务列表
    props:{
      list:{
        type:Array,
        require:true
      }
    },
    emits:['del'],
    setup(props,ctx) {
      //给父组件传递想要删除的任务
      let delTodo = (item, index) => {
        ctx.emit('del',index)
      };
      return {
        delTodo
      }
    }
  })
</script>

<style scoped lang="scss">
  .main {
    width: 91%;
    height: auto;
    margin: 5px auto;

    .item {
      margin-bottom: 5px;
      position:relative;

      input {
        position: relative;
        left: 0;
        margin-right: 10px;
      }

      span {
        width: 80%;
        text-align: left;
        display: inline-block;
      }

      button {
        width: 45px;
        height: 21px;
        line-height: 21px;
        margin-right: 20px;
        position: absolute;
        right: 0;
        display: none;
      }

      &:hover {
        background: #cccccc;

        button {
          display: inline-block;
        }
      }
    }
  }
</style>