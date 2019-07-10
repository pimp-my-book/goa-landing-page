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
    </div>
    <div>

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
        DisplayLarge
    }
}
</script>
