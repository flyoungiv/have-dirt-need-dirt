THIS TEMPLATE IS ON HOLD BECAUSE OF CORS
<template>
  <div>
    <md-autocomplete
      v-on:keyup.enter="askGoogleForSuggestions"
      v-model="typedAddress"
      :md-options="suggestions"
      :md-open-on-focus="false"
    >
      <label>Look for an Address...</label>
    </md-autocomplete>
  </div>
</template>

<script>
export default {
  name: "AutocompleteTrigger",
  data: () => ({
    typedAddress: null,
    suggestions: [
      "Jim Halpert",
      "Dwight Schrute",
      "Michael Scott",
      "Pam Beesly",
      "Angela Martin",
      "Kelly Kapoor",
      "Ryan Howard",
      "Kevin Malone",
      "Creed Bratton",
      "Oscar Nunez",
      "Toby Flenderson",
      "Stanley Hudson",
      "Meredith Palmer",
      "Phyllis Lapin-Vance"
    ]
  }),
  methods: {
    askGoogleForSuggestions() {
      fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.typedAddress}&key=AIzaSyAOexuWifb5bVtwoVEgNqTD-W92FFYK3WI`
      )
        .then(response => response.json())
        .then(json => {
          // this.suggestions = json.results[0].geometry.location;
          console.log(json)
        });
    }
  },
  watch: {
    typedAddress() {
            fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.typedAddress}&key=AIzaSyAOexuWifb5bVtwoVEgNqTD-W92FFYK3WI`
      )
        .then(response => response.json())
        .then(json => {
          // this.suggestions = json.results[0].geometry.location;
          console.log(json)
        });
    }
  }
};
</script>