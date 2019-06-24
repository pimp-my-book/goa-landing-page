<template>
<div>
<BoarderHeader
    HeaderText="Looking For Some Help?"
    BodyText="Below are some FAQs that might get your problem solved. If not we would happliy help you. "
    />

    <div class="container mx-auto ">
        <DisplayXLarge
          text="FAQ"
          />
        <div 
     v-for="item in FAQ"
        :key="item.id"
        class="flex justify-center">
          
          <Accordian
             
          :question="item.question"
          :answer="item.answer"
          />
        </div>
    
    </div>
</div>
    
</template>

<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import Accordian from '../components/Navigation/Accordian'
import DisplayXLarge from '../components/Typography/DisplayXLarge'
import {faqs} from '../faq'

export default {
    name: 'Support',
    components:{
        BoarderHeader,
        Accordian,
        DisplayXLarge
    },
    data(){
     return {FAQ: faqs}
    },
    methods: {
    track(){
      this.$ga.page('/support')
    }
  }
}
</script>
