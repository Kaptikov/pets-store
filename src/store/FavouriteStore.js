import { defineStore } from 'pinia'
import axios from 'axios'
import { Value } from 'sass'

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

    async getProductById(id) {
      try {
        const response = await axios.get(`/api/Product/${id}`)
        return response.data
      } catch (error) {
        console.log(error)
        return null
      }
    },

    // async getProductInFavourite(id) {
    //   axios
    //     .get(`/api/Product/${id}`)
    //     .then(response => {
    //       this.products = response.data
    //       console.log(this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    // async getProductInFavourite(id) {
    //   axios
    //     .get(`/api/Product/${id}`)
    //     .then(response => {
    //       this.products = response.data.filter(product =>
    //         this.favouriteItems.some(item => item.productId === product.id)
    //       )
    //       // console.log('products', this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    checkProductInFavorite(productId) {
      return this.favouriteItems.some(
        favouriteItem => favouriteItem.productId === productId
      )
      // try {
      //   const response = await axios.get(`/api/FavouriteItem/${id}`)
      //   const favorites = response.data
      //   const product = await this.getProductById(id) // Замените это на реальный метод получения товара по id

      //   if (favorites.some(favorite => favorite.productId === product.id)) {
      //     console.log('true')
      //     return true
      //   } else {
      //     console.log('false')
      //     return false
      //   }
      // } catch (error) {
      //   console.log(error)
      //   return false
      // }
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

    // async getProductByFavourite(id) {
    //   axios
    //     .get(`/api/Product/${id}`)
    //     .then(response => {
    //       this.products = response.data.filter(product => product.id !== null)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },
  },
})
