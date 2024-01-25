<style>
    #menu {
        position: absolute;

        width: 15%;
        height: 100%;

        transform: translate(100vw, 0);

        display: flex;
        justify-content: space-between;
        flex-direction: column;

        z-index: 3;

        background-color: rgb(var(--bg));
        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        opacity: 0;

        transition: transform 250ms ease, opacity 250ms ease;
    }

    #menu[showMenu='true'] {
        transform: translate(calc(100vw - calc(0.15 * 100vw)), 0);

        opacity: 1;
    }

    #theme-switcher {
        height: max-content;

        margin: 2.5%;
        padding: 2.5%;

        background-color: rgb(var(--bg2));
        border-radius: clamp(0.25rem, .5vw, 6rem);

        font-size: clamp(.75rem, 1vw, 6rem);
    }

    #theme-switcher > span {
        position: relative;

        padding: 1.25%;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgb(var(--bg));
        border-radius: clamp(0.25rem, .5vw, 6rem);
    }

    #theme-switcher > span > input {
        display: none;
    }

    #theme-switcher > span label {
        position: relative;

        width: calc(100% / 2);

        margin: 5% 1.25%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        z-index: 2;

        font-size: clamp(.75rem, 1vw, 6rem);
        cursor: pointer;

        transition: opacity 250ms ease;
    }

    #theme-switcher > span label span {
        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: .25em;
    }

    #theme-switcher > span label icon {
        position: relative;

        width: 1em;
        height: 1em;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    #theme-switcher > span label:hover {
        opacity: .5;
    }

    #light:checked ~ label[for='light'] icon {
        animation: spin 10s linear infinite;
    }

    #dark:checked ~ label[for='dark'] icon {
        animation: spin 10s linear infinite;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    #theme-switcher #slider {
        position: absolute;

        width: calc(((100% - 6.25%) / 2));
        height: calc(100% - .75em);

        margin: 1.25%;

        z-index: 1;

        background-color: rgb(var(--bg2));
        border-radius: clamp(0.25rem, .5vw, 6rem);

        transition: transform 250ms ease;
    }

    #theme-switcher #dark:checked ~ #slider {
        transform: translate(104%);
    }

    #socials {
        height: max-content;

        margin: 2.5%;
        padding: 2.5%;

        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;

        background-color: rgb(var(--bg2));
        border-radius: clamp(0.25rem, .5vw, 6rem);

        font-size: clamp(.75rem, 1vw, 6rem);
        font-weight: bold;
    }

    #socials > a {
        width: 1em;
        height: 1em;

        display: flex;
        align-items: center;
        justify-content: center;

        color: rgb(var(--fg));
        font-weight: bold;
        text-decoration: none;

        transition: opacity 250ms ease;
    }

    #socials > a:hover {
        opacity: .5;
    }

    #socials > a:focus {
        opacity: .5;
    }
</style>


<div id='menu' showMenu={showMenu}>
    <div id='top'>
        <div id='theme-switcher'>
            Theme
    
            <span>
                <input type='radio' id='light' name='theme' on:change={updateTheme}>
                <label for='light'>
                    <span>
                        <icon>
                            <Sun size='1em' />
                        </icon>
                        Light
                    </span>
                </label>
                <input type='radio' id='dark' name='theme' on:change={updateTheme}>
                <label for='dark'>
                    <span>
                        <icon>
                            <Moon size='1em' />
                        </icon>
                        Dark
                    </span>
                </label>
    
                <span id='slider'></span>
            </span>
        </div>
    </div>

    <div id='bottom'>
        <div id='socials'>
            <a href='https://github.com/nbdy-cntrl' target='_blank'>
                <Github size='1em' />
            </a>

            -|-

            <a href='https://youtube.com/@NobodyCentral' target='_blank'>
                <Youtube size='1em' />
            </a>

            -|-

            <a href='https://twitch.tv/nobody_central' target='_blank'>
                <Twitch size='1em' />
            </a>
        </div>
    </div>
</div>


<script>
    export let showMenu;

    import { Sun, Moon, Github, Youtube, Twitch } from 'lucide-svelte';

    import { theme } from '../../stores.js';


    const updateTheme = (e) => {
        if (e.target.checked === true) {
            theme.set(e.target.id);
        }
    }
</script>