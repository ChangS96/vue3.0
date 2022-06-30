<template>
    <div id="box">
        <comImages ref="bindimg" fit="fill" class="icon-img" />
        <div>这是{{count}}张图片</div>
    </div>
</template>

<script>
    import comImages from '../comImages.vue'
    import {defineComponent,ref} from 'vue'

    export default defineComponent({
        setup(){
            const count = ref('2')
            console.log()
            return{
                count
            }
        },
        components:{
            comImages
        }
    })

</script>