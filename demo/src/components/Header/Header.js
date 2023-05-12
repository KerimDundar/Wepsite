import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Kerim Dündar</a>
      <nav className={styles.nav}>
        <ul>
          <li><a href="/">Ana Sayfa</a></li>
          <li>
            <a href="/hakkimda">Hakkımda</a>
            <ul className={styles.submenu}>
                <li><a href="/">Kurumsal</a></li>
                <li><a href="/">Ben Kimim</a></li>
                <li><a href="/">Başarı Hikayelerimiz</a></li>
            </ul>    
          </li>
          <li><a href="/hizmetlerimiz">Hizmetlerimiz</a></li>
          <li><a href="/iletisim">İletişim</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
