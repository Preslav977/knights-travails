function allPossibleMoves([x, y]) {
  return (
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x + 2, y - 1],
    [x + 2, y + 1],
    [y - 2, x - 1],
    [y - 2, x + 1],
    [y + 2, x - 1],
    [y + 2, x + 1]
  );
}

// console.log(allPossibleMoves([0, 0]));

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

  const knightMovements = allPossibleMoves([x, y]);

  queue.push(knightMovements);

  const checkIfStartPathIsNotOutOfBounds = checkIfNotOutOfBounds([x, y]);

  const checkIfEndPathIsNotOutOfBounds = checkIfNotOutOfBounds([s, e]);

  if (checkIfStartPathIsNotOutOfBounds || checkIfEndPathIsNotOutOfBounds) {
    throw new Error("Knight is out of bounds");
  } else {
    while (queue.length !== 0) {
      queue.forEach((element) => {
        console.log(element);
      });
    }
  }
}

console.log(knightMoves([3, 3], [7, 2]));
