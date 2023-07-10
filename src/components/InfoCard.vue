<script setup>
const props = defineProps(["type", "content", "time", "pic"])
const pic = props.pic.indexOf("post") != -1 ? new URL("../assets/images/" + props.pic, import.meta.url).href : props.pic
</script>
<template>
    <div id="card-main">
        <div class="picture" :style="{ 'background-image': 'url(' + pic + ')' }"></div>
        <div id="info">
            <div id="type">
                {{ props.type }}
            </div>
            <div id="content">
                {{ props.content }}
            </div>
            <div id="time">
                {{ props.time }}
            </div>
        </div>
    </div>
</template>
<style>
#time {
    width: 85%;
    font-size: 21px;
    color: gray;
    font-weight: 600;
    align-items: start;
    text-align: left;
}

#type {
    font-size: 13px;
    color: gray;
    font-weight: 700;
    width: 85%;
    text-align: left;
    height: 25px;
}

#content {
    width: 85%;
    font-size: 31px;
    font-weight: 600;
    height: 250px;
    text-align: left;
}

#info {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
}

#card-main {
    width: 65%;
    height: 350px;
    border-radius: 12px;
    background-color: white;
    margin-bottom: 30px;
    display: flex;
    cursor: pointer;
}


.picture {
    left: 0;
    display: inline-block;
    height: 350px;
    width: 60%;
    border-radius: 12px 0 0 12px;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center center;
    background-origin: border-box;
    background-image: url(imgUrl);
    transition-duration: 500ms;
}

.picture:hover {
    background-size: 110%;
}
</style>