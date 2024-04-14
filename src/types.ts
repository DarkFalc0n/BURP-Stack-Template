type Nullable<T> = T | null; 

interface IRefGame
{
    game: Phaser.Game | null;
    scene: Phaser.Scene | null;
}

interface IProps
{
    currentScene?: (scene_instance: Phaser.Scene) => void
}