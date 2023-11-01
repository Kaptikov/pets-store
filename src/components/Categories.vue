<template>
  <div class="category">
    <ul class="category__list">
      <li
        v-for="category in categoryStore.categories"
        :key="category.id"
        class="category__item"
      >
        <button @click="togglesubcategory(category)" class="category__btn">
          {{ category.name }}
        </button>
        <transition name="fade">
          <ul v-if="category.showsubcategory" class="subcategory__list">
            <li
              v-for="subcategory in getSubcategoryForCategory(category.id)"
              :key="subcategory.id"
              class="subcategory__item"
            >
              <button
                @click="filterProducts(subcategory.id)"
                class="subcategory__btn"
              >
                {{ subcategory.name }}
              </button>
            </li>
          </ul>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, onUpdated, defineComponent } from 'vue'
import { useCategoryStore } from '../store/CategoryStore'
import { useSubcategoryStore } from '../store/SubcategoryStore'
import { useProductStore } from '../store/ProductStore'

export default defineComponent({
  // name: 'MyComponent',
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    // Get access to the CategoryStore
    const categoryStore = useCategoryStore()
    const productStore = useProductStore()
    // Get access to the SubcategoryStore
    const subcategoryStore = useSubcategoryStore()
    onMounted(() => {
      // Fetch data from the stores
      categoryStore.getCategory(props.id)
      subcategoryStore.getSubcategory(props.id)
    })
    // onUpdated(() => {
    //   productStore.getProduct(props.id)
    // })
    const filterProducts = subcategoryId => {
      const subcategory = subcategoryStore.subcategories.find(
        subcategory => subcategory.id === subcategoryId
      )
      if (subcategory) {
        productStore.filterProductsBySubcategory(subcategory.id)
      }
    }
    const getSubcategoryForCategory = categoryId => {
      return subcategoryStore.subcategories.filter(
        subcategory => subcategory.categoryId === categoryId
      )
    }
    // Return the reactive data from the stores
    return {
      categoryStore,
      getSubcategoryForCategory,
      filterProducts,
    }
  },
  methods: {
    togglesubcategory(category) {
      category.showsubcategory = !category.showsubcategory
    },
  },
})
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translate(-10px, 0);
  opacity: 0;
}

.category {
  // .category__list
  &__list {
    // transition: 0.2s;
  }
  // .category__item
  &__item {
    transition: 0.2s ease-in-out;
    border-bottom: 1px solid $gray;
    // background: red;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  // .category__btn
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 15px 0;
    width: 100%;
    transition: 0.1s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
.subcategory {
  // .subcategory__list
  &__list {
  }
  // .subcategory__item
  &__item {
    // transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      // transition: 0.2s ease-in-out;
    }
  }
  // .subcategory__btn
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 15px;
    width: 100%;
    transition: background 0.1s ease-in-out;
  }
}
</style>

<!-- <script>
export default {
  data() {
    return {
      isExpanded: false,
    }
  },
  methods: {
    togglesubcategory() {
      this.isExpanded = !this.isExpanded
    },
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
}
</script> -->

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}

.fade-enter,
.fade-leave-to {
  transform: translate(-10px, 0);
  opacity: 0;
}

.category {
  // .category__list
  &__list {
    // transition: 0.2s;
  }
  // .category__item
  &__item {
    transition: 0.2s ease-in-out;
    border-bottom: 1px solid $gray;
    // background: red;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
  // .category__btn
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 15px 0;
    width: 100%;
    transition: 0.1s ease-in-out;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
}
.subcategory {
  // .subcategory__list
  &__list {
  }
  // .subcategory__item
  &__item {
    // transition: background 0.2s ease-in-out;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
      // transition: 0.2s ease-in-out;
    }
  }
  // .subcategory__btn
  &__btn {
    display: flex;
    flex-direction: row;
    align-items: start;
    padding: 15px;
    width: 100%;
    transition: background 0.1s ease-in-out;
  }
}
</style>
