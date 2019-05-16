<template>
<form class="w-full max-w-lg shadow-lg">
    <div class="text-center">
        <DisplaySmall
        text="We'd Like To Get To Know You Better"
        class="text-black"
        />
    </div>

</form>
    
</template>
<script>
import DisplaySmall from '../Typography/DisplaySmall'
import FeatureText from '../Typography/FeatureText'


export default {
    name: 'ContactForm',
     components:{
        DisplaySmall,
        FeatureText
    },
}
</script>

