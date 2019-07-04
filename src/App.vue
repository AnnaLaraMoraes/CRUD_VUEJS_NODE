<template>
  <div id="app">
    <Navbar/>
    <Home/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'
export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/styles/variables';
@import './assets/styles/bootstrap';
</style>