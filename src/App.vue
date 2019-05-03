<template>
  <div id="app">
   <NavigationBar/>
   <MainHeader/>
  </div>
</template>

<script>
import  NavigationBar  from "./components/Navigation/NavigationBar";
import MainHeader from "./components/Headers/MainHeader";

export default {
  name: 'app',
  components: {
    NavigationBar,
    MainHeader
  },
  methods: {
    track(){
      this.$ga.page('/home')
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
