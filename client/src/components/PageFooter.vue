<template>
    <div class="footer">
        <div class="links">
        <span class="p-3"><router-link to="/">Home</router-link></span>

        <span class="p-3"><router-link to="/about">About site</router-link></span>
        </div>
        <p>Header image credit: <a href="https://unsplash.com/photos/6V2vCZ2hYtY"> REVOLT on Unsplash </a></p>
        <p>Map icon credit: <a href="https://icons8.com/icon/43632/map">Icon</a> by <a href="https://icons8.com">Icons8</a></p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.p-3 {
    padding: 3px;
}
.links {
    margin: 3px;
    display: flex;
    justify-content: space-evenly;
}
</style>