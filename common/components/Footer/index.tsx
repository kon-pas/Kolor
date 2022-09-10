import styles from './Footer.module.scss';

import IconSVG from '@components/IconSVG';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles['footer']}>
      <a href="https://github.com/kon-pas" className={styles['footer__author']}>
        <span>
          made with
        </span>

        <div className={styles['footer__heart']}>
          <IconSVG
            filled={true}
          >
            <path
              d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
            />
          </IconSVG>
        </div>

        <span>
          by kon_pas
        </span>
      </a>
    </footer>
  );
}

export default Footer;