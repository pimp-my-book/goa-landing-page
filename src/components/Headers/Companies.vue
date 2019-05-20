<template>
    <section class="mt-10" >
    <div class="text-center mb-10">
     <DisplayLarge
     text="We Keep Great Company"
     />
    </div>
    <div class="flex flex-row pl-20">
     <img 
     class="h-90 mr-5"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/AGOF-Logo.png"
     alt="Alan Gray"
     />
     <img 
     class="h-90 mr-5"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Acc_Logo_Black_Purple_RGB.PNG"
     alt="Accenture"
     />
     <img 
     class="h-90 mr-5"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/oasis.png"
     alt="Oasis"
     />
     <img 
     class="h-90 mr-5"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Moshal_weloveIT_logo254-90.png"
     alt="Moshal"
     />
     <img 
     class="h-90 mr-5"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/crf-logo.jpg"
     alt="Cyril Ramamphosa"
     />
    </div>
    </section>
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'

export default {
    name:'Companies',
    components:{
        DisplayLarge
    }
}
</script>


