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
        text="Our clients have reduced their budgets by 30% while still providing students with all the tools which they need to succeed."
      />
      </div>
     <div class=" sm:flex lg:flex-row sm:flex-col items-center">
       <SmallCard
       img="https://goa-assets.s3.amazonaws.com/Illustrations/16.+Cash+income.svg"
        cardTitle="Insight Into Spending"
        class="ml-5 mb-5"
        cardText="Get real time information regarding student orders, spending and deliveries. Download reports for your clients and seniors."
       />

        <SmallCard
        class="ml-5 mb-5"
        img="https://s3.amazonaws.com/goa-assets/Illustrations/Award.svg"
        cardTitle="Dedicated Support Staff"
        cardText="Your students no longer have to run around busy bookshops looking for textbooks. All their orders are placed online and staff are allocated to ensure correct & on time fulfillment."
       />

        <SmallCard
         class="ml-5 mb-5"
        img="https://s3.amazonaws.com/goa-assets/Illustrations/Safe.svg"
        cardTitle="Control"
        cardText="Our platform removes abuse of allocated funds by ensuring that your students only receive prescribed materials and approved items."
       />

       <SmallCard
         class="ml-5 mb-5"
        img="https://goa-assets.s3.amazonaws.com/Illustrations/48.+Cart.svg"
        cardTitle="Wide Product Range"
        cardText="We provide a wide range of textbooks (new & used), e-books, laptops, bags, medical accessories, engineering equipment and more. We have partnered with a wide range of vendors including publishers, bookstores & electronics distributors."
       />
      </div>
 </div>

<LandingBody/>
<BuyBackHeader/>
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
import BuyBackHeader from "../components/Headers/BuyBackHeader";
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
        FeatureText,
        BuyBackHeader
        
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




