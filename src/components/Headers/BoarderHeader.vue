<template>
  <header
    class="w-full lg:h-64 s:h-250 sl:h-350 text-center lg:rounded-header-border s:header-border-sm"
  >
    <DisplayXLarge :text="HeaderText" class="text-white pt-5" />
    <FeatureText :text="BodyText" class="text-white pt-5 lg:px-32 xl:text-3xl" />
  </header>
</template>    
<script>
import DisplayXLarge from "../Typography/DisplayXLarge";
import FeatureText from "../Typography/FeatureText";

export default {
  name: "BoarderHeader",
  components: {
    DisplayXLarge,
    FeatureText
  },
  props: {
    HeaderText: String,
    BodyText: String
  }
};
</script>

<style scoped>
header {
  background: linear-gradient(179.9deg, #1777f2 23.23%, #22292f 99.68%);
}
</style>
