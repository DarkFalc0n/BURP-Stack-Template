import { PhaserGame } from './game/phaser.game';
import { useRef } from 'react';

function App() {
  const phaserRef = useRef<IRefGame | null>(null);

  const currentPhaserScene = (scene: Phaser.Scene) => {
    console.log('Loading Current Scene:', scene);
  };
  return (
    <div className="text-5xl font-sans font-light text-gray-200 flex flex-col gap-12">
      Welcome to BURP
      <div className="mx-auto">
        <PhaserGame
          ref={phaserRef}
          currentScene={currentPhaserScene}
        />
      </div>
    </div>
  );
}

export default App;
