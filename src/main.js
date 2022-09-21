import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { useRouter } from "vue-router";
import NewApp from "./components/NewApp.vue";
import Home from "./components/Home.vue";
import LoginUp from "./components/LoginUp.vue";
import SignUpp from "./components/SignUpp.vue";

import CakeAdd from "./components/CakeAdd.vue";
import Cakedetails from "./components/Cakedetails.vue";
import Search from "./components/Search.vue";
import PageNotFound from "./components/PageNotFound.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Checkout from "./components/Checkout.vue";
import Summary from "./components/Summary.vue";
import Address from "./components/Address.vue";
import Payment from "./components/Payment.vue";
import Admin from "./components/Admin.vue";
import Edit from "./components/Edit.vue";
import Orders from "./components/Orders.vue";
import { createPinia } from "pinia";

var router = useRouter();
// import router from "./router";
// import MyComponent from "./components/MyComponent.vue";

// var MyApp = createApp(NewApp);
var routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: LoginUp,
  },
  {
    path: "/register",
    component: SignUpp,
  },

  {
    path: "/addcake",
    beforeEnter: () => {
      if (!localStorage.token) {
        router.push("/login");
        return false;
      }
    },
    component: CakeAdd,
  },
  {
    path: "/detail/:cakeid",
    component: Cakedetails,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
  },

  {
    path: "/cart",
    beforeEnter: () => {
      if (!localStorage.token) {
        router.push("/login");
        return false;
      }
    },
    component: ShoppingCart,
  },

  {
    path: "/checkout",
    component: Checkout,
    children: [
      { path: "", redirect: "/checkout/summary" },
      { path: "summary", component: Summary },
      { path: "address", component: Address },
      { path: "payment", component: Payment },
    ],
  },
  { path: "/orders", component: Orders },

  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/edit/:cakeid",
    component: Edit,
  },
];

var router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

// MyApp.use(router);
// MyApp.use(createPinia())
// createApp(App).mount("#app");
// MyApp.mount("#app");
// createApp(App).use(router).mount("#app");
createApp(NewApp).use(router).use(createPinia()).mount("#app");
