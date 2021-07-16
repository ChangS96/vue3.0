<template>
  <div class="about">
    <h1>An about page</h1>
    <label>
      <span>发：</span>
      <input placeholder="发送给子组件的值" type="text" v-model="parentMsg">
    </label>
    <br>
    <label>
      <span>收：</span>
      <input placeholder="收到子组件的值" type="text" disabled v-model="getChildMsg">
    </label>
    <child :parentMsg="parentMsg" @send="send"></child>
  </div>
</template>

<script>
  import {defineComponent, ref} from "vue"
  import Child from '../components/child/Child.vue'

  export default defineComponent({
    name: 'About',
    setup() {
      let parentMsg = ref('');
      let getChildMsg = ref('');
      let send = (val) => {
        getChildMsg.value = val
      };
      return {
        parentMsg,
        send,
        getChildMsg,
      }
    },
    components: {
      Child
    }

  })

</script>

<style>

</style>