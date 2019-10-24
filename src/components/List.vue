<template>
  <div class="container">
    <h1>Users</h1>

    <div class="row">
      <div class="col-md-10">
        <h4>Total users: <span v-if="isLoading"> Loading...</span><span v-else>{{usersCount}}</span></h4>
      </div>
      <div class="col-md-2">
        <router-link :to="{ name: 'Form' }" class="btn btn-primary">Add New</router-link>
      </div>
    </div><br />

    <table class="table table-hover">
      <thead>
      <tr>
        <td>Item Name</td>
        <td>Email</td>
        <td>Intro</td>
        <td>Course</td>
        <td>Action</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.introduction }}</td>
        <td>{{ user.course }}</td>
        <td>
          <router-link :to="{ name: 'Edit', params: { id: user._id }}" class="btn btn-sm btn-primary">Edit</router-link>
          <button class="btn btn-sm btn-danger" @click="deleteItem(user._id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-if="isLoading">Loading...</p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import {API_URL} from "../utilities/CONST"
  import { FETCH_USERS } from "../store/actions.type"

  export default {
    name: "List",
    data: function () {
      return {}
    },
    beforeMount: function () {
      // this.$store.dispatch(FETCH_USERS);
    },
    mounted() {
      this.$store.dispatch(FETCH_USERS);
    },
    computed: mapGetters(["usersCount", "users", "isLoading"]),
    methods: {
      deleteItem: function (id) {
        let uri = `${API_URL}items/delete/${id}`;
        this.users.splice(id, 1);
        this.axios.get(uri);
      }
    }
  }
</script>

<style scoped>

</style>



<!--
<template>
  <div class="container">
    <h1>Users</h1>

    <div class="row">
      <div class="col-md-10"></div>
      <div class="col-md-2">
        <router-link :to="{ name: 'Form' }" class="btn btn-primary">Add New</router-link>
      </div>
    </div><br />

    <table class="table table-hover">
      <thead>
      <tr>
        <td>Item Name</td>
        <td>Email</td>
        <td>Intro</td>
        <td>Course</td>
        <td>Action</td>
      </tr>
      </thead>

      <tbody>
      <tr v-for="user in userList">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.introduction }}</td>
        <td>{{ user.course }}</td>
        <td>
          <router-link :to="{ name: 'Edit', params: { id: user._id }}" class="btn btn-sm btn-primary">Edit</router-link>
          <button class="btn btn-sm btn-danger" @click="deleteItem(user._id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {API_URL} from "../utilities/CONST"

  export default {
    name: "List",
    data: function () {
      return {
        userList: [],
        loading: false
      }
    },
    beforeMount: function () {
      this.getUsers()
    },
    methods: {
      getUsers: function () {
        let uri = `${API_URL}items`;
        this.axios.get(uri).then((response) => {
          this.userList = response.data;
        });
      },
      deleteItem: function (id) {
        let uri = `${API_URL}items/delete/${id}`;
        this.userList.splice(id, 1);
        this.axios.get(uri);
      }
    }
  }
</script>

<style scoped>

</style>
-->