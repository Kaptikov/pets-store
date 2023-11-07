<template lang="">
  <div class="catalog__card card-catalog">
    <div class="cart__item item-cart">
      <!-- <img class="item-cart__img" src="../assets/img/product.jpg" alt="" /> -->
      <img
        :src="cartItem.products.imgUrl"
        alt="Изображение товара"
        class="card-catalog__img"
      />
      <!-- <router-link
        :to="{ name: 'productPage', params: { id: product.id } }"
        class="item-cart__title"
      >
        {{ product.name }}
      </router-link> -->
      <div class="item-cart__title">{{ cartItem.products.name }}</div>
      <div class="item-cart__btns__quantity-body">
        <button
          class="item-cart__btns__quantity-btn--minus"
          @click="decrementQuantity(cartItem.id, cartItem.quantity)"
        >
          -
        </button>
        <input
          class="item-cart__btns__quantity"
          type="text"
          v-model="cartItem.quantity"
          @input="updateQuantity(cartItem.id, cartItem.quantity)"
        />
        <button
          class="item-cart__btns__quantity-btn--plus"
          @click="incrementQuantity(cartItem.id, cartItem.quantity)"
        >
          +
        </button>
      </div>
      <div class="item-cart__price">{{ cartItem.products.price }} р.</div>
      <button
        class="item-cart__btn--delete"
        @click="deleteFromCart(cartItem.id)"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useProductImgStore } from '@/store/ProductImgStore'
import { useProductStore } from '@/store/ProductStore'
import { useCartStore } from '@/store/CartStore'

export default {
  data() {
    return {
      quantity: 1,
    }
  },
  props: {
    id: {
      type: String,
      // required: true,
      default: '',
    },
    cartItem: {},
  },

  methods: {
    // incrementQuantity() {
    //   this.quantity++
    //   this.updateQuantity()
    // },
    // decrementQuantity() {
    //   if (this.quantity > 1) {
    //     this.quantity--
    //     this.updateQuantity()
    //   }
    // },
    // updateQuantity(id) {
    //   const cartStore = useCartStore()
    //   cartStore.updateCartItemQuantity(id, cartStore,cartItem.quantity)
    // },
  },

  setup(props) {
    // const quantity = ref(1)
    const productImgStore = useProductImgStore()
    const productStore = useProductStore()
    const cartStore = useCartStore()

    function deleteFromCart(id) {
      cartStore.removeFromCart(id)
    }

    function updateQuantity(id, quantity) {
      cartStore.updateCartItemQuantity(id, quantity)
      console.log(quantity)
    }

    function incrementQuantity(id, quantity) {
      quantity++
      cartStore.updateCartItemQuantity(id, quantity)
    }

    function decrementQuantity(id, quantity) {
      if (quantity > 1) {
        quantity--
        cartStore.updateCartItemQuantity(id, quantity)
      }
    }

    onMounted(() => {
      // productStore.getProduct(props.id)
      cartStore.getCart(props.id)
      // cartStore.getProductByCart(props.id)
    })
    // const productStore = useProductStore()
    return {
      cartStore,
      deleteFromCart,
      updateQuantity,
      incrementQuantity,
      decrementQuantity,
      // productStore,
      //productImgStore,
    }
  },
}
</script>

<style lang="scss" scoped>
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
    font-size: 14px;
    font-weight: 500;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    max-width: 163px;
    width: 100%;
    height: 45px;
    border-radius: 10px;
    border: 1px solid #eaeaea;
    font-size: 21px;
    font-weight: 400;
    line-height: 114.286%;
  }
}

.item-cart__btn--delete {
  position: absolute;
  top: 0;
  right: 15px;
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
