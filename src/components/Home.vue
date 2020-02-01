<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Have Dirt<md-icon>compare_arrows</md-icon>Need Dirt</span>
      </md-app-toolbar>
      <md-app-content>
        <Cards />
        <Map />
        <DirtInventory />
      </md-app-content>
    </md-app>
  </div>
</template>

<style scoped>
.truck-area {
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
}

.truck-area > img {
  height: 32px;
}
</style>

<script>
import Cards from "./Cards.vue";
import DirtInventory from "./DirtInventory.vue";
import Map from "./Map.vue";

export default {
  name: "Home",
  components: { Cards, DirtInventory, Map }
};
</script>