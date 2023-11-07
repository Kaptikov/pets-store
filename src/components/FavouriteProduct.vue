<template lang="">
  <div class="favourite__item item-favourite">
    <div class="item-favourite__img">
      <!-- <img :src="productImg.imgUrl" alt="" /> -->
      <img :src="favouriteItem.products.imgUrl" alt="Изображение товара" />
    </div>
    <div class="item-favourite__text">
      <div class="item-favourite__title">
        {{ favouriteItem.products.name }}
      </div>
      <div class="item-favourite__price">
        {{ favouriteItem.products.price }} р.
      </div>
    </div>
    <div class="item-favourite__btns">
      <div class="item-favourite__btns-left">
        <button class="item-favourite__btn-compare">Сравнить</button>

        <button
          class="item-favourite__btn-delete"
          @click="handleRemoveFromFavorites(favouriteItem.id)"
        >
          Удалить
        </button>
      </div>
      <button
        v-if="!isCart"
        class="item-favourite__btn-cart"
        @click="btnAddToCart(favouriteItem.products.id)"
      >
        В корзину
      </button>
      <button
        v-else
        class="item-favourite__btn-cart item-favourite__btn-cart--in-cart"
        @click="btnRemoveFromCart()"
      >
        В корзине
      </button>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from 'vue'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useProductStore } from '@/store/ProductStore'
import { useFavouriteStore } from '@/store/FavouriteStore'
import { useCartStore } from '@/store/CartStore'

export default {
  // data() {
  //   return {}
  // },
  props: {
    id: {
      type: String,
      default: '',
    },
    favouriteItem: {},
  },
  setup(props) {
    const productStore = useProductStore()
    const cartStore = useCartStore()
    const favouriteStore = useFavouriteStore()

    function handleRemoveFromFavorites(id) {
      favouriteStore.removeFromFavorites(id)
    }

    function btnAddToCart(productId) {
      console.log(productId)
      cartStore.addToCart(productId)
    }

    function btnRemoveFromCart(productId) {
      console.log('Товар в корзине')
    }

    const isCart = computed(() => {
      // console.log(favouriteStore.favouriteItems.products.id)
      return (
        cartStore.cartItems.find(
          cartItem => cartItem.productId === props.favouriteItem.products.id
        ) !== undefined
      )
    })

    onMounted(() => {
      favouriteStore.getFavourite(props.id)
      cartStore.getCart(props.id)
      // productStore.getProduct(props.id)
    })
    return {
      favouriteStore,
      cartStore,
      handleRemoveFromFavorites,
      btnAddToCart,
      btnRemoveFromCart,
      isCart,
      // productStore,
      //productImgStore,
    }
  },
}
</script>

<style lang="scss">
.favourite {
  // .favourite__item
  &__item {
    display: grid;
    grid-template-columns: 300px 1fr 0.1fr;
    grid-template-rows: repeat(2, 1fr);
    font-size: 24px;
    padding: 40px 0;
    border: 1px solid $gray;
    border-left: none;
    border-right: none;
  }
}
.item-favourite {
  // .item-favourite__img
  &__img {
    position: relative;
    max-width: 210px;
    width: auto;
    height: 230px;
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
  }
  &__img img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  // .item-favourite__text
  &__text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
    grid-row: 1;
  }
  // .item-favourite__title
  &__title {
  }
  // .item-favourite__price
  &__price {
  }
  // .item-favourite__btns
  &__btns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-column: 2;
    grid-row: 2;
  }
  // .item-favourite__btns-left
  &__btns-left {
  }
  // .item-favourite__btn-compare
  &__btn-compare {
    color: #fff;
    background: $red;
    padding: 10px;
    border-radius: 10px;
    margin-right: 50px;
  }
  // .item-favourite__btn-delete
  &__btn-delete {
    color: #fff;
    background: $red;
    padding: 10px;
    border-radius: 10px;
  }
  // .item-favourite__btn-cart
  &__btn-cart {
    color: #fff;
    background: $blue-second;
    padding: 10px;
    border-radius: 10px;
    transition: 0.2s ease-in-out;

    &:hover {
      background: $red;
    }

    &--in-cart {
      background: $red;

      // &:hover {
      //   background: $blue-second;
      // }
    }
  }
}
</style>
