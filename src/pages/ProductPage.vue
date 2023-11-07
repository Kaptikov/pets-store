<template lang="">
  <Header />
  <div class="page product__page">
    <div class="product" v-if="productStore.products.id">
      <div class="product__container-top _container">
        <div class="product__swiper swiper-product">
          <swiper
            :direction="'vertical'"
            :spaceBetween="10"
            :navigation="false"
            :thumbs="{ swiper: thumbsSwiper }"
            :modules="modules"
            class="swiper-product__first"
          >
            <swiper-slide
              class="card-catalog-swiper__slide"
              v-for="productImg in getProductImgForProduct(
                productStore.products.id
              )"
              :key="productImg.id"
            >
              <img
                :src="productImg.imgUrl"
                alt="Изображение товара"
                class="card-catalog__img"
              />
              <!-- <img
          :src="`src/assets/img/${images.image}`"
          alt="Изображение товара"
          class="card-catalog__img"
        /> -->
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :direction="'vertical'"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="modules"
            class="swiper-product__second"
          >
            <swiper-slide
              class="card-catalog-swiper__slide"
              v-for="productImg in getProductImgForProduct(
                productStore.products.id
              )"
              :key="productImg.id"
            >
              <img
                :src="productImg.imgUrl"
                alt="Изображение товара"
                class="card-catalog__img"
              />
              <!-- <img
          :src="`src/assets/img/${images.image}`"
          alt="Изображение товара"
          class="card-catalog__img"
        /> -->
            </swiper-slide>
            <!-- <swiper-slide class="swiper-product__second-slide"
              ><img src="@/assets/img/product2.jpg"
            /></swiper-slide>
            <swiper-slide class="swiper-product__second-slide"
              ><img src="@/assets/img/product2.jpg"
            /></swiper-slide>
            <swiper-slide class="swiper-product__second-slide"
              ><img src="@/assets/img/product.jpg"
            /></swiper-slide>
            <swiper-slide class="swiper-product__second-slide"
              ><img src="@/assets/img/product.jpg"
            /></swiper-slide> -->
          </swiper>
        </div>
        <div class="product__info info-product">
          <div class="info-product__icons">
            <button class="info-product__icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 33 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 2L4.87431 4.82925C6.38557 5.93286 8.20847 6.5276 10.0798 6.5276V6.5276C12.2201 6.5276 14.2874 5.74995 15.8971 4.33938L15.9833 4.2638C17.6486 2.80451 19.7874 2 22.0015 2H22.0826C23.8365 2 25.5551 2.4935 27.0418 3.42408L32 6.5276"
                  stroke="#173049"
                  stroke-width="3"
                />
                <path
                  d="M1 15.5828L4.87431 18.412C6.38557 19.5157 8.20847 20.1104 10.0798 20.1104V20.1104C12.2201 20.1104 14.2874 19.3327 15.8971 17.9222L15.9833 17.8466C17.6486 16.3873 19.7874 15.5828 22.0015 15.5828H22.0826C23.8365 15.5828 25.5551 16.0763 27.0418 17.0069L32 20.1104"
                  stroke="#173049"
                  stroke-width="3"
                />
                <path
                  d="M1 29.1656L4.87431 31.9949C6.38557 33.0985 8.20847 33.6932 10.0798 33.6932V33.6932C12.2201 33.6932 14.2874 32.9156 15.8971 31.505L15.9833 31.4294C17.6486 29.9701 19.7874 29.1656 22.0015 29.1656H22.0826C23.8365 29.1656 25.5551 29.6591 27.0418 30.5897L32 33.6932"
                  stroke="#173049"
                  stroke-width="3"
                />
              </svg>
            </button>
            <button class="info-product__icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_305_659)">
                  <path
                    d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5C21 3.34 19.66 2 18 2C16.34 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.35C15.11 18.56 15.08 18.78 15.08 19C15.08 20.61 16.39 21.92 18 21.92C19.61 21.92 20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08Z"
                    fill="#173049"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_305_659">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <h3 class="info-product__title">
            {{ productStore.products.name }}
            <!-- {{ $route.params.id }} -->
          </h3>
          <div class="info-product__feedback">
            <div class="info-product__rating">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#FAFF00"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#FAFF00"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#FAFF00"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#FAFF00"
                />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                  fill="#FAFF00"
                />
              </svg>
            </div>
            <a href="#" class="info-product__reviews">10 отзывов</a>
            <a href="#" class="info-product__questions">1 вопрос</a>
          </div>
          <div class="product-info__placing">
            <div class="product-info__placing-top">
              <div class="product-info__price">
                {{ productStore.products.price }} р.
              </div>
              <button
                v-if="!isFavourite"
                class="product-info__favoroite"
                @click="btnAddToFavourite(productStore.products.id)"
              >
                <svg
                  width="38"
                  height="32"
                  viewBox="0 0 38 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.88 4.08993L20.8825 4.08749C21.7186 3.27334 22.7218 2.62233 23.8353 2.17649C24.9488 1.73061 26.1475 1.5 27.3602 1.5C28.5729 1.5 29.7717 1.73061 30.8852 2.17649C31.9986 2.62233 33.0019 3.27334 33.8379 4.08749L33.8417 4.09112C37.3861 7.51877 37.3861 13.0537 33.8417 16.4814L19.0315 30.798L19.0289 30.8006C19.0282 30.801 19.0269 30.8016 19.025 30.8024C19.0192 30.8047 19.0105 30.8068 19 30.8068C18.9895 30.8068 18.9808 30.8047 18.975 30.8024L18.4172 32.1948L18.975 30.8024C18.9731 30.8016 18.9718 30.8009 18.9711 30.8005L18.9685 30.798L4.15833 16.4814C4.15826 16.4813 4.15819 16.4812 4.15812 16.4812C0.614035 13.0536 0.613731 7.52055 4.15858 4.09087L4.15859 4.09088L4.16207 4.08749C4.99812 3.27334 6.0014 2.62233 7.11482 2.17649C8.22835 1.73061 9.42708 1.5 10.6398 1.5C11.8525 1.5 13.0512 1.73061 14.1647 2.17649C15.2782 2.62233 16.2814 3.27334 17.1175 4.08749L17.1175 4.0875L17.1236 4.09342C17.3782 4.33848 17.6151 4.59746 17.8361 4.86933L18.9955 6.2954L20.1603 4.87372C20.3857 4.59861 20.6251 4.33703 20.88 4.08993Z"
                    stroke="#173049"
                    stroke-width="3"
                  />
                </svg>
              </button>
              <button
                v-else
                class="product-info__favoroite"
                @click="btnRemoveForFavourite(productStore.products.id)"
              >
                <svg
                  width="38"
                  height="33"
                  viewBox="0 0 38 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.88 4.08993L20.8825 4.08749C21.7186 3.27334 22.7218 2.62233 23.8353 2.17649C24.9488 1.73061 26.1475 1.5 27.3602 1.5C28.5729 1.5 29.7717 1.73061 30.8852 2.17649C31.9986 2.62233 33.0019 3.27334 33.8379 4.08749L33.8417 4.09112C37.3861 7.51877 37.3861 13.0537 33.8417 16.4814L19.0315 30.798L19.0289 30.8006C19.0282 30.801 19.0269 30.8016 19.025 30.8024C19.0192 30.8047 19.0105 30.8068 19 30.8068C18.9895 30.8068 18.9808 30.8047 18.975 30.8024L18.4172 32.1948L18.975 30.8024C18.9731 30.8016 18.9718 30.8009 18.9711 30.8005L18.9685 30.798L4.15833 16.4814C4.15826 16.4813 4.15819 16.4812 4.15812 16.4812C0.614035 13.0536 0.613731 7.52055 4.15858 4.09087L4.15859 4.09088L4.16207 4.08749C4.99812 3.27334 6.0014 2.62233 7.11482 2.17649C8.22835 1.73061 9.42708 1.5 10.6398 1.5C11.8525 1.5 13.0512 1.73061 14.1647 2.17649C15.2782 2.62233 16.2814 3.27334 17.1175 4.08749L17.1175 4.0875L17.1236 4.09342C17.3782 4.33848 17.6151 4.59746 17.8361 4.86933L18.9955 6.2954L20.1603 4.87372C20.3857 4.59861 20.6251 4.33703 20.88 4.08993Z"
                    stroke="currentColor"
                    stroke-width="0"
                    fill="#D04847"
                  />
                </svg>
              </button>
            </div>
            <div class="product-info__placing-bottom">
              <!-- <div class="info-product__quantity-body">
                <button class="info-product__quantity-btn--minus">-</button>
                <div class="info-product__quantity">1</div>
                <button class="info-product__quantity-btn--plus">+</button>
              </div> -->
              <button
                v-if="!isCart"
                class="info-product__cart"
                @click="btnAddToCart(productStore.products.id)"
              >
                Добавить в корзину
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                >
                  <path
                    d="M3.82274 0.798049C3.54061 0.440375 3.12931 0.181859 2.65901 0.0665958C2.18871 -0.0486674 1.68854 -0.0135381 1.24381 0.165992C0.799082 0.345521 0.437341 0.658331 0.220291 1.05106C0.00324008 1.4438 -0.0556756 1.89213 0.0535933 2.31959L5.75996 24.5799L5.13036 26.5676C4.2193 26.6777 3.35616 27.0006 2.62684 27.5041C1.89751 28.0076 1.32742 28.6742 0.973299 29.4376C0.619174 30.2009 0.493357 31.0344 0.608368 31.8551C0.723378 32.6758 1.07521 33.4551 1.62884 34.1155C2.18248 34.7758 2.91863 35.2942 3.76404 35.619C4.60945 35.9438 5.53464 36.0638 6.44756 35.9669C7.36049 35.8701 8.22931 35.5598 8.96759 35.0669C9.70586 34.5741 10.2879 33.9159 10.6556 33.1578H21.0071C21.4909 34.1552 22.3415 34.9723 23.4161 35.4717C24.4906 35.9712 25.7234 36.1224 26.9073 35.9001C28.0912 35.6777 29.1539 35.0953 29.9167 34.2508C30.6796 33.4063 31.096 32.3512 31.096 31.2629C31.096 30.1747 30.6796 29.1196 29.9167 28.2751C29.1539 27.4306 28.0912 26.8482 26.9073 26.6258C25.7234 26.4035 24.4906 26.5547 23.4161 27.0541C22.3415 27.5536 21.4909 28.3707 21.0071 29.3681H10.6556C10.3229 28.6822 9.81337 28.0797 9.17957 27.6097L9.95866 25.1522C10.0128 24.9827 10.0405 24.8074 10.0408 24.6311L31.6723 22.8613C32.1167 22.8247 32.5366 22.662 32.8715 22.3967C33.2065 22.1314 33.4391 21.7772 33.5359 21.3853L36.9597 7.52844C37.0146 7.30679 37.0134 7.07687 36.9563 6.85566C36.8992 6.63446 36.7875 6.42764 36.6297 6.25047C36.4718 6.0733 36.2717 5.93031 36.0442 5.83207C35.8167 5.73383 35.5675 5.68285 35.3151 5.68289H7.65296C7.62039 5.6322 7.58526 5.58289 7.54767 5.5351L3.82274 0.798049Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button
                v-else
                class="info-product__cart"
                @click="btnAddToCart(productStore.products.id)"
              >
                Товар в корзине
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                >
                  <path
                    d="M3.82274 0.798049C3.54061 0.440375 3.12931 0.181859 2.65901 0.0665958C2.18871 -0.0486674 1.68854 -0.0135381 1.24381 0.165992C0.799082 0.345521 0.437341 0.658331 0.220291 1.05106C0.00324008 1.4438 -0.0556756 1.89213 0.0535933 2.31959L5.75996 24.5799L5.13036 26.5676C4.2193 26.6777 3.35616 27.0006 2.62684 27.5041C1.89751 28.0076 1.32742 28.6742 0.973299 29.4376C0.619174 30.2009 0.493357 31.0344 0.608368 31.8551C0.723378 32.6758 1.07521 33.4551 1.62884 34.1155C2.18248 34.7758 2.91863 35.2942 3.76404 35.619C4.60945 35.9438 5.53464 36.0638 6.44756 35.9669C7.36049 35.8701 8.22931 35.5598 8.96759 35.0669C9.70586 34.5741 10.2879 33.9159 10.6556 33.1578H21.0071C21.4909 34.1552 22.3415 34.9723 23.4161 35.4717C24.4906 35.9712 25.7234 36.1224 26.9073 35.9001C28.0912 35.6777 29.1539 35.0953 29.9167 34.2508C30.6796 33.4063 31.096 32.3512 31.096 31.2629C31.096 30.1747 30.6796 29.1196 29.9167 28.2751C29.1539 27.4306 28.0912 26.8482 26.9073 26.6258C25.7234 26.4035 24.4906 26.5547 23.4161 27.0541C22.3415 27.5536 21.4909 28.3707 21.0071 29.3681H10.6556C10.3229 28.6822 9.81337 28.0797 9.17957 27.6097L9.95866 25.1522C10.0128 24.9827 10.0405 24.8074 10.0408 24.6311L31.6723 22.8613C32.1167 22.8247 32.5366 22.662 32.8715 22.3967C33.2065 22.1314 33.4391 21.7772 33.5359 21.3853L36.9597 7.52844C37.0146 7.30679 37.0134 7.07687 36.9563 6.85566C36.8992 6.63446 36.7875 6.42764 36.6297 6.25047C36.4718 6.0733 36.2717 5.93031 36.0442 5.83207C35.8167 5.73383 35.5675 5.68285 35.3151 5.68289H7.65296C7.62039 5.6322 7.58526 5.58289 7.54767 5.5351L3.82274 0.798049Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="product__container-botoom _container">
        <div class="product__description product-description">
          <h4 class="product-description__title">Описание</h4>
          <div class="product-description_text">
            {{ productStore.products.description }}
          </div>
        </div>
      </div>
    </div>
    <div class="product__loading" v-else>
      <div class="product__loading-container">
        <h3 class="product__load">Загрузка...</h3>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { onMounted, computed, defineComponent, ref } from 'vue'
