<template>
  <div class="container">
    <!-- <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Server Status</h1>
        </header>
      </div>
    </div>
    <hr>
    <app-servers/>
    <hr>
    -->
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Entry Form</h1>
        </header>
      </div>
    </div>
    <user-form />
    <hr>
    <div class="row">
      <div class="col-xs-12">
        <footer>
          <p>All Servers are managed here</p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  import AppServer from "./AppServer.vue"
  import Form from "./Form.vue"

  export default {
    components: {
      "app-servers": AppServer,
      "user-form": Form
    }
  }
</script>
