<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
    <template v-if="Boolean(this.google) && Boolean(this.map)">
      <slot :google="google" :map="map" />
    </template>
  </div>
</template>

<script>
import GoogleMapsApiLoader from "google-maps-api-loader";

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
    center: Object
  },
  data() {
    return {
      google: null,
      map: null
    };
  },
  async mounted() {
    const googleMapiApi = await GoogleMapsApiLoader({ apiKey: this.apiKey });
    this.google = googleMapiApi;
    this.initializeMap();
  },
  watch: {
    center() {
      if (this.map) this.map.panTo(this.center);
    }
  },
  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap;
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig);
    }
  }
};
</script>

<style>
.google-map {
  height: 600px;
}
</style>