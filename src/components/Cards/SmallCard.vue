<template>
  <div class="small-card-container shadow-lg lg:w-800 lg:h-400 s:w-4/5 rounded-lg lg:mr-5">
    <embed width="100px" height="100px" class="mt-5" :src="img" />
    <div>
      <DisplaySmall class="p-2 mt-5 text-blue-dark" :text="cardTitle" />
    </div>
    <div>
      <FeatureText class="mt-5 p-4 xl:text-2xl" :text="cardText" small />
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
@media screen and (max-width: 770px) {
  .small-card-container {
    margin: 0px;
    margin-bottom: 30px;
  }
}
</style>
