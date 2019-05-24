<template>

<header class="Header ">
    <div class="lg:text-left sm:text-justify ml-3 lg:flex lg:flex-wrap pt-32 lg:mr-20 sm:text-center  sm:flex sm:flex-col">
   <DisplayXLarge 
  text="A 22nd Century Educational Experince"
  class="text-white Header__Text "
  />
  <FeatureText
  text="GOA a is platform that allows bursaries to provide universty textbooks to their students, allowing you to save on your budget for your bursary. We focus on sourcing the books, while allowing students to focus on what matters."
  class="text-white-lighter mt-2 "
  
  />
    </div>
    <div class="flex  mt-10 lg:mr-20 ml-10">
        <PrimaryButton
        text="Book Demo"
        />
        <SecondaryButton
        text="How It Works"
        class="ml-3"
        />
    </div>
</header>

</template>
<script>
import DisplayXLarge from "../Typography/DisplayXLarge";
import FeatureText from "../Typography/FeatureText";
import PrimaryButton from "../Buttons/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton";

export default{
    name: 'MainHeader',
    components: {
        DisplayXLarge,
        FeatureText,
        PrimaryButton,
        SecondaryButton
        
    }
}
</script>

<style>
 .Header{
     
     width: 100%;
     height: 729px;
     background-image: url('https://s3.amazonaws.com/goa-assets/Images/Home__Header-min.png');
     background-size: cover;
    background-repeat: no-repeat;

   
    
    
 }

 .Header__Text{
     margin-right: 330px;
 }




 

</style>
