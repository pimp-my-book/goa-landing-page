<template>
    <header class="w-full h-64 bg-green-gradient lg:rounded-header-border s:header-border-sm">

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

