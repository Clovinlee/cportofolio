<template>
    <nav class="d-inline-flex flex-column justify-content-around p-2 ps-3">
        <router-link to="/" class="rotate-vertical">home</router-link>
        <router-link to="/about" class="rotate-vertical">about</router-link>
        <router-link to="/projects" class="rotate-vertical">projects</router-link>
        <router-link to="/contacts" class="rotate-vertical">contacts</router-link>
    </nav>
</template>


<style scoped>
nav {
    font-family: 'Bebas Neue', sans-serif;
    background-image: url(/images/Noisy\ Net.png);
    z-index: 99;
}

nav a {
    font-size: 1.7rem;
    text-transform: uppercase;
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    color: var(--white);
}

nav a:hover {
    color: var(--darker-white);
}

nav a::before {
    content: '';
    /* Required for pseudo-elements */
    display: inline-block;
    width: 10px;
    /* Adjust the size as needed */
    height: 10px;
    /* Adjust the size as needed */
    border-radius: 50%;
    /* Makes it a circle */
    margin-left: 3.5px;
    margin-bottom: 10px;
}

nav a.router-link-active::before {
    background-color: var(--orange);

}
</style>