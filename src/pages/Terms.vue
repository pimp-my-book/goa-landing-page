<template>
    <div>
        <BoarderHeader
    HeaderText="Terms of Service"
    BodyText="Below are our terms of service."
    />

    <div>

    </div>
    </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import FeatureText from '../components/Typography/FeatureText'


export default {
    name: 'Terms',
    components:{
        BoarderHeader,
        DisplayLarge,
        FeatureText
    }
}
</script>
