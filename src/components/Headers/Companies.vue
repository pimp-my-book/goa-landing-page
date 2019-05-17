<template>
    <section>
    <div>
     <DisplayLarge
     text="We Keep Great Company"
     />
    </div>
    <div class="flex flex-row">
     <img 
     class=""
     src="https://s3.amazonaws.com/goa-assets/Images/companies/AGOF-Logo.png"
     alt="Alan Gray"
     />
     <img 
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Acc_Logo_Black_Purple_RGB.PNG"
     alt="Accenture"
     />
     <img 
     src="https://s3.amazonaws.com/goa-assets/Images/companies/MAD.png"
     alt="MAD"
     />
     <img 
     src="https://s3.amazonaws.com/goa-assets/Images/companies/Moshal_weloveIT_logo254-90.png"
     alt="Moshal"
     />
     <img 
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


