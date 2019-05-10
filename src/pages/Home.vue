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

<LandingBody/>

<div class="flex justify-center mt-20 pl-32 ">
<LargeCard
img="https://s3.amazonaws.com/goa-assets/Illustrations/stock.svg"
cardTitle="Make managing student need easier"
/>

</div>
</div>
      
</template>
<script>
import MainHeader from "../components/Headers/MainHeader";
import SmallCard from "../components/Cards/SmallCard";
import LargeCard from "../components/Cards/LargeCard";
import LandingBody from "../components/Bodies/LandingBody";

export default {
    name:'Home',
    components:{
        MainHeader,
        SmallCard,
        LandingBody,
        LargeCard
        
    }
    ,
  methods: {
    track(){
      this.$ga.page('/home')
    }
  }
}
</script>

<style>
.CardDiv{
 width: 30vw;
}
</style>




