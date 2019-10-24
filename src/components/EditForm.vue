<template>
  <div>
    <div>UserName: {{userName}}</div>
    <user-form
        :user="selectedUser"
        :userName="userName"
        :resetUserName="resetUserName"
        @updateUserName="userName = $event" />
  </div>
</template>

<script>
  import { mapGetters } from "vuex"
  import Form from "./Form.vue"
  import {FETCH_SPECIFIC_USER} from "../store/actions.type"

  export default {
    components:{
      "user-form": Form
    },
    data:  function () {
     return {
       userName: "ABC",
       user: {
         name: "",
         email: "",
         password: "",
         introduction: "",
         course: "",
         hobbies: [],
       }
     }
    },
    computed: mapGetters(['selectedUser']),
    created: function () {
      if(this.$router.history && this.$router.history.current && this.$router.history.current.params && this.$router.history.current.params.id){
        this.$data.userId = this.$router.history.current.params.id
        this.getUser()
      }
    },
    methods: {
      getUser: function() {
        console.log("userId:-",  this.$data.userId)
        this.$store.dispatch(FETCH_SPECIFIC_USER, this.$data.userId)
      },
      resetUserName: function (params) {
        console.log(params)
        this.userName = params
      }
    }
  }
</script>


<!--
<template>
  <div>
    <user-form :user="user" />
  </div>
</template>

<script>
  import Form from "./Form.vue"
  import {API_URL} from "../utilities/CONST"

  export default {
    components:{
      "user-form": Form
    },
    data:  function () {
     return {
       user: {
         name: "",
         email: "",
         password: "",
         introduction: "",
         course: "",
         hobbies: [],
       }
     }
    },
    created: function () {
      if(this.$router.history && this.$router.history.current && this.$router.history.current.params && this.$router.history.current.params.id){
        this.$data.userId = this.$router.history.current.params.id
        this.getUser()
      }
    },
    methods: {
      getUser: function() {
        console.log("userId:-",  this.$data.userId)
        let uri = `${API_URL}items/edit/${this.$data.userId}`;
        const that = this
        this.axios.get(uri).then((response) => {
          Object.keys(response.data).forEach(key => {
            that.$data.user = response.data
          })
        });
      }
    }
  }
</script>
-->