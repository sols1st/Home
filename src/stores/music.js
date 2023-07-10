import { defineStore } from "pinia";

export const useMusicStore = defineStore("music", {
  state: () => {
    return {
      musicList: [
        {
          id: 1,
          title: "Blinding Lights",
          singer: "The Weekend",
          uploader: "Solsist",
        },
        {
          id: 2,
          title: "突然的自我",
          singer: "伍佰",
          uploader: "Solsist",
        },
        { id: 3, title: "猫", singer: "DISH//", uploader: "Solsist" },
        {
          id: 4,
          title: "vivi",
          singer: "米津玄師",
          uploader: "Solsist",
        },
        {
          id: 5,
          title: "東京フラッシュ",
          singer: "Vaundy",
          uploader: "Solsist",
        },
        {
          id: 6,
          title: "Blinding Lights",
          singer: "The Weekend",
          uploader: "Solsist",
        },
        {
          id: 7,
          title: "Blinding Lights",
          singer: "The Weekend",
          uploader: "Solsist",
        },
        {
          id: 8,
          title: "Blinding Lights",
          singer: "The Weekend",
          uploader: "Solsist",
        },
      ],
      editMusicDetail: {},
    };
  },
  persist: {
    enabled: true,
  },
  actions: {
    editMusic() {
      if (this.editMusicDetail.isNew) {
        this.musicList.push({
          ...this.editMusicDetail,
          id: this.musicList[this.musicList.length - 1].id + 1,
        });
      } else {
        this.musicList.forEach((item, i) => {
          if (item.id == this.editMusicDetail.id) {
            this.musicList[i] = { ...this.editMusicDetail };
            return;
          }
        });
      }
    },
    delMusic(id) {
      this.musicList.forEach((item, i) => {
        if (item.id == id) {
          this.musicList.splice(i, 1);
          return;
        }
      });
    },
  },
});
