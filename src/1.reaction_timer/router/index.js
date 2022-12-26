import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Jobs from "../views/Jobs/Jobs.vue";
import JobDetails from "../views/Jobs/JobDetails.vue";
import NotFoundPage from "../views/Jobs/NotFoundPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/jobs",
        name: "Jobs",
        component: Jobs,
    },
    {
        path: "/jobs/:id",
        name: "JobDetails",
        component: JobDetails,
        props: true,
        // props가 true일 경우 모든 경로를 매개변수로서 props로 받아들일 수 있다.
        // Jobs.vue에 prams를 통해 props를 전달할 수 있다.
    },
    // redirect
    {
        path: "/all-jobs",
        redirect: "jobs",
    },
    // catchall 404
    {
        path: "/:catchAll(.*)",
        // 함수로 보이지만 정규식 패턴임
        // 잡히지 않는 모든 경로를 포함한다는
        name: "NotFoundPage",
        component: NotFoundPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
