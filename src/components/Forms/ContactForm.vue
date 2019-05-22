 <template>
<form 
name="Contact-Form"
method="post"
netlify
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
        type="text"
        required
        v-model="form.firstName"
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
         type="text"
         required
         v-model="form.lastName"
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
        type="text"
        required
        v-model="form.bursaryName"
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
         type="text"
         required
          v-model="form.emailAddress" 
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
        type="text"
        required
        placeholder="www.purplecow.co.za" 
         v-model="form.website"       
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
         type="text"
         required
          v-model="form.numOfStudents"
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
         placeholder="0987 432 123"
         name="telNumber"
         type="text"
         required
          v-model="form.telNumber"
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
               numOfStudents: "",
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
          .join('&');
        },
        handleSubmit(){
            fetch('/contact',{
                method: 'POST',
                headers: {'Content-Type':'application/x-www-form-urlencoded'},
                body: this.encode({
                    'form-name':'Contact-Form',
                    ...this.form
                })
            })
            .then(() => {
                this.$router.push("SubmissionSuccess");
            })
            .catch(() => {
                this.$router.push("SubmissionFailure");
            });
        }
    }
}
</script>

