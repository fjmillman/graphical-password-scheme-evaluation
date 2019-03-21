import state from '../state';

export default function getRandomPassIcons() {
  return [...state.passIcons].sort(() => 0.5 - Math.random()).slice(0, 12);
}
