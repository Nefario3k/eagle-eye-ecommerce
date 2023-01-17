<template>
  <v-app color="white">
    <BarsApp @showCart="showCart" @showNav="showNav" />
    <NavCart ref="cart" />
    <NavMobile ref="mobileNav" />
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
    showNav() {
      this.$refs.mobileNav.showMobileNav();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>