import { defineStore } from "pinia";

export const usePostStore = defineStore("post", {
  state: () => {
    return {
      postList: [
        {
          type: "活动",
          content: "理工维修日：在NB103为全校师生提供电脑维修服务",
          time: "2023年6月18日",
          pic: "post1.jpg",
        },
        {
          type: "活动",
          content: "CA103：邀请各界精英人士，面向全体学生的知识分享讲座",
          time: "2023年6月2日",
          pic: "post2.jpg",
        },
        {
          type: "活动",
          content: "理工维修日：在SB204为全校师生提供电脑维修服务",
          time: "2023年5月7日",
          pic: "post3.jpg",
        },
      ],
    };
  },
  persist: {
    enabled: true,
  },
  actions: {},
});
