<template>
  <v-navigation-drawer
    app
    v-model="drawer"
    temporary
    right
    :width="width"
    :clipped="false"
    class="navCart"
  >
    <div class="relative" style="margin-bottom: 55px">
      <div class="closeNavBtn cartHeader">
        <h3>Cart(10)</h3>
        <svg
          @click="drawer = false"
          width="35"
          height="35"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="var(--primary-color)" />
          <path
            d="M32.75 16.2498L16.25 32.7498"
            stroke="#fff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.25 16.2498L32.75 32.7498"
            stroke="#fff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <v-list nav>
      <v-list-item v-for="n in 10" :key="n" class="itemList">
        <v-img
          :src="`/images/jpgs/item${n}.jpg`"
          :height="imgHeight"
          :width="imgWidth"
          class="product_img"
        ></v-img>
        <div class="itemContent">
          <span class="vendor">Vendor{{ n }}</span>
          <h3>
            <span>Item{{ n }}</span>
            <span>$35.00</span>
          </h3>
          <div class="quantity">
            <span>Quantity: </span>
            <input type="number" name="" value="1" />
          </div>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      width: 300,
      imgHeight: 195,
      imgWidth: null,
    };
  },
  methods: {
    showUserCart() {
      this.drawer = true;
    },
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 500) {
      this.width = "100vw";
      this.imgHeight = 100;
      this.imgWidth = 100;
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 500) {
        this.width = "100vw";
        this.imgHeight = 100;
        this.imgWidth = 100;
      } else {
        this.width = 300;
        this.imgHeight = 195;
        this.imgWidth = null;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.navCart {
  //   margin-top: 56px !important;
}
.itemList {
  flex-direction: column;
  align-items: flex-start;
  min-height: auto !important;
  gap: 15px;
  .product_img {
    cursor: pointer;
  }
  .itemContent {
    width: 100%;
    span.vendor {
      font-size: 1.2rem;
      color: var(--faded-color);
      font-weight: 400;
      font-style: italic;
    }
    h3 {
      color: var(--secondary-color);
      font-size: 1.6rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > span:first-child {
        word-break: break-all;
        width: 80%;
      }
    }
    div.quantity {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      span {
        font-size: 1.3rem;
        font-weight: 600;
      }
      input {
        border: 1px solid var(--faded-color);
        width: 20%;
        padding: 0 6px;
        height: 3rem;
        text-align: right;
        color: var(--secondary-color);
      }
    }
  }
}
.product_img {
  border-radius: 6px !important;
}
</style>