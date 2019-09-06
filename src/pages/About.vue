<template>
  <div>
    <header
      :style="styles"
      class="bg-scroll p-32 opacity-25 bg-center bg-no-repeat bg-cover bg-red h-350"
    >
      <DisplayLarge
        class="text-white"
        text="We make educational materials and supporting technologies affordable and accessible to students."
      />
    </header>
    <div class="p-5">
      <DisplayLarge text="Our Story" />
      <SmallCard text />
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import AboutImg from "../assets/about.svg";
import SmallCard from "../components/Cards/SmallCard";

export default {
  name: "About",
  components: {
    DisplayLarge,
    SmallCard
  },
  computed: {
    styles() {
      return {
        "background-image": `url(${AboutImg})`
      };
    }
  }
};
</script>
