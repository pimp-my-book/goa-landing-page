<template>
<div class="w-1/4 rounded">
  <img class="" />
  <div>
   <DisplaySmall :text="cardTitle"/>
  </div>
  <div>

  </div>
</div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall"

export default {
    name: 'SmallCard',
    components:{
    DisplaySmall
    },
    props: {
        img: String,
        cardTitle: String,
        cardText: String
    }
}
</script>
