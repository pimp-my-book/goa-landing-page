<template>
     <div class="container mx-auto ">
   <!-- Start of container -->
   <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- Start of flex-row 1-->

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
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text="Your Students’ Needs Sorted"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="Students simply place orders online through the GOA platform, no need to waste time at bookshops."
   />
  <!-- start of ul -->
  <div class="lg:p-12 lg:text-left lg:pr-32">
 <ul class="mx-auto">
   <li>
     <FeatureText
   text="View Order History"
   
   />
   </li>
   <li>
     <FeatureText
   text="Track orders "
   />
   </li>
   <li>
     <FeatureText
   text="View/download invoices"
   />
   </li>
   <li>
      <FeatureText
   text="Returns & Exchanges"
   />
   </li>
   <li>
      <FeatureText
   text="Deliveries on campus or residence"
   />
   </li>
   </ul>
          <!-- end of ul -->

  </div>
    
 
     <!-- End of text-part of div -->
   </div>




   
   
   </div>
   <!-- end of flex-row 1 -->


  <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- Start of flex-row 2-->

<!-- start of img for sm devices-->
     <div>
     <img 
     class="w-img h-img lg:hidden"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_wallet_aym5+(1).svg"
     />
   </div>
<!-- End of img -->

<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text="Removing Wastage from your Allowances"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="Bursaries lose a lot of money due to wastage at the hands of students. Giving student’s cash is very risky and tempts students to abuse their allowances. Similarly providing an account at a bookstore cannot ensure that students only purchase prescribed textbooks or products."
   />
  <!-- start of ul -->
  <div class="lg:p-12 lg:text-left lg:pr-32">
 <ul class="mx-auto">
   <li>
     <FeatureText
   text="Set a budget limit"
   
   />
   </li>
   <li>
     <FeatureText
     class="break-all"
   text="Set a product limit (Prescribed/Recommended/New/Used)"
   />
   </li>
   <li>
     <FeatureText
   text="Approve Requests for over budget orders"
   />
   </li>
   
   </ul>
          <!-- end of ul -->

  </div>
    
 
     <!-- End of text-part of div -->
   </div>

<!-- start of img -->
     <div>
     <img 
     class="w-img h-img  s:hidden lg:block"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_wallet_aym5+(1).svg"
     />
   </div>
<!-- End of img -->

   </div>
   <!-- end of flex-row 2 -->



   <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- Start of flex-row 3-->

<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_people_search_wctu.svg"
     />
   </div>
<!-- End of img -->

<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text="Insightful Data Access"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="Get access to real time information about your student’s orders. Pull reports that help you to understand exactly how your students are spending your money."
   />
  <!-- start of ul -->
  <div class="lg:p-12 lg:text-left lg:pr-32">
 <ul class="mx-auto">
   <li>
     <FeatureText
   text="Invoicing records"
   
   />
   </li>
   <li>
     <FeatureText
   text="Order History"
   />
   </li>
 <li>
     <FeatureText
   text="Indicators (Average spend per student, no. of items per student, average price, ETA’s and more)"
   />
   </li>
   </ul>
          <!-- end of ul -->

  </div>
    
 
     <!-- End of text-part of div -->
   </div>




   
   
   </div>
   <!-- end of flex-row 3 -->



  <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- Start of flex-row 4-->

<!-- start of img for sm devices-->
     <div>
     <img 
     class="w-img h-img lg:hidden"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_empty_xct9.svg"
     />
   </div>
<!-- End of img -->

<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text="We Do The Boring Stuff For You"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="We remove the admin time and costs of trying to ensure that your students use your money appropriately."
   />
  <!-- start of ul -->
  <div class="lg:p-12 lg:text-left lg:pr-32">
 <ul class="mx-auto">
   <li>
     <FeatureText
   text="No need to pay multiple students"
   
   />
   </li>
   <li>
     <FeatureText
   text="No need to check and approve quotes"
   />
   </li>
   <li>
     <FeatureText
   text="Don’t stress about reports"
   />
   </li>
   </ul>
          <!-- end of ul -->

  </div>
    
 
     <!-- End of text-part of div -->
   </div>

<!-- start of img -->
     <div>
     <img 
     class="w-img h-img  s:hidden lg:block"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_empty_xct9.svg"
     />
   </div>
<!-- End of img -->

   </div>
   <!-- end of flex-row 4 -->




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
  list-style-image: url('https://s3.amazonaws.com/goa-assets/Icons/Group+48.1.svg');
  padding: 10px;
}

.break-all {
  word-break: break-all;
}

</style>