<template>
  <div class="state-map">
    <h2>The state of {{ this.state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <div v-if="this.stateFact">
      <h3>{{ `Did you know?: ${this.stateFact.fact}` }}</h3>
    </div>

    <div id="map-container" v-if="dataReady">
      <l-map
        v-bind:zoom="state.zoom"
        ref="map"
        v-on:ready="onMapReady"
        v-bind:center="mapCenter"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        >
        </l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  name: "StateMap",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      state: {},
      dataReady: false, // Tracking when data comes back from the API
      mapReady: false, // Tracks when leaflet map is ready
      stateFact: {}, //holds optional facts
    };
  },
  mounted() {
    this.state.name = this.$route.params.state;
    this.fetchStateData();
    this.fetchFact();
  },
  methods: {
      fetchFact() {
      this.$stateService
        .getStateFact(this.state.name)
        .then(fact => {
            this.stateFact = fact;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    fetchStateData() {
      this.$stateService
        .getOneState(this.state.name)
        .then((state) => {
          this.state = state;
          this.dataReady = true;
          this.setMapView();
        })
        .catch((err) => {
          if (err.response && err.response.status === 404) {
            // If state not found
            this.state.name = `${this.state.name} is not a state`; // old way, shouldn't be seen
            this.$router.push({ name: 'NotFound' })
          } else {
            alert("Error retrieving data for this state");
            console.error(err);
          }
        });
    },
    onMapReady() {
      this.mapReady = true;
      this.setMapView();
    },
    setMapView() {
      // Checks if everything is ready to show map
      if (this.dataReady && this.mapReady) {
        this.$refs.map.leafletObject.setView(this.mapCenter, this.state.zoom);
      }
    },
  },
  computed: {
    mapCenter() {
      return [this.state.lat, this.state.lon];
    },
  },
};
</script>

<style scoped>
#map-container {
  height: 30em;
}
</style>