<template>
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false" background-color="#FFF" text-color="#164685"
        active-text-color="" @select="handleSelect" router=true>
        <el-menu-item id="logo">
            <img src="@/assets/images/CA-logo.svg" alt="Example SVG" width="30" height="30">
        </el-menu-item>
        <el-menu-item v-for="item in indexes" :key="item" :index="item.index">{{ item.title }}</el-menu-item>
    </el-menu>
</template>
  
<script setup>
import { ref } from 'vue'
const indexes = [
    { index: "/home", title: "Home" },
    { index: "/bbs", title: "Forums" },
    { index: "/wiki", title: "Wiki" },
    { index: "/package", title: "Packages" },
    { index: "/radio", title: "Radio" }
]


const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
</script>
  
<style scoped>
a {
    text-decoration: none;
}

.el-menu {
    z-index: 99999;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    align-items: center;
    justify-content: center;
    height: 48px;
    backdrop-filter: blur(1rem)
}

.el-menu-item {
    width: 100px;
}

#logo {
    width: 85px;
}
</style>
  