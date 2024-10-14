<template>
  <!--<the-navigation @set-page="setActivePage"></the-navigation>-->
  <the-navigation></the-navigation>
  <main>
    <!--<component :is="activePage"></component>-->
    <!-- below is responsible for only routes rendered in our main files 
     registered as global not child-->
    <router-view></router-view>
  </main>
  <footer>
    <!-- Mapping footer vue file approproatley to the componnet it is loading!-->
    <router-view name = "footer"></router-view>
  </footer>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    //By the routerView step we are able to load pages dynamically
    //without any :is componnet, now we have to make they
    //redirect dynamically when we click on the button
  },
  data() {
    return {
      //activePage: 'teams-list',
      //now we are enhnacinh application when we give team id in path
      //it should load that particular team in the page
      teams: [
        { id: 't1', name: 'Frontend Engineers', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engineers', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    /* setActivePage(page) {
      this.activePage = page;
    }, */
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>

