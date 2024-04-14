import {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { config } from './phaser.config';
import { EventBus } from './phaser.eventBus';

export const PhaserGame = forwardRef<IRefGame, IProps>(
  function PhaserGame({ currentScene }, ref) {
    const game = useRef<Phaser.Game | null>(null);

    useLayoutEffect(() => {
      if (!game.current) {
        game.current = new Phaser.Game(config);
        if (typeof ref === 'function') {
          ref({ game: game.current, scene: null });
        } else if (ref) {
          ref.current = { game: game.current, scene: null };
        }
      }
      return () => {
        if (game.current) {
          game.current.destroy(true);
          if (game.current !== null) {
            game.current = null;
          }
        }
      };
    }, [ref]);

    useEffect(() => {
      EventBus.on(
        'current-scene-ready',
        (scene: Phaser.Scene) => {
          if (
            currentScene &&
            typeof currentScene === 'function'
          ) {
            currentScene(scene);
          }

          if (typeof ref === 'function') {
            ref({
              game: game.current,
              scene: scene,
            });
          } else if (ref) {
            ref.current = {
              game: game.current,
              scene: scene,
            };
          }
        },
      );

      return () => {
        EventBus.removeListener('current-scene-ready');
      };
    }, [currentScene, ref]);

    return <div id="game-container"></div>;
  },
);
