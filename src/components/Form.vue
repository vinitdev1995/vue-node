<template>
  <div class="container">
    <div>
      <div class="form-group">
        <label for="usr">Name:</label>
        <input type="text" name="name" class="form-control" id="usr" v-model="name">
        <p v-if="errors.name" class="text-danger"><small>{{errors.name || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" id="email" class="form-control" name="email" v-model="email">
        <p v-if="errors.email" class="text-danger"><small>{{errors.email || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="password" class="form-control" v-model="password">
        <p v-if="errors.password" class="text-danger"><small>{{errors.password || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="introduction">Introduction:</label>
        <textarea class="form-control" name="Introduction" rows="4" id="introduction" v-model="introduction"></textarea>
        <p v-if="errors.introduction" class="text-danger"><small>{{errors.introduction || ""}}</small></p>
      </div>
      <div class="form-group">
        <p>Hobbies:</p>
        <div class="checkbox" v-for="option in hobbiesOptions">
          <label :for="option.text" class="checkbox-inline"><input type="checkbox" :id="option.text" :value="option.text" v-model="hobbies" >&nbsp;&nbsp;{{option.text}}</label>
        </div>
        <p v-if="errors.hobbies" class="text-danger"><small>{{errors.hobbies || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="course">Course:</label>
        <select class="form-control" name="course" id="course" v-model="course">
          <option value="">Select</option>
          <option v-for="option in courseOptions" :value="option.value">{{option.text}}</option>
        </select>
        <p v-if="errors.course" class="text-danger"><small>{{errors.course || ""}}</small></p>
      </div>
      <button class="btn btn-primary" @click="checkForm">Submit</button>
      <button type="reset" class="btn btn-danger" >Reset</button>
    </div>
  </div>
</template>

<script>
  import {CREATE_OR_UPDATE_USER} from "../store/actions.type"

  export default {
    data:  function () {
     return {
       name: "",
       email: "",
       password: "",
       introduction: "",
       course: "",
       hobbies: [],
       courseOptions: [
         { text: 'Java Script', value: 'javaScript' },
         { text: 'HTML', value: 'html' },
         { text: 'CSS', value: 'css' },
         { text: 'PHP', value: 'php' },
       ],
       hobbiesOptions: [
         { text: 'Cricket' },
         { text: 'Hockey' },
         { text: 'Dance'}
       ],
       isRemember: false,
       errors: [],
       userId: ""
     }
    },
    created: function () {
      if(this.$router.history && this.$router.history.current && this.$router.history.current.params && this.$router.history.current.params.id){
        this.$data.userId = this.$router.history.current.params.id
        this.setAttrsToState()
      }
    },
    watch: {
      "$attrs.user": function() {
        this.setAttrsToState()
      }
    },
    methods: {
      setAttrsToState: function() {
        if(this.$attrs && this.$attrs.user){
          const user = this.$attrs.user
          Object.keys(user).forEach(key => {
            this.$data[key] = user[key]
          })
          console.log(this.$data.name)
        }
      },
      validations: function(name, value){
        const reqMsg = "Required"
        switch (name) {
          case "name":
            if (!value) {
              return reqMsg
            }
            break;
          case "email":
            if (!value) {
              return reqMsg
            }
            break;
          case "password":
            if (!value) {
              return reqMsg
            }
            break;
          case "introduction":
            if (!value) {
              return reqMsg
            }
            break;
          case "hobbies":
            if (!value || !value.length) {
              return reqMsg
            }
            break;
          case "course":
            if (!value) {
              return reqMsg
            }
            break;
        }
      },
      checkForm: function () {
        const {
          name,
          email,
          password,
          introduction,
          course,
          hobbies
        } = this.$data
        const user = {
          name,
          email,
          password,
          introduction,
          course,
          hobbies
        }
        const errors = {}

        Object.keys(user).forEach(key => {
          const errMsg = this.validations(key, user[key])
          if(errMsg){
            errors[key] = errMsg
          }
        })
        if(Object.keys(errors).length){
          console.log(errors)
          return this.$data.errors = errors
        }
        this.$store.dispatch(CREATE_OR_UPDATE_USER, {id: this.$data.userId, body: user})
        this.$router.push({name: 'List'})
      }
    }
  }
</script>


<!--
<template>
  <div class="container">
    <div>
      <div class="form-group">
        <label for="usr">Name:</label>
        <input type="text" name="name" class="form-control" id="usr" v-model="name">
        <p v-if="errors.name" class="text-danger"><small>{{errors.name || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" id="email" class="form-control" name="email" v-model="email">
        <p v-if="errors.email" class="text-danger"><small>{{errors.email || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="password" class="form-control" v-model="password">
        <p v-if="errors.password" class="text-danger"><small>{{errors.password || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="introduction">Introduction:</label>
        <textarea class="form-control" name="Introduction" rows="4" id="introduction" v-model="introduction"></textarea>
        <p v-if="errors.introduction" class="text-danger"><small>{{errors.introduction || ""}}</small></p>
      </div>
      <div class="form-group">
        <p>Hobbies:</p>
        <div class="checkbox" v-for="option in hobbiesOptions">
          <label :for="option.text" class="checkbox-inline"><input type="checkbox" :id="option.text" :value="option.text" v-model="hobbies" >&nbsp;&nbsp;{{option.text}}</label>
        </div>
        <p v-if="errors.hobbies" class="text-danger"><small>{{errors.hobbies || ""}}</small></p>
      </div>
      <div class="form-group">
        <label for="course">Course:</label>
        <select class="form-control" name="course" id="course" v-model="course">
          <option value="">Select</option>
          <option v-for="option in courseOptions" :value="option.value">{{option.text}}</option>
        </select>
        <p v-if="errors.course" class="text-danger"><small>{{errors.course || ""}}</small></p>
      </div>
      <button class="btn btn-primary" @click="checkForm">Submit</button>
      <button type="reset" class="btn btn-danger" >Reset</button>
    </div>
  </div>
</template>

<script>
  import {API_URL} from "../utilities/CONST"

  export default {
    data:  function () {
     return {
       name: "",
       email: "",
       password: "",
       introduction: "",
       course: "",
       hobbies: [],
       courseOptions: [
         { text: 'Java Script', value: 'javaScript' },
         { text: 'HTML', value: 'html' },
         { text: 'CSS', value: 'css' },
         { text: 'PHP', value: 'php' },
       ],
       hobbiesOptions: [
         { text: 'Cricket' },
         { text: 'Hockey' },
         { text: 'Dance'}
       ],
       isRemember: false,
       errors: [],
       userId: ""
     }
    },
    created: function () {
      if(this.$router.history && this.$router.history.current && this.$router.history.current.params && this.$router.history.current.params.id){
        this.$data.userId = this.$router.history.current.params.id
        this.setAttrsToState()
      }
    },
    watch: {
      "$attrs": function() {
        this.setAttrsToState()
      }
    },
    methods: {
      setAttrsToState: function() {
        if(this.$attrs && this.$attrs.user){
          const user = this.$attrs.user
          Object.keys(user).forEach(key => {
            this.$data[key] = user[key]
          })
          console.log(this.$data.name)
        }
      },
      validations: function(name, value){
        const reqMsg = "Required"
        switch (name) {
          case "name":
            if (!value) {
              return reqMsg
            }
            break;
          case "email":
            if (!value) {
              return reqMsg
            }
            break;
          case "password":
            if (!value) {
              return reqMsg
            }
            break;
          case "introduction":
            if (!value) {
              return reqMsg
            }
            break;
          case "hobbies":
            if (!value || !value.length) {
              return reqMsg
            }
            break;
          case "course":
            if (!value) {
              return reqMsg
            }
            break;
        }
      },
      checkForm: function () {
        const {
          name,
          email,
          password,
          introduction,
          course,
          hobbies
        } = this.$data
        const user = {
          name,
          email,
          password,
          introduction,
          course,
          hobbies
        }
        const errors = {}

        Object.keys(user).forEach(key => {
          const errMsg = this.validations(key, user[key])
          if(errMsg){
            errors[key] = errMsg
          }
        })
        if(Object.keys(errors).length){
          console.log(errors)
          return this.$data.errors = errors
        }
        let uri = this.$data.userId ? `${API_URL}items/update/${this.$data.userId}` : `${API_URL}items/add`;
        this.axios.post(uri, user).then((response) => {
          console.log(response.data.message)
          this.$router.push({name: 'List'})
        }).catch(error => {
          console.log(error)
        })
      }
    }
  }
</script>
-->