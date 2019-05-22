<template>

    <div class="container mx-auto">



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
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
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

        
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text=""
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text=""
   />
   </div>
     <!-- End of text-part of div -->

     <!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src=""
     />
   </div>
<!-- End of img -->
        <!--- End of row 2  -->

        <!--- start of row 3  -->
                <div class="sm:flex lg:flex-row sm:flex-col">
          
<!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src=""
     />
   </div>
<!-- End of img -->
<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text=""
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text=""
   />
   </div>
     <!-- End of text-part of div -->
        <!--- End of row 3  -->

        <!--- start of row 4  -->

                <div class="sm:flex lg:flex-row sm:flex-col">
          

<!-- start of text-part of div -->
<div class="lg:text-left lg:w-3/4 lg:pl-32 s:text-center">
     <DisplaySmall
   text=""
   class="mb-5 text-blue-dark"
   />
   <FeatureText
   text=""
   />
   </div>
     <!-- End of text-part of div -->

     <!-- start of img -->
     <div>
     <img 
     class="w-img h-img"
     alt="students" 
     src=""
     />
   </div>
<!-- End of img -->
        <!--- End of row 4  -->
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

