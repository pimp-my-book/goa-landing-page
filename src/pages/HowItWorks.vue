<template>
       <div>
    <BoarderHeader
       HeaderText="Need More Clarity?"
       BodyText="As a student getting textbooks can be an irrtating task. Below we aim to simplify it."
       />
<HowBody/>
      
       </div>
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import HowBody from '../components/Bodies/HowBody'

export default {
    name:'HowItWorks',
    components:{
        BoarderHeader,
        HowBody
    }
}
</script>
