<template>
  <div>
    <state-summary v-bind:states="states"></state-summary>
    <div class="state-list-container">
      <div
        class="state-container"
        v-for="state in this.states"
        v-bind:key="state.name"
      >
        <state-detail
          v-bind:state="state"
          v-on:update-visited="updateVisited"
        ></state-detail>
      </div>
    </div>
  </div>
</template>

<script>
import StateDetail from "./StateDetail.vue";
import StateSummary from "./StateSummary.vue";

export default {
  components: {
    StateDetail,
    StateSummary,
  },
  name: "StateList",
  data() {
    return {
      states: [],
    };
  },
  mounted() {
    this.fetchAllStates();
  },
  methods: {
    fetchAllStates() {
      this.$stateService
        .getAllStates()
        .then((states) => {
          this.states = states;
        })
        .catch((err) => {
          alert("Unable to fetch list of states at this time.");
          console.error(err);
        });
    },
    updateVisited(stateName, visited) {
      this.$stateService
        .setVisited(stateName, visited)
        .then(() => {
          this.fetchAllStates();
        })
        .catch((err) => {
          alert("Unable to update state.");
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.state-list-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.state-container {
  margin: 1rem;
}
</style>