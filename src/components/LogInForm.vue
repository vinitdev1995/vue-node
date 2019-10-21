<template>
  <div class="container">
    <form  @submit="checkForm" >
      <div class="form-group">
        <label for="email">Email address:</label>
        <input type="email" id="email" class="form-control" name="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input type="password" id="pwd" name="password" class="form-control" v-model="password">
      </div>
      <div class="checkbox">
        <label><input type="checkbox" name="isRemember" v-model="isRemember"> Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
      <button type="reset" class="btn danger" >Reset</button>
    </form>
  </div>
</template>

<script>
  export default {
    data:  function () {
     return {
       email: "",
       password: "",
       isRemember: false,
       errors: []
     }
    },
    methods: {
      checkForm: function (e) {
        console.log(this.$data)
        e.preventDefault()
      }
    }
  }
</script>
