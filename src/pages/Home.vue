<template>
<div>
    
     <MainHeader/>

 <div class="container">
   <Companies/>
 </div>

    <div class="container pb-32 pt-32  lg:pl-20 mx-auto">
      <div  class="mb-20 ">
        <DisplayLarge
        text="Making Book Allowances Admin Go Away."
       class="mb-2"
        />
        <FeatureText
        text="Our clients have reduced their budgets by 30% while still providingstudents with all the tools which they need to succeed."
      />
      </div>
     <div class=" sm:flex lg:flex-row sm:flex-col items-center">
       <SmallCard
       img="https://s3.amazonaws.com/goa-assets/Illustrations/Cash+income.svg"
        cardTitle="Insight Into Spending"
        class="ml-5 mb-5"
        cardText="Get real time information regarding student orders, spending and deliveries. Download reports for your clients and seniors."
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
        cardText="All your students data is centralized with us. Which enables you to get an overview of what content they are purchasing. "
       />
      </div>
 </div>

<LandingBody/>

<div class="flex justify-center mt-20 lg:pl-32 ">
<LargeCard
img="https://s3.amazonaws.com/goa-assets/Illustrations/stock.svg"
cardTitle="Make managing student need easier"
show
buttonURL="/contact"
primaryText="Contact Sales"
secondaryText="Book A Demo"
/>

</div>
</div>
      
</template>
<script>
import MainHeader from "../components/Headers/MainHeader";
import SmallCard from "../components/Cards/SmallCard";
import LargeCard from "../components/Cards/LargeCard";
import LandingBody from "../components/Bodies/LandingBody";
import Companies from "../components/Headers/Companies";
import DisplayLarge from "../components/Typography/DisplayLarge";
import FeatureText from "../components/Typography/FeatureText";
import {page} from 'vue-analytics'

export default {
    name:'Home',
    components:{
        MainHeader,
        SmallCard,
        LandingBody,
        LargeCard,
        Companies,
        DisplayLarge,
        FeatureText
        
    }
    ,
  methods: {
    track(){
     page('/')
    }
  }
}
</script>

<style>
.CardDiv{
 width: 30vw;
}
</style>




