<template>
    <div>
        <BoarderHeader
    HeaderText="Privacy"
    BodyText="Below is our privacy policy."
    />
    </div>
</template>

<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import FeatureText from '../components/Typography/FeatureText'


export default {
    name: 'Privacy',
    components:{
        BoarderHeader,
        DisplayLarge,
        FeatureText
    }
}
</script>
