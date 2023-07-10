<script setup>
import { ref, getCurrentInstance } from 'vue'
import AddMusic from '@/components/AddMusic.vue'
import { useMusicStore } from '@/stores/music'
const { proxy } = getCurrentInstance()
const store = useMusicStore()
var musicList = ref({ ...store.musicList })

var isShowAdd = ref(false)
const editUIToggle = () => isShowAdd.value = !isShowAdd.value
const editMusic = () => {
    store.editMusicDetail.uploader = "Solsist"
    store.editMusic()
    editUIToggle()
    update()
}
const add = () => {
    store.editMusicDetail = { isNew: true }
    editUIToggle()
}
const edit = (id) => {
    store.musicList.forEach((item) => {
        if (item.id == id) {
            store.editMusicDetail = { ...item, isNew: false }
        }
    })
    editUIToggle()
}
const del = (id) => {
    store.delMusic(id)
    update()
}


const find = () => {
    const keyword = proxy.$refs.search.value
    musicList.value = []
    store.musicList.forEach((item) => {
        if (item.title.indexOf(keyword) != -1 || item.singer.indexOf(keyword) != -1 || item.uploader.indexOf(keyword) != -1) {
            musicList.value.push(item)
        }
    })
}

const update = () =>{
    musicList.value = {...store.musicList} 
}

</script>
<template>
    <div id="container">
        <AddMusic @addMusic="editMusic" @cancel="editUIToggle" v-show="isShowAdd"></AddMusic>
        <div id="bar">
            <div id="search">
                <svg aria-hidden="true" height="16" width="16">
                    <path
                        d="M11.87 10.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 1 1-1.04 1.04l-3.863-3.864a.744.744 0 0 1-.047-.051 6.667 6.667 0 1 1 1.035-1.035zM6.667 12a5.333 5.333 0 1 0 0-10.667 5.333 5.333 0 0 0 0 10.667z">
                    </path>
                </svg>
                <input @input="find()" ref="search" type="text" placeholder="输入标题/歌手/分享者进行搜索" />
            </div>
            <button @click="add">
                <svg width="16px" height="16px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                    data-v-ea893728="">
                    <path fill="currentColor"
                        d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z">
                    </path>
                </svg>
                <a>上传歌曲</a>
            </button>
        </div>
        <div id="musicList">
            <table>
                <tr>
                    <th width="10px">序号</th>
                    <th width="200px">标题</th>
                    <th width="50px">歌手</th>
                    <th width="50px">分享者</th>
                    <th width="50px">操作</th>
                </tr>
                <tr v-for="item in musicList" :key="item" id="musicItem">
                    <td>{{ item.id }}</td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.singer }}</td>
                    <td>{{ item.uploader }}</td>
                    <td id="operation">
                        <a>播放 </a>
                        <a @click="edit(item.id)">编辑 </a>
                        <a @click="del(item.id)">删除</a>
                    </td>
                </tr>
            </table>
        </div>
        <audio controls="controls">
            <source src="../assets/music/BlindingLights.mp3" type="audio/mp3">
        </audio>
    </div>
</template>

<style scoped>
#musicList {
    width: 80%;
    margin: auto;
}

#musicList a:hover {
    cursor: pointer;
}

#container{
    padding-top: 20px;
}

#bar {
    display: flex;
    justify-content: space-between;
    width: 78%;
    margin: 10px auto;
}

table {
    margin: auto;
    width: 100%;
    border-collapse: collapse;
    color: #134991;
    line-height: 50px;
}

tr {
    height: 50px;
    border: none;
}

#musicItem:hover {
    box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
    background-color: rgb(247, 253, 255);
    transform: scale(1.047, 1.047);

}

audio {
    position: fixed;
    bottom: 20px;
    width: 80%;
    left: 10%;
    backdrop-filter: blur(1rem);
    border-radius: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}


#search input {
    border: none;
    width: 100%;
    outline: 0;
    padding-left: 5px;
    font-size: 15px;
}


#bar button {
    display: flex;
    align-items: center;
    width: 86px;
    border: solid #134991;
    border-radius: 5px;
    background-color: white;
    color: #134991;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

#bar button:hover {
    cursor: pointer;
}

#search {
    height: 20px;
    border: #134991 solid;
    padding: 1px 5px;
    display: flex;
    width: calc(100% - 200px);
    align-items: center;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
</style>