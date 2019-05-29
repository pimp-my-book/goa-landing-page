<template>
    <div class="bg-white shadow-md w-3/4 text-left">
        <!-- Start of FAQ -->
         <!-- End of FAQ -->

         <!-- Start of FAQ -->
        <div class="border-b border-gray-500">
        <input id="toggle1" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle1" class="w-4/5  p-10">
            <DisplaySmall
            class="text-bold"
            text="I’m done using the book can I return it for a different one?"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content1" >
            <FeatureText
            class="px-10"
            text="Unfortunately not, the book cannot be returned as more than one book is prescribed for a course and cannot be exchanged for the next book. Book returns only take place at the end of the semester and this will be communicated to you by your bursary."
            />
        </section>
        </div>
        <!-- End of FAQ -->

       <!-- Start of FAQ -->
        <div class="border-b border-gray-500">
        <input id="toggle2" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle2" class="w-4/5 p-10">
            <DisplaySmall
            text="I haven’t received my book yet but my correspondence with you says it’s been delivered?"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle1"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content2" >
            <FeatureText
            text="Sometimes the courier delivers the book to the reception at your residence or apartment and not directly to your room. Some residences do not allow the couriers to deliver to the students dormitory rooms. Go to your Res reception and check if the book was delivered there. You can also contact us if you still cannot find your package."
            />
        </section>
        </div>
<!-- End of FAQ -->

       <!-- Start of FAQ -->
       <div class="border-b border-gray-500">
        <input id="toggle3" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle3" class="w-4/5 p-10">
            <DisplaySmall
            text="I haven’t received my books yet?"
            />
            </label>

        <img 
        class="inline ml-24"
        for="toggle3"
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content3" >
            <FeatureText
            text="Please email us or phone us (065-850-5225). Also chat to us below via the chat widget, to make things fast always tell us your name and surname."
            />
        </section>
        </div>
       <!-- End of FAQ -->
       
       
       <!-- Start of FAQ -->
       <div class="border-b border-gray-500">
        <input id="toggle4" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle4" class="w-4/5 p-10">
            <DisplaySmall
            text="Can I order on Whatsapp or via email?"
            />
            </label>

        <img 
        class="inline ml-24"
       
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content4" >
            <FeatureText
            text="Unfortunately not, all orders are processed on gogoa.co.za. Only queries can be communicated on whatsapp/email."
            />
        </section>
        </div>
       <!-- End of FAQ -->


<!-- Start of FAQ -->
       <div class="border-b border-gray-500">
        <input id="toggle5" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle5" class="w-4/5 p-10">
            <DisplaySmall
            text="I’m in class, Can I collect afterhours?"
            />
            </label>

        <img 
        class="inline ml-24"
       
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content5" >
            <FeatureText
            text="Please contact us so we can arrange the best possible solution for both parties"
            />
        </section>
        </div>
       <!-- End of FAQ -->

       <!-- Start of FAQ -->
       <div class="border-b border-gray-500">
        <input id="toggle6" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle6" class="w-4/5 p-10">
            <DisplaySmall
            text="When can I expect to receive my books once after I have placed an order?"
            />
            </label>

        <img 
        class="inline ml-24"
       
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content6" >
            <FeatureText
            text="If the book is in stock in our stores or our partner stores you should get the book within 2 – 4 working days. If the book is not in stock it will put “on order” where we order it from a publisher or supplier. This should take 1 -2 weeks. Overseas books which are not available anywhere in the country could take longer than 3 weeks to bring in. In such cases we will try to offer you an e-book or find an alternative."
            />
        </section>
        </div>
       <!-- End of FAQ -->

         <!-- Start of FAQ -->
       <div class="border-b border-gray-500">
        <input id="toggle7" type="radio" name="toggle"/>
        <div class="flex flex-row">

            <label for="toggle7" class="w-4/5 p-10">
            <DisplaySmall
            text="Can I choose if I want a new or used book?"
            />
            </label>

        <img 
        class="inline ml-24"
       
        src="https://s3.amazonaws.com/goa-assets/Icons/Chevron+Circle.svg" alt="icon"/>
         
        </div>
        
        <section id="content7" >
            <FeatureText
            text="Your bursary decides whether we should supply used or new books, so you cannot chose. For bursaries that have selected used books, we first try to supply the book second hand if it is in stock, otherwise we will supply a new book."
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
    height: 200px;
}

</style>

