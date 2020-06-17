<template>
<div>
  <div class="p-8 lg:text-left lg:pl-26 s:text-center w-full mx-auto">
    <!-- START [Title & Description] -->
    <DisplaySmall text="Contact Us Now" class="mb-5 mt-10 text-blue-dark text-center" />
    <FeatureText
      class="p-2 text-center"
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
import ContactGrid from "../components/Grids/ContactGrid";
import DisplaySmall from "../components/Typography/DisplaySmall";
import FeatureText from "../components/Typography/FeatureText";

export default {
    name: 'Contact',
    components:{
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
