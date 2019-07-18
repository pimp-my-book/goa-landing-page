<template>
<div>
    <BoarderHeader
     HeaderText="Are you a student? Then you're in the right place."
       BodyText="Learn how to get up to speed with GOA and place orders"
       />

 
    <div class="flex flex-col justify-center mt-5 mb-10">
        <DisplayLarge
        text="How To Place An Order"
        />
        <FeatureText
        text="Note in order to place an order you should be logged in and be registered as a student on your bursary's roster."
        />
    </div>
    
<div class="flex flex-col">
    
    <div>
    
<FeatureText
class="p-4"
        text="After logging in you will land on your dashboard. You Should be able to see a `Place Order` button in the side nav and on the page. Click either one to be redirect to the `Place Order` screen. "
        />
        <img
        src="../assets/step_one.svg"
        class="lg:ml-12 "
        />
    </div>


<div>
    
<FeatureText
class="p-4"
        text="Now you can go head an fill out the form by telling us what the Course Code, Book Title, ISBN, Book Author and Book Edition is for your order. If there is anything else you need to tell us, simply just tell us in the Note textarea. Once you're done click the place order button. "
        />
         <img
        src="../assets/step_two.svg"
        class="lg:ml-12 "
        />
    </div>


<div>
    
<FeatureText
        text="To check the status of the order simply go to the Order History Page. This is where you can see the progress of all your orders."
        />
         <img
        src="../assets/step_three.svg"
        class="lg:ml-12 "
        /> 
    </div>



<div>
    
<FeatureText
        text="For more info on how to do other stuff on GOA please visit our Docs page."
        />
        <a href="https://help.gogoa.co.za">
<PrimaryButton
class="mt-5"
text="Go to help"

/>
</a>
    </div>

 </div>
</div>




       
</template>
<script>
import BoarderHeader from '../components/Headers/BoarderHeader'
import DisplayLarge from '../components/Typography/DisplayLarge'
import FeatureText from '../components/Typography/FeatureText'
import PrimaryButton from '../components/Buttons/PrimaryButton'

export default {
    name: 'Explainer',
    components:{
        BoarderHeader,
        DisplayLarge,
        PrimaryButton,
        FeatureText
    }
}
</script>
