<template>
  <!-- navigating to othe rpages programatically-->
  <button @click="setPage"> Confirm</button>
  <ul>
    
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    setPage(){
      //do something like changing data or sending data
      //to serve

      //Atlast we have to navgigat eto other page the we have to
      this.$router.push('/teams');

    }

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>