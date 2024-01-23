<script>
    import Footer from '../components/footer.vue'

    export default {
        components: {
            Footer
        },
        data() {
            return {
            activeIndex: 0
            }
        }
    }
</script>

<template>
    <div id='menu' v-bind:active-index="activeIndex">
        <div id='menu-items'>
            <router-link class='menu-item' v-on:mouseover="activeIndex = 0" to="/Home">Home</router-link>
            <router-link class='menu-item' v-on:mouseover="activeIndex = 1" to="/Minecraft">Minecraft</router-link>
            <router-link class='menu-item' v-on:mouseover="activeIndex = 2" to="/Programming">Programming</router-link>
            <router-link class='menu-item' v-on:mouseover="activeIndex = 3" to="/Twitch">Twitch</router-link>
        </div>

        <div id='bg-pattern'></div>
        <Footer />
    </div>
</template>

<style scoped>
    #menu {
        width: 100%;
        min-height: 100vh;
        display: flex;

        position: relative;

        align-items: center;
    }

    #footer {
        position: absolute;
        bottom: 0px;
    }

    .menu-item {
        color: rgb(var(--foreground-rgb));
        font-size: clamp(2rem, 5vw, 24rem);
        user-select: none;
        
        display: block;
        text-decoration: none;
        cursor: pointer;
        padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;
        
        transition: opacity 500ms ease, margin-left 500ms ease;
    }

    #menu-items {
        margin-left: clamp(2rem, 5vw, 24rem);
        
        position: relative;
        z-index: 2;
    }

    #menu-items:hover > .menu-item {
        opacity: 0.5;
    }

    #menu-items:hover > .menu-item:hover {
        opacity: 1;
        margin-left: clamp(1rem, 2.5vw, 12rem);
    }

    #bg-pattern {
        width: 100%;
        height: 100%;
        
        background-image:
        radial-gradient(rgba(var(--foreground-rgb), 0.1) 9%, transparent 9%);
        background-position: 0% 0%;
        background-size: 5vmin 5vmin;
        
        position: absolute;
        z-index: 0;
        
        transition: opacity 500ms ease, background-size 500ms ease, background-position 500ms ease;
    }

    #menu-items:hover ~ #bg-pattern {
        background-size: 4vmin 4vmin;
        opacity: 0.5;
    }

    #menu[active-index='0'] > #bg-pattern {
        background-position: 0% 0%;
    }

    #menu[active-index='1'] > #bg-pattern {
        background-position: 0% -25%;
    }

    #menu[active-index='2'] > #bg-pattern {
        background-position: 0% -50%;
    }

    #menu[active-index='3'] > #bg-pattern {
        background-position: 0% -75%;
    }
</style>