<template>
    <input 
    class="
    bg-grey-lighter 
    rounded-px 
    py-2
    px-4 
    border-gray-500 
    focus:outline-none 
    focus:bg-white"
    type="text"
    :placeholder="placeholder"
    @input="handleInput"
    />
</template>
<script>
export default {
    name:'Input',
    props: {
    placeholder:String,
   },
   data(){
       return {
           value: ""
       }
      
   },
    methods:{
           handleInput(e){
               this.$emit('input', e.target.value)
           }
       }
   
}
</script>
