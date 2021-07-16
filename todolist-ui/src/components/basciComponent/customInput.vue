<template>
   <div>
      <label>
         <input type="text" :value="searchText" @input="searchText = $event.target.value">
      </label>
   </div>
</template>

<script>
   export default {
      name: 'customInput',
      setup() {
         return {}
      }
   }
</script>

<style scoped>

</style>