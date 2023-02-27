import React, { useState } from 'react';
import styles from './Header.module.css';

// icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const handleClick = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  const theme = isDarkTheme ? 'themeDark' : 'themeLight';
  console.log(theme);

  return (
    <header className={styles.headerMain}>
      <nav className={styles.headerNav}>
        <ul className={styles.uls}>
          <li>
            <a href="#project">Home</a>
            <hr />
          </li>
          <li>
            <a href="#project">Projetos</a>
            <hr />
          </li>
          <li>
            <a href="#project">Sobre</a>
            <hr />
          </li>
        </ul>
      </nav>
      <section className={styles.iconsHeader}>
        <span>ANC</span>
        <GitHubIcon className={ styles.icons } />
        <LinkedInIcon className={ styles.icons } />
        <WhatsAppIcon className={ styles.icons } />
        <button onClick={handleClick}>Toggle Theme</button>
      </section>
    </header>
  )
}

export default Header