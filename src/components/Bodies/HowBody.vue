<template>

    <div class="container mx-auto mt-32">



         <!--- start of row 1  -->
         <div class="sm:flex lg:flex-row sm:flex-col">
          
<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_hello_aeia.svg"
     />
   </div>
<!-- End of img -->
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 lg:pt-32 s:text-center">
     <DisplaySmall
   text="Your Students Sign Up"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="Your students simply enter their details and sign up for GOA."
   />
   </div>
     <!-- End of text-part of div -->

         </div>
        <!--- End of row 1  -->

        <!--- start of row 2  -->
  <div class=" sm:flex lg:flex-row sm:flex-col">
<!-- start of img for sm devices -->
     <div>
     <img 
     class="w-img h-img lg:hidden"
     alt="Check complete" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_completed_ngx6.svg"
     />
   </div>
<!-- End of img -->



      
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 lg:pt-32 s:text-center">
     <DisplaySmall
   text="We Run A Check"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="We then run a check to make sure that the student is in fact a valid student on your bursary"
   />
   </div>
     <!-- End of text-part of div -->

     <!-- start of img -->
     <div>
     <img 
     class="w-img h-img s:hidden lg:block"
     alt="Check complete" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_completed_ngx6.svg"
     />
   </div>
<!-- End of img -->


 </div>
  
        <!--- End of row 2  -->

        <!--- start of row 3  -->
                <div class="sm:flex lg:flex-row sm:flex-col">
          
<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_add_to_cart_vkjp.svg"
     />
   </div>
<!-- End of img -->
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 lg:pt-32 s:text-center">
     <DisplaySmall
   text="They Place Orders"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="After successful verification, students are then able to go ahead and place orders for their books."
   />
   </div>
     <!-- End of text-part of div -->
                </div>
        <!--- End of row 3  -->

        <!--- start of row 4  -->

                <div class="sm:flex lg:flex-row sm:flex-col">
          <!-- start of img for sm devices -->
     <div>
     <img 
     class="w-img h-img lg:hidden"
     alt="Check complete" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_deliveries_131a.svg"
     />
   </div>
<!-- End of img -->

<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 lg:pt-32 s:text-center">
     <DisplaySmall
   text="We Manage The Orders"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="Pimp My Book takes care of the entire lifecycle of the order. We also access a network of buyers and sellers , as well as vendors to get the best possible deal."
   />
   </div>
     <!-- End of text-part of div -->

     <!-- start of img -->
     <div>
     <img 
     class="w-img h-img lg:block s:hidden"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_deliveries_131a.svg"
     />
   </div>
<!-- End of img -->
        <!--- End of row 4  -->






                </div>



         <!--- start of row 1  -->
         <div class="sm:flex lg:flex-row sm:flex-col">
          
<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_envelope_n8lc.svg"
     />
   </div>
<!-- End of img -->
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 lg:pt-32 s:text-center">
     <DisplaySmall
   text="You Get Invoices"
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text="You as a bursar get invoices for all the purchase activity of your students."
   />
   </div>
     <!-- End of text-part of div -->

         </div>
        <!--- End of row 1  -->



    </div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall";
import FeatureText from "../Typography/FeatureText";

export default {
    name: 'HowBody',
    components:{
        FeatureText,
        DisplaySmall

    }
}
</script>

