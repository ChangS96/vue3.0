<template>
  <div class="child">
    <h2>An Child Page</h2>
    <label>
      <span style="color:red">得：</span>
      <span style="color:#000000">{{parentMsg}}</span>
    </label>
    <br>
    <label>
      <input type="text" v-model="childMsg">
    </label>
    <button @click="send">发送给父组件</button>
  </div>
</template>

<script>
  import {ref} from 'vue'

  export default {
    name: "Child",
    props: {
      parentMsg: {
        type: String,
        require: true
      }
    },
    setup(props, ctx) {
      let childMsg = ref('');
      let send = () => {
        ctx.emit('send', childMsg.value)
      };
      return {
        send,
        childMsg
      }
    }
  }
</script>

<style scoped>
  .child {
    width: 500px;
    margin: 30px auto;
    border: 1px solid #000000;
    color: greenyellow;
    padding: 20px;
  }

</style>