<template>
  <div>
    <label>
      <input type="text" @keydown.enter="addTodo" placeholder="请输入要做的事" v-model="value">
    </label>
  </div>
</template>

<script>
  import {defineComponent,ref} from 'vue'
  import {useStore} from "vuex"

  export default defineComponent({
    name: 'navHeader',
    setup(props,ctx) {
      let store = useStore();
      let value = ref('');
      //给父组件传递想要添加的任务
      let addTodo =()=>{
        ctx.emit('add',value.value);
        value.value = ''
      };
      return {
        store,
        value,
        addTodo
      }
    }
  })
</script>

<style scoped>
  input {
    width: 90%;
    height: 20px;
    margin: 2px auto 5px;
    padding: 3px;
    color: red;
  }
</style>