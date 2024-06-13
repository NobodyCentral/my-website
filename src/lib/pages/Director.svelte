<style>
    #director {
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: row;
    }

    #main {
        position: relative;

        z-index: 3;

        margin-left: clamp(2rem, 5vw, 24rem);
    }

    #main:hover ~ #background-effect {
        background-size: 7.5vmin 7.5vmin;
    }

    #main .menu-item {
        padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;

        display: block;

        color: rgb(var(--fg));

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));

        font-size: clamp(2rem, 5vw, 24rem);
        text-decoration: none;
        cursor: pointer;

        transition: opacity 250ms ease, margin-left 250ms ease;
    }

    #main:hover .menu-item {
        opacity: 0.5;
    }

    #main:focus-within .menu-item {
        opacity: 0.5;
    }

    #main:hover .menu-item:hover {
        margin-left: clamp(1rem, 2.5vw, 12rem);

        opacity: 1;
    }

    #main:focus-within .menu-item:focus {
        margin-left: clamp(1rem, 2.5vw, 12rem);

        opacity: 1;
    }
</style>


<div id='director'>
    <div id='main'>
        <a class='menu-item' href="/portfolio" hoverIndex=0 on:mouseover={hover} on:focus={hover} on:mouseleave={leave}>Portfolio</a>
        <a class='menu-item' href="/weather" hoverIndex=-25 on:mouseover={hover} on:focus={hover} on:mouseleave={leave}>Weather</a>
        <a class='menu-item' href="/startpage" hoverIndex=-50 on:mouseover={hover} on:focus={hover} on:mouseleave={leave}>Startpage</a>
    </div>

    <Background hoverIndex={hoverIndex} offset={0} size={size} />
</div>


<script>
    import Background from '../components/Background.svelte';

    let hoverIndex = 0;
    let size = 10;
    function hover(e) {
        hoverIndex = e.target.getAttribute('hoverIndex');
        size = 7.5;
    }

    function leave(e) {
        size = 10;
    }
</script>