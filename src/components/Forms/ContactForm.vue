<template>
<form class="w-full max-w-lg shadow-lg">
    <div class="text-center">
        <DisplayLarge
        text="We'd Like To Get To Know You Better"
        class="text-black"
        />
    </div>
    <div class="flex flex-wrap -m3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700 font-bold"
         text="First Name"
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700 font-bold"
         text="Last Name"
        />
        </div>
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

