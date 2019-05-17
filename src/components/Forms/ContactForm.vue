<template>
<form 
name="Contact-Form"
method="post"
data-netlify="true"
data-netlify-honeypot="bot-field"
class="w-full max-w-lg shadow-lg">
    <div class="text-center">
        <DisplayLarge
        text="We'd Like To Get To Know You Better"
        class="text-black"
        />
    </div>
    <div class="flex flex-wrap -mx-3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700 mb-2"
         text="First Name"
        />
        <Input
        placeholder="Miles" 
        />
        </div>
        <div class="w-full md:w-1/2 px-3 ">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  mb-2"
         text="Last Name"
        />
        <Input
         placeholder="Davis"
        />
        </div>
    </div>

     <div class="flex flex-wrap -m3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Bursary Name"
        />
        <Input
        placeholder="Purple Cow" 
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Email Address"
        />
        <Input
         placeholder="miles@purplecow.co.za"
        />
        </div>
    </div>

     <div class="flex flex-wrap -m3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Website (Optional)"
        />
        <Input
        placeholder="www.purplecow.co.za" 
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Number of Students"
        />
        <Input
         placeholder="200"
        />
        </div>
    </div>

     <div class="flex flex-wrap -m3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Telephone Number"
        />
        <Input
        placeholder="021 087 4322" 
        />
        </div>
        
    </div>

    <div class="flex flex-wrap -m3 mb-6 mt-5">
        <div class="w-full md:w-1/2 px-3 lg:mb-6 lg:pr-16 md:mb-0 s:mb-6">
        <PrimaryButton
        text="Contact Sales"
        />
        </div>
    </div>
</form>
    
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'
import FeatureText from '../Typography/FeatureText'
import Input from '../Inputs/Input'
import PrimaryButton from '../Buttons/PrimaryButton'

export default {
    name: 'ContactForm',
     components:{
        DisplayLarge,
        FeatureText,
        Input,
        PrimaryButton
    },
    data(){
        return {
           form:{
               firstName: "",
               lastName: "",
               bursaryName: "",
               emailAddress: "",
               website: "",
               numOfStudents: 0,
               telNumber: ""
           }
        }
    }
}
</script>

