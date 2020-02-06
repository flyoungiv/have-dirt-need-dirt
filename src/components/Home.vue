<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">Have Dirt<md-icon>compare_arrows</md-icon>Need Dirt</span>
      </md-app-toolbar>
      <md-app-content>
        <Cards />
        <InventoryMap />
        <DirtInventory />
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