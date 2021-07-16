<template>
   <div id="blog-posts-demo">
      <button @click="fangBig">大大大</button>
      <h4>123456789</h4>
   </div>
</template>

<script>

   export default {
      name: "blogPost",
      setup(props, ctx) {
         let fangBig = () => {
            ctx.emit('enlargeText', 0.01)
         };
         return {
            fangBig,
         }
      },
   }
</script>

<style scoped>
button{
   margin:10px;
}
</style>