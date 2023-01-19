<template>
  <div>
    <v-card class="productWrapper" color="#fff">
      <div class="productImgWrapper">
        <v-img
          src="/images/pngs/item1.png"
          height="205"
          aspect-ratio="16/4"
          cover
          class="productImg"
        ></v-img>
      </div>
      <div class="product_title_wrapper">
        <h3>Red Velvet Stained Nike shoes</h3>
        <p>$35.00</p>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.productWrapper {
  min-height: 31.4rem;
  max-width: 25.3rem;
  //   background: blue;
  padding: 12px;
  box-shadow: none !important;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  //   overflow: hidden;
  .productImgWrapper {
    width: 100%;
    height: 20.1rem;

    .productImg {
      border-radius: 4px;
    }
  }
  .product_title_wrapper {
    h3 {
      color: var(--secondary-color);
      font-size: 1.4rem;
      font-weight: 400;
      cursor: pointer;
      margin-bottom: 20px;
      transition: all 0.2s ease-in-out;
      width: 94%;
      overflow: hidden;
      text-overflow: ellipsis;
      &:hover {
        color: var(--primary-color);
        transition: all 0.2s ease-in-out;
      }
    }
    p {
      font-weight: 600;
      font-size: 1.2rem;
      color: var(--secondary-color);
    }
  }
}
</style>