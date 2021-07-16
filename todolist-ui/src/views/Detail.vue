<template>
   <div>
      <span>An detail page</span>
      <button @click="goBack">返回</button>
   </div>
</template>

<script>
   import {onMounted} from 'vue'
   import {useRoute, useRouter} from 'vue-router'

   export default {
      name: 'Detail',
      setup() {
         let router = useRouter();
         let route = useRoute();
         console.log(route.params);
         onMounted(() => {
            console.log('详细已挂载')
         });
         const goBack = () => {
            router.back(-1);
         };

         return {
            goBack,
         }
      },
   }
</script>

<style scoped>

</style>