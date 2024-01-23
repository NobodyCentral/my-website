<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'
    import { marked } from 'marked'
    import { mangle } from "marked-mangle"
    import { gfmHeadingId } from "marked-gfm-heading-id"

    export default {
        components: {
            Header,
            Footer
        },
        data() {
            return {
                markdown: ''
            }
        },
        mounted() {
            fetch('/pages/Home.md')
            .then(response => response.text())
            .then(data => {
                this.markdown = data;
            })
            .catch(error => {
                console.error(error);
                this.markdown = '# This page seems to be empty. \n --- \n Oh well, nothing to do here, go home.';
            });
        },
        computed: {
            markdownToHTML() {
                marked.use(mangle());
                marked.use(gfmHeadingId());

                return marked.parse(this.markdown);
            }
        }
    }
</script>

<template>
    <div id='menu'>
        <Header page='Home' />

        <div id='content_body'>
            <div v-html="markdownToHTML">
                
            </div>
        </div>

        <div id='bg-pattern'></div>
        
        <Footer />
    </div>
</template>

<style scoped>
    #menu {
        width: 100%;
        min-height: 100vh;
        display: flex;

        position: relative;

        flex-direction: column;
    }

    #menu > #main {
        z-index: 10;
    }

    #content_body {
        width: 100vw;
        height: 100%;

        padding: clamp(8rem, 20vw, 96rem);
        padding-top: 0px;
        padding-bottom: clamp(2rem, 5vw, 24rem);

        color: rgb(var(--foreground-rgb));

        z-index: 1;
    }

    @media only screen and (max-device-width: 1000px) {
        #content_body {
            width: 100vw;
            height: 100%;

            padding: clamp(4rem, 10vw, 48rem);
            padding-top: 0px;
            padding-bottom: clamp(2rem, 5vw, 24rem);

            color: rgb(var(--foreground-rgb));

            font-size: clamp(0.5rem, 1.25vw, 6rem);

            z-index: 1;
        }
    }

    #content_body > div {
        padding: clamp(0.25rem, 0.625vw, 3rem);

        word-wrap: break-word;

        background-color: rgb(var(--footer-rgb));
    }

    #bg-pattern {
        width: 100%;
        height: 100%;
        
        background-image:
        radial-gradient(rgba(var(--foreground-rgb), 0.1) 9%, transparent 9%);
        background-position: 0% 0%;
        background-size: 5vmin 5vmin;
        
        position: absolute;
        z-index: 0;
        
        transition: opacity 500ms ease, background-size 500ms ease, background-position 500ms ease;
    }
</style>