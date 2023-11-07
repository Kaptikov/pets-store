<template>
  <Header />
  <main class="page">
    <section class="favourite">
      <div class="favourite__container _container">
        <h3 class="favourite__title">Избранное</h3>

        <div class="favourite__wrapper">
          <div
            class="favourite__list"
            v-if="favouriteStore.favouriteItems.length > 0"
          >
            <FavouriteProduct
              v-for="favouriteItem of favouriteStore.favouriteItems"
              :key="favouriteItem.id"
              :favouriteItem="favouriteItem"
            />
          </div>
          <div class="favourite__container-loader" v-else>
            <h3 class="favourite__load">Здесь пока ничего нет</h3>
          </div>
        </div>
      </div>
    </section>
  </main>

  <Footer />
</template>
<script>
import { onMounted, defineComponent } from 'vue'
import { useProductStore } from '../store/ProductStore'
import { useFavouriteStore } from '@/store/FavouriteStore'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Product from '@/components/Product.vue'
import FavouriteProduct from '@/components/FavouriteProduct.vue'
export default defineComponent({
  components: {
    Header,
    Footer,
    Product,
    FavouriteProduct,
  },

  props: {
    id: {
      type: String,
      default: '',
    },
    // favourite: {},
  },

  setup(props) {
    const productStore = useProductStore()
    const favouriteStore = useFavouriteStore()
    onMounted(() => {
      // favouriteStore.getFavourite(props.id)
      favouriteStore.getFavourite(props.id)
      //favouriteStore.getProductInFavourite(props.id)
    })
    return {
      // productStore,
      favouriteStore,
      //categoriesStore,
    }
  },
})
</script>

<style lang="scss" scoped>
.favourite {
  // .favourite__container
  &__container {
  }
  // .favourite__title
  &__title {
    font-size: 48px;
    margin: 100px 0 70px 0;
  }
  // .favourite__wrapper
  &__wrapper {
  }
  // .favourite__list
  &__list {
    display: grid;
    gap: 70px;
    margin-bottom: 150px;
  }
  // .favourite__container-loader
  &__container-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 300px;
  }
  // .favourite__load
  &__load {
    font-size: 28px;
  }
}
</style>
