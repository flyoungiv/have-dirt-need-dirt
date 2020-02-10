<template>
  <div>
    <div class="md-layout md-gutter md-alignment-center-center">
      <div class="md-layout-item md-size-60 md-medium-size-80 md-small-size-100">
        <md-table class="md-card" id="dirt-table">
          <md-table-row>
            <!-- <md-table-head md-numeric>ID</md-table-head> -->
            <md-table-head>Address</md-table-head>
            <md-table-head>Contact Person</md-table-head>
          <md-table-head>Phone</md-table-head>
            <md-table-head>YD</md-table-head>
            <md-table-head>Date</md-table-head>
            <md-table-head></md-table-head>
          </md-table-row>

          <md-table-row v-for="dirt in dirtList" v-bind:key="dirt.id">
            <!-- <md-table-cell md-numeric>{{ dirt.id }}</md-table-cell> -->
            <md-table-cell>{{ dirt.address }}</md-table-cell>
            <md-table-cell>{{ dirt.contactName }}</md-table-cell>
            <md-table-cell class="no-wrap">{{ dirt.contactPhone }}</md-table-cell>
            <md-table-cell>{{ dirt.quantity }}</md-table-cell>
            <md-table-cell>{{ dirt.created }}</md-table-cell>
            <md-table-cell><MoreMenu :id="dirt.id"/></md-table-cell>
          </md-table-row>
        </md-table>
      </div>
    </div>
  </div>
</template>

<script>
import MoreMenu from './MoreMenu'
import { db } from "../firebase/firebase.js"
// import dirtData from "../data/dirt_data.json"

export default {
  name: "DirtInventory",
  components: { MoreMenu },
  data: () => ({
    dirtList: []
  }),
  mounted() {
    db.ref("/dirt").on("value", snapshot => {
      this.dirtList.length = 0;
      snapshot.forEach(childSnapshot => {
        //is this creating duplicate markers on add?
        const {
          contactName,
          contactPhone,
          address,
          quantity,
          created
        } = childSnapshot.val();
        this.dirtList.push({
          id: childSnapshot.key,
          contactName: contactName,
          contactPhone: contactPhone,
          address: address,
          quantity: quantity,
          created: created ? new Date(created).toDateString() : ""
        });
      });
    });
  }
};
</script>

<style>
.md-app .md-layout-item > .md-content.md-theme-default {
  padding: 0;
  /* animation: jump 1s 2s forwards cubic-bezier(0.84, -0.54, 0.31, 1.19); */
}

#dirt-table {
  margin: 0;
  margin-top: 32px;
}

.md-layout-item .md-table.md-theme-default .md-table-content {
  background-color: var(--md-theme-default-background,#424242);
  border-radius: 2px;
  padding: 0;
}

@keyframes jump {
  0% {
    transform: none;
  }
  50% {
    transform: translateY(-2em);
  }
}

.no-wrap {
  white-space: nowrap;
}
</style>