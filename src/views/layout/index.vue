<template>
  <div class="layout">
    <app-header></app-header>
    <app-main></app-main>
    <sidebar></sidebar>
  </div>
</template>

<script>
import appHeader from "./components/AppHeader";
import appMain from "./components/AppMain";
import sidebar from "./components/sidebar";
export default {
  name: "layout",
  components: {
    appMain,
    appHeader,
    sidebar
  }
};
</script>
<style scoped>
.layout {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
