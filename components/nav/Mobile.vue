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
    <div class="closeNavBtn" style="justify-content: flex-end">
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
    <v-list nav>
      <v-list-item class="dropdownList" style="padding-left: 12px">
        <v-list-item-icon style="margin: 14px 5px 0 0 !important">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path
              d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            />
          </svg>
        </v-list-item-icon>

        <v-list-item-title class="item_title">Home</v-list-item-title>
      </v-list-item>

      <v-list-group>
        <template v-slot:activator>
          <v-list-item class="dropdownListWrapper">
            <v-list-item-icon style="margin: 14px 5px 0 0 !important">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 112c-48.6 0-88 39.4-88 88C168 248.6 207.4 288 256 288s88-39.4 88-88C344 151.4 304.6 112 256 112zM256 240c-22.06 0-40-17.95-40-40C216 177.9 233.9 160 256 160s40 17.94 40 40C296 222.1 278.1 240 256 240zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-46.73 0-89.76-15.68-124.5-41.79C148.8 389 182.4 368 220.2 368h71.69c37.75 0 71.31 21.01 88.68 54.21C345.8 448.3 302.7 464 256 464zM416.2 388.5C389.2 346.3 343.2 320 291.8 320H220.2c-51.36 0-97.35 26.25-124.4 68.48C65.96 352.5 48 306.3 48 256c0-114.7 93.31-208 208-208s208 93.31 208 208C464 306.3 446 352.5 416.2 388.5z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title">Account</v-list-item-title>
          </v-list-item>
        </template>
        <v-list dense nav>
          <!-- profile  -->
          <v-list-item class="dropdownList">
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path
                  d="M370.7 96.1C346.1 39.5 289.7 0 224 0S101.9 39.5 77.3 96.1C60.9 97.5 48 111.2 48 128v64c0 16.8 12.9 30.5 29.3 31.9C101.9 280.5 158.3 320 224 320s122.1-39.5 146.7-96.1c16.4-1.4 29.3-15.1 29.3-31.9V128c0-16.8-12.9-30.5-29.3-31.9zM336 144v16c0 53-43 96-96 96H208c-53 0-96-43-96-96V144c0-26.5 21.5-48 48-48H288c26.5 0 48 21.5 48 48zM189.3 162.7l-6-21.2c-.9-3.3-3.9-5.5-7.3-5.5s-6.4 2.2-7.3 5.5l-6 21.2-21.2 6c-3.3 .9-5.5 3.9-5.5 7.3s2.2 6.4 5.5 7.3l21.2 6 6 21.2c.9 3.3 3.9 5.5 7.3 5.5s6.4-2.2 7.3-5.5l6-21.2 21.2-6c3.3-.9 5.5-3.9 5.5-7.3s-2.2-6.4-5.5-7.3l-21.2-6zM112.7 316.5C46.7 342.6 0 407 0 482.3C0 498.7 13.3 512 29.7 512H128V448c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64l98.3 0c16.4 0 29.7-13.3 29.7-29.7c0-75.3-46.7-139.7-112.7-165.8C303.9 338.8 265.5 352 224 352s-79.9-13.2-111.3-35.5zM176 448c-8.8 0-16 7.2-16 16v48h32V464c0-8.8-7.2-16-16-16zm96 32c8.8 0 16-7.2 16-16s-7.2-16-16-16s-16 7.2-16 16s7.2 16 16 16z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title">Profile</v-list-item-title>
          </v-list-item>
          <!-- settings  -->
          <v-list-item class="dropdownList">
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336c44.2 0 80-35.8 80-80s-35.8-80-80-80s-80 35.8-80 80s35.8 80 80 80z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title">Settings</v-list-item-title>
          </v-list-item>
          <!-- Wish List -->
          <v-list-item class="dropdownList">
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title">Wish List</v-list-item-title>
          </v-list-item>
          <!-- Order History -->
          <v-list-item class="dropdownList">
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title"
              >Order History</v-list-item-title
            >
          </v-list-item>
          <!-- Track Package -->
          <v-list-item class="dropdownList">
            <v-list-item-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                <path
                  d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z"
                />
              </svg>
            </v-list-item-icon>
            <v-list-item-title class="item_title"
              >Track Package</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-list-group>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item class="dropdownListWrapper">
            <v-list-item-title class="item_title">Categories</v-list-item-title>
          </v-list-item>
        </template>
        <v-list dense nav>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            class="dropdownList"
          >
            <v-list-item-title class="item_title">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        { title: "Cell Phones" },
        { title: "Computers & Accessories" },
        { title: "Home appliances & Electronics" },
        { title: "Fashion & Wears" },
        { title: "Jewelry" },
        { title: "Laptops" },
        { title: "Gaming" },
      ],
      width: 300,
    };
  },
  methods: {
    showMobileNav() {
      this.drawer = true;
    },
  },
  mounted() {
    var nx = window.innerWidth;
    if (nx <= 500) {
      this.width = "100vw";
    }
    window.addEventListener("resize", function (event) {
      var w = window.innerWidth;
      nx = w;
    });
    $(window).resize(() => {
      if (nx <= 500) {
        this.width = "100vw";
      } else {
        this.width = 300;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.navCart {
  //   margin-top: 56px !important;
}

.dropdownList {
  cursor: pointer;
  padding-left: 36px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--primary-color);
    transition: all 0.2s ease-in-out;
    .item_title {
      color: #fff !important;
      transition: all 0.2s ease-in-out;
    }
    svg {
      fill: #fff !important;
      transition: all 0.2s ease-in-out;
    }
  }
  //   background: red;
  .item_title {
    font-size: 1.2rem;
    font-weight: 600;
    overflow: visible !important;
    color: var(--secondary-color);
    transition: all 0.2s ease-in-out;
  }
  svg {
    width: 18px;
    height: 18px;
    fill: var(--secondary-color);
    transition: all 0.2s ease-in-out;
  }
}
.v-application--is-ltr .v-list-item__action:first-child,
.v-application--is-ltr .v-list-item__icon:first-child {
  margin-bottom: 0;
  margin-top: 10px;
  margin-right: 5px !important;
}
.dropdownListWrapper {
  padding-left: 0;
  .item_title {
    font-size: 1.2rem;
    font-weight: 600;
    overflow: visible !important;
    color: var(--secondary-color);
    transition: all 0.2s ease-in-out;
  }
  svg {
    width: 18px;
    height: 18px;
    fill: var(--secondary-color);
    transition: all 0.2s ease-in-out;
  }
}
</style>