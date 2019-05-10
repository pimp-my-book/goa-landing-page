<template>
     <div class="container ">
   <!-- Start of container -->
   <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- Start of flex-row -->

<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_High_five_u364.svg"
     />
   </div>
<!-- End of img -->

<!-- start of text-part of div -->
<div class="text-left w-3/4 pl-32">
     <DisplaySmall
   text="Your Students’ Needs Sorted"
   />
   <FeatureText
   text="We created an easy to use experince that allows students to order what they need and have records of their order history. They also get notified about the stages of their order."
   />
  <!-- start of ul -->
  <div class="p-12 text-left ">
 <ul>
   <li>
     <FeatureText
   text="Order History"
   />
   </li>
   <li>
     <FeatureText
   text="Restriction on Book Orders"
   />
   </li>
   <li>
     <FeatureText
   text="Get Books for all degrees"
   />
   </li>
   <li>
      <FeatureText
   text="Delivery at their destination of choice"
   />
   </li>
   </ul>
          <!-- end of ul -->

  </div>
    
 
     <!-- End of text-part of div -->
   </div>




   
   
   </div>
   <!-- end of flex-row -->
 </div>
   <!-- End  of container --> 
      
</template>

<script>

import DisplaySmall from "../Typography/DisplaySmall";
import FeatureText from "../Typography/FeatureText";

export default {
    name: 'LandingBody',
    components: {
        DisplaySmall,
        FeatureText
    }
}
</script>

<style >
ul li {
  list-style-image: url('https://s3.amazonaws.com/goa-assets/Icons/bullet_point.svg');
  margin:0;
  padding:0;
}
</style>