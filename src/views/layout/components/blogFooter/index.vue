<template>
  <div class="html_footer">
    <div class="webox">
      <p>Copyright © iszhangheng@foxmail.com All Rights Reserved.<br/>
        备案号：<a class="webox_a"
          href="http://www.beian.miit.gov.cn/">豫ICP备19019782号
        </a>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "blogFooter"
};
</script>
<style scoped>
.html_footer {
  height: 60px;
  width: 100%;
  clear: both;
  background-color: #373d41;
  border-top: #00c1de 10px solid;
  padding-top: 30px;
  text-align: center;
}
.webox {
  margin: 0 auto;
}
.webox_a {
  color: #73777a;
}
</style>
