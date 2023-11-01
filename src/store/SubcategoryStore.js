import { defineStore } from 'pinia'
import axios from 'axios'

export const useSubcategoryStore = defineStore('subcategory', {
  state: () => ({
    subcategories: [],
  }),

  actions: {
    async getSubcategory(id) {
      axios
        .get(`/api/Subcategory/${id}`)
        .then(response => {
          this.subcategories = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})
