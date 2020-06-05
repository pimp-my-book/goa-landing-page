<template>
  <div class="shadow-lg lg:w-800 lg:h-400 s:w-4/5 rounded-lg lg:mr-10">
    <embed width="100px" height="100px" class="mt-5" :src="img" />
    <div>
      <DisplaySmall class="mt-5 text-blue-dark" :text="cardTitle" />
    </div>
    <div>
      <FeatureText class="mt-5 p-3 xl:text-2xl" :text="cardText" small />
    </div>
  </div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall";
import FeatureText from "../Typography/FeatureText";

export default {
  name: "SmallCard",
  components: {
    DisplaySmall,
    FeatureText
  },
  props: {
    img: String,
    cardTitle: String,
    cardText: String
  }
};
</script>

<style>
</style>

