<template>
  <div>
    <header :style="styles" class="bg-scroll bg-center bg-no-repeat bg-cover h-350"></header>
    <div class="p-20">
      <DisplayLarge text="Our Story" />
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";

export default {
  name: "About",
  components: {
    DisplayLarge
  },
  computed: {
    styles() {
      return {
        "background-image": `url('https://images.unsplash.com/photo-1431608660976-4fe5bcc2112c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')`
      };
    }
  }
};
</script>
