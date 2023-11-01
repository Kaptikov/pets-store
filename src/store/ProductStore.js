import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: [],
    allProducts: [],
  }),

  actions: {
    async getProduct(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.allProducts = response.data
          this.products = response.data
        })
        .catch(error => {
          console.log(error)
        })
    },

    async addToFavorites(productId) {
      try {
        const response = await axios.post('/api/FavouriteItem/', { productId })
        // Обработка ответа от API
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    async removeFromFavorites(productId) {
      try {
        const response = await axios.delete(
          `/api/FavouriteItem/${productId}/`,
          {
            data: { productId },
          }
        )
        // Обработка ответа от API
        console.log(response.data)
      } catch (error) {
        console.log(error)
      }
    },

    filterProductsBySubcategory(subcategoryId) {
      console.log('Filtering products by subcategoryId:', subcategoryId)
      if (subcategoryId === '') {
        this.products = this.allProducts
      } else {
        this.products = this.allProducts.filter(
          product => product.subcategoryId === subcategoryId
        )
        console.log('Filtered products:', this.products)
      }
    },
    // async getProduct(id, subcategoryId) {
    //   this.selectedSubcategoryId = subcategoryId
    //   try {
    //     const response = await axios.get(
    //       `/api/Product/${id}?subcategoryId=${subcategoryId}`
    //     )
    //     this.products = response.data
    //   } catch (error) {
    //     console.log(error)
    //   }
    // },

    async getProductFiltered(id) {
      axios
        .get(`/api/Product/${id}`)
        .then(response => {
          this.products = response.data.filter(product => {
            return this.selectedSubcategories.includes(product.subcategoryId)
          })
          console.log(this.selectedSubcategories)
        })
        .catch(error => {
          console.log(error)
        })
    },
    //   async getProductById(id) {
    //     try {
    //       const response = await axios.get(`/api/Product/${id}`)
    //       const product = response.data.find(product => product.id === id)
    //       this.products = product ? [product] : []
    //       console.log(this.products)
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   },
  },

  //   async getProductById(id) {
  //     try {
  //       const response = await axios.get(`/api/Product/${id}`)
  //       const product = response.data

  //       // Обновляем состояние products только если получены данные о продукте
  //       if (product) {
  //         this.products = [product]
  //       } else {
  //         this.products = []
  //       }
  //       console.log(this.products)
  //       return product
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   },
  // },

  // state: () => ({
  //   products: [
  //     {
  //       id: 1,
  //       price: 18,
  //       name: 'Влажный корм Chappi "Мясное изобилие" для собак, пауч 85 г',
  //       imgUrl: [
  //         {
  //           image: 'product.jpg',
  //         },
  //         {
  //           image: 'product.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 2,
  //       price: 17,
  //       name: 'Влажный корм Tasty для кошек, курица в желе, пауч, 85 г',
  //       imgUrl: [
  //         {
  //           image: 'product.jpg',
  //         },
  //         {
  //           image: 'product.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 3,
  //       price: 17,
  //       name: 'Влажный корм Tasty для кошек, курица в желе, пауч, 85 г',
  //       imgUrl: [
  //         {
  //           image: 'product.jpg',
  //         },
  //         {
  //           image: 'product.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 4,
  //       price: 17,
  //       name: 'Влажный корм Tasty для кошек, курица в желе, пауч, 85 г',
  //       imgUrl: [
  //         {
  //           image: 'product.jpg',
  //         },
  //         {
  //           image: 'product.jpg',
  //         },
  //       ],
  //     },
  //   ],
  // }),
})
