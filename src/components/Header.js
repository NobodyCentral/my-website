import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router';

const Header = (args) => {
    const router = useRouter();

    const redirect = (link) => {
        router.push(link);
    }

    return (
        <header id={styles.header}>
          <div id={styles.main}>
            <span id={styles.logo}>
              <strong id={styles.logotxt}>NBDY-CNTRL</strong>
              <strong className={styles.spacer}>-</strong>
              <a id={styles.redirect} onClick={() => redirect("../")}>Back</a>
            </span>

            <strong id={styles.pagename}>{args.pagename}</strong>
          </div>
        </header>
    );
}

export default Header;