<template>
    <input 
    class="
    bg-grey-lighter 
    rounded-px py-2 
    border-gray-500 
    focus:outline-none 
    focus:bg-white"
    type="text"
    :placeholder="placeholder"
    />
</template>
<script>
export default {
    name:'Input',
    props: {
    placeholder:String
   }
}
</script>
