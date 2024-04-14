import { EventBus } from '../phaser.eventBus';

export class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
  }
  create() {
    this.add.text(100, 100, 'Hello Phaser!', {
      color: '#000',
      fontSize: '32px',
    });

    /* 
        Emit an event for the current scene
        In case you have an API call or other async operations to do, you can emit after that
    */
    EventBus.emit('current-scene-ready', this);
  }
  update() {
    // Your game loop
  }
}
