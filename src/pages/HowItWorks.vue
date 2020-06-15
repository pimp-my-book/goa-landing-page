<template>
  <div>
    <HowBody />
    <div class="flex justify-center mt-20 lg:pl-32">
      <!--  a large card to contact sales-->
      <LargeCard
        img="https://s3.amazonaws.com/goa-assets/Icons/1.+Envelope+opened.svg"
        cardTitle="Get In Touch With Us"
        buttonURL="/contact"
        primaryText="Contact Sales"
      />
    </div>
  </div>
</template>
<script>
import BoarderHeader from "../components/Headers/BoarderHeader";
import HowBody from "../components/Bodies/HowBody";
import LargeCard from "../components/Cards/LargeCard";

export default {
  name: "HowItWorks",
  components: {
    BoarderHeader,
    HowBody,
    LargeCard
  },
  methods: {
    track() {
      this.$ga.page("/how-it-works");
    }
  }
};
</script>
