<template>
  <div id="app">
   <NavigationBar/>
   <Home/>
   <router-view></router-view>
  </div>
</template>

<script>
import  NavigationBar  from "./components/Navigation/NavigationBar";
import Home from "./pages/Home"

export default {
  name: 'app',
  components: {
    NavigationBar,
    Home
    
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
