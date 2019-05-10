<template>
    <div class= "shadow-lg  LargeCard rounded-lg lg:mr-10">
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
  <div class="flex flex-row mt-5 p-5 ml-32">
      <PrimaryButton
      text="Request Demo"
      regular
      class="mr-2"
      />
      <SecondaryButton
      text="Contact Sales"
      regular
      />
   

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
    }
}
</script>

<style>
.LargeCard{
    width: 650px;
    height: 250px;
}


</style>

