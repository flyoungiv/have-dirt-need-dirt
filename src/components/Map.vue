<template>
  <div class="root">
    <div class="map-container">
      <img src="../assets/map.png" />
    </div>
    <ChooseLocation class="choose-location" />
  </div>
</template>

<style lang="scss" scoped>
.map-container {
  display: flex;
  justify-content: center;
  margin: 0 -16px;
}

img {
  width: 100%;
}

.root {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.choose-location {
  position: relative;
  top: -50px;
  width: 100vw;
  display: flex;
}
</style>

<script>
import ChooseLocation from "./ChooseLocation.vue";

export default {
  name: "Map",
  components: { ChooseLocation }
};
</script>