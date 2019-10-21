<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li
            class="list-group-item"
            v-for="index in 5" @click="onServerInfo(index)" >
          Server #{{ index }}
        </li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-6">
      <p v-if="selectedServer > 0">{{serverDetails[selectedServer-1] || ""}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        selectedServer: "",
        serverDetails: [
          "Server 1 info",
          "Server 2 info",
          "Server 3 info",
          "Server 4 info",
          "Server 5 info",
        ]
      }
    },
    methods: {
      onServerInfo: function (index) {
        this.$data.selectedServer = index
        console.log(index)
      }
    }
  }
</script>
