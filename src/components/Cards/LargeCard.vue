<template>
    <div class= "shadow-lg-card   LargeCard rounded-lg lg:mr-10">
  <img 
  class="mt-5"
  :src="img"
  alt="money"
   />
  <div>
   <DisplaySmall 
   class="mt-5 text-blue-dark"
   :text="cardTitle"
   />
  </div>
  <div class="flex lg:flex-row lg:mt-5 p-5 x:mr-10 justify-center lg:ml-32">
     
     <div v-if="show">
         <div :v-if="show">
  <PrimaryButton
      :text="primaryText"
      regular
      class="mr-2"
      />
      <SecondaryButton
      :text="secondaryText"
      regular
      />
         </div>
    
     </div>
     <div v-else>
         <PrimaryButton
      :text="primaryText"
      regular
      class="mr-10 "
      />
     </div>
      
   

  </div>
</div>
</template>
<script>

import DisplaySmall from "../Typography/DisplaySmall"
import PrimaryButton from "../Buttons/PrimaryButton"
import SecondaryButton from "../Buttons/SecondaryButton"

export default {
    name: 'LargeCard',
    components: {
        DisplaySmall,
        PrimaryButton,
        SecondaryButton
    },
   
    props: {
        img: String,
        cardTitle: String,
        show: Boolean,
        primaryText: String,
        secondaryText:String
    }
}
</script>

<style>
.LargeCard{
    width: 650px;
    height: 250px;
}


</style>