import { useProductStore } from '@/store/ProductStore'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useFavouriteStore } from '@/store/FavouriteStore'
import { useCartStore } from '@/store/CartStore'

import { useRoute } from 'vue-router'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

// import './style.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
    Header,
    Footer,
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    product: {},
  },
  // data() {
  //   return {
  //     product: null,
  //   }
  // },
  // created() {
  //   const product = products.find(
  //     product => product.id === this.$route.params.id
  //   )
  //   if (product) {
  //     this.product = product
  //   }
  // },
  setup(props) {
    const productStore = useProductStore()
    const productImgStore = useProductImgStore()
    const favouriteStore = useFavouriteStore()
    const cartStore = useCartStore()
    const route = useRoute()
    const thumbsSwiper = ref()
    const setThumbsSwiper = swiper => {
      thumbsSwiper.value = swiper
    }

    const getProductImgForProduct = productId => {
      return productImgStore.productImgs.filter(
        propoductImg => propoductImg.productId === productId
      )
    }

    function btnAddToFavourite(productId) {
      favouriteStore.addToFavourites(productId)
    }

    function btnAddToCart(productId) {
      console.log(productId)
      cartStore.addToCart(productId)
    }

    const isFavourite = computed(() => {
      return (
        favouriteStore.favouriteItems.find(
          favouriteItem => favouriteItem.productId === productStore.products.id
        ) !== undefined
      )
    })

    const isCart = computed(() => {
      return (
        cartStore.cartItems.find(
          cartItem => cartItem.productId === productStore.products.id
        ) !== undefined
      )
    })

    // const product = productsStore.getProductById(props.route.params.id)
    onMounted(() => {
      const currentProductId = route.params.id
      productStore.getProduct(currentProductId)
      favouriteStore.getFavourite(props.id)
      productImgStore.getProductImg(props.id)
      //const productId = route.params.id
      // const product = props.id
      // const productId = route.params.id // Здесь вы должны использовать фактический id открытой страницы продукта
      // console.log(productId)
      // productId === product
      // productsStore.getProductById(product)

      //productStore.getProduct(props.id)
    })
    // const product = productStore.products[2]
    return {
      //product,
      getProductImgForProduct,
      btnAddToCart,
      btnAddToFavourite,
      productStore,
      productImgStore,
      isFavourite,
      isCart,
      thumbsSwiper,
      setThumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    }
  },
}
</script>

