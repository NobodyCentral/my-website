<script>
    import Header from '../components/header.vue'
    import Footer from '../components/footer.vue'

    export default {
        components: {
            Header,
            Footer
        },
        mounted() {
            var Space = {
            init: function(){
                var self = this;
                this.config = {
                perspective: 3,
                star_color: '255, 255, 255',
                speed: 1,
                stars_count: 2
                };
                this.canvas = document.getElementById('canvas');
                this.context = canvas.getContext('2d');
                this.start();
                window.onresize = function(){
                self.start();
                };
            },

            start: function(){
                var self = this;

                this.canvas.width  = this.canvas.offsetWidth;
                this.canvas.height = this.canvas.offsetHeight;
                this.canvas_center_x = this.canvas.width / 2;
                this.canvas_center_y = this.canvas.height / 2;

                this.stars_count = this.canvas.width / this.config.stars_count;
                this.focal_length = this.canvas.width / this.config.perspective;
                this.speed = this.config.speed * this.canvas.width / 2000;

                this.stars = [];

                for(let i = 0; i < this.stars_count; i++){
                this.stars.push({
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    z: Math.random() * this.canvas.width,
                });
                }

                window.cancelAnimationFrame(this.animation_frame);
                this.canvas.style.opacity = 1;

                self.render();
            },

            render: function(){
                var self = this;
                this.animation_frame = window.requestAnimationFrame(function(){
                self.render();
                });
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                for(var i = 0, length = this.stars.length; i < length; i += 1){
                var star = this.stars[i];
                star.z -= this.speed;
                if(star.z <= 0) {
                    this.stars[i] = {
                    x: Math.random() * this.canvas.width,
                    y: Math.random() * this.canvas.height,
                    z: this.canvas.width,
                    };
                }

                var star_x = (star.x - this.canvas_center_x) * (this.focal_length / star.z) + this.canvas_center_x;
                var star_y = (star.y - this.canvas_center_y) * (this.focal_length / star.z) + this.canvas_center_y;
                var star_radius  = Math.max(0, 1.4 * (this.focal_length / star.z) / 2);
                var star_opacity = 1.2 - star.z / this.canvas.width;
                var cow_width = Math.max(0.1, 100 * (this.focal_length / star.z) / 2);

                if(star.cow){
                    this.context.save();
                    this.context.translate((star_x-cow_width)+(cow_width/2), (star_y-cow_width)+(cow_width/2));
                    this.context.rotate(star.z/star.rotation_speed);
                    this.context.translate(-((star_x-cow_width)+(cow_width/2)), -((star_y-cow_width)+(cow_width/2)));
                    this.context.globalAlpha = star_opacity;
                    this.context.drawImage(this.cow, 0, 0, this.cow.width, this.cow.width, star_x-cow_width, star_y-cow_width, cow_width, cow_width);
                    this.context.restore();
                } else {
                    this.context.fillStyle = 'rgba(' + this.config.star_color + ',' + star_opacity + ')';
                    this.context.beginPath();
                    this.context.arc(star_x, star_y, star_radius, 0, Math.PI * 2);
                    this.context.fill();
                }
                }
            }
            };
            
            Space.init();
        }
    }
</script>

<template>
    <div id='menu'>
        <Header page='Error 404' />

        <div id='content_body'>
            <div>
                <h1>Error 404</h1>
                <p>Looks like you have no clipped out of reality. Oh well, welcome to eternity.</p>
            </div>
        </div>
        
        <div id='bg-pattern'>
            <canvas id='canvas'></canvas>
        </div>

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

        margin-top: auto;
        margin-bottom: auto;

        display: flex;
        
        justify-content: center;
        align-items: center;

        padding: clamp(8rem, 20vw, 96rem);
        padding-top: 0px;
        padding-bottom: clamp(2rem, 5vw, 24rem);

        color: rgb(var(--foreground-rgb));

        font-size: clamp(0.75rem, 1vw, 6rem);

        z-index: 1;
    }

    #content_body > div {
        width: max-content;
        height: max-content;

        padding: clamp(0.25rem, 0.625vw, 3rem);

        word-wrap: break-word;

        background-color: rgba(var(--background-start-rgb), 25%);
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

        background-color: rgb(0, 0, 0);
    }

    #canvas {
        height: 100%;
        width: 100%;

        position: absolute;

        background-color: rgba(var(--background-start-rgb), 25%);

        opacity: 0;
    }
</style>