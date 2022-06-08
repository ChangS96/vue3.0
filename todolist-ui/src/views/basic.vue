<template>
   <div>
      <!--放大效果-->
      <div :style="{ fontSize: postFontSize + 'em' }">
         <blog-post @enlarge-text="onEnlargeText"></blog-post>
      </div>
      <hr>
      <!--动态组件-->
      <div id="dynamic-component-demo" class="demo">
         <button v-for="tab in tabs" v-bind:key="tab"
                 v-bind:class="['tab-button', { active: currentTab === tab }]"
                 v-on:click="currentTab = tab">{{ tab }}
         </button>
         <a-b-c :currentTab="currentTab" v-bind:is="currentTabComponent" class="tab"></a-b-c>
      </div>
   </div>
</template>

<script>
   import {ref, reactive} from 'vue'
   import BlogPost from "../components/basciComponent/blogPost"
   import ABC from "../components/dongtai/ABC";

   export default {
      name: "basic",
      components: {ABC, BlogPost},
      setup() {
         let postFontSize = ref(1);
         let currentTab = ref('A');
         let tabs = reactive(['A', 'B', 'C']);
         let onEnlargeText = (data) => {
            postFontSize.value += data;
         };
         //返回reactive 或 readonly代理的原始对象
         let foo = {};
         let reactiveFoo = reactive(foo);
         console.log(toRaw(reactiveFoo) === foo);

         return {
            onEnlargeText,
            postFontSize,
            tabs,
            currentTab,
         }
      }

   }
</script>

<style scoped>
.tab-button{
   border:1px solid #00ff00;
}
</style>
