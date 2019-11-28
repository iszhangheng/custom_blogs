<!--
 * @Author: iszhangheng
 * @Date: 2019-09-27 11:53:18
 * @LastEditors: iszhangheng
 * @LastEditTime: 2019-09-27 15:23:23
 * @Description: file content
 -->
<template>
  <div>
    <div id="editorMenu"></div>
    <div id="editor"
      class="editor">
    </div>
  </div>
</template>

<script>
import E from "wangeditor";

export default {
  name: "editor",
  data() {
    return {
      editorContent: ""
    };
  },
  methods: {
    getContent: function() {
      alert(this.editorContent);
    }
  },
  mounted() {
    var editor = new E("#editorMenu", "#editor");
    //菜单dom在前
    // let editor = new WangEditor("#editorMenu", "#editor");
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    // editor.customConfig.zIndex = 10000;
    editor.create();
  }
};
</script>

<style scoped>
#editor {
  height: 600px;
  width: auto;
  border: 1px solid #ccc;
  max-height: 1000px;
}
.w-e-toolbar {
  background-color: #f1f1f1;
  border: 1px solid #ccc;
}
</style>
