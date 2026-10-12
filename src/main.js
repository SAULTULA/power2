import { Header } from './components/Header/Header.js';
import { Hero } from './components/Hero/Hero.js';
import { Programs } from './components/Programs/Programs.js';
import { VideoGrid } from './components/VideoGrid/VideoGrid.js';
import { Footer } from './components/Footer/Footer.js';
import { Player, initPlayer } from './components/Player/Player.js';
import './styles/global.css';

function App() {
  return `
    ${Header()}
    <main>
      ${Hero()}
      ${Programs()}
      ${VideoGrid()}
    </main>
    ${Footer()}
    ${Player()}
  `;
}

document.querySelector('#app').innerHTML = App();
initPlayer();
