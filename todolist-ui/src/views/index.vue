<template>
  <div class="typing">
    <button @click="count++">{{ count }}</button>
    <br>
    <div class="typing-effect">Typing effect for text</div>
    <span>骨架屏：https://segmentfault.com/a/1190000014832185</span>
    <p>My home is ShanXi.To the east of Shanghai Telecom company, textile design Institute, to the south of Changshou Road, to the west of the former maternal and infant health care hospital, to the north of xinghai Building</p>
    <h1>this is a Heading</h1>
    <div v-for="(item,index) in imgList" :key="index" class="imgbox">
      <img :src="require('@/assets/' + item.name + '.jpg')" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(3);
console.log(count.value);

const imgList = ref([
  {
    id:1,
    name:'a',
  },
  {
    id:2,
    name:'b'
  },
])
console.log(imgList.value)


</script>

<style scoped>
.typing {
  height: 80vh;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
.typing-effect {
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: monospace;
  font-size: 2em;
  animation: typing 2s steps(220), effect 0.5s step-end infinite alternate;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes effect {
  50% {
    border-color: transparent;
  }
}
p{
  width:500px;
  font-size:22px;
}
.typing p:first-of-type::first-letter{
  color: red;
    float:  left;
    font-size: 4rem;
    line-height: 4vw;
    padding-right: 8px;
} 
.imgbox{
  width:200px;
  height:120px;
  display:inline-block;
  margin:5px;
  /* margin:0 auto; */
  /* display:flex; */
  /* justify-content: flex-end; */
  /* align-items: flex-start; */
}
.imgbox img{
  display:block;
  width:100%;
  height:100%;
}
</style>


