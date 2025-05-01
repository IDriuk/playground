/*
  353. Design Snake Game.
  Design a Snake game that is played on a device with screen size = width x height. 
  Play the game online if you are not familiar with the game.
  The snake is initially positioned at the top left corner (0, 0) with length = 1 unit.

  You are given a list of food's positions in row-column order. 
  When a snake eats the food, its length and the game's score both increase by 1.

  Each food appears one by one on the screen.
  For example, the second food will not appear until the first food was eaten by the snake.

  When a food does appear on the screen,
  it is guaranteed that it will not apeear on a block occupied by the snake.
*/

export class SnakeGame {
  set = new Set<number>();
  body: number[] = [0];
  score: number = 0;
  food: number[][] = [];
  foodIndex: number = 0;
  width: number = 0;
  height: number = 0;

  constructor(width: number, height: number, food: number[][]) {
    this.width = width;
    this.height = height;
    this.food = food;
  }

  move = (direction: string) => {
    if (this.score == -1) {
      return -1;
    }
    let rowHead = ~~(this.body[0] / this.width);
    let colHead = this.body[0] % this.width;

    switch (direction) {
      case "U":
        rowHead--;
        break;
      case "D":
        rowHead++;
        break;
      case "L":
        colHead--;
        break;
      default:
        colHead++;
    }

    let head = rowHead * this.width + colHead;
    this.set.delete(this.body.at(-1)!);
    if (
      rowHead < 0 ||
      rowHead == this.height ||
      colHead < 0 ||
      colHead == this.width ||
      this.set.has(head)
    ) {
      this.score = -1;
      return this.score;
    }

    this.set.add(head);
    this.body.unshift(head);

    if (
      this.foodIndex < this.food.length &&
      rowHead == this.food[this.foodIndex][0] &&
      colHead == this.food[this.foodIndex][1]
    ) {
      this.set.add(this.body.at(-1)!);
      this.foodIndex++;
      this.score++;
      return this.score;
    }

    this.body.pop();
    return this.score;
  };
}
