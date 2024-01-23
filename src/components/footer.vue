<script>

</script>

<template>
    <div id='footer'>
        <h1>
            Copyright © nbdy-cntrl | <a href='https://github.com/NobodyCentral'>GitHub</a> | <a href='https://www.youtube.com/@NobodyCentral'>YouTube</a> | <a href='https://www.paypal.com/donate/?business=92BVMZE5HURMJ&no_recurring=1&item_name=A+cool+programmer.&currency_code=CAD'>PayPal</a> | <a href='https://www.twitch.tv/nobody_central'>Twitch</a>
        </h1>
  </div>
</template>

<style scoped>
    #footer {
        width: 100%;
        height: max-content;
        position: relative;

        display: flex;

        align-items: center;
        justify-content: space-between;

        margin-top: auto;
        
        background-color: rgb(var(--footer-rgb));
        color: rgb(var(--footer-foreground-rgb));
        
        user-select: none;
        text-decoration: none;
    }

    #footer > h1 {
        margin: 5px;
        margin-left: clamp(2rem, 5vw, 24rem);
        font-size: clamp(0.5rem, 1.25vw, 6rem);
    }

    #footer > h1 > a {
        color: rgb(var(--footer-foreground-rgb));
        text-decoration: none;
        transition: opacity 500ms ease;
        cursor: pointer;
    }

    #footer a:hover {
        opacity: 0.5;
    }
</style>