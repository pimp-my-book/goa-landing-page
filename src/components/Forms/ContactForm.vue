<template>
<form 
name="Contact-Form"
method="post"
data-netlify="true"
data-netlify-honeypot="bot-field"
@submit.prevent="handleSubmit"
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
        name="firstName"
        @input="ev => form.firstName = ev.target.value"
        />
        </div>
        <div class="w-full md:w-1/2 px-3 ">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  mb-2"
         text="Last Name"
        />
        <Input
         placeholder="Davis"
         name="lastName"
         @input="ev => form.lastName = ev.target.value"
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
        name="bursaryName"
        @input="ev => form.bursaryName = ev.target.value"
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Email Address"
        />
        <Input
         placeholder="miles@purplecow.co.za"
         name="emailAddress"
         @input="ev => form.emailAddress = ev.target.value"
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
        name="website"
        placeholder="www.purplecow.co.za" 
        @input="ev => form.website = ev.target.value"
        />
        </div>
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <FeatureText
        class="block uppercase tracking-wide text-gray-700  pr-10 mb-2"
         text="Number of Students"
        />
        <Input
         placeholder="200"
         name="numOfStudents"
         @input="ev => form.numOfStudents = ev.target.value"
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
        name="telNumber"
        @input="ev => form.telNumber = ev.target.value"
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
    },
    methods:{
        encode(data){
         return Object.keys(data)
          .map(
              key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
        },
        handleSubmit(ev){
            fetch("/",{
                method: "POST",
                headers: {"Contact-Type":"application/x-www-form-urlencoded"},
                body: this.encode({
                    "form-name":"Contact-Form",
                    ...this.form
                })
            })
            .then(() => {
                
                this.$router.push("SubmissionSuccess");
            })
            .then(() =>{
                console.log(data)
            })
            .catch(() => {
                this.$router.push("SubmissionFailure");
            });
        }
    }
}
</script>

