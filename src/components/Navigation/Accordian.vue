<!-- 
COMPONENT: Accordian
Props: question, answer, toggleID, contentID

This comment will recieve an array of FAQs into to display them.
  -->
<!--   -->
<template>

<b-collapse class="card bg-white shadow-md mt-5 lg:w-3/4 lg:text-left s:text-center" aria-id="contentIdForA11y3">
<div
slot="trigger"
slot-scope="props"
class="border-b border-gray-500"
role="button"

aria-controls="contentIdForA11y3"
>
<div class="flex flex-row">
<p>Component</p>
<img 
        class=" ml-20 s-max:hidden "
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
</div>

</div>
<div>
    <p>blah blah blah blah blah blah</p>
</div>
</b-collapse>
</template>
<script>
//import FeatureText from '../Typography/FeatureText'
//import DisplaySmall from '../Typography/DisplaySmall'


export default {
    name: 'Accordian',
    components:{
       // FeatureText,
       // DisplaySmall
    },
    props:{
        question: String, 
        answer: String,
        contentID: String,
        toggleID: String

    },
    computed: {
        toggleProps(){
            return `#toggle${this.toggleID}`
        }
    }
}
</script>
<style scoped>
input[type="radio"]{
    position: absolute;
    opacity: 0;
}

input[type="radio"]:focus + label {
    color:black;
    background-color: aliceblue;

}

label {
    position: relative;
    display: block;
    cursor: pointer;

}

section {
    height: 0;
    transition: 0.3s all;
    overflow:hidden;
}


/*

#toggle1:checked ~ #content1, 
#toggle2:checked ~ #content2, 
#toggle3:checked ~ #content3,
#toggle4:checked ~ #content4,
#toggle5:checked ~ #content5,
#toggle6:checked ~ #content6 ,
#toggle7:checked ~ #content7   {
    height: 300px;
}*/


input[type="radio"][id^="toggle"]:checked ~ section[id^="content"]{
    height: 300px;
}

</style>

