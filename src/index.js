import { createRouter, createWebHistory } from 'vue-router'
import MainContainer from './components/MainContainer.vue'
import HomePage from './pages/home.vue';
//Import About page, etc.


//Only allows the use of one.
const routes = [
    {
      path: '/home',
      name: 'home',
      component: HomePage
    },
    {
        path: '/anagram',
        name: 'MainContainer',
        component: MainContainer
      }
  ]
  
  //initializes a new router instance by calling the 'createRouter({...})'
  //which is provided by VueRouter.
  const router = createRouter({
    //Specifies the routing mode and history type for the router instance.
    //Allows us to use the back button.
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router;