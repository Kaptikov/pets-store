<template lang="">
  <div class="catalog__card card-catalog">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="50"
      :pagination="pagination"
      :speed="800"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="card-catalog__swiper mySwiper"
    >
      <swiper-slide
        class="card-catalog-swiper__slide"
        v-for="productImg in getProductImgForProduct(product.id)"
        :key="productImg.id"
      >
        <img
          :src="productImg.imgUrl"
          alt="Изображение товара"
          class="card-catalog__img"
        />
      </swiper-slide>
    </swiper>
    <div class="card-catalog__wrapper">
      <button
        v-if="!isFavourite"
        class="card-catalog__btn--favourite"
        @click="btnAddToFavourite(product.id)"
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
            stroke-width="3"
            fill="none"
          />
        </svg>
      </button>

      <button
        v-else
        class="card-catalog__btn--favourite"
        @click="btnRemoveForFavourite(product.id)"
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

      <button class="card-catalog__btn--comparison">
        <svg
          width="33"
          height="36"
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
      <div class="card-catalog__price">{{ product.price }} р.</div>
      <router-link
        :to="{ name: 'productPage', params: { id: product.id } }"
        class="card-catalog__description"
      >
        {{ product.name }}
      </router-link>
      <div class="card-catalog__btns">
        <!-- <div class="card-catalog__quantity-body">
          <button
            class="card-catalog__quantity-btn--minus"
            @click="quantity !== 1 ? (quantity -= 1) : (quantity = 1)"
          >
            -
          </button>
          <input
            class="card-catalog__quantity"
            type="text"
            v-model="quantity"
          />
          <button
            class="card-catalog__quantity-btn--plus"
            @click="quantity += 1"
          >
            +
          </button>
        </div> -->
        <button class="card-catalog__cart" @click="btnAddToCart(product.id)">
          В корзину
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
</template>

<script>
import { ref, onMounted, onUpdated, watch, computed } from 'vue'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useProductStore } from '@/store/ProductStore'
import { useFavouriteStore } from '@/store/FavouriteStore'
import { useCartStore } from '@/store/CartStore'

import { Pagination } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/vue'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      quantity: 1,
    }
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    product: {},
  },

  computed: {},
  setup(props) {
    const productStore = useProductStore()
    const favouriteStore = useFavouriteStore()
    const productImgStore = useProductImgStore()
    const cartStore = useCartStore()
    const onSwiper = swiper => {
      // console.log(swiper)
    }
    const onSlideChange = () => {
      // console.log('slide change')
    }

    const getProductImgForProduct = productId => {
      return productImgStore.productImgs.filter(
        propoductImg => propoductImg.productId === productId
      )
    }

    function btnAddToFavourite(productId) {
      productStore.addToFavorites(productId)
    }

    function btnAddToCart(productId) {
      productStore.addToCart(productId)
    }

    function btnRemoveForFavourite() {
      console.log('Товар удален из избранного')
    }

    // const isFavourite = productId => {
    //   return favouriteStore.checkProductInFavorite(productId)
    // }
    const isFavourite = computed(() => {
      return (
        favouriteStore.favouriteItems.find(
          favouriteItem => favouriteItem.productId === props.product.id
        ) !== undefined
      )
    })

    onMounted(() => {
      // Fetch data from the stores
      // favouriteStore.checkProductInFavorite(props.id)
      productImgStore.getProductImg(props.id)
      // favouriteStore.getFavourite(props.id)
    })
    // const productStore = useProductStore()
    return {
      productImgStore,
      cartStore,
      favouriteStore,
      getProductImgForProduct,
      btnAddToFavourite,
      btnAddToCart,
      btnRemoveForFavourite,
      isFavourite,
      // buttonTitle,
      onSwiper,
      onSlideChange,
      pagination: {
        clickable: true,
      },
      modules: [Pagination],
    }
  },
}
</script>

<style lang="scss">
.catalog {
  // .catalog__card
  &__card {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
.card-catalog {
  // .card-catalog__swiper
  &__swiper {
    width: 100%;
    // height: 100%;
    margin-bottom: 17px;
  }
  // .card-catalog__img
  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // .card-catalog__btn--favourite
  &__btn--favourite {
    position: absolute;
    top: 28px;
    left: 7px;
    z-index: 10;
  }
  // .card-catalog__btn--comparison
  &__btn--comparison {
    position: absolute;
    top: 28px;
    right: 7px;
    z-index: 10;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }
  // .card-catalog__price
  &__price {
    color: $main-color;
    font-size: 30px;
    font-weight: 700;
    line-height: 66.667%;
    margin-bottom: 25px;
    margin-top: 10px;
  }
  // .card-catalog__description
  &__description {
    flex-grow: 1;
    margin-bottom: 46px;
  }
  &__btns {
    // display: flex;
    flex-direction: row;
    width: 100%;
    // justify-content: space-between;
    align-items: center;
    color: $main-color;
  }
  // .card-catalog__quantity-body
  &__quantity-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 122px;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    font-weight: 400;
    line-height: 100%;
  }
  // .card-catalog__quantity-btn--minus
  &__quantity-btn--minus {
    font-size: 35px;
  }
  // .card-catalog__quantity
  &__quantity {
    max-width: 40px;
    width: auto;
    text-align: center;
    font-size: 24px;
  }
  // .card-catalog__quantity-btn--plus
  &__quantity-btn--plus {
    font-size: 35px;
  }
  // .card-catalog__cart
  &__cart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    // max-width: 163px;
    width: 100%;
    height: 45px;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    font-size: 21px;
    font-weight: 400;
    line-height: 114.286%;
    transition: background 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      background: $blue-first;
      color: #fff;
    }
  }
}
.card-catalog__swiper {
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    top: 0;
    left: 0;
    height: 0;
    background: $main-color;
  }
  .swiper-pagination {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    top: 0;
    left: 0;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  .swiper-pagination-bullet {
    background: $main-color;
    width: 100%;
    height: 2px;
    border-radius: 0;
    // opacity: 1;
  }

  .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
  .swiper-pagination-horizontal.swiper-pagination-bullets
    .swiper-pagination-bullet {
    // margin: 0 0 0 0;
  }
}
</style>
