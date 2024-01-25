<style>
    #startpage {
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

    #link-grid {
        min-width: 24rem;

        padding: 2.5%;

        display: grid;
        row-gap: .25rem;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: max-content;

        z-index: 3;

        background-color: rgba(var(--bg2), .5);
        border-radius: clamp(0.25rem, .5vw, 6rem);

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg2)));
    }

    #greeting {
        grid-column: 1 / -1;

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        font-size: clamp(0.5rem, 1.25vw, 6rem);
        font-weight: bold;
        text-align: center;
    }

    #date-time {
        grid-column: 1 / -1;

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        font-size: clamp(.5rem, 1vw, 6rem);
        text-align: center;
    }

    .link-list {
        white-space: nowrap;
        list-style-type: none;

        font-size: clamp(0.5rem, 1vw, 6rem);
    }

    .link-list h1 {
        margin-left: .5rem;

        display: inline-block;

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        font-size: clamp(0.5rem, 1.25vw, 6rem);
    }

    .link-list li {
        margin-left: 2.8rem;
    }

    .link-list li a {
        color: rgb(var(--fg));

        filter: drop-shadow(0 0 0.5rem rgb(var(--bg)));

        text-decoration: none;

        transition: opacity 250ms ease, margin-left 250ms ease;
    }

    .link-list:hover li a {
        opacity: .5;
    }

    .link-list:focus-within li a {
        opacity: .5;
    }

    .link-list:hover li:hover a {
        margin-left: .5rem;

        opacity: 1;
    }

    .link-list:focus-within li:focus-within a {
        margin-left: .5rem;

        opacity: 1;
    }
</style>


<div id='startpage'>
    <div id='link-grid'>
        <div id='greeting'>{greeting}</div>
        <div id='date-time'>{dateTime}</div>

        <div class='link-list'>
            <h1>~/general</h1>
            <li><a href='https://www.google.com'>google</a></li>
            <li><a href='https://www.duckduckgo.com'>duckduckgo</a></li>
            <li><a href='https://www.youtube.com'>youtube</a></li>
            <li><a href='https://www.twitch.tv'>twitch</a></li>
            <li>..</li>
        </div>

        <div class='link-list'>
            <h1>~/productivity</h1>
            <li><a href='https://mail.google.com/mail'>gmail</a></li>
            <li><a href='https://outlook.live.com'>outlook</a></li>
            <li><a href='https://drive.google.com/drive'>google drive</a></li>
            <li>..</li>
            <li>..</li>
        </div>

        <div class='link-list'>
            <h1>~/media</h1>
            <li><a href='https://www.netflix.com'>netflix</a></li>
            <li><a href='https://www.disneyplus.com'>disney+</a></li>
            <li>..</li>
            <li>..</li>
            <li>..</li>
        </div>

        <div class='link-list'>
            <h1>~/dev</h1>
            <li><a href='https://github.com'>github</a></li>
            <li><a href='https://discord.com/developers/applications'>discord portal</a></li>
            <li>..</li>
            <li>..</li>
            <li>..</li>
        </div>
    </div>

    <div id='background-effect'></div>
    <div id='background'></div>
</div>


<script>
    let hoverIndex = 0;
    function hover(e) {
        hoverIndex = e.target.getAttribute('hoverIndex');
    }

    const greetings = ["Welcome", "Ahoy", "Greetings", "Hello", "Hey", "Howdy", "G'day", "Heya"];
    let greeting = greetings[Math.floor(Math.random() * greetings.length)];

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
    };

    setInterval(setTime, 1000);

    setTime();
</script>