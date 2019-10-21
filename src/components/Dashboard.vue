<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <header>
          <h1>Entry Form</h1>
        </header>
      </div>
    </div>
    <user-form />
  </div>
</template>

<script>
  import Form from "./Form.vue"

  export default {
    components: {
      "user-form": Form
    }
  }
</script>
