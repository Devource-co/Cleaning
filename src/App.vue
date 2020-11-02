<template>
  <div id="root">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import Layout from "./layouts";

export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
</style>
