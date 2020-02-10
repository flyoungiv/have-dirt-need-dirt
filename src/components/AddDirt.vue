<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Where's your dirt?</md-dialog-title>
      <md-field>
        <label>Address</label>
        <md-input v-model="address"></md-input>
      </md-field>
      <PlacesAutocomplete />
      <md-field>
        <label>Contact Name</label>
        <md-input v-model="contactName"></md-input>
      </md-field>
      <md-field>
        <label>Contact Phone</label>
        <md-input v-model="contactPhone"></md-input>
      </md-field>
      <md-field>
        <label>Quantity</label>
        <md-input v-model="quantity"></md-input>
      </md-field>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Nevermind</md-button>
        <md-button @click="confirmDialog">Bye, Dirt!</md-button>
      </md-dialog-actions>
    </md-dialog>
    <div @click="showDialog = true"><HaveDirtCard /></div>
  </div>
</template>

<script>
import HaveDirtCard from './HaveDirtCard'
import PlacesAutocomplete from './PlacesAutocomplete'
import { db } from "../firebase/firebase.js";

export default {
  name: "AddDirt",
  components: { HaveDirtCard, PlacesAutocomplete },
  data: () => ({
    showDialog: false,
    address: "",
    contactName: "Randall Jacobson",
    contactPhone: "(432) 457-8431",
    quantity: 0
  }),
  methods: {
    saveAddressToDB() {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAOexuWifb5bVtwoVEgNqTD-W92FFYK3WI`
      )
        .then(response => response.json())
        .then(json => {
          db.ref("dirt").push({
            address: json.results[0].formatted_address,
            coordinates: json.results[0].geometry.location,
            contactName: this.contactName,
            contactPhone: this.contactPhone,
            quantity: this.quantity,
            created: (new Date()).toISOString()
          });
        });
    },
    confirmDialog() {
      this.showDialog = false
      this.saveAddressToDB()
    }
  }
};
</script>

<style lang="scss">
.md-dialog.md-theme-default {
  min-width: 360px;
  max-width: 768px;
  padding: 16px;
}

.md-menu-content {
  z-index: 12;
}
</style>