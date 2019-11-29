<template>
  <div class="html_sidebar">
    <el-card class="box-card">
      <div class="heard_portrait"></div>
      <p>青春渐行渐远，一去不复返</p>
      <p>用有限的时间来记录那些无限美好的事情</p>
    </el-card>
    <el-card class="box-menu">
      <div slot="header"
        class="clearfix">
        <span>文章分类</span>
      </div>
      <ul style="margin:0px;padding:0px;">
        <li v-for="(item,index) in menu"
          @click="click(item)"
          :key="index">
          <i style="margin-left:25px;margin-right:10px"
            class="el-icon-notebook-1"></i>{{item}}
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "blogSidebar",
  data() {
    return {
      menu: ["Java", "C#", "C++", "Linux"]
    };
  },
  methods: {
    click(index) {
      console.log(index);
    }
  }
};
</script>
<style scoped>
.html_sidebar {
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 20px;
  box-sizing: border-box;
}
.box-card {
  height: 250px;
  width: 300px;
  margin-left: 25px;
}
.heard_portrait {
  height: 100px;
  width: 100px;
  margin-left: 80px;
  border: 5px solid;
  background-image: url("../../../../assets/head.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: block;
  border-radius: 50%;
  -webkit-border-radius: 100px;
  -moz-border-radis: 100px;
}
.box-card p {
  margin: 10px;
  font-size: 12px;
  padding: 0 0 0 20px;
  line-height: 28px;
  color: #808283;
}
.box-menu {
  width: 300px;
  margin-left: 25px;
  margin-top: 10px;
  padding: 0;
}
.box-menu li {
  list-style: none;
  display: block;
  height: 35px;
  width: 100%;
  margin-left: 0px;
  margin-top: 2px;
  line-height: 35px;
}
.box-menu li:hover {
  background-color: #dbdddf;
}
</style>
