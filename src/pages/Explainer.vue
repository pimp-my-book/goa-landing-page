<template>
<div>
    <BoarderHeader
     HeaderText="Are you a student? Then you're in the right place."
       BodyText="Learn how to get up to speed with GOA and place orders"
       />

 <div class="container">
    <div>
        
    </div>

 </div>
       </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'

export default {
    name: 'Explainer',
    components:{
        BoarderHeader,
        DisplayLarge
    }
}
</script>
