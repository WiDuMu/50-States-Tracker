<template>
    <div class="fourohfour">
        <h2>404 Not Found</h2>
        <div>
            Would you like to go <router-link to="/">Home?</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
}
</script>

<style scoped>
.fourohfour {
    height: 60vh
}
</style>