<template>
  <div id="container">
    <img src="@/assets/b.jpg" alt="">
    <el-image v-bind="$attrs" v-on="$listeners"> 
        <div slot="error" class="image-slot">
            <img src="@/assets/a.jpg" alt="图片加载失败.png">
        </div>
        <div slot="placeholder" class="placeholder-slot">加载中。。。</div>
    </el-image>
  </div>
</template>

<script setup>
  
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
