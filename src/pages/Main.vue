<template>
  <Header />
  <main class="page">
    <MainBlock />
  </main>
  <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import MainBlock from '../components/MainBlock.vue'
export default {
  components: {
    Header,
    Footer,
    MainBlock,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss"></style>
