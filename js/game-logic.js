// Game Logic for Interactive Game

class Game {
    constructor() {
        this.score = 0;
        this.isGameOver = false;
    }

    startGame() {
        this.isGameOver = false;
        this.score = 0;
        console.log('Game started!');
    }

    endGame() {
        this.isGameOver = true;
        console.log('Game Over! Your score is: ' + this.score);
    }

    increaseScore(points) {
        if (!this.isGameOver) {
            this.score += points;
            console.log('Score increased by ' + points + '. Total score: ' + this.score);
        }
    }

    resetGame() {
        this.startGame();
    }
}

// Usage
const myGame = new Game();
myGame.startGame();

// Simulate game actions
myGame.increaseScore(10);
myGame.endGame();