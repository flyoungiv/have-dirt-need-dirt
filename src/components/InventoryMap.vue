<template>
  <div id="inventory-map">
    <GoogleMapLoader :center="center" :mapConfig="mapConfig" apiKey="AIzaSyAOexuWifb5bVtwoVEgNqTD-W92FFYK3WI">
      <template slot-scope="{ google, map }">
        <GoogleMapMarker
          v-for="marker in markers"
          :key="marker.id"
          :marker="marker"
          :google="google"
          :map="map"
        />
      </template>
    </GoogleMapLoader>
    <div class="choose-location">
      <md-card>
        <md-card-header>
          <div class="md-title">Find dirt near this location</div>
        </md-card-header>
        <md-card-content>
          <md-field>
            <label>Address</label>
            <md-input
              v-model="address"
              v-on:keyup.enter="updateCenter"
              placeholder="Enter an address here..."
            ></md-input>
            <md-icon>my_location</md-icon>
          </md-field>
          <PlacesAutocomplete />
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader"
import GoogleMapMarker from "./GoogleMapMarker"
import PlacesAutocomplete from "./PlacesAutocomplete"
import { db } from "../firebase/firebase.js"

import { mapSettings } from "@/constants/mapSettings"

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    PlacesAutocomplete
  },
  data() {
    return {
      markers: [],
      address: "146 Brockton Pl, Valparaiso, IN 46385",
      center: { lat: 43.46781, lng: -85.04655 }
    };
  },
  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.center
      };
    }
  },
  mounted() {
    db.ref("/dirt").on("value", snapshot => {
      snapshot.forEach(childSnapshot => {
        //is this creating duplicate markers on add?
        this.markers.push({
          position: childSnapshot.val().coordinates,
          id: childSnapshot.key
        });
      });
    });
  },
  methods: {
    updateCenter() {
      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${this.address}&key=AIzaSyAOexuWifb5bVtwoVEgNqTD-W92FFYK3WI`
      )
        .then(response => response.json())
        .then(json => {
          this.center = json.results[0].geometry.location
        });
    }
  }
};
</script>

<style scoped>
#inventory-map {
  position: relative;
  margin-top: 32px;
  margin-left: -32px;
  margin-right: -32px;
}

.choose-location {
  position: absolute;
  top: 8px;
  display: flex;
}

.md-card {
  width: 380px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
</style>