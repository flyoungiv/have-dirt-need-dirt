<template>
  <div>
    <md-autocomplete
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
  name: "PlacesAutocomplete",
  data: () => ({
    typedAddress: null,
    suggestions: [
      "2932 Gale Terrace",
      "617 Fuller Avenue",
      "890 Karstens Street",
      "2 Springview Terrace",
      "27 Gina Avenue",
      "01928 Oneill Court",
      "4 Gale Way",
      "5841 Brickson Park Center",
      "6672 Darwin Park",
      "074 Hoffman Circle",
      "2 Village Green Parkway",
      "15977 Lindbergh Terrace",
      "3 Rusk Circle",
      "0342 Sutherland Circle",
      "03611 Blue Bill Park Hill",
      "10682 Elgar Road",
      "547 Hudson Avenue",
      "3 Heath Plaza",
      "88140 Rowland Drive",
      "676 3rd Terrace",
      "47 Leroy Parkway",
      "41 Waxwing Street",
      "212 Meadow Ridge Terrace",
      "5428 Grover Court",
      "67 Carberry Junction",
      "2 Doe Crossing Lane",
      "89 Jackson Way",
      "9 Oxford Road",
      "5576 Esch Junction",
      "59 Ridgeview Park",
      "59932 Ridge Oak Avenue",
      "9 Doe Crossing Point",
      "3902 Spenser Way",
      "4665 Roxbury Pass",
      "822 Katie Plaza",
      "0118 Merry Crossing",
      "85 Armistice Way",
      "379 Coolidge Street",
      "04166 Golf View Road",
      "487 Atwood Circle",
      "24861 Butternut Trail",
      "45543 Center Alley",
      "67 Calypso Pass",
      "43 Westport Terrace",
      "796 Ryan Point",
      "5309 Hoepker Plaza",
      "41350 Holy Cross Alley",
      "32 Wayridge Place",
      "0 Manufacturers Hill",
      "90 Crest Line Crossing",
      "0 Lyons Park",
      "49 Main Terrace",
      "8 Browning Circle",
      "16 Beilfuss Junction",
      "053 Crest Line Parkway",
      "67 Lukken Hill",
      "58 Hovde Court",
      "439 Banding Hill",
      "05 Golf Course Junction",
      "97541 Menomonie Avenue",
      "23 Merchant Trail",
      "96 Scofield Hill",
      "9113 Bunker Hill Center",
      "70235 Cascade Junction",
      "08 Jana Junction",
      "68355 Briar Crest Park",
      "352 Portage Avenue",
      "9 Victoria Park",
      "64 Sunbrook Point",
      "7 Eastwood Plaza",
      "511 Kinsman Plaza",
      "6 Claremont Park",
      "04 Manitowish Point",
      "6 Macpherson Road",
      "55 Mifflin Drive",
      "311 Maple Terrace",
      "16 Butternut Hill",
      "61097 Pleasure Terrace",
      "28 Hallows Circle",
      "36861 Green Ridge Parkway",
      "1 Carpenter Point",
      "95197 Schiller Circle",
      "2686 Drewry Crossing",
      "1630 Lakewood Gardens Pass",
      "3 Mcguire Junction",
      "07 Eagle Crest Alley",
      "1751 Bluejay Trail",
      "480 Kipling Circle",
      "3 Karstens Court",
      "638 Donald Center",
      "7 Bartillon Court",
      "924 Moland Place",
      "3 Roth Way",
      "7 Mariners Cove Center",
      "9 Porter Avenue",
      "35 Tennyson Circle",
      "657 Shelley Street",
      "5402 Di Loreto Pass",
      "53320 Tomscot Circle",
      "8497 Sugar Pass"
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
          console.log(json);
        });
    }
  }
};
</script>