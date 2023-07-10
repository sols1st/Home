<script setup>
import InfoCard from '@/components/InfoCard.vue';
import { ref } from 'vue'
import { usePostStore } from '@/stores/post'
import NewCard from '../components/NewCard.vue';
import AddEvent from '../components/AddEvent.vue';
const store = usePostStore()
let postList = ref({ ...store.postList })
let isAdd = ref(false);
const update = () => {
    console.log("updated")
    postList.value = { ...store.postList }
}
const addToggle = () => {
    isAdd.value = !isAdd.value
}
</script>
<template>
    <AddEvent v-show="isAdd" @cancel="addToggle" @update="update"></AddEvent>
    <div id="container">
        <div id="intro">
            <img src="../assets/images/hayasakaCover.png" alt="">
            <div>NBTCA</div>
            <div id="fullName" style="font-size: 21px;">浙大宁波理工学院计算机协会</div>
            <div id="fullName" style="font-size: 21px;">Computer Association of NBT</div>
        </div>
        <div id="main">
            <div id="title">最新动向</div>
            <InfoCard v-for="item in postList" key="item" :type="item.type" :content="item.content" :time="item.time"
                :pic="item.pic">
            </InfoCard>
            <NewCard @click="addToggle"></NewCard>
        </div>
    </div>
</template>

<style scoped>
#title {
    font-size: 42px;
    font-weight: 600;
    margin-bottom: 50px;
}

#intro {
    margin-top: 150px;
    width: 100%;
    margin-bottom: 100px;
    height: 1vh;
    color: #134991;
    font-size: 41px;
}

#intro img {
    height: 400px;
    width: 500px;
}


#main {
    position: absolute;
    left: 0;
    width: 100%;
    margin: 0 auto;
    background-color: #f5f5f7;
    height: 2000px;
    margin-top: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
}

#help {
    margin: 4px auto;
    border: solid;
    width: 240px;
    height: 300px;
}
</style>
