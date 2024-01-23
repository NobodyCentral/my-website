<head>
    <title>~/startpage - nbdy-cntrl.dev</title>
</head>

<script>
    import Footer from '$lib/Footer.svelte';

    let greeting = "";

    const setGreeting = () => {
        const greetings = ["Welcome", "Ahoy", "Greetings", "Hello", "Hey", "Howdy", "G'day", "Heya"];

        greeting = greetings[Math.floor(Math.random() * greetings.length)];
    }

    setGreeting();

    let dateTime = "";

    const setTime = () => {
		const date = new Date();

        const options = {
            year: '2-digit',
            month: '2-digit',
            weekday: 'long',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };

        const formattedDate = date.toLocaleString('en-GB', options);
        const [dayOfWeek, dateStr, time] = formattedDate.split(', ');

        dateTime = `${dayOfWeek} 󰍴 ${time} 󰍴 ${dateStr}`;
	}

    setInterval(setTime, 1000);

    setTime();
</script>

<div id='background'>
    <link-grid>
        <greeting>{greeting}!</greeting>
        <date-time>{dateTime}</date-time>

        <link-list>
            <h1>~/general</h1>
            <li><a href='https://www.google.com'>google</a></li>
            <li><a href='https://www.duckduckgo.com'>duckduckgo</a></li>
            <li><a href='https://www.youtube.com'>youtube</a></li>
            <li><a href='https://www.twitch.tv'>twitch</a></li>
            <li><a>..</a></li>
        </link-list>

        <link-list>
            <h1>~/productivity</h1>
            <li><a href='https://mail.google.com/mail'>gmail</a></li>
            <li><a href='https://outlook.live.com'>outlook</a></li>
            <li><a href='https://drive.google.com/drive'>google drive</a></li>
            <li><a>..</a></li>
            <li><a>..</a></li>
        </link-list>

        <link-list>
            <h1>~/media</h1>
            <li><a href='https://www.netflix.com'>netflix</a></li>
            <li><a href='https://www.disneyplus.com'>disney+</a></li>
            <li><a>..</a></li>
            <li><a>..</a></li>
            <li><a>..</a></li>
        </link-list>

        <link-list>
            <h1>~/dev</h1>
            <li><a href='https://github.com'>github</a></li>
            <li><a href='https://discord.com/developers/applications'>discord portal</a></li>
            <li><a>..</a></li>
            <li><a>..</a></li>
            <li><a>..</a></li>
        </link-list>
    </link-grid>

    <div id='background-image'></div>
	<div id='background-effect'></div>
</div>

<Footer />

<style>
    #background {
		position: relative;

		width: 100%;
		min-height: 100vh;

		display: flex;
		align-items: center;
        justify-content: center;
	}

	#background-image {
		position: absolute;

		width: 100%;
		height: 100%;

		background-color: rgba(var(--davys-gray), .5);
        background-image: url('https://source.unsplash.com/random/1920x1080/?night,landscape,lake,forest,nightsky,stars,river,castle');
		
		background-size: 100%; 
		background-position: 0% 50%;
		filter: blur(15px);
	}

	#background-effect {
		position: absolute;

		width: 100%;
		height: 100%;

		z-index: -0;

		background-image:
        radial-gradient(rgba(var(--timberwolf), 0.1) 9%, transparent 9%);
        background-position: 0% 0%;
        background-size: 10vmin 10vmin;

		transition: opacity 250ms ease, background-size 500ms ease, background-position 500ms ease;
	}

    link-grid {
		min-width: 24rem;

        display: grid;

        padding: 2rem;

		z-index: 2;

        row-gap: .25rem;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: max-content;

        background-color: rgba(var(--eerie-black), 0.7);
        border-radius: .5rem;
	}

    greeting {
        grid-column: 1 / -1;

        font-size: 2rem;
        font-weight: bold;
        text-align: center;
    }

    date-time {
        grid-column: 1 / -1;

        font-size: 1.25rem;
        font-weight: bold;
        text-align: center;
    }

    link-list {
        white-space: nowrap;
        list-style-type: none;
    }

    link-list > h1 {
        display: inline-block;

        margin-left: 1rem;

        text-align: center;
        
        font-size: 1.35rem;
        font-weight: bold;
        line-height: 2rem;

        color: rgb(var(--spring-green));
    }

    link-list > li {
        margin-left: 2.8rem;
    }

    link-list > li > a {
        font-size: 1.25rem;
        text-decoration: none;

        color: rgb(var(--timberwolf));

        transition: opacity 250ms ease, margin-left 250ms ease;
    }

    link-list:hover > li > a {
        opacity: .5;
    }

    link-list:focus-within > li > a {
        opacity: .5;
    }

    link-list:hover > li:hover > a {
        margin-left: .5rem;

        opacity: 1;
    }

    link-list:focus-within > li:focus-within > a {
        margin-left: .5rem;

        opacity: 1;
    }
</style>