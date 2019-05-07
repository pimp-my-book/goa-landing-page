<template>
<div>
    
     <MainHeader/>

 

    <div class="container pb-32 pt-32 pl-32">
     <div class=" flex flex-row">
       <SmallCard
       img="https://s3.amazonaws.com/goa-assets/Illustrations/Cash+income.svg"
        cardTitle="Insight Into Spending"
        cardText="Students easily  can see their spending on orders. We also give Bursaries the ability to control their spending budgets."
       />

        <SmallCard
        cardTitle="Chopstix"
        cardText="Students easily  can see their spending on orders. We also give Bursaries the ability to control their spending budgets."
       />

        <SmallCard
        cardTitle="Chopstix"
        cardText="Students easily  can see their spending on orders. We also give Bursaries the ability to control their spending budgets."
       />
      </div>
 </div>
    
      
</div>
      
</template>
<script>
import MainHeader from "../components/Headers/MainHeader";
import SmallCard from "../components/Cards/SmallCard";

export default {
    name:'Home',
    components:{
        MainHeader,
        SmallCard
    }
}
</script>
