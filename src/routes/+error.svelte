<style>
    #content {
        position: relative;

        width: 100%;
        min-height: calc(100vh - var(--header-height));

        display: flex;
        flex-direction: row;

        overflow: hidden;
    }
</style>


<svelte:head>
    <title>~/error - nbdy-cntrl.dev</title>
</svelte:head>


<div id="container">
    <Navbar bind:showMenu={$showMenu} />

    <div id="content">
        <Error status={$page.status} error={$page.error.message} />

        <Menu bind:showMenu={$showMenu} />
    </div>

    <Footer />
</div>


<script>
    import { theme, showMenu } from '../stores.js';

    import Navbar from '$lib/components/Navbar.svelte';
    import Menu from '$lib/components/Menu.svelte';
    import Footer from '$lib/components/Footer.svelte';

    import Error from '$lib/pages/Error.svelte';

    import { page } from '$app/stores';
    import { onMount } from 'svelte';


    onMount(() => {
        const root = document.querySelector(':root');
        const navbar = document.getElementById('navbar');

        root.style.setProperty('--header-height', navbar.clientHeight + 'px');

        window.addEventListener('resize', () => {
            root.style.setProperty('--header-height', navbar.clientHeight + 'px');
        });


        const updateTheme = () => {
            const body = document.body;
            body.classList = $theme + '-mode'

            localStorage.setItem('theme', $theme);
            document.getElementById($theme).checked = true;
        }

        theme.set(localStorage.getItem('theme') || 'dark');
        theme.subscribe(updateTheme);

        updateTheme();
        document.getElementById($theme).checked = true;
    });
</script>