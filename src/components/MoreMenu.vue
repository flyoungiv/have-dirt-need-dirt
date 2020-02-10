<template>
  <!-- <div> -->
  <md-menu md-size="auto">
    <md-button md-menu-trigger class="md-icon-button">
      <md-icon>more_vert</md-icon>
    </md-button>

    <md-menu-content>
      <md-button @click="deleteRecord">
        <md-menu-item>
          <span>Delete</span>
          <md-icon>delete</md-icon>
        </md-menu-item>
      </md-button>
    </md-menu-content>
  </md-menu>
  <!-- </div> -->
</template>

<script>
import { db } from "../firebase/firebase.js"

export default {
  name: "MoreMenu",
  props: {
    id: String
  },
  methods: {
    deleteRecord() {
      console.log(this.id);
      db.ref(`/dirt/${this.id}`).remove();
    }
  }
};
</script>

<style lang="scss" scoped>
// .md-menu {
//   margin: 24px;
// }
</style>