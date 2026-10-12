import styles from './VideoGrid.module.css';

export function VideoGrid() {
  const dummyVideos = [
    { id: 1, title: 'Entrevista Exclusiva', img: 'https://images.unsplash.com/photo-1598550874175-4d0ef43ee90d?w=600&h=400&fit=crop' },
    { id: 2, title: 'Lo mejor del rock nacional', img: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f9af?w=600&h=400&fit=crop' },
    { id: 3, title: 'Top 10 de la semana', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=400&fit=crop' }
  ];

  return `
    <section class="${styles.videos}">
      <div class="${styles['videos__header']}">
        <h2 class="${styles['videos__title']}">Últimos Videos</h2>
      </div>
      <div class="${styles['videos__grid']}">
        ${dummyVideos.map(v => `
          <article class="${styles.card}">
            <div class="${styles['card__img-wrapper']}">
              <img src="${v.img}" alt="${v.title}" class="${styles['card__img']}" />
              <div class="${styles['card__play']}">▶</div>
            </div>
            <div class="${styles['card__content']}">
              <h3 class="${styles['card__title']}">${v.title}</h3>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}
