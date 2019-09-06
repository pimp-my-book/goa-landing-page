<template>
  <div>
    <header
      :style="styles"
      class="bg-scroll lg:p-32 s:p-20 opacity-25 bg-center bg-no-repeat bg-cover bg-red h-350"
    >
      <DisplayLarge
        class="text-white"
        text="We make educational materials and supporting technologies affordable and accessible to students."
      />
    </header>
    <div class="p-5">
      <DisplayLarge text="Our Story" />
      <div class="flex flex-col p-5 m-5">
        <FeatureText class="p-5" :text="About.p1" />
        <FeatureText class="p-5" :text="About.p2" />
        <FeatureText class="p-5" :text="About.p3" />
        <FeatureText class="p-5" :text="About.p4" />
      </div>
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import FeatureText from "../components/Typography/FeatureText";
import AboutImg from "../assets/about.svg";
import { about } from "../copy";

export default {
  name: "About",
  components: {
    DisplayLarge,
    FeatureText
  },
  data() {
    return { About: about };
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
