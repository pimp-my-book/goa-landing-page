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
  <div>
   

  </div>
</div>
</template>
<script>

import DisplaySmall from "../Typography/DisplaySmall"

export default {
    name: 'LargeCard',
    components: {
        DisplaySmall
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

