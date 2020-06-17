<template>
  <div>
    <header :style="styles" class="bg-scroll lg:p-32 s:p-20 bg-center bg-no-repeat bg-cover h-350">
      <DisplayLarge
        class="text-white"
        text="We make educational materials and supporting technologies affordable and accessible to students."
      />
    </header>
    <div class="p-5">
      <DisplayLarge text="Our Story" />
      <div class="flex flex-col p-5 m-5">
        <p class="text-xl text-center">
          AskThuto is the bursary division of Pimp My Book, which has been providing students with affordable textbooks since 2006. Pimp My Book was founded in the dormitory room of Mpodumo Doubada at the University of Cape Town. The business has since expanded to stores in universities across the country. Pimp My Book has helped thousands students to afford textbooks particular through its used textbook service.<br/>
          <br/>
          AskThuto helps bursaries to manage their book allowances by removing wastage and ensuring that students get the materials they need on time. AskThuto is tech driven as it uses an online portal to ensure that students only order books which are prescribed for their courses. Students place their orders online and are able to track and follow their orders. Students do not have to wait in long lines at bookstores as the books are delivered directly to their accommodation. Bursaries are able to log in at any time and see a summary of their student’s orders and their expenditure. This is the smartest way of managing book allowances.
        </p>
      </div>
    </div>
    <div>
      <DisplayLarge text="Our Team" class="mb-5" />

      <iframe
        class="airtable-embed"
        src="https://airtable.com/embed/shrBBIrIZ6arTUhSm?backgroundColor=pink&viewControls=on"
        frameborder="0"
        onmousewheel
        width="100%"
        height="533"
        style="background: transparent; border: 1px solid #ccc;"
      />
    </div>
  </div>
</template>
<script>
import DisplayLarge from "../components/Typography/DisplayLarge";
import AboutImg from "../assets/about.svg";
import { about } from "../copy";

export default {
  name: "About",
  components: {
    DisplayLarge,
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
