import { defineStore } from 'pinia'
import axios from 'axios'

export const useFavouriteStore = defineStore('favouriteStore', {
  state: () => ({
    favouriteItems: [],
    products: [],
    imgUrls: [],
  }),

  actions: {
    async getFavourite(id) {
      axios
        .get(`/api/FavouriteItem/${id}`)
        .then(response => {
          this.favouriteItems = response.data
          console.log(this.favouriteItems)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductInFavourite(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.products = response.data.filter(product =>
            this.favouriteItems.some(item => item.productId === product.id)
          )
          // console.log('products', this.products)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async removeFromFavorites(id) {
      try {
        const response = await axios.delete(`/api/FavouriteItem/${id}/`)
        this.favouriteItems = this.favouriteItems.filter(
          favouriteItem => favouriteItem.id !== id
        )
        // Handle the response from the API
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async getProductImg(id) {
      axios
        .get(`/api/ProductImg/${id}`)
        .then(response => {
          const productImg = response.data.find(img => img.productId === id)
          if (productImg) {
            this.imgUrls = productImg.url
          } else {
            this.imgUrls = null
          }
          console.log('img', this.imgUrls)
        })
        .catch(error => {
          console.log(error)
        })
    },

    async getProductByFavourite(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.products = response.data.filter(product => product.id !== null)
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
