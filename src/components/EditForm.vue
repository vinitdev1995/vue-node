<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Edit Form</h1>
        </header>
      </div>
    </div>
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
