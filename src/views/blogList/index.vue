<template>
  <div>
    <el-card v-for="(blog,index) in blogList"
      :key="index"
      class="blog_card">
      <div slot="header"
        class="clearfix"
        style="height:10px">
        <span @click="viewBlog(blog.id)"><strong>{{blog.title}}</strong></span>
        <el-button style="float: right; padding: 3px 0"
          type="text">编辑</el-button>
      </div>
      <p style="font-size:14px">摘要：{{blog.remark}}</p>
      <p style="float:right;font-size:13px">posted @ {{blog.date}} {{blog.author}} 阅读：({{blog.readNum}}) 评论：({{blog.commentNum}})</p>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "blogList",
  data() {
    return {
      blogList: [
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        },
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        },
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        },
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        },
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        },
        {
          id: 1,
          title: "Java基础",
          remark: "Java NB",
          date: "2019-02-25",
          author: "zh",
          readNum: 50,
          commentNum: 50
        }
      ]
    };
  },
  methods: {
    viewBlog(id) {
      console.log(id);
    }
  }
};
</script>
<style scoped>
.blog_card {
  margin-left: 10px;
  padding: 10px;
}
.blog_card span:hover {
  color: red;
}
</style>