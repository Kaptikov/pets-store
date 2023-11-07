import { defineStore } from 'pinia'
import axios from 'axios'

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cartItems: [],
    products: [],
  }),

  getters: {
    finalPrice() {
      return this.cartItems.reduce((total, item) => {
        // console.log(item.quantity)
        // console.log(item.products.price)
        return total + item.quantity * item.products.price
      }, 0)
    },
  },

  actions: {
    async getCart(id) {
      axios
        .get(`/api/CartItem/${id}`)
        .then(response => {
          this.cartItems = response.data
          // console.log(this.cartItems)
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

    async addToCart(productId) {
      axios
        .post('/api/CartItem/', {
          cartId: 1,
          quantity: 1,
          productId,
        })
        .then(response => {
          this.cartItems = response.data
          console.log('Post', this.cartItems)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async removeFromCart(id) {
      try {
        const response = await axios.delete(`/api/CartItem/${id}/`)
        this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== id)
        // Handle the response from the API
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async updateCartItemQuantity(id, quantity) {
      axios
        .put(`/api/CartItem/${id}`, { quantity })
        .then(response => {
          this.cartItems = response.data
          console.log('Put', this.cartItems)
        })
        .catch(error => {
          console.log(error)
        })
    },

    // async updateCartItemQuantity(id, quantity) {
    //   try {
    //     const response = await axios.put(`/api/CartItem/${id}`, { quantity })
    //     console.log('Количество', quantity)
    //     console.log(response.data)
    //     // Handle the response from the API
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

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
