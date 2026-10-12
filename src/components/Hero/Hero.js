import styles from './Hero.module.css';

export function Hero() {
  return `
    <section class="${styles.hero}">
      <div class="${styles['hero__content']}">
        <span class="${styles['hero__badge']}">
          <span class="${styles['hero__badge-dot']}"></span>
          Ahora al aire
        </span>
        <h1 class="${styles['hero__title']}">
          <span class="${styles['hero__title-line']}">Siente la</span>
          <span class="${styles['hero__title-line']} ${styles['hero__title-gradient']}">Energía.</span>
        </h1>
        <p class="${styles['hero__subtitle']}">La señal que te mueve todo el día, todos los días.</p>
        <div class="${styles['hero__actions']}">
          <button class="${styles['hero__btn']} ${styles['hero__btn--primary']}" id="hero-play-btn">
            <span class="${styles['hero__btn-icon']}">▶</span> Escuchar en vivo
          </button>
          <a href="#/videos" class="${styles['hero__btn']} ${styles['hero__btn--secondary']}">
            Ver programación
          </a>
        </div>
      </div>
      <div class="${styles['hero__visual']}">
        <img src="/logo.png" alt="Logo de POWER 104.1" class="${styles['hero__logo']}" />
        <div class="${styles['hero__disc-glow']}"></div>
      </div>
    </section>
  `;
}
