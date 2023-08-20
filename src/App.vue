<template>
   <HeaderNavBar/>
   <FooterBar/>
</template>

<script>
import HeaderNavBar from './components/HeaderNavBar';
import FooterBar from './components/FooterBar.vue';


export default {
  name: 'App',
  components: {
    HeaderNavBar,
    FooterBar
  }
}
</script>

<style>

</style>
