import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('categoriesStore', {
  state: () => ({
    categories: [],
  }),

  actions: {
    async getCategory(id) {
      axios
        .get(`/api/Category/${id}`)
        .then(response => {
          this.categories = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },
  },
})

// export const useSubcategoriesStore = defineStore('subcategoriesStore', {
//   state: () => ({
//     subcategories: [
//       {
//         id: 1,
//         name: 'Корм для кошек',
//       },
//       {
//         id: 2,
//         name: 'Игрушки для собак',
//       },
//     ],
//   }),
// })
