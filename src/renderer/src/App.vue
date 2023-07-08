<script setup lang="ts">
// import Versions from './components/Versions.vue'
import Card from './components/Card.vue'
// @ts-ignore fxxk you micro$oft!
import { $lang, $l } from './i18n/load'

// @ts-ignore msnmsmshsa
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiTranslate, mdiMenu } from '@mdi/js'
// @ts-ignore fxxk you micro$oft!
import { $route } from './router/route'

// import index from './views/Index.vue'

document.title = 'chiblog Editor'

// console.log($route.component())
</script>

<template>
  <!-- <Versions></Versions> -->
  <header>
    <Card>
      <h2 id="langs">
        <svg-icon type="mdi" :path="mdiTranslate" />
        &nbsp;
        <a :class="{ activated: $l().indexOf('zh') !== -1 }" @click="$lang('zh')">简体中文</a>
        &nbsp;
        <a :class="{ activated: $l().indexOf('en') !== -1 }" @click="$lang('en')">English</a>
      </h2>
    </Card>
    <Card>
      <h2 id="menu">
        <svg-icon type="mdi" :path="mdiMenu" />
        <!-- <span id="nav"> -->
        <a
          :class="{ activated: $route.current() === 'index' || $route.current() === '' }"
          @click="$route.push('index')"
          >首页</a
        >
        <a :class="{ activated: $route.current() === 'article' }" @click="$route.push('article')"
          >文章</a
        >
        <a :class="{ activated: $route.current() === 'pages' }" @click="$route.push('pages')"
          >页面</a
        >
        <a :class="{ activated: $route.current() === 'setting' }" @click="$route.push('setting')"
          >设置</a
        >
        <a :class="{ activated: $route.current() === 'output' }" @click="$route.push('output')"
          >导出</a
        >
        <a :class="{ activated: $route.current() === 'about' }" @click="$route.push('about')"
          >关于</a
        >
        <!-- </span> -->
      </h2>
    </Card>
  </header>
  <component :is="$route.component()"></component>
</template>

<style lang="scss">
@import './assets/styles/styles.scss';
.activated {
  color: cyan;
}
#langs a {
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
#langs a:hover {
  color: blue;
}
#menu a {
  cursor: pointer;
  transition: color 0.3s ease-in-out;
}
#menu a:hover {
  color: blue;
}
#menu {
  display: flex;
  justify-content: space-between;
}
#nav {
  display: flex;
  justify-content: space-around;
}
</style>
