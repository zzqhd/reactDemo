import Home from "../components/Home";
import TodoList from "../components/TodoList";
import SuperComponent from "../components/SuperChild/superComponent";
import MyAxios from "../components/NetHelper/MyAxios";
import FetchJsonp from "../components/NetHelper/FetchJsonp";
import RouterHome from "../Router/components/RouterHome";
import HomeOrder from "../project_order/HomeOrder";
import Login from "../project_order/Login";
import RouterNestHome from "../Router/RouterNest/RouterNestHome";
import RouteContent from "../Router/components/RouterNextPage";
import OrderContent from "../project_order/OrderContent";
import RouterNestSub1 from "../Router/RouterNest/RouterNestSub1";
import RouterNestSub2 from "../Router/RouterNest/RouterNestSub2";
import AntDesign from "../antDesign/AntDesign"
let routeList = [
    // URL path路由 -- 静态路由
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/Home',
        component: Home,
    },
    {
        path: '/TodoList',
        component: TodoList,
    },
    {
        path: '/SuperComponent',
        component: SuperComponent,
    },
    {
        path: '/MyAxios',
        component: MyAxios,
    },
    {
        path: '/FetchJsonp',
        component: FetchJsonp,
    },
    {
        path: '/RouterHome',
        component: RouterHome,
    },
    {
        path: '/HomeOrder',
        component: HomeOrder,
    },
    {
        path: '/Login',
        component: Login,
    },
    {
        path: '/RouterNestHome',
        component: RouterNestHome,
        routes: [
            {
                path: '/RouterNestHome/',
                component:RouterNestSub1,
            },
            {
                path: '/RouterNestHome/RouterNestSub2',
                component:RouterNestSub2,
            }
        ]
    },
    {
        path: '/AntDesign',
        component: AntDesign,
    },
    // get路由
    {
        path: '/RouterContent',
        component: RouteContent,
    },
    // 动态路由
    {
        path: '/RouterContent/:myParams',
        component: RouteContent,
    },
    // 动态路由
    {
        path: '/OrderContent/:id',
        component: OrderContent,
    },
];


export default routeList;