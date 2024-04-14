import { MainScene } from './scenes/mainScene';

export const config = {
  type: Phaser.AUTO,
  width: 1152,
  height: 648,
  parent: 'game-container',
  backgroundColor: '#fff',
  scene: [MainScene],
};
