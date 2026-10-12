import styles from './Player.module.css';

export function Player() {
  return `
    <div class="${styles.player}" id="main-player">
      <div class="${styles['player__container']}">
        
        <div class="${styles['player__info']}">
          <div class="${styles['player__artwork-wrapper']}">
            <img src="/logo.png" alt="Logo" class="${styles['player__artwork']}" />
          </div>
          <div class="${styles['player__meta']}">
            <strong class="${styles['player__title']}">POWER 104.1</strong>
            <span class="${styles['player__status']}" id="player-status">
              <span class="${styles['player__status-dot']}"></span>
              EN VIVO
            </span>
          </div>
        </div>

        <div class="${styles['player__controls']}">
          <button class="${styles['player__btn']} ${styles['player__btn--play']}" id="player-play-btn" aria-label="Reproducir">
            <svg viewBox="0 0 24 24" fill="currentColor" class="${styles['player__icon']}"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>

        <div class="${styles['player__extra']}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="${styles['player__icon-small']}"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          <input type="range" class="${styles['player__vol']}" id="player-vol" min="0" max="1" step="0.05" value="1" aria-label="Volumen" />
        </div>
      </div>
    </div>
  `;
}

export function initPlayer() {
  const audio = new Audio();
  // Using a placeholder stream as defined in the plan
  const streamUrl = 'https://icecast.radiofrance.fr/fip-midfi.mp3';
  
  const playBtn = document.getElementById('player-play-btn');
  const heroBtn = document.getElementById('hero-play-btn');
  const status = document.getElementById('player-status');
  const vol = document.getElementById('player-vol');
  const artwork = document.querySelector(`.${styles['player__artwork']}`);
  
  let isPlaying = false;
  
  const iconPlay = '<svg viewBox="0 0 24 24" fill="currentColor" class="'+styles['player__icon']+'"><path d="M8 5v14l11-7z"/></svg>';
  const iconPause = '<svg viewBox="0 0 24 24" fill="currentColor" class="'+styles['player__icon']+'"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
  
  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      playBtn.innerHTML = iconPlay;
      if (heroBtn) heroBtn.innerHTML = '<span class="'+styles['hero__btn-icon']+'">▶</span> Escuchar en vivo';
      status.innerHTML = '<span class="'+styles['player__status-dot']+'"></span> EN VIVO';
      artwork.style.animationPlayState = 'paused';
    } else {
      audio.src = streamUrl;
      audio.play().catch(e => console.warn(e));
      isPlaying = true;
      playBtn.innerHTML = iconPause;
      if (heroBtn) heroBtn.innerHTML = '<span class="'+styles['hero__btn-icon']+'">❚❚</span> Pausar señal';
      status.innerHTML = '<span class="'+styles['player__status-dot']+'" style="animation: pulse 1s infinite"></span> REPRODUCIENDO';
      artwork.style.animationPlayState = 'running';
    }
  };
  
  playBtn.addEventListener('click', togglePlay);
  if (heroBtn) heroBtn.addEventListener('click', togglePlay);
  
  vol.addEventListener('input', (e) => {
    audio.volume = e.target.value;
  });
}
