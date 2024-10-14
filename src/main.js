import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router'

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    //Uisng the browser built-in mechnaism to save router history
    history: createWebHistory(),
    routes: [
        //{path:'/', redirect: '/teams'},//url chnages with alias url doesn't change!
        { name: 'teams' , path: '/teams', components: {default: TeamsList, footer:TeamFooter }, alias: '/',children: [
            {name: 'team-members',path:':teamId', components: TeamMembers, props: true},
        ]},
        {path: '/users', components: { default: UsersList, footer: UserFooter}},
        //commneting the below as we are making our child to load in the same page 
        //rather redirecting to othe rpage.
       //{path:'/teams/:teamId', component: TeamMembers, props: true},
        {path: '/:notFound(.*)', component:NotFound }
    ],

    //methods which controls the scrolling of the page when new info will set the page automaticcaly
    //at that position.
    //called by vue router when the page is loaded
    // scrollBehavior(to,from,savedPosition){
    //     if(savedPosition){
    //         return savedPosition;
    //     }
    //     return {left:0,top: 0};
    // }
});

const app = createApp(App)
//specifying our application to use router! instead of dynamically
//loading the components!
//Now we specified to use router but where we mentioned to load
//In app.vue use <router-view/> to load page dynamicaaly
//based on page we load and render it at that space
app.use(router);

app.mount('#app');
