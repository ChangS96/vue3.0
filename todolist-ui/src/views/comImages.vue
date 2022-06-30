<template>
  <div id="container">
    <img src="@/assets/b.jpg" alt="">
    <el-image v-bind="$attrs"> 
        <div class="image-slot">
            <img src="@/assets/a.jpg" alt="图片加载失败.png">
        </div>
        <div class="placeholder-slot">加载中。。。</div>
    </el-image>
  </div>
</template>

<script>
    import {defineComponent,ref} from 'vue'

    export default defineComponent({
        setup(){
            const count = ref('2')
            console.log($attrs)
            return{
                count
            }
        },
        components:{
        }
    })
</script>

<style scoped>

  #container{
    border:1px solid red;
    width:300px;
    height:200px;
    margin:5px;
  }
  #container img {
    width:100%;
    height:100%;
    object-fit: contain;
  }
  #container .image-slot {
    text-align: center;
  }
  #container .placeholder-slot {
    text-align: center;
  }
</style>
