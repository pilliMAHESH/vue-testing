<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Goto Team2</router-link>
    <!--Vue rounter does not destroy or rebuilt components which 
    are loaded when we navigate around-->
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['users','teams'],
  props: ['teamId'],
  components: {
    UserItem
  },
  data() {
    return {
      teamName: '',
      members: [],
      /* teamName: 'Test',
      members: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
      ], */
    };
  },
  methods:{
    loadTeamMembers(teamId){
       // this.$route.path this give acces to path
       //commenting as we are passing teamId as prop!
    //const teamId = route.params.teamId;
    //getting id from path
    //const route = this.$route.path // teams/t1
    //getting team from data
    const selectedTeam = this.teams.find(team => team.id ===teamId);
    //getting members of that team
    const members = selectedTeam.members;
    const sm =[];
    for (const mem of members){
    const selecetdUser = this.users.find(user =>user.id === mem);
    sm.push(selecetdUser);
    }
    this.members = sm;
    this.teamName = selectedTeam.name;

    }
  },

  //to get access to the dynamic content which user entered in URL
  //we have to load before the componet has been created
  created(){
     this.loadTeamMembers(this.teamId);

  },
  watch:{
    teamId(newId){// will watch the route change!
      this.loadTeamMembers(newId);
      //this will make our application more dependent on routing
      //to overcome we pass teamid as props to routing.
      //to make this component more reusable!
    },
  }
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>