<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <img id="logo" src="../assets/dozer.png" />
        <span class="md-title">Have Dirt<md-icon>compare_arrows</md-icon>Need Dirt</span>
      </md-app-toolbar>
      <md-app-content>
        <Cards />
        <DirtInventory />
        <InventoryMap />
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import InventoryMap from './InventoryMap'
import Cards from "./Cards.vue"
import DirtInventory from "./DirtInventory.vue"

export default {
  name: "Home",
  components: { InventoryMap, Cards, DirtInventory }
};
</script>

<style>
#logo {
  height: 64px;
}

.md-app-container .md-toolbar.md-theme-default.md-primary {
  background-color: #fdcc43;
}

.md-app .md-content.md-theme-default {
  background-color: #616161;
  padding: 32px;
  padding-bottom: 0;
}
</style>