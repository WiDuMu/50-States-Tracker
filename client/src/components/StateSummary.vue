<template>
    <div v-if="states.length > 0">
        <h3 v-if="!areAllVisited">You have visited {{ totalVisited }} {{ units }}</h3>
        <h3 id="all-visited-message" v-else>You have visited all of the states!</h3>
    </div>
</template>

<script>
export default {
    name: 'StateSummary',
    props: {
        states: Array,
    },
    computed: {
        totalVisited() {
            let visitedCount = 0
            this.states.forEach(state => {
                if (state.visited) {
                    visitedCount++
                }                
            });
            return visitedCount
        },
        areAllVisited() {
            // Checks if all states are visited
            return this.totalVisited === this.states.length
        },
        units() {
            if (this.totalVisited === 1) {
                return 'state'
            } else {
                return 'states'
            }
        }
    }
}
</script>

<style scoped>
#all-visited-message {
    color: brown;
    font-weight: 600;
}
</style>