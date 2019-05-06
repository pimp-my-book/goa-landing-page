<template>
<div>
    
     <MainHeader/>

 

    <div class="container relative pin mx-auto mt-30 ">
     <div class=" mt-30">
       <SmallCard
        cardTitle="Chopstix"
       />
       <h1 class="text-green">FLOOATING</h1>
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
