<template>
  <div>
    <mavon-editor v-model="content"
      ref="md"
      @change="change"
      style="min-height: 600px" />
    <button @click="submit">提交</button>
  </div>
</template>
<script>
// 导入组件 及 组件样式
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "MarkdownEditor",
  // 注册
  components: {
    mavonEditor
  },
  data() {
    return {
      content: "", // 输入的markdown
      html: "" // 及时转的html
    };
  },
  methods: {
    // 所有操作都会被解析重新渲染
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交
    submit() {
      console.log(this.content);
      console.log(this.html);
    }
  },
  mounted() {}
};
</script>
<style scoped>
</style>