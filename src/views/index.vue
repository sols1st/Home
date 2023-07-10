<template>
    <el-affix>
        <MenuBar></MenuBar>
    </el-affix>
    <router-view class="view"></router-view>
</template>
<script setup>
import MenuBar from '@/components/MenuBar.vue';
</script>
<style>
.view{
    margin-top: 48px;
}
</style>