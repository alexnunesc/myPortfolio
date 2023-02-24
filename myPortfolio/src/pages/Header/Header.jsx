import React from 'react'
import styles from './Header.module.css';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {
  return (
    <header className={styles.headerMain}>
      <nav className={styles.headerNav}>
        <ul>
          <li>
            Home
            <hr />
          </li>
          <li>
            Projetos
            <hr />
          </li>
          <li>
            Sobre
            <hr />
          </li>
        </ul>
      </nav>
      <section className={styles.iconsHeader}>
        <span>ANC</span>
        <GitHubIcon className={ styles.icons } />
        <LinkedInIcon className={ styles.icons } />
        <WhatsAppIcon />
      </section>
    </header>
  )
}

export default Header