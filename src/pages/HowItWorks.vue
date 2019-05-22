<template>
       <div>
    <BoarderHeader
       HeaderText="Need More Clarity?"
       BodyText="As a student getting textbooks can be an irrtating task. Below we aim to simplify it."
       />
<HowBody/>
      <div class="flex justify-center mt-20 lg:pl-32 ">
<LargeCard
img="https://s3.amazonaws.com/goa-assets/Illustrations/stock.svg"
cardTitle="Make managing student need easier"

primaryText="Contact Sales"

/>

</div>
       </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import HowBody from '../components/Bodies/HowBody'
import LargeCard from '../components/Cards/LargeCard'

export default {
    name:'HowItWorks',
    components:{
        BoarderHeader,
        HowBody,
        LargeCard
    }
}
</script>
