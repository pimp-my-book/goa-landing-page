<template>
<div>
<BoarderHeader
    HeaderText="Looking For Some Help?"
    BodyText="Below are some FAQs that might get your problem solved. If not we would happliy help you. "
    />

    <div class="container mx-auto pl-32">
        <div class="text-center">
          <DisplayXLarge
          text="FAQ"
          />
        </div>
    <Accordian/>
    </div>
</div>
    
</template>

<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import Accordian from '../components/Navigation/Accordian'
import DisplayXLarge from '../components/Typography/DisplayXLarge'

export default {
    name: 'Support',
    components:{
        BoarderHeader,
        Accordian,
        DisplayXLarge
    }
}
</script>
