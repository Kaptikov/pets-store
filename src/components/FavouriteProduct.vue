<template lang="">
  <div class="favourite__item item-favourite">
    <div
      class="item-favourite__img"
      v-for="productImg of favouriteStore.imgUrls"
      :key="productImg.id"
      :productImg="productImg"
    >
      <img :src="productImg.imgUrl" alt="" />
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
      <button class="item-favourite__btn-cart">В корзину</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useProductStore } from '@/store/ProductStore'
import { useFavouriteStore } from '@/store/FavouriteStore'

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
    const productImgStore = useProductImgStore()
    const productStore = useProductStore()
    const favouriteStore = useFavouriteStore()

    function handleRemoveFromFavorites(id) {
      favouriteStore.removeFromFavorites(id)
    }

    onMounted(() => {
      // productStore.getProduct(props.id)
      // cartStore.getCart(props.id)
      // favouriteStore.getProductInFavourite(props.id)
      favouriteStore.getFavourite(props.id)
      // favouriteStore.getProductImg(props.id)
    })
    return {
      favouriteStore,
      handleRemoveFromFavorites,
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
  }
}
</style>
