<template>
    <div id="header">
        <h1 id="title">Have you visted every state?</h1>
    </div>
</template>

<script>
export default {
    name: 'PageHeader',
}
</script>

<style scoped>

#header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    background-color: saddlebrown;
    background-image: url('~@/assets/map_header.jpg');
    background-position: center;
    background-size: cover;
}

#title {
    text-shadow: 1px 1px 3px black;
    font-weight: 500;
    color: ghostwhite;
}

</style>