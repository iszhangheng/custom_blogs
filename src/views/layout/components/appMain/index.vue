<template>
  <div class="html_main">
    <div class="html_template">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "appMain"
};
</script>
<style scoped>
.html_main {
  width: 80%;
  height: 100%;
  float: right;
  padding: 0px;
  margin: 0px;
}
.html_template {
  background-color: white;
  overflow: auto;
  margin: 20px;
}
</style>
