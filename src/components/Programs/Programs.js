import styles from './Programs.module.css';

export function Programs() {
  const programs = [
    { time: '06:00 - 09:00', title: 'Mañana Power', host: 'Juan Pérez' },
    { time: '09:00 - 13:00', title: 'Power Mix', host: 'Ana Gómez' },
    { time: '13:00 - 17:00', title: 'Tarde Activa', host: 'Carlos Ruiz' },
    { time: '17:00 - 21:00', title: 'El Regreso', host: 'Laura Torres' },
  ];

  return `
    <section class="${styles.programs}" id="programas">
      <div class="${styles['programs__header']}">
        <h2 class="${styles['programs__title']}">Programación</h2>
        <p class="${styles['programs__subtitle']}">Acompañando tu día con la mejor energía.</p>
      </div>
      <div class="${styles['programs__list']}">
        ${programs.map(p => `
          <div class="${styles.program}">
            <div class="${styles['program__time']}">${p.time}</div>
            <div class="${styles['program__details']}">
              <h3 class="${styles['program__title']}">${p.title}</h3>
              <p class="${styles['program__host']}">${p.host}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}
