<template>
  <div>
    <h3>List of states you have visited:</h3>
    <div class="">
      <div
        class=""
        v-for="state in this.states"
        v-bind:key="state.name"
      >
        <h4>{{ state.name }}</h4>
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
        .getVisited()
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