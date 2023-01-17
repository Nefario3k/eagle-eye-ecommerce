<template>
  <v-app color="white">
    <BarsApp @showCart="showCart" />
    <NavCart ref="cart" />
    <v-main app>
      <Nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default {
  data() {
    return {};
  },
  head: {
    script: [
      {
        src: "/scripts/jquery-3.3.1.min.js",
        type: "text/javascript",
        body: true,
      },
    ],
  },
  methods: {
    showCart() {
      this.$refs.cart.showUserCart();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>