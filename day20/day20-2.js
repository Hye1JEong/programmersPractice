function solution(keyinput, board) {
  const limitX = Math.floor(board[0] / 2);
  const limitY = Math.floor(board[1] / 2);
  let x = 0;
  let y = 0;
  while (keyinput.length > 0) {
    let dir = keyinput.shift();
    switch (dir) {
      case 'left':
        if (x <= -limitX) break;
        x -= 1;
        break;
      case 'right':
        if (x >= limitX) break;
        x += 1;
        break;
      case 'down':
        if (y <= -limitY) break;
        y -= 1;
        break;
      case 'up':
        if (y >= limitY) break;
        y += 1;
    }
  }
  return [x, y];
}

console.log(solution(['left', 'right', 'up', 'right', 'right'], [11, 11]));
console.log(solution(['down', 'down', 'down', 'down', 'down'], [7, 9]));
