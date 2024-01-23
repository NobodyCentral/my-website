<script>
    export let menuOpen;

    import { theme } from '../stores.js';
    import { FontAwesomeIcon as Fa } from 'fontawesome-svelte';
    import { faBars } from '@fortawesome/free-solid-svg-icons';
    import { onMount } from 'svelte';

    onMount(() => {
        document.getElementById($theme).checked = true;
    })

    const checkTheme = (e) => {
        if (e.target.checked === true) {
            theme.set(e.target.id);
        }
    }
</script>

<nav id='nav-menu' open={menuOpen}>
    <div id='theme-switcher'>
        <strong>Theme</strong>
        
        <div id='theme-switch'>
            <input type="radio" id="light" name="themes" on:change={checkTheme} />
            <label for="light">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg>Light
                </span>
            </label>
            <input type="radio" id="dark" name="themes" on:change={checkTheme} />
            <label for="dark">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>Dark
                </span>
            </label>

            <span class="slider"></span>
        </div> 
    </div>
</nav>

<style>
    #theme-switcher {
        padding: 2.5%;

        background-color: rgba(var(--fg), 0.2);
        border-radius: clamp(0.25rem, .5vw, 6rem);
    }

    #theme-switcher > #theme-switch {
        position: relative;

        padding: 0 2.5%;

        display: flex;
        align-items: center;
        overflow: hidden;

        background-color: rgb(var(--bg));
        border-radius: clamp(0.25rem, .5vw, 6rem);
    }

    #theme-switcher > #theme-switch > input {
        display: none;
    }

    #theme-switcher > #theme-switch > #dark:checked ~ .slider {
        transform: translatex(100%);
    }


    #theme-switcher > #theme-switch > label {
        position: relative;

        width: calc(100% / 2);

        z-index: 2;

        font-size: clamp(.75rem, 1vw, 6rem);
        font-weight: 500;

        transition: opacity 250ms ease;
    }

    #theme-switcher > #theme-switch > label:hover {
        opacity: .5;
    }

    #theme-switcher > #theme-switch > label > span {
        padding: clamp(.5rem, .75vw, 6rem);;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #theme-switcher > #theme-switch > label > span > svg {
        width: 1em;
        height: 1em;

        margin-right: .5em;

        display: inline-block;

        fill: rgb(var(--fg));
    }

    #theme-switcher > #theme-switch > .slider {
        position: absolute;

        width: calc((100% - 1em) / 2);
        height: calc(100% - 1em);

        z-index: 1;

        background-color: rgb(var(--bg2));
        border-radius: clamp(0.25rem, .5vw, 6rem);

        transition: transform 250ms ease;
    }

    #theme-switcher > strong {
        font-size: clamp(.75rem, 1vw, 6rem);
    }

    nav {
		width: 15%;

        padding: clamp(.5rem, .625vw, 6rem);
        transform: translate(105%, 0);

        background-color: rgb(var(--bg));
        color: rgb(var(--fg));

        z-index: 3;

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        transition: transform 250ms ease;
	}

    nav[open='true'] {
        transform: translate(0%, 0);
    }
</style>