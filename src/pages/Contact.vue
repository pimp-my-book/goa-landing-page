<template>
<div>
<!-- START [BoarderHeader] -->
  <BoarderHeader
    HeaderText="Looking For More Info?"
    BodyText="If you are a bursary and would like to get insight into what GOA can do for your organisation, below is a contact form that you can fill out and send to us. Then someone will get in touch with you to help you with an queries."
  />
  <!-- END [BoarderHeader] -->
  <div class="p-8 lg:text-left lg:pl-26 s:text-center w-full mx-auto">
    <!-- START [Title & Description] -->
    <DisplaySmall text="Contact Us Now" class="mb-5 text-blue-dark" />
    <FeatureText
      class="p-2"
      text="We would love to learn more about what you do and to explore how we can help you."
    />
    <!-- END [Title & Description] -->

    <!-- START [ContactGrid] -->
    <ContactGrid/>
    <!-- END [ContactGrid] -->
  </div>
</div>
</template>
<script>
import BoarderHeader from "../components/Headers/BoarderHeader";
import ContactGrid from "../components/Grids/ContactGrid";
import DisplaySmall from "../components/Typography/DisplaySmall";
import FeatureText from "../components/Typography/FeatureText";

export default {
    name: 'Contact',
    components:{
        BoarderHeader,
        ContactGrid,
        DisplaySmall,
        FeatureText
    },
    methods: {
    track(){
      this.$ga.page('/contact')
    }
  }
}
</script>
