<template>

<header class="Header ">
    <div class="lg:text-left sm:text-left ml-3 lg:flex lg:flex-wrap pt-32 lg:mr-20  sm:flex sm:flex-col">
   <DisplayXLarge 
  text="Making your funds go further."
  class="text-white  "
  />
  <FeatureText
  text="GOA helps bursaries to manage and control their book allowances, while gaining control, removing wasteful expenditure, reducing overall book allowances budget and getting real time order data."
  class="text-white-lighter mt-2 "
  
  />
    </div>
    <div class="flex  mt-10 lg:mr-20 ml-10">
         <a href="http://app.gogoa.co.za/new_register"
                    class="no-underline text-white">
        <PrimaryButton
        text="Sign Up"
        />
        </a>
        <SecondaryButton
        text="How It Works"
        url="/how-it-works"
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





 

</style>
