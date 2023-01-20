<template>
  <div>
    <Carousel
      data-aos="fade-up"
      data-aos-duration="500"
      :autoplay="true"
      :items="3"
      :margin="0"
      :loop="false"
      :nav="false"
      :autoplayHoverPause="true"
      :responsive="responsive"
    >
      <ProductFeatured v-for="n in 10" :key="n" :item="n" ref="card" />
    </Carousel>
    <section id="home_page_content">
      <v-container class="page_container">
        <v-row class="category_row">
          <div class="col-12 category_header">
            <header>Shop Our Top Categories</header>
          </div>
          <div
            v-for="(category, index) in items"
            :key="index"
            class="col-6 col-md-4 col-lg-2 col-xl-2"
          >
            <CategoryCard :category="category" :index="index" />
          </div>
        </v-row>
      </v-container>
    </section>
    <section id="filters_home_page"></section>
    <v-container class="page_container" style="margin-top: 89px">
      <v-row class="category_row">
        <div class="col-12">
          <v-card class="cardList">
            <div class="category_header">
              <header>Top Selling Items</header>
            </div>
            <v-tabs
              show-arrows
              center-active
              background-color="transparent"
              color="transparent"
              light
              centered
              :hide-slider="true"
              grow
              height="314px"
            >
              <v-tab
                class="product_tab_items"
                style="padding: 0 !important"
                v-for="(category, index) in 20"
                :key="index"
                :ripple="false"
              >
                <ProductCard :category="category" :index="index" />
              </v-tab>
            </v-tabs>
          </v-card>
        </div>
        <div class="col-12">
          <v-card class="cardList flash">
            <div class="category_header">
              <header>
                <span>Flash Sales</span>
                <span>Time Left: <span id="mobile_days"></span> </span>
                <span
                  >SEE ALL
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                    /></svg
                ></span>
              </header>
            </div>
            <v-tabs
              show-arrows
              center-active
              background-color="transparent"
              color="transparent"
              light
              centered
              :hide-slider="true"
              grow
              height="314px"
            >
              <v-tab
                class="product_tab_items"
                style="padding: 0 !important"
                v-for="(category, index) in 20"
                :key="index"
                :ripple="false"
              >
                <ProductCard :category="category" :index="index" />
              </v-tab>
            </v-tabs>
          </v-card>
        </div>
        <div class="col-12">
          <v-card class="cardList flash limited">
            <div class="category_header">
              <header>
                <span>Limited Sales</span>
                <span
                  >SEE ALL
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path
                      d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
                    /></svg
                ></span>
              </header>
            </div>
            <v-tabs
              show-arrows
              center-active
              background-color="transparent"
              color="transparent"
              light
              centered
              :hide-slider="true"
              grow
              height="314px"
            >
              <v-tab
                class="product_tab_items"
                style="padding: 0 !important"
                v-for="(category, index) in 20"
                :key="index"
                :ripple="false"
              >
                <ProductCard :category="category" :index="index" />
              </v-tab>
            </v-tabs>
          </v-card>
        </div>
        <div class="col-12">
          <v-card class="cardList official">
            <div class="category_header">
              <header>
                <span>Official Stores</span>
              </header>
            </div>
            <v-row style="margin: 0; padding: 0 0 0 12px">
              <div
                v-for="n in 10"
                :key="n"
                class="col-4 col-md-2 col-lg-2 col-xl-2 store"
              >
                <div
                  :style="`background-image: linear-gradient(rgba(32, 29, 29, 0.5), rgba(32, 29, 29, 0.15)),url(/images/jpgs/item${n}.jpg)`"
                >
                  <span>Store {{ n }}</span>
                </div>
              </div>
            </v-row>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        960: { items: 2 },
        1200: { items: 3 },
        2000: { items: 4 },
      },
      deadline: "December 31 2015 23:59:59 GMT+0200",
      items: [
        { title: "Furniture" },
        { title: "Computers & Accessories" },
        { title: "Gaming" },
        { title: "Fashion & Wears" },
        { title: "Jewelry" },
        { title: "Laptops" },
      ],
    };
  },
  mounted() {
    this.getRemainingDate();
  },
  methods: {
    getRemainingDate() {
      const datevalue = "April 22 2023 23:59:59 GMT+0200";
      var x = setInterval(function () {
        // Find the distance between now and the count down date
        var countDownDate = new Date(datevalue).getTime();
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("mobile_days").innerHTML =
          days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
#home_page_content {
  background-color: var(--primary-color);
  min-height: 12rem;
  .page_container {
    padding-top: 89px;
    padding-bottom: 89px;
    .category_row {
      .category_header {
        header {
          font-weight: 700;
          color: var(--secondary-color);
        }
      }
    }
  }
}
.cardList {
  padding-bottom: 12px;
  .category_header {
    padding: 12px;
    header {
      font-weight: 700;
      font-size: 2rem;
      color: var(--secondary-color);
    }
  }
  &.flash {
    .category_header {
      background-color: #e61601;
      header {
        color: #fff;
        font-weight: 400;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          &:first-child {
            font-weight: 600;
          }
          svg {
            width: 15px;
            height: 15px;
            fill: #fff;
            display: inline-block;
            position: relative;
            bottom: -3px;
          }
          &:last-child {
            cursor: pointer;
          }
        }
      }
    }
  }
  &.limited {
    .category_header {
      background-color: var(--primary-color);
    }
  }
  &.official {
    .category_header {
      background-color: #b5de93;
      header {
        text-align: center;
        color: var(--secondary-color);
      }
    }
    .store {
      padding: 12px 12px 0 0;
      // min-height: 31.3rem;
      & > div {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 9.3rem;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          transform: scale(1.02);
        }
        span {
          font-size: 1.8rem;
          color: #fff;
          font-weight: 600;
        }
      }
    }
  }
}
</style>