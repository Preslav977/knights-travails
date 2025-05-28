function allPossibleMoves([x, y]) {
  return [
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x - 1, y + 2],
    [x + 1, y + 2],
  ];
}

console.log(allPossibleMoves([0, 0]));

function checkIfNotOutOfBounds([x, y]) {
  if (x < 0 || y > 7 || y < 0 || x > 7) {
    return true;
  } else {
    return false;
  }
}

// console.log(checkIfNotOutOfBounds([0, 0]));

function knightMoves([x, y], [s, e]) {
  const queue = [];

  const visitedNodes = [];

  let knightMovements = allPossibleMoves([x, y]);

  // console.log(knightMovements);

  const checkIfStartPathIsNotOutOfBounds = checkIfNotOutOfBounds([x, y]);

  const checkIfEndPathIsNotOutOfBounds = checkIfNotOutOfBounds([s, e]);

  if (checkIfStartPathIsNotOutOfBounds || checkIfEndPathIsNotOutOfBounds) {
    throw new Error("Knight is out of bounds");
  } else {
    for (let i = 0; i < knightMovements.length; i++) {
      // console.log(knightMovements[i]);

      const moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

      if (!moveIsNotOutOfBound) {
        queue.push([knightMovements[i], [x, y]]);

        // console.log(queue);
      }
    }

    // while (queue.length !== 0) {}
  }
}

console.log(knightMoves([0, 0], [3, 3]));
