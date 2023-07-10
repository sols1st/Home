<script setup>
import { usePostStore } from '@/stores/post'
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const store = usePostStore()
let type, content
const submit = () => {
  const file = document.getElementById("inputPic").files[0]
  let reader = new FileReader();
  reader.onload = function (e) {
    let data = e.target.result;
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    store.postList.push({ type: type, content: content, time: year + "年" + month + "月" + day + "日", pic: data });
    proxy.$emit('update')
    proxy.$emit('cancel')
  }
  reader.readAsDataURL(file);
}
const cancel = () => [
  proxy.$emit('cancel')
]
</script>
<template>
  <div class="main">
    <table>
      <tr>
        <td>事件类型</td>
        <td><input v-model="type" /></td>
      </tr>
      <tr>
        <td>
          事件描述
        </td>
        <td>
          <textarea v-model="content" name="" id="" cols="30" rows="10"></textarea>
        </td>
      </tr>
      <tr>
        <td>上传图片</td>
        <td>
          <input type="file" id="inputPic" ref="fileInput" @change="uploadFile" />
        </td>
      </tr>
    </table>
    <button id="submit" @click="submit">提交</button>
    <button id="cancel" @click="cancel">取消</button>
  </div>
</template>
<style scoped>
.main {
  width: 600px;
  height: 500px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(100px);
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 18;
  border-radius: 50px;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  color: #134991;
}

tr {
  height: 70px;
}

table {
  width: 500px;
  margin: 20px auto;
  font-size: 21px;
}


input {
  width: 250px;
}

textarea {
  width: 250px;
  height: 200px;
}

button {
  width: 150px;
  height: 40px;
  position: absolute;
  bottom: 50px;
  border-radius: 30px;
  background-color: white;
  border: none;
  box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.2);
  color: #134991;
  font-size: 17px;
}

#submit {
  left: calc(25% - 75px);

}

#cancel {
  left: calc(75% - 75px);
}

button:hover {
  cursor: pointer;
}
</style>