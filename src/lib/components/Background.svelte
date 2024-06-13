<style>
    #background {
        position: absolute;

        width: 100%;
        height: 100%;

        display: inline-flex;

        z-index: 1;

        background-image: url('https://unsplash.it/1920/1080?random&mountains&valleys&rivers&landscape&lake&forest&night&stars&river&castle');

		background-position: 0% 50%;
        background-size: 100% 100%;
		filter: blur(15px);
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
</style>


<div id='background-effect' hoverIndex={hoverIndex}></div>
<div id='background'></div>


<script>
    export let hoverIndex = 0;
    export let offset = 0;

    export let size = 0;

    import { onMount } from 'svelte';


    let observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'hoverindex') {

                    updateBG();
                }
            });
        });

    onMount(() => {
        const bgEffect = document.getElementById('background-effect');
        observer.observe(bgEffect, { attributes: true });
    });


    const updateBG = () => {
        const bg = document.getElementById('background-effect');
        bg.style = `background-position: ${offset}% ${hoverIndex}%; background-size: ${size}vmin ${size}vmin;`;
    }
</script>