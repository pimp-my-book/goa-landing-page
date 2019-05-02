<template>
<header class="Header">
    <div class="lg:mt-32 lg:mr-20 sm:items-center sm:flex sm:flex-col">
   <DisplayXLarge 
  text="A 22nd Century Educational Experince"
  class="text-white"
  />
  <FeatureText
  text="GOA is platform that allows bursaries to provide universty textbooks to their students, allowing you to save on your budget for your bursary. We focus on sourcing the books, while allowing students to focus on what matters."
  class="text-white"
  />
    </div>
  
</header>

</template>
<script>
import DisplayXLarge from "../Typography/DisplayXLarge";
import FeatureText from "../Typography/FeatureText";

export default{
    name: 'MainHeader',
    components: {
        DisplayXLarge,
        FeatureText
    }
}
</script>

<style>
 .Header{
     position: absolute;
     width: 100%;
     height: 729px;
     background-image: url('https://s3.amazonaws.com/goa-assets/Images/Home__Header-min.png');
     background-size: cover;
 }

</style>
