import styles from '@/styles/Footer.module.css'

const Footer = () => {
    const socialLink = (link) => {
        window.open(link, '_ blank');
    }

    return (
        <div id={styles.footer}>
          <h1>
            Copyright © nbdy-cntrl | <a onClick={() => socialLink('https://github.com/NobodyCentral')}>GitHub</a> | <a onClick={() => socialLink('https://www.youtube.com/@NobodyCentral')}>YouTube</a> | <a onClick={() => socialLink('https://www.paypal.com/donate/?business=92BVMZE5HURMJ&no_recurring=1&item_name=A+cool+programmer.&currency_code=CAD')}>PayPal</a> | <a onClick={() => socialLink('https://www.twitch.tv/nobody_central')}>Twitch</a>
          </h1>
          <h2>Powered by <a onClick={() => socialLink('https://nextjs.org')}>Next.js</a></h2>
        </div>
    );
}

export default Footer;