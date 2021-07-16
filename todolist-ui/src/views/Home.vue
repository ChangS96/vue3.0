<template>
  <div class="home">
    <NavHeader @add="add"></NavHeader>
    <NavMain :list="list" @del="del"></NavMain>
    <NavFooter :list="list" @clear="clear"></NavFooter>
    <button @click="go">走，去传参</button>
  </div>

</template>

<script>
  import NavHeader from '@/components/navHeader/NavHeader.vue'
  import NavMain from '@/components/navMain/NavMain.vue'
  import NavFooter from '@/components/navFooter/NavFooter.vue'
  import {useRouter} from "vue-router";
  import {useStore} from 'vuex';
  import {defineComponent, computed, ref, onMounted, onUnmounted} from 'vue'

  export default defineComponent({
    name: "Home",
    setup() {
      let router = useRouter();
      let store = useStore();
      //todoList部分-------------------------------------
      let value = ref('');
      //添加任务
      let add = (val) => {
        value.value = val;
        let flag = true;
        list.value.map((item) => {
          if (item.title === value.value) {
            flag = false;
            alert('任务已存在')
          }
        });
        if (flag) {
          //调用mutations
          store.commit('addTodo', {
            title: value.value,
            completed: false
          })
        }
      };
      //删除任务
      let del = (val) => {
        //调用mutations
        store.commit('delTodo', val);
      };
      //清除已完成
      let clear = (val)=>{
        //调用mutations
        store.commit('clear',val)
      };
      //从vuex仓库获取任务列表
      let list = computed(() => {
        return store.state.list
      });
      //传值 路由-----------------------------------------------
      let name = ref("dick");
      let age = ref(25);
      let obj = ref({a: 1});
      onUnmounted(() => {
      });
      onMounted(() => {
      });
      let go = () => {
        //返回上一个页面
        // router.back({
        //   path: '/home'
        // })
        //传参-----query传参path 和 name都可以，地址栏显示参数 ；
        // params 只能用name，地址栏不显示参数
        router.push({
          //push里面可以用name 和 path 表示地址
          // path:"/detail",
          name: 'Detail',
          // query:{
          //   name:name.value,
          //   age:age.value,
          //   obj:JSON.parse(JSON.stringify(obj))
          // },
          params: {
            name: name.value,
            age: age.value,
            obj: JSON.parse(JSON.stringify(obj))
          },
        })
      };
      return {
        name,
        age,
        obj,
        go,
        add,
        del,
        clear,
        list,
        value
      }
    },
    components: {
      NavHeader,
      NavMain,
      NavFooter
    }
  })
</script>

<style scoped lang="scss">
  .home {
    width: 400px;
    height: auto;
    border: 1px solid #000000;
    padding: 10px;
    margin: 10px auto;
  }
</style>
