<template>
   <div>
      <h3 :class="['tab-A']">this is A</h3>
      <h3 :class="['tab-B']">this is B</h3>
      <h3 :class="['tab-C']">this is C</h3>
   </div>
</template>

<script>
   import {computed} from 'vue'

   export default {
      name: "ABC",
      props:['currentTab'],
      setup(props) {
         let currentTabComponent = computed({
            get: () => 'tab-' + props.currentTab.toLowerCase(),
         });
         return {
            currentTabComponent
         }
      }
   }
</script>

<style scoped>

</style>