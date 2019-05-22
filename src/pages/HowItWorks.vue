<template>
       <div>
    <BoarderHeader
       HeaderText="Need More Clarity?"
       BodyText="As a student getting textbooks can be an irrtating task. Below we aim to simplify it."
       />
<HowBody/>
      <div class="flex justify-center mt-20 lg:pl-32 ">
<LargeCard
img="https://s3.amazonaws.com/goa-assets/Icons/1.+Envelope+opened.svg"
cardTitle="Get In Touch With Us"
url="/contact-us"
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
