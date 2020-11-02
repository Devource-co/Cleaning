<template>
  <div class="flex flex-col">
    <Navbar />
    <main class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./nav-bar";
import Footer from "./footer";

export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>

</style>
