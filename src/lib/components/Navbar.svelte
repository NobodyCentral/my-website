<style>
    nav {
        position: relative;

        width: 100%;
        height: max-content;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgb(var(--bg2));
        color: rgb(var(--fg));

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));
    }

    nav h1 {
        margin-left: clamp(2rem, 5vw, 24rem);
        margin-right: clamp(2rem, 5vw, 24rem);

        font-size: clamp(0.5rem, 1.25vw, 6rem);
    }

    nav a {
        color: rgb(var(--fg));

        text-decoration: none;
        cursor: pointer;

        transition: opacity 250ms ease;
    }

    nav a:hover {
        opacity: 0.5;
    }

    nav a:focus {
        opacity: 0.5;
    }

    #menuToggle {
        display: none;
    }

    #menuToggle ~ label {
        position: relative;

        width: 1em;
        height: 1em;

        display: block;

        cursor: pointer;

        transition: opacity 250ms ease, transform 250ms ease;
    }

    #menuToggle ~ label:hover {
        opacity: 0.5;
    }

    #menuToggle:checked ~ label {
        transform: rotate(90deg);
    }
</style>


<nav id='navbar'>
    <h1 id="logo">
        <a href="/">NBDY-CNTRL</a>
    </h1>

    <h1>
        <input type='checkbox' id='menuToggle' bind:checked={showMenu} />

        <label for='menuToggle'>
            <Menu size='1em' />
        </label>
    </h1>
</nav>


<script>
    export let showMenu;

    import { Menu } from 'lucide-svelte';
</script>