import { PhaserGame } from './game/phaser.game';
import './App.css';
import { useRef } from 'react';

function App() {
  const phaserRef = useRef<IRefGame | null>(null);

  const currentPhaserScene = (scene: Phaser.Scene) => {
    console.log('Loading Current Scene:', scene);
  };
  return (
    <>
      <PhaserGame
        ref={phaserRef}
        currentScene={currentPhaserScene}
      />
    </>
  );
}

export default App;
