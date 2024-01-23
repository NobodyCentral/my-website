<script>
    export default {
        name: 'Header',
        props: ['page']
    }
</script>

<template>
    <div id='main'>
        <span id='header'>
            <span class='logo'>
                <strong id='logo'>NBDY-CNTRL</strong>
                <strong id='spacer'>-</strong>
                <router-link id='back' to='/'>Back</router-link>
            </span>

            <strong>{{page}}</strong>
        </span>
    </div>
</template>

<style scoped>
    #header {
        color: rgb(var(--foreground-rgb));

        top: 0px;
        left: 0px;

        width: 100vw;
        height: fit-content;

        padding: clamp(2rem, 5vw, 24rem);

        display: flex;

        justify-content: space-between;

        font-size: clamp(1rem, 2.5vw, 12rem);

        user-select: none;

        z-index: 2;
    }

    #header > .logo > #spacer {
        margin-left: clamp(0.25rem, 0.625vw, 3rem);
        margin-right: clamp(0.25rem, 0.625vw, 3rem);

        font-size: clamp(0.5rem, 1.25vw, 6rem);

        opacity: 0.75;
    }

    #header > .logo > #back {
        font-size: clamp(0.5rem, 1.25vw, 6rem);

        color: rgb(var(--foreground-rgb));

        text-decoration: none;

        opacity: 0.75;

        transition: opacity 500ms ease;
    }

    @media only screen and (max-device-width: 1000px) {
        #header > .logo > #back {
        font-size: clamp(0.75rem, 2vw, 9rem);

        color: rgb(var(--foreground-rgb));

        text-decoration: none;

        opacity: 0.75;

        transition: opacity 500ms ease;
    }
    }

    #header > .logo > #back:hover {
        opacity: 0.25;
    }
</style>