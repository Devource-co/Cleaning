<template>
  <nav class="nav-bar text-xs sm:text-sm md:text-base z-50">
    <div class="order-1">
      <router-link to="/" class="cursor-pointer">
        <img class="logo" src="../assets/images/logo.png" />
      </router-link>
    </div>
    <div class="nav-links">
      <ul
        class="nav nav-flex"
        :class="{ 'nav-active': navActive }"
        ref="navItesms"
      >
        <li v-for="navItem in navItems" :key="navItem.index">
          <router-link
            :to="navItem.link"
            active-class="anchor-active"
            class="nav-link"
          >
            <span @click="toggleNav">{{ navItem.name }}</span>
          </router-link>
        </li>
        <li>
          <router-link to="/holla" class="staff-link">
            <span @click="toggleNav">For staff</span>
          </router-link>
        </li>
      </ul>
      <div
        role="button"
        :class="{ toggle: navActive }"
        @click="toggleNav"
        class="burger"
      >
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
    </div>
    <ul class="nav nav-extra">
      <router-link to="/" class="book-btn">Booking Now</router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "nav-bar",
  methods: {
    toggleNav() {
      console.log("========================")
      this.navActive = !this.navActive;
      let navLinks = this.$refs.navItesms?.querySelectorAll("li");
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `toggleNav 0.5s ${
            index / 7 + 0.3
          }s ease forwards `;
        }
        //burger anims
      });
    },
  },
  data() {
    return {
      navActive: false,
      navItems: [
        {
          index: 1,
          name: "Home",
          link: "/",
        },
        {
          index: 2,
          name: "About",
          link: "/",
        },
        {
          index: 3,
          name: "Services",
          link: "/",
        },
        {
          index: 4,
          name: "Quote",
          link: "/",
        },
        {
          index: 5,
          name: "Contact",
          link: "/",
        },
      ],
    };
  },
};
</script>

<style scoped lang="postcss">
.nav-bar {
  @apply flex justify-around pt-2 pb-5 items-center fixed w-full;
  background-color: #c4fcf2;
  min-height: 8vh;
  box-shadow: 0 1px 5px -3px #777;
}
.nav {
  @apply flex justify-evenly;
}
.logo {
  height: 50px;
}
.nav-links {
  @apply order-3;
}
.nav-extra {
  @apply order-2;
}
.staff-link {
  text-decoration: none;
  letter-spacing: 0.1em;
  @apply text-gray-700;
  display: inline-block;
  position: relative;
  white-space: nowrap;
  margin-right: 13px;
}

.staff-link:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  left: 0;
  position: absolute;
  @apply bg-gray-600;
  width: 100%;
}

.staff-link:hover {
  @apply text-gray-900;
}

.staff-link:hover:after {
  @apply bg-gray-900;
}

.book-btn {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  background: #fff;
  @apply p-2 font-medium text-blue-600 rounded;
  letter-spacing: 0.1em;
}

.book-btn:hover {
  @apply shadow-lg;
}

.nav-flex {
  position: absolute;
  right: 0;
  height: 92vh;
  margin-top: 8vh;
  background-color: #c4fcf2;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  transform: translateX(100%);
  transition: transform 0.5s ease-in, box-shadow 0.5s ease-in;
}

.nav-flex li {
  opacity: 0;
}

.burger {
  display: block;
  cursor: pointer;
  z-index: 100;
  width: 25px;
  margin: 9px;
}
.burger div {
  height: 3px;
  border-radius: 25px;
  transition: all 0.3s ease;
  @apply bg-gray-700 m-1;
}
.nav-active {
  transform: translateX(0);
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
}

.nav-links-item {
  display: inline-block;
  margin-right: 10px;
}

.line1 {
  width: 100%;
}

.line2 {
  width: 75%;
}

.line3 {
  width: 50%;
}

.toggle .line1,
.toggle .line2,
.toggle .line3 {
  width: 100%;
}

.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -5px);
}

@media screen and (min-width: 768px) {
  .nav-links {
    @apply order-2;
  }
  .nav-extra {
    @apply order-3;
  }
  .nav li {
    @apply mx-3;
  }

  .nav-link {
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    @apply text-gray-700;
    display: inline-block;
    position: relative;
  }

  .nav-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    @apply bg-gray-900;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  .nav-link:hover {
    @apply text-gray-900;
  }

  .nav-link:hover:after,
  .nav-active {
    width: 100%;
    left: 0;
  }

  .staff-link {
    text-decoration: none;
    letter-spacing: 0.1em;
    @apply text-gray-700;
    display: inline-block;
    position: relative;
    white-space: nowrap;
  }

  .staff-link:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    flex-direction: column;
    position: absolute;
    @apply bg-gray-600;
    width: 100%;
  }

  .staff-link:hover {
    @apply text-gray-900;
  }

  .staff-link:hover:after {
    @apply bg-gray-900;
  }

  .book-btn {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: #fff;
    @apply p-2 font-medium text-blue-600 rounded;
    letter-spacing: 0.1em;
  }

  .book-btn:hover {
    @apply shadow-lg;
  }
  .burger {
    display: none;
  }

  .burger div
  {
    transition: none;
  }
  .nav-flex {
    position: relative;
    right: auto;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: inherit;
    width: auto;
    transform: translateX(0);
    box-shadow: none;
    margin-top: 0;
    transition: unset;
  }

  .nav-flex li {
    opacity: 1;
  }
}
</style>
