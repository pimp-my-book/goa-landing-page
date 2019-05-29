<template>
    <div class="bg-white shadow-md w-full text-left">
        <input id="toggle1" type="radio" name="toggle"/>
        <label for="toggle1">
            <FeatureText
            text="Question 1"
            />
        </label>
        <section id="content1">
            <p>Answer to question</p>
        </section>

        <input id="toggle2" type="radio" name="toggle"/>
        <label for="toggle2">
            <FeatureText
            text="Question 2"
            />
        </label>
        <section id="content2">
            <p>Answer to question</p>
        </section>

        <input id="toggle3" type="radio" name="toggle"/>
        <label for="toggle3">
           <FeatureText
            text="Question 3"
            />
            </label>
        <section id="content3">
            <p>Answer to question</p>
        </section>
    </div>
</template>
<script>
import FeatureText from '../Typography/FeatureText'

export default {
    name: 'Accordian',
    components:{
        FeatureText
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

