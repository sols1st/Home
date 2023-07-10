import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/index.vue"),
        children: [
            { path: "/", component: () => import("@/views/HomePage.vue") },
            { path: "/home", component: () => import("@/views/HomePage.vue") },
            { path: "/bbs", component: () => import("@/views/ForumPage.vue") },
            { path: "/radio", component: () => import("@/views/RadioPage.vue") },
            {
                path: "/package",
                component: () => import("@/views/PackagePage.vue"),
            },
            { path: "/wiki", component: () => import("@/views/WikiPage.vue") },
        ],
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
