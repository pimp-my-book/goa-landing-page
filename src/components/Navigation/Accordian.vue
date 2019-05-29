<template>
    <div class="bg-white shadow-md w-full text-left">
        <div class="flex flex-row"></div>

        <div class="border-b border-gray-500">
        <input id="toggle1" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle1" class="w-screen">
            <DisplaySmall
            text="Question"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content1" >
            <FeatureText
            text="Question 1"
            />
        </section>
        </div>

        <div class="border-b border-gray-500">
        <input id="toggle2" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle2" class="w-screen">
            <DisplaySmall
            text="Question"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content2" >
            <FeatureText
            text="Question 2"
            />
        </section>
        </div>

       <div class="border-b border-gray-500">
        <input id="toggle3" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle3" class="w-screen">
            <DisplaySmall
            text="Question"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle3"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content3" >
            <FeatureText
            text="Question 3"
            />
        </section>
        </div>

       

        
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
#toggle3:checked ~ #content3 {
    height: 200px;
}

</style>

