<template>
<div class="max-w-sm overflow-hidden shadow-lg w-1/4 rounded">
  <img src="https://s3.amazonaws.com/goa-assets/Illustrations/Cash+income.svg"
  alt="money"
  class="" />
  <div>
   <DisplaySmall :text="cardTitle"/>
  </div>
  <div>
   <FeatureText
   :text="cardText"
   />

  </div>
</div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall"
import FeatureText from "../Typography/FeatureText"

export default {
    name: 'SmallCard',
    components:{
    DisplaySmall,
    FeatureText
    },
    props: {
        img: String,
        cardTitle: String,
        cardText: String
    }
}
</script>
