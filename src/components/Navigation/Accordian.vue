<!-- 
COMPONENT: Accordian
Props: question, answer, toggleID, contentID

This comment will recieve an array of FAQs into to display them.
  -->
<!--   -->
<template>

<b-collapse 
:open="false"
class="card bg-white shadow-md mt-5 p-5 lg:w-3/4 lg:text-left s:text-center" aria-id="contentIdForA11y3">
<div
slot="trigger"

class="border-b border-gray-500"
role="button"

aria-controls="contentIdForA11y3"
>
<div class="Heading__Grid">
<DisplaySmall
            class="text-bold "
            :text="question"
            />
<img 
        class="  s-max:hidden "
        
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
</div>

</div>
<div class="mt-5">
    <FeatureText
            class=" mb-10 text-left"
            :text="answer"
            />
</div>
</b-collapse>
</template>
<script>
import FeatureText from '../Typography/FeatureText'
import DisplaySmall from '../Typography/DisplaySmall'


export default {
    name: 'Accordian',
    components:{
       FeatureText,
       DisplaySmall
    },
    props:{
        question: String, 
        answer: String,
        

    }
}
</script>
<style scoped>
.Heading__Grid{
    display: grid;
    grid-template-columns: 10fr 1fr;
}
</style>

