<svelte:head>
	<title>~/index - nbdy-cntrl.dev</title>
</svelte:head>

<script>
	import { theme } from '../stores.js';
	import Header from '$lib/Header.svelte';
    import Footer from '$lib/Footer.svelte';
	import NavMenu from '$lib/Nav-Menu.svelte';
  	import { onMount } from 'svelte';

	let hoverIndex = 0;

	const hover = (e) => {
		hoverIndex = e.target.getAttribute('hoverIndex');
	}

	let headerHeight;

	onMount(() => {
		const header = document.getElementById('header');
		const content = document.getElementById('content');
		headerHeight = header.clientHeight;
		content.style.height = `calc(100vh - ${headerHeight}px)`;


		const resize = () => {
			headerHeight = header.clientHeight;
			content.style.height = `calc(100vh - ${headerHeight}px)`;
		};
		
		window.addEventListener('resize', resize);

		return () => {
			window.removeEventListener('resize', resize);
		};
	});

	let menuOpen = false;
</script>

<div theme={$theme}>
	<Header bind:menuOpen />

	<div id='content'>
		<div id='background' hoverIndex={hoverIndex}>
			<div id='menu'>
				<a class='menu-item' href="/portfolio" hoverIndex=0 on:mouseover={hover} on:focus={hover}>Portfolio</a>
				<a class='menu-item' href="/weather" hoverIndex=1 on:mouseover={hover} on:focus={hover}>Weather</a>
				<a class='menu-item' href="/startpage" hoverIndex=2 on:mouseover={hover} on:focus={hover}>Startpage</a>
			</div>
		
			<div id='background-effect'></div>
			<div id='background-image'></div>
		</div>

		<NavMenu bind:menuOpen />
	</div>

	<Footer />
</div>

<style>
	#content {
		width: 100%;

		display: flex;
		flex-direction: row;

		overflow: hidden;
	}

	#background {
		width: 100%;
		min-height: 100%;

		display: flex;
		align-items: center;
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

	#background-image {
		position: absolute;

		width: 100%;
		height: 100%;

		z-index: 1;

		background-image: url('https://source.unsplash.com/random/1920x1080/?mountains,landscape,lake,forest,night,stars,river,castle');

		background-size: 100%; 
		background-position: 0% 50%;
		filter: blur(15px);
	}

	#menu {
		position: fixed;
		
		margin-left: clamp(2rem, 5vw, 24rem);

		z-index: 5;
	}

	.menu-item {
		padding: clamp(0.25rem, 0.5vw, 1rem) 0rem;

		display: block;

		text-decoration: none;
		cursor: pointer;

		color: rgb(var(--fg));
		font-size: clamp(2rem, 5vw, 24rem);

		filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));

		transition: opacity 250ms ease, margin-left 250ms ease;
	}

	#menu:hover > .menu-item {
		opacity: 0.5;
	}

	#menu:focus-within > .menu-item {
		opacity: 0.5;
	}

	#menu:hover > .menu-item:hover {
		margin-left: clamp(1rem, 2.5vw, 12rem);

		opacity: 1;
	}

	#menu:focus-within > .menu-item:focus {
		margin-left: clamp(1rem, 2.5vw, 12rem);

		opacity: 1;
	}

	#menu:hover ~ #background-effect {
		background-size: 7.5vmin 7.5vmin;

		opacity: .5;
	}

	#menu:focus-within ~ #background-effect {
		background-size: 7.5vmin 7.5vmin;

		opacity: .5;
	}

	#background[hoverIndex='0'] > #background-effect {
		background-position: 0% 0%;
	}

	#background[hoverIndex='1'] > #background-effect {
		background-position: 0% -25%;
	}

	#background[hoverIndex='2'] > #background-effect {
		background-position: 0% -50%;
	}
</style>