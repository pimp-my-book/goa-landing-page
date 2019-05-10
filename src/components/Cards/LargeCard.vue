<template>
    <div class= "shadow-lg x:w-4/5 x:h-full LargeCard rounded-lg lg:mr-10">
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
    width: 1000px;
    height: 500px;
}


</style>

