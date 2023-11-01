<template>
  <Header />
  <main class="page">
    <section class="catalog">
      <div class="catalog__container _container">
        <div class="catalog__filters filters-catalog">
          <h3 class="filters-catalog__title">Каталог</h3>
          <h4 class="filters-catalog__subtitle">Категории</h4>
          <ul class="filters-catalog__categories categories">
            <!-- <Categories
              v-for="category of categoriesStore.categories"
              :key="category.id"
              :category="category"
            /> -->
            <Categories />
          </ul>
        </div>
        <div class="catalog__wrapper">
          <div
            class="catalog__products"
            v-if="productStore.products.length > 0"
          >
            <Product
              v-for="product of productStore.products"
              :key="product.id"
              :product="product"
            />
          </div>
          <div class="catalog__container-loader _container" v-else>
            <h3>Error: Data Not Downloaded</h3>
          </div>
          <div class="catalog__pagination pagination-catalog">
            <a
              href="#"
              class="pagination-catalog__item pagination-catalog__item--prev"
              >Первая</a
            >
            <a
              href="#"
              class="pagination-catalog__item pagination-catalog__item--active"
              >1</a
            >
            <a href="#" class="pagination-catalog__item">2</a>
            <a href="#" class="pagination-catalog__item">3</a>
            <a href="#" class="pagination-catalog__item">4</a>
            <a href="#" class="pagination-catalog__item">5</a>
            <a href="#" class="pagination-catalog__item">6</a>
            <a
              href="#"
              class="pagination-catalog__item pagination-catalog__item--next"
              >Последняя</a
            >
          </div>
        </div>
      </div>
      <!-- <div class="catalog__container-loader _container">
        <h3>Error: Data Not Downloaded</h3>
      </div> -->
    </section>
  </main>

  <Footer />
</template>
<script>
import { onMounted, defineComponent } from 'vue'
import { useProductStore } from '../store/ProductStore'
import { useCartStore } from '@/store/CartStore'
// import { useSubcategoriesStore } from '../store/CategoryStore'

// const productStore = useProductStore()

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Product from '@/components/Product.vue'
import Categories from '@/components/Categories.vue'
export default defineComponent({
  components: {
    Header,
    Footer,
    Product,
    Categories,
  },

  props: {
    id: {
      type: String,
      default: '',
    },
  },

  computed: {
    filteredProducts() {
      if (this.productStore.selectedSubcategories.length === 0) {
        return this.productStore.products
      }
      return this.productStore.products.filter(product =>
        this.productStore.selectedSubcategories.includes(product.subcategoryId)
      )
    },
  },
  setup(props) {
    const productStore = useProductStore()
    const cartStore = useCartStore()
    //const categoriesStore = useCategoryStore()
    onMounted(() => {
      //window.initSelects()
      productStore.getProduct(props.id)
      cartStore.getProductByCart(props.id)
      // productStore.getProductFiltered(props.id)
      // setTimeout(() => {
      //   if (props.id !== null) {
      //     productStore.getProduct(props.id)
      //   }
      // }, 1000)

      //categoriesStore.getCategory(props.id)
      //categoriesStore.getSubcategory(props.id)
    })

    return {
      productStore,
      cartStore,
      //categoriesStore,
    }
  },
})
</script>

<style lang="scss" scoped>
.catalog {
  // .catalog__container
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 150px;
    margin-bottom: 163px;
  }
  &__container-loader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 150px;
    margin-bottom: 163px;
  }
  &__filters {
    display: flex;
    flex-direction: column;
    padding-right: 37px;
    max-width: 419px;
    width: 100%;
    color: $main-color;
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  // .catalog__products
  &__products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(306px, 1fr));
    grid-template-rows: 1fr;
    gap: 25px 34px;
    width: 100%;
    margin-bottom: 63px;
  }
  // .catalog__pagination
  &__pagination {
    margin: 0 auto;
  }
}
.filters-catalog {
  &__categories {
    color: #000;
    font-size: 24px;
    font-weight: 400;
    line-height: 100%;
    padding-bottom: 27px;
  }
  // .filters-catalog__title
  &__title {
    font-family: 'PT Serif', sans-serif;
    font-size: 80px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 40px;
  }
  // .filters-catalog__subtitle
  &__subtitle {
    font-size: 40px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 31px;
  }
}

.pagination-catalog {
  // .pagination-catalog__item
  &__item {
    color: #a8a8a8;
    font-size: 24px;
    font-weight: 400;
    line-height: 145.833%;
    &:not(:last-child) {
      margin-right: 17px;
    }
    &:first-child {
      margin-right: 30px;
    }
  }
  // .pagination-catalog__item--prev
  &__item--prev {
  }
  // .pagination-catalog__item--active
  &__item--active {
    color: $main-color;
    padding: 0px 7px;
    border: 2px solid $red;
    border-radius: 5px;
  }
  // .pagination-catalog__item--next
  &__item--next {
    color: $main-color;
    margin-left: 13px;
  }
}
</style>
