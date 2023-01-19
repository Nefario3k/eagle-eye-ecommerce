<template>
  <div style="height: 100vh">
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
        <div class="col-12 category_header">
          <header>Top Selling</header>
        </div>
        <div class="col-12">
          <v-card class="cardList">
            <v-tabs
              center-active
              light
              centered
              hide-slider
              color="#fff"
              grow
              height="calc(max-content + 100px)"
            >
              <v-tab
                class="product_tab_items"
                style="padding: 0 !important"
                v-for="(category, index) in 20"
                :key="index"
              >
                <ProductCard :category="category" :index="index" />
              </v-tab>
            </v-tabs>
          </v-card>
        </div>
      </v-row>
    </v-container>
    <ProductCard />
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
</style>