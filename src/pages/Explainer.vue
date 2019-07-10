<template>
<div>
    <BoarderHeader
     HeaderText="Are you a student? Then you're in the right place."
       BodyText="Learn how to get up to speed with GOA and place orders"
       />

 <div class="container">
    <div>
        <DisplayLarge
        text="How To Place An Order"
        />
        <FeatureText
        text="Note in order to place an order you should be logged in and be registered as a student on your bursary's roster."
        />
    </div>
    <div>
    
<FeatureText
        text="After logging in you will land on your dashboard. You Should be able to see a `Place Order` button in the side nav and on the page. Click either one to be redirect to the `Place Order` screen. "
        />
    </div>

 </div>
       </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import DisplaySmall from '../components/Typography/DisplaySmall'
import FeatureText from '../components/Typography/FeatureText'

export default {
    name: 'Explainer',
    components:{
        BoarderHeader,
        DisplayLarge,
        DisplaySmall,
        FeatureText
    }
}
</script>
