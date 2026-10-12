import styles from './Footer.module.css';

export function Footer() {
  return `
    <footer class="${styles.footer}" id="contacto">
      <div class="${styles['footer__content']}">
        <div class="${styles['footer__brand']}">
          <h2 class="${styles['footer__logo']}">POWER 104.1</h2>
          <p class="${styles['footer__desc']}">La mejor música las 24 horas del día. Sumate a la comunidad y sentí la energía.</p>
        </div>
        <div class="${styles['footer__links']}">
          <h3 class="${styles['footer__title']}">Enlaces</h3>
          <ul class="${styles['footer__list']}">
            <li><a href="#/" class="${styles['footer__link']}">Inicio</a></li>
            <li><a href="#programas" class="${styles['footer__link']}">Programación</a></li>
            <li><a href="#/videos" class="${styles['footer__link']}">Videos</a></li>
          </ul>
        </div>
        <div class="${styles['footer__social']}">
          <h3 class="${styles['footer__title']}">Contacto</h3>
          <ul class="${styles['footer__list']}">
            <li><a href="#" class="${styles['footer__link']}">Instagram</a></li>
            <li><a href="#" class="${styles['footer__link']}">Twitter</a></li>
            <li><a href="#" class="${styles['footer__link']}">WhatsApp: +54 9 11 1234-5678</a></li>
          </ul>
        </div>
      </div>
      <div class="${styles['footer__bottom']}">
        <p>&copy; ${new Date().getFullYear()} POWER 104.1 FM. Todos los derechos reservados.</p>
      </div>
    </footer>
  `;
}
