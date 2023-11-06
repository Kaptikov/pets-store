<template>
  <button @click="openDialog" class="cart__button menu-icons__btn">
    <div class="cart__icon">
      <img src="../assets/img/cart.svg" alt="cart" />
      <div class="cart__counter">{{ cartStore.cartItems.length }}</div>
    </div>
  </button>
  <dialog
    ref="dialogRef"
    class="cart__dialog"
    :class="{ show: isDialogOpen, hide: !isDialogOpen }"
  >
    <div class="cart__wrapper">
      <button @click="closeDialog" class="cart__close-button">Закрыть</button>
      <h2 class="cart__title">Корзина</h2>
      <div class="cart__list">
        <CartProduct
          v-for="cartItem of cartStore.cartItems"
          :key="cartItem.id"
          :cartItem="cartItem"
        />
      </div>
      <div class="cart__info info-cart">
        <div class="info-cart__price">
          <span>Итого:</span>
          <span>{{ cartStore.finalPrice }} р.</span>
        </div>
        <button class="info-cart__btn">Оформить заказ</button>
      </div>
    </div>
  </dialog>
</template>

<script>
import { onMounted, onUpdated, defineComponent, computed } from 'vue'
import { useProductStore } from '../store/ProductStore'
import { useCartStore } from '../store/CartStore'
import CartProduct from '@/components/CartProduct.vue'

export default {
  components: {
    CartProduct,
  },
  data() {
    return {
      // quantity: 1,
      isDialogOpen: false,
    }
  },
  props: {
    id: {
      type: String,
      default: '',
    },
    // cartItem: {},
  },

  setup(props) {
    const productStore = useProductStore()
    const cartStore = useCartStore()

    const productsInCart = computed(() => {
      return cartStore.filteredCartItems()
    })

    function finalPriceCount(cartItem) {
      return cartItem.products.price * cartItem.quantity
    }

    onUpdated(() => {
      // cartStore.getCart(props.id)
    })
    onMounted(() => {
      //window.initSelects()
      productStore.getProduct(props.id)
      cartStore.getCart(props.id)
      // cartStore.getProductByCart(props.id)
    })

    return {
      productsInCart,
      productStore,
      cartStore,
      finalPriceCount,
    }
  },

  methods: {
    openDialog() {
      this.$refs.dialogRef.showModal()
      this.isDialogOpen = true
      document.body.style.overflow = 'hidden' // Запретить прокрутку страницы
    },
    handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        this.isDialogOpen = true
        this.closeDialog()
      }
    },
    async closeDialog() {
      this.isDialogOpen = false
      await new Promise(resolve => setTimeout(resolve, 500))
      this.$refs.dialogRef.close()
      document.body.style.overflow = ''
    },
  },
}
</script>

<style lang="scss">
.cart__dialog.show {
  opacity: 1;
  transform: translate(0, 0);
}

.cart__dialog.hide {
  opacity: 0;
  transform: translate(30%, 0);
}
.cart {
  position: relative;
  // .cart__button
  &__button {
    // cursor: pointer;
  }
  &__icon {
    position: relative;
  }
  &__counter {
    position: absolute;
    top: -10px;
    right: -5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 14px;
    color: #fff;
    background: $blue-first;
    border-radius: 50%;
  }
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 11;
  }
  // .cart__dialog
  &__dialog {
    // overflow: auto;
    // z-index: 12;
    left: auto;
    right: 0;
    max-height: 100%;
    max-width: 800px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, opacity 0.3s ease-in-out;

    ::backdrop {
      background-color: rgba(0, 0, 0, 0.7);
    }
  }
  // .cart__wrapper
  &__wrapper {
    display: flex;
    flex-direction: column;
  }
  // .cart__title
  &__title {
    margin-bottom: 70px;
    font-family: 'PT Serif', sans-serif;
    font-size: 36px;
    font-weight: 400;
  }
  // .cart__list
  &__list {
    display: grid;
    gap: 70px;
  }
  // .cart__item
  &__item {
    display: grid;
    grid-template-columns: 0.5fr 1fr 0.5fr 0.3fr;
    grid-template-rows: 1fr;
    gap: 10px 30px;
    align-items: center;
    // margin-bottom: 70px;
    :not(:last-child) {
      // margin-right: 30px;
    }
  }
  // .cart__close-button
  &__close-button {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 500px;
    width: 100%;
    margin-top: 50px;
    padding: 15px;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
  }
}
.item-cart {
  &__img {
    max-width: 150px;
    width: 100%;
    height: auto;
  }
  // .item-cart__price
  &__price {
    white-space: nowrap;
    font-size: 24px;
    font-weight: 400;
    line-height: 114.286%;
  }
  // .item-cart__title
  &__title {
    font-size: 21px;
    font-weight: 400;
    line-height: 114.286%;
  }
  // .item-cart__btns
  &__btns {
  }
}

.item-cart__btns {
  &__quantity-body {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(222, 222, 222);
    padding: 0 5px;
    border-radius: 5px;
  }
  &__quantity {
    width: auto;
    max-width: 40px;
    text-align: center;
    background: none;
  }
  &__quantity-btn {
  }
  &__quantity-btn--minus {
    font-size: 36px;
  }
  &__quantity-btn--plus {
    font-size: 36px;
  }
}

.info-cart {
  // .info-cart__price
  &__price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  // .info-cart__btn
  &__btn {
    padding: 15px;
    color: #fff;
    border-radius: 10px;
    background: $red;
  }
}
</style>
