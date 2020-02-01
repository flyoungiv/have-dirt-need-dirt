<template>
  <div>
    <md-table>
      <md-table-row>
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Contact Name</md-table-head>
        <md-table-head>Phone</md-table-head>
        <md-table-head>Last Update</md-table-head>
        <md-table-head>Location</md-table-head>
      </md-table-row>

      <md-table-row v-for="dirt in dirtList" v-bind:key="dirt.id">
        <md-table-cell md-numeric>{{ dirt.id }}</md-table-cell>
        <md-table-cell>{{ dirt.contactName }}</md-table-cell>
        <md-table-cell>{{ dirt.contactNumber }}</md-table-cell>
        <md-table-cell>{{ dirt.lastUpdate }}</md-table-cell>
        <md-table-cell>{{ dirt.location }}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<style scoped>
  .md-table {
    margin-bottom: 64px;
  }
</style>

<script>
  import dirtData from '../data/dirt_data.json'

  export default {
    name: 'DirtInventory',
    data: () => (
      {
        dirtList: dirtData
      }
    )
  }
</script>