<template>
    <header class="w-full h-64 bg-green-gradient text-center lg:rounded-header-border s:header-border-sm">
   <DisplayXLarge
   text="Looking For More Info?"
   class="text-white pt-5"
   />
    <FeatureText
    text="Below is a contact form that you can fill out and send to us. Then someone will get in touch with you to help you with an queries."
    class="text-white pt-5"
    />
    </header>
</template>    
<script> 
import DisplayXLarge from '../Typography/DisplayXLarge'
import FeatureText from '../Typography/FeatureText'

export default {
    name: 'BoarderHeader',
    components:{
        DisplayXLarge,
        FeatureText
    },
    props: {
        HeaderText: String,
        BodyText: String
    }
}
</script>

<style >
header{
    background: linear-gradient(179.9deg, #A0FFAB 23.23%, #94B5E3 99.68%);
}
</style>

