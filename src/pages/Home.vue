<template>
<div>
    
     <MainHeader/>

 

    <div class="container pb-32 pt-32  lg:pl-32">
     <div class=" sm:flex lg:flex-row sm:flex-col items-center">
       <SmallCard
       img="https://s3.amazonaws.com/goa-assets/Illustrations/Cash+income.svg"
        cardTitle="Insight Into Spending"
        class="ml-5 mb-5"
        cardText="Students easily  can see their spending on orders. We also give Bursaries the ability to control their spending budgets."
       />

        <SmallCard
        class="ml-5 mb-5"
        img="https://s3.amazonaws.com/goa-assets/Illustrations/Award.svg"
        cardTitle="Dedicated Support Staff"
        cardText="You can rest assured that our friendly staff are doing all the heavy lifting of managing students’ orders."
       />

        <SmallCard
         class="ml-5 mb-5"
        img="https://s3.amazonaws.com/goa-assets/Illustrations/Safe.svg"
        cardTitle="Centeralized Data"
        cardText="All your students data is centralized with us. Which enables you get an overview what content they are purchasing. "
       />
      </div>
 </div>

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
      
</div>
      
</template>
<script>
import MainHeader from "../components/Headers/MainHeader";
import SmallCard from "../components/Cards/SmallCard";
import DisplaySmall from "../components/Typography/DisplaySmall";
import FeatureText from "../components/Typography/FeatureText";

export default {
    name:'Home',
    components:{
        MainHeader,
        SmallCard,
        DisplaySmall,
        FeatureText
    }
    ,
  methods: {
    track(){
      this.$ga.page('/home')
    }
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

