<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title">Enter location</div>
      </md-card-header>

      <md-card-content>
        <md-field>
          <label>Address</label>
          <md-input v-bind:placeholder="defaultAddress"></md-input>
          <md-icon>my_location</md-icon>
        </md-field>
      </md-card-content>
    </md-card>
  </div>
</template>

<style lang="scss" scoped>
.md-card {
  width: 520px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>

<script>
export default {
  name: "ChooseLocation",
  data: () => (
    {
      defaultAddress: '166 Lincolnway, Valparaiso, IN 46385'
    }
  )
};
</script>