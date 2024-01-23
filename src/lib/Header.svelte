<script>
    export let menuOpen;

    import { onMount } from 'svelte';

    onMount(() => {
        const menuToggle = document.getElementById('menu-toggle-input');
        open = menuToggle.checked;
    })
</script>

<div id='header'>
    <h1>
        <a href='/'>NBDY-CNTRL</a>
    </h1>

    <h1 id='menu-toggle'>
        <input type='checkbox' id='menu-toggle-input' bind:checked={menuOpen} />

        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
    </h1>
</div>

<style>
    #menu-toggle {
        position: relative;

        display: block;

        -webkit-user-select: none;
        user-select: none;
    }

    #menu-toggle > input {
        position: absolute;

        width: 100%; /* Match the SVG width */
        height: 100%; /* Match the SVG height */

        display: block;

        top: -3px;
        left: -4px;

        cursor: pointer;

        opacity: 0;
        z-index: 2;

        -webkit-touch-callout: none;
    }

    #menu-toggle > svg {
        position: relative;

        width: 1em;
        height: 1em;

        display: block;

        z-index: 1;

        transition: transform 250ms ease, opacity 250ms ease;
    }

    #menu-toggle > input:checked ~ svg {
        transform: rotate(90deg);
    }

    h1 > input {
        position: relative;

        width: max-content;
        height: max-content;

        display: block;
    }

    #header {
        position: relative;

        width: 100%;
        height: max-content;

        display: flex;
        align-items: center;
        justify-content: space-between;

        z-index: 4;

        background-color: rgb(var(--bg2));
        color: rgb(var(--fg));

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));
    }

    #header > h1 {
        margin: 5px;
        margin-left: clamp(2rem, 5vw, 24rem);
        margin-right: clamp(2rem, 5vw, 24rem);

        font-size: clamp(0.5rem, 1.25vw, 6rem);
    }

    #header > h1 > a {
        text-decoration: none;
        cursor: pointer;

        color: rgb(var(--fg));

        transition: opacity 250ms ease;
    }

    #header a:hover {
        opacity: 0.5;
    }

    #header a:focus {
        opacity: 0.5;
    }

    #header input:hover ~ svg {
        opacity: 0.5;
    }
</style>