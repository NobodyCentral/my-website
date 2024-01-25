<style>
    #director {
        width: 100%;

        display: flex;
        align-items: center;
        flex-direction: row;
    }

    #background-effect {
        position: absolute;

        width: 100%;
        height: 100%;

        z-index: 2;

        background-image:
        radial-gradient(rgba(var(--fg), 0.1) 9%, transparent 9%);
        background-position: 0% 0%;
        background-size: 10vmin 10vmin;

		transition: opacity 250ms ease, background-size 500ms ease, background-position 500ms ease;
    }

    #background {
        position: absolute;

        width: 100%;
        height: 100%;

        display: inline-flex;

        z-index: 1;

        background-image: url('https://source.unsplash.com/random/1920x1080/?mountains,landscape,lake,forest,night,stars,river,castle');

		background-size: 100%; 
		background-position: 0% 50%;
		filter: blur(15px);
    }

    #director[hoverIndex='0'] #background-effect {
        background-position: 0% 50%;
    }

    #director[hoverIndex='1'] #background-effect {
        background-position: 0% 25%;
    }

    #director[hoverIndex='2'] #background-effect {
        background-position: 0% 0%;
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


<div id='director' hoverIndex={hoverIndex}>
    <div id='main'>
        <a class='menu-item' href="/portfolio" hoverIndex=0 on:mouseover={hover} on:focus={hover}>Portfolio</a>
        <a class='menu-item' href="/weather" hoverIndex=1 on:mouseover={hover} on:focus={hover}>Weather</a>
        <a class='menu-item' href="/startpage" hoverIndex=2 on:mouseover={hover} on:focus={hover}>Startpage</a>
    </div>

    <div id='background-effect'></div>
    <div id='background'></div>
</div>


<script>
    let hoverIndex = 0;
    function hover(e) {
        hoverIndex = e.target.getAttribute('hoverIndex');
    }
</script>