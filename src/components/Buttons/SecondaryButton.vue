<template>
  <button
    type="submit"
    @click="forward"
    :class="[regular 

    ? 'hover:text-white hover:bg-transparent bg-green-lighter font-body py-2 px-4 text-ablue-darker rounded hover:border border-green hover:border-green focus:outline-none' 
    : 'hover:text-white  hover:bg-transparent bg-green-lighter font-body lg:py-4 lg:px-6 sm:py-4 sm:px-6 hover:border hover:border-green s:py-2 s:px-2 text-ablue-darker rounded focus:outline-none']"

  >{{text}}</button>
</template>
<script>
export default {
  name: "SecondaryButton",
  props: {
    text: String,
    url: String,
    regular: Boolean
  },
  methods: {
    forward() {
      this.$router.push(this.url);
    }
  }
};
</script>


