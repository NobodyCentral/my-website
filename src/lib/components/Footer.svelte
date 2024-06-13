<style>
    footer {
        position: relative;

        width: 100%;
        height: max-content;

        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: rgb(var(--bg2));
        color: rgb(var(--fg));
    }

    footer h1 {
        margin-left: clamp(2rem, 5vw, 24rem);
        margin-right: clamp(2rem, 5vw, 24rem);

        font-size: clamp(1.25rem, 1.25vw, 6rem);
    }

    footer a {
        color: rgb(var(--fg));

        text-decoration: none;
        cursor: pointer;

        transition: opacity 250ms ease;
    }

    footer a:hover {
        opacity: 0.5;
    }

    footer a:focus {
        opacity: 0.5;
    }
</style>


<footer>
    <h1>
        Copyright 2024 nbdy-cntrl. All Rights Reserved.
    </h1>

    <h1>
        Made with <a href='https://kit.svelte.dev/'>SVELTEKIT</a>
    </h1>
</footer>