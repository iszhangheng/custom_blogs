<template>
  <div>
    <div class="html_template">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogMain"
};
</script>
<style scoped>
.html_template {
  background-color: white;
  margin: 10px;
  padding-top: 20px;
  padding-bottom: 30px;
}
</style>
