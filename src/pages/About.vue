<template>
  <div>
    <header
      :style="styles"
      class="bg-scroll p-20 opacity-25 bg-center bg-no-repeat bg-cover bg-red h-350"
    >
      <DisplayLarge
        class="text-white"
        text="We make educational materials and supporting technologies affordable and accessible to students."
      />
    </header>
    <div class="p-20">
      <DisplayLarge text="Our Story" />
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import AboutImg from "../assets/about.svg";
export default {
  name: "About",
  components: {
    DisplayLarge
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
