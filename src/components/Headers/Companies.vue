<template>
    <section class="mt-10 lg:pl-20 s:pl-5 md:pl-10" >
    <div class="text-center mb-10">
     <DisplayLarge
     text="We Keep Great Company"
     />
    </div>
    <div class="flex lg:flex-row s:flex-col ">
     <img 
     class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64" 
     src="https://s3.amazonaws.com/goa-assets/Images/companies/AGOF-Logo.png"
     alt="Alan Gray"
     />
     <img 
     class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-150 lg:w-64"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Acc_Logo_Black_Purple_RGB.PNG"
     alt="Accenture"
     />
     <img 
     class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-250 lg:w-64"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/oasis.png"
     alt="Oasis"
     />
     <img 
     class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Moshal_weloveIT_logo254-90.png"
     alt="Moshal"
     />
     <img 
     class="lg:h-90 mr-5 s:mt-5 md:w-3/4 md:h-200 lg:w-64"
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


