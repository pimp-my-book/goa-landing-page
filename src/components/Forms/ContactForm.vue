<template>
<form class="w-full max-w-lg shadow-lg">
    <div class="text-center">
        <DisplayLarge
        text="We'd Like To Get To Know You Better"
        class="text-black"
        />
    </div>
    <div class="flex flex-wrap -m3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700 font-bold pr-10"
         text="First Name"
        />
        <Input
        placeholder="Miles" 
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700 font-bold pr-10"
         text="Last Name"
        />
        <Input
         placeholder="Davis"
        />
        </div>
    </div>

</form>
    
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'
import FeatureText from '../Typography/FeatureText'
import Input from '../Inputs/Input'

export default {
    name: 'ContactForm',
     components:{
        DisplayLarge,
        FeatureText,
        Input
    },
}
</script>

