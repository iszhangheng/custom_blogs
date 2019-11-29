<template>
  <div class="layout">
    <div class="left">
      <blog-sidebar></blog-sidebar>
    </div>
    <div class="right">
      <blog-main></blog-main>
    </div>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from "./components/blogHeader";
import blogMain from "./components/blogMain";
import blogSidebar from "./components/blogSidebar";
import blogFooter from "./components/blogFooter";
export default {
  name: "layout",
  components: {
    blogHeader,
    blogMain,
    blogSidebar,
    blogFooter
  }
};
</script>
<style scoped>
.layout {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
.left {
  width: 350px;
  height: 100%;
  float: left;
  margin: 0px;
}
.right {
  height: 100%;
  overflow: auto;
  background-color: rgb(240, 242, 245);
  overflow-x: hidden;
  overflow-y: scroll;
}
.right::-webkit-scrollbar {
  display: none;
}
</style>
