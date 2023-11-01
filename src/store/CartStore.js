import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
    products: [],
  }),

  actions: {
    async getCart(id) {
      axios
        .get(`/api/CartItem/${id}`)
        .then(response => {
          this.cartItems = response.data
          console.log(this.cartItems)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductByCart(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.products = response.data.filter(product =>
            this.cartItems.some(item => item.productId === product.id)
          )
          // console.log('products', this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // async getProductByCart(id) {
    //   axios
    //     .get(`/api/Product/${id}`)
    //     .then(response => {
    //       this.products = response.data.filter(product => product.id !== null)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    filteredCartItems() {
      return this.cartItems.filter(cartItem => cartItem.productId !== null)
      // .map(cartItem => {
      //   return this.products.find(
      //     product => product.id === cartItem.productId
      //   )
      // })
    },
  },
})
