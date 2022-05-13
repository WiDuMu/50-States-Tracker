<template>

  <div class="state-info">
    <span class="state-name">{{ state.name }}</span>
      <input class="state-visited" type="checkbox" v-model="this.visited" />
      <div>
      <router-link
        v-bind:to="{ name: 'StateMap', params: { state: state.name } }"
      >
        <img class="map-icon" src="@/assets/icons8-map-96.png" />
      </router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: "StateDetail",
  emits: ["update-visited"],
  props: {
    state: Object,
  },
  data() {
    return {
      visited: this.state.visited, // Copying data
    };
  },
  watch: {
    visited() {
      this.$emit("update-visited", this.state.name, this.visited);
    },
  },
};
</script>

<style scoped>
.state-info {
  padding: 1rem;
  height: 8rem;
  width: 10rem;
  border: 1px gainsboro solid;
  border-radius: 0.3rem;
  background-color: whitesmoke;
}

.state-visited {
  margin: 1rem;
}

.map-icon {
  width: 3rem;
  height: 3rem;
}
</style>