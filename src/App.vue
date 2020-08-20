<!--- 
App.vue 

This component injects the nav and footer into the entire app
and has the router linked to it.
-->


<template>
  <div id="app">
    <NavigationBar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import NavigationBar from "./components/Navigation/NavigationBar";
import Footer from "./components/Navigation/Footer";
//import Home from "./pages/Home"

export default {
  name: "app",
  components: {
    NavigationBar,
    //Home,
    Footer,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
