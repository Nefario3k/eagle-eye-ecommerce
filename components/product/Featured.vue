<template>
  <div>
    <div class="featured_card relative">
      <div
        class="absolute bg_product"
        :style="`background-image: linear-gradient(rgba(32, 29, 29, 0.5), rgba(32, 29, 29, 0.15)),url(/images/jpgs/item${item}.jpg)`"
      >
        <!-- <img :src="`/images/jpgs/item${item}.jpg`" alt="" /> -->
        <!-- <v-img
          class="product_bg"
          :src="`/images/jpgs/item${item}.jpg`"
          transition="slide-x-transition"
          cover
          :gradient="`rgba(32, 29, 29, 0.5), rgba(32, 29, 29, 0.15)`"
        ></v-img> -->
      </div>
      <div class="product_content relative">
        <h3>Red Velvet Stained Nike shoes</h3>
        <v-btn color="#fff" outlined class="btn"
          ><span>View product</span></v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style lang="scss" scoped>
.featured_card {
  min-width: 20.4rem;
  min-height: 30.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  .bg_product {
    z-index: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .product_content {
    z-index: 1;
    display: flex;
    width: 100%;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    h3 {
      font-size: 3rem;
      width: 75%;
      margin: 0 auto;
      text-transform: uppercase;
      color: #fff;
      font-weight: 700;
    }
    .btn {
      border-radius: 8px;
      min-width: 22.5rem;
      margin-bottom: -55px;
      margin-top: 12px;
      min-height: 4.5rem;
      transition: all 0.2s ease-in-out;
      &:hover {
        border-color: var(--primary-color);
        background-color: var(--primary-color);
        transition: all 0.2s ease-in-out;
      }
      span {
        text-transform: initial;
        font-size: 1.6rem;
        font-weight: 400;
      }
    }
  }
}
</style>