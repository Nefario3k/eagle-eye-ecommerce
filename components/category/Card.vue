<template>
  <div>
    <v-card class="productWrapper relative">
      <div
        class="productImgWrapper absolute"
        :style="`background-image: linear-gradient(rgba(32, 29, 29, 0.5), rgba(32, 29, 29, 0.15)),url(/images/jpgs/category${
          index + 1
        }.jpg)`"
      ></div>
      <div class="product_title_wrapper relative">
        <h3>{{ category.title }}</h3>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["category", "index"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.productWrapper {
  min-height: 31.4rem;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  background: transparent;
  transition: all 0.2s ease-in-out;
  //   overflow: hidden;
  .productImgWrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 8px;
  }
  .product_title_wrapper {
    padding-top: 15px;
    h3 {
      color: #fff;
      font-size: 1.6rem;
      font-weight: 600;
      cursor: pointer;
      margin-bottom: 20px;
      transition: all 0.2s ease-in-out;
    }
  }
  &:hover {
    .product_title_wrapper {
      h3 {
        color: var(--primary-color);
        transition: all 0.2s ease-in-out;
      }
    }
  }
}
</style>