<style lang="scss" scoped>
// .mySwiper .swiper-slide-thumb-active {
//   opacity: 1;
// }

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.product {
  // .product__page
  &__page {
  }
  // .product__container-top
  &__container-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 150px;
    margin-bottom: 84px;
  }
  // .product__swiper
  &__swiper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-right: 74px;
    flex: 0 1 50%;
    max-height: 535px;
    height: 100%;
  }
  &__swiper .swiper {
    // margin: 0;
  }
  // .product__info
  &__info {
    flex: 0 1 50%;
    margin-bottom: 84px;
  }
  // .product__container-botoom
  &__container-botoom {
    display: flex;
    flex-direction: column;
  }
  // .product__description
  &__description {
    margin-bottom: 150px;
  }
  // .product__loading
  &__loading {
  }
  // .product__loading-container
  &__loading-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
  }
  // .product__load
  &__load {
    font-size: 32px;
  }
}
.swiper-product {
  // .swiper-product__first
  &__first {
    margin: 0;
    margin-left: 70px;
    // flex: 0 1 70%;
  }
  // .swiper-product__first-slide
  &__first-slide {
    cursor: pointer;
  }
  // .swiper-product__second
  &__second {
    margin: 0;
    // margin-right: 130px;
    // flex: 0 1 14%;
  }
  &__second .swiper-slide-thumb-active {
    opacity: 1;
  }
  // .swiper-product__second-slide
  &__second-slide {
    cursor: pointer;
    opacity: 0.5;
  }
}
.info-product {
  // .info-product__icons
  &__icons {
    display: flex;
    flex-direction: row;
    margin-bottom: 19px;
    &:first-child {
      margin-right: 28px;
    }
  }
  &__icon {
    &:first-child {
      margin-right: 28px;
    }
  }
  // .info-product__title
  &__title {
    font-size: 36px;
    font-weight: 400;
    line-height: 111.111%;
    letter-spacing: 1.8px;
    margin-bottom: 12px;
  }
  // .info-product__feedback
  &__feedback {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
  }
  // .info-product__rating
  &__rating {
    margin-right: 28px;
  }
  // .info-product__reviews
  &__reviews {
    margin-right: 28px;
  }
  // .info-product__questions
  &__questions {
  }
  // .info-product__quantity-body
  &__quantity-body {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 36px;
    padding: 5px;
    border: 1px solid $gray;
    border-radius: 10px;
  }
  // .info-product__quantity-btn--minus
  &__quantity-btn--minus {
  }
  // .info-product__quantity
  &__quantity {
    font-size: 24px;
    margin: 0 28px;
  }
  // .info-product__quantity-btn--plus
  &__quantity-btn--plus {
  }
  // .info-product__cart
  &__cart {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 70%;
    font-size: 24px;
    padding: 15px;
    color: #fff;
    border-radius: 10px;
    background: $blue-second;
    transition: background 0.1s ease-in-out;

    &:hover {
      background: $red;
    }
  }
  &__cart svg {
    margin-left: 20px;
  }
}
.product-info {
  // .product-info__placing
  &__placing {
    margin-top: 110px;
    display: flex;
    flex-direction: column;
    max-width: 550px;
    width: 100%;
    padding: 25px 25px 15px 25px;
    border-radius: 5px;
    // border: 2px solid rgba(255, 255, 255, 0.13);
    box-shadow: 0px 5px 20px 1px $gray;

    &-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    &-bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 25px;
    }
  }
  // .product-info__price
  &__price {
    font-size: 24px;
    line-height: 83.333%;
  }
  // .product-info__favoroite
  &__favoroite {
  }
}
.product-description {
  // .product-description_text
  &_text {
    color: #000;
    font-size: 24px;
    font-weight: 300;
    line-height: 166.667%;
  }
  // .product-description__title
  &__title {
    font-size: 24px;
    margin-bottom: 30px;
  }
}
</style>
