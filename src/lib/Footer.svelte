<div id='footer'>
    <h1>
        Copyright 2024 nbdy-cntrl. All Rights Reserved -|- <a href='https://github.com/NobodyCentral'>GitHub</a> | <a href='https://www.youtube.com/@NobodyCentral'>YouTube</a> | <a href='https://www.twitch.tv/nobody_central'>Twitch</a>
    </h1>
    <h1>
        Made with <a href='https://kit.svelte.dev/'>SVELTEKIT</a>
    </h1>
</div>

<style>
    #footer {
        position: relative;

        width: 100%;
        height: max-content;

        display: flex;
        align-items: center;
        justify-content: space-between;

        z-index: 4;

        background-color: rgb(var(--bg2));
        color: rgb(var(--fg));
    }

    #footer > h1 {
        margin: 5px;
        margin-left: clamp(2rem, 5vw, 24rem);
        margin-right: clamp(2rem, 5vw, 24rem);

        font-size: clamp(0.5rem, 1.25vw, 6rem);
    }

    #footer > h1 > a {
        text-decoration: none;
        cursor: pointer;

        color: rgb(var(--fg));

        transition: opacity 250ms ease;
    }

    #footer a:hover {
        opacity: 0.5;
    }

    #footer a:focus {
        opacity: 0.5;
    }
</style>