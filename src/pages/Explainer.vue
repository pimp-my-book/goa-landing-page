<!---
Explainer Component:

this component houses a tut on how to palce an  order on GOA.

-->

<template>
<div>
    <BoarderHeader
     HeaderText="Are you a student? Then you're in the right place."
       BodyText="Learn how to get up to speed with GOA and place orders"
       />

 
    <div class="flex flex-col justify-center mt-5 mb-10">
        <DisplayLarge
        class=" xl:text-4xl"
        text="How To Place An Order"
        />
        <FeatureText
        class=" xl:text-2xl"
        text="Note in order to place an order you should be logged in and be registered as a student on your bursary's roster."
        />
    </div>
    
<div class="flex flex-col">
    
    <div>
    
<FeatureText
class="p-4 xl:text-2xl"
        text="After logging in you will land on your dashboard. You Should be able to see a `Place Order` button in the side nav and on the page. Click either one to be redirect to the `Place Order` screen. "
        />
        <img
        src="https://goa-assets.s3.amazonaws.com/Images/tutorials/place_order_step_one.svg"
        class="lg:ml-12 "
        />
    </div>


<div>
    
<FeatureText
class="p-4 xl:text-2xl"
        text="Select an Order Type – Select whether you want to order a textbook, calculator, laptop, drawing board, lab coat, bag etc. Note that this will be limited to items that were approved by your bursary. Select Book for ordering a book."
        />
         <img
        src="https://goa-assets.s3.amazonaws.com/Images/tutorials/place_order_step_two.svg"
        class="lg:ml-12 "
        />
    </div>


<div>
    
<FeatureText
class=" xl:text-2xl"
        text="Select a Course Code – GOA will select all the courses that are linked to the qualification and university which you selected when you registered. If you cannot find one of your courses you can select “add a course” and add the course."
        />

        <FeatureText
class=" xl:text-2xl"
        text="Select a Book – Once you have selected a course GOA will automatically put a list of books which are prescribed for that course at your university. You can select the book which you want to order. If you cannot find the book which you want to order select “add a new book”."
        />

        <FeatureText
class=" xl:text-2xl"
        text="Add A New Book – If you cant find the book that you want to order in our list, select “add a new book”. GOA will ask you to provide details of the book."
        />
       
    </div>



<div>


    <div>
    
<FeatureText
class="p-4 xl:text-2xl"
        text="Run over your order one more time to make sure your order is correct, if not, simply click “Cancel” . If all is in order and ready to go, click “Place Order”"
        />
         <img
        src="https://goa-assets.s3.amazonaws.com/Images/tutorials/place_order_step_three.svg"
        class="lg:ml-12 "
        />
    </div>
    
<FeatureText
class=" xl:text-2xl"
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
