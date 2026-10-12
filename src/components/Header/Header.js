import styles from './Header.module.css';

export function Header() {
  return `
    <header class="${styles.header}">
      <div class="${styles['header__container']}">
        <a href="#" class="${styles['header__logo']}">
          <span class="${styles['header__logo-text']}">POWER 104.1</span>
        </a>
        <nav class="${styles['header__nav']}">
          <ul class="${styles['header__nav-list']}">
            <li class="${styles['header__nav-item']}"><a href="#/" class="${styles['header__nav-link']} ${styles['header__nav-link--active']}">Inicio</a></li>
            <li class="${styles['header__nav-item']}"><a href="#/videos" class="${styles['header__nav-link']}">Videos</a></li>
            <li class="${styles['header__nav-item']}"><a href="#/contacto" class="${styles['header__nav-link']}">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
