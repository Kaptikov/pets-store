import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductImgStore = defineStore('productImgStore', {
  state: () => ({
    productImgs: [],
  }),

  actions: {
    async getProductImg(id) {
      axios
        .get(`/api/ProductImg/${id}`)
        .then(response => {
          this.productImgs = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
