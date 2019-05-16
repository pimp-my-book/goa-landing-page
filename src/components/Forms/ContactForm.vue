<template>
<form class="w-full max-w-lg shadow-lg">
    <div class="text-center">
        <DisplayLarge
        text="We'd Like To Get To Know You Better"
        class="text-black"
        />
    </div>

</form>
    
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'
import FeatureText from '../Typography/FeatureText'


export default {
    name: 'ContactForm',
     components:{
        DisplayLarge,
        FeatureText
    },
}
</script>

