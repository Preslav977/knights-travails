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

  const visitedNodes = [];

  const checkIfStartPathIsNotOutOfBounds = checkIfNotOutOfBounds([x, y]);

  const checkIfEndPathIsNotOutOfBounds = checkIfNotOutOfBounds([s, e]);

  if (checkIfStartPathIsNotOutOfBounds || checkIfEndPathIsNotOutOfBounds) {
    throw new Error("Knight is out of bounds");
  } else {
    // queue.push([x, y]);

    while (queue.length !== 0) {
      let knightMovements = allPossibleMoves([x, y]);

      for (let i = 0; i < knightMovements.length; i++) {
        const moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

        const currentPosition = queue[0];

        const [x, y] = currentPosition;

        knightMovements = allPossibleMoves([x, y]);

        const JSCurrentPosition = JSON.stringify(queue[0]);

        const JSEndPosition = JSON.stringify([s, e]);

        const checkIfSquareHasBeenVisited = visitedNodes.some(
          (move) => JSON.stringify(move) === JSON.stringify([x, y]),
        );

        const checkIfKnightMovesHasEndPath = knightMovements.some(
          (knightMoves) => JSON.stringify(knightMoves) === JSEndPosition,
        );

        if (!moveIsNotOutOfBound && !checkIfSquareHasBeenVisited) {
          queue.push(knightMovements[i]);

          if (
            JSCurrentPosition === JSEndPosition ||
            checkIfKnightMovesHasEndPath
          ) {
            console.log(
              `=> You made it in moves! Here's your path: ${([x, y], [s, e])} `,
            );
            console.log(queue);
          } else {
            queue.shift();

            visitedNodes.push(currentPosition);

            console.log(visitedNodes);
          }
        }
      }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
