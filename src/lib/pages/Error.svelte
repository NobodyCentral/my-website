<style>
    #error-page {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;
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

        background-image: url('https://source.unsplash.com/random/1920x1080/?mountains,landscape,lake,forest,night,stars,river,castle,galaxy,space,nebula');

		background-size: 100%; 
		background-position: 0% 50%;
		filter: blur(15px);
    }

    #error {
        min-width: 24rem;

        padding: 2.5%;

        z-index: 3;

        background-color: rgba(var(--bg2), .5);
        border-radius: clamp(0.25rem, .5vw, 6rem);

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));
    }

    #error h1 {
        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        font-size: clamp(0.5rem, 1.25vw, 6rem);
        font-weight: bold;
        text-align: center;
    }
</style>


<div id='error-page'>
    <div id='error'>
        <h1>{status}: {error}</h1>
    </div>

    <div id='background-effect'></div>
    <div id='background'></div>
</div>


<script>
    export let status;
    export let error;
</script>