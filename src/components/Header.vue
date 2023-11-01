<template>
  <header class="header">
    <div class="header__container _container">
      <router-link to="/" class="header__logo">
        <img src="../assets/img/logo.svg" alt="" />
      </router-link>
      <nav class="header__menu menu">
        <ul class="menu__list">
          <li class="menu__item">
            <a href="#">Услуги</a>
          </li>
          <li class="menu__item">
            <router-link to="/catalog/">Каталог</router-link>
          </li>
          <li class="menu__item">
            <a href="#">Личный кабинет</a>
          </li>
          <li class="menu__item">
            <a href="#">Контакты</a>
          </li>
          <li class="menu__item">
            <a href="#">О нас</a>
          </li>
        </ul>
      </nav>
      <div class="header__menu-icons menu-icons">
        <button class="menu-icons__btn">
          <img src="../assets/img/search.svg" alt="search" />
        </button>
        <router-link to="/favourite/" class="menu-icons__btn"
          ><img src="../assets/img/favourite.svg" alt="favourite"
        /></router-link>
        <!-- <button class="menu-icons__btn">
          <img src="../assets/img/favourite.svg" alt="favourite" />
        </button> -->
        <!-- <button class="menu-icons__btn" @click="showDialog">
          <img src="../assets/img/cart.svg" alt="cart" />
        </button> -->
        <Cart />
      </div>
      <a href="#" class="header__geolocation geolocation">
        <img
          src="../assets/img/marker.svg"
          class="geolocation__img"
          alt="marker"
        />
        <div class="geolocation__city">City</div>
      </a>
    </div>
  </header>
</template>

<script>
import Cart from '../components/Cart.vue'
export default {
  components: {
    Cart,
  },
  data() {
    return {}
  },
  methods: {
    showDialog() {
      this.close()
    },
  },
}
</script>

<style lang="scss">
.header {
  // .header__container
  &__container {
    margin-top: 44px;
    // margin: 44px 0 0 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }
  &__logo {
  }
  // .header__menu
  &__menu {
  }
  // .header__menu-icons
  &__menu-icons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 172px;
    width: 100%;
  }
  // .header__geolocation
  &__geolocation {
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      .geolocation__img {
        // transform: scale(0.9);
      }
      // color: $main-color;
      text-decoration: underline;
    }
  }
}
.menu {
  // .menu__list
  &__list {
    display: flex;
    flex-direction: row;
  }
  // .menu__item
  &__item {
    color: $main-color;
    &:not(:last-child) {
      margin-right: 65px;
    }
  }
  &__item a {
    transition: 0.2s ease-in-out;
  }
}
.menu-icons {
  // .menu-icons__btn
  &__btn {
    transition: 0.2s ease-in-out;
    &:hover {
      transform: scale(0.8);
    }
  }
}
.geolocation {
  &__img {
    margin-right: 17px;
  }

  &__city {
    color: $red;
  }
}
</style>
