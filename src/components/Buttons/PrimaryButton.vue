<!--- 
This is the primary button

props: 
url - need if you need forward to a link
text - accepts button text
regular - changes the button size

actions:

forward - redirects using the url prop

-->

<template>
  <button
    type="submit"
    url
    @click="forward"
    :class="[regular ? 'bg-ablue-light hover:white hover:bg-ablue-lighter font-body py-2 px-4  text-white rounded focus:bg-green-lighter focus:outline-none' 
    : 'bg-ablue  hover:white hover:bg-ablue-lighter font-body py-4 px-6 sl:py-4 sl:px-6 s:py-2 s:px-2 text-white rounded focus:outline-none']"
  >{{text}}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
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

