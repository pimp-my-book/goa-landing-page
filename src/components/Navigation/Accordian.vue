<!-- 
COMPONENT: Accordian
Props: question, answer, id

This comment will recieve an array of FAQs into to display them.
  -->
<!--   -->
<template>
    <div class="bg-white shadow-md mt-5 lg:w-3/4 lg:text-left s:text-center">
        <!-- Start of FAQ -->
<div class="border-b border-gray-500">
        <input id="toggle1" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle1" class="lg:w-4/5 s:w-64 sm-land:w-4/5 s:mb-5 lg:p-10">
            <DisplaySmall
            class="text-bold "
            text="Can a student order on whatsapp or email?"
            />
            </label>


        <img 
        class=" ml-20 s-max:hidden "
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content1" >
            <FeatureText
            class="px-10 mb-10 s:text-left"
            text="No. Orders are only placed through the GOA platform.  The platform makes it easy for students to place and follow up on orders. It also ensures that the bursaries budget mandates and requirements are adhered to."
            />
        </section>
        </div>

         <!-- End of FAQ -->

        
        
    </div>
</template>
<script>
import FeatureText from '../Typography/FeatureText'
import DisplaySmall from '../Typography/DisplaySmall'


export default {
    name: 'Accordian',
    components:{
        FeatureText,
        DisplaySmall
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

#toggle1:checked ~ #content1, 
#toggle2:checked ~ #content2, 
#toggle3:checked ~ #content3,
#toggle4:checked ~ #content4,
#toggle5:checked ~ #content5,
#toggle6:checked ~ #content6 ,
#toggle7:checked ~ #content7   {
    height: 300px;
}

</style>

