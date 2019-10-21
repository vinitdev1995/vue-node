<template>
    <div id="app">
        <app-header />
        <router-view />
        <app-footer />
    </div>
</template>

<script>
  import Header from "./Layout/Header.vue"
  import Footer from "./Layout/Footer.vue"

  export default {
    components: {
      "app-header": Header,
      "app-footer": Footer,
    }
  }
</script>