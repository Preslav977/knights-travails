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
    queue.push([x, y]);

    while (queue.length !== 0) {
      let knightMovements = allPossibleMoves([x, y]);

      const currentPosition = queue[0];

      const JSCurrentPosition = JSON.stringify(queue[0]);

      const JSEndPosition = JSON.stringify([s, e]);

      // console.log("First element in the queue: ", queue[0]);

      if (queue.length !== 0) {
        const [x, y] = currentPosition;

        knightMovements = allPossibleMoves([x, y]);
      }

      for (let i = 0; i < knightMovements.length; i++) {
        let moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

        const checkIfSquareHasBeenVisited = visitedNodes.some(
          (move) => JSON.stringify(move) === JSCurrentPosition,
        );

        // console.log(
        //   "Is move has been visited already?",
        //   checkIfSquareHasBeenVisited,
        // );

        // console.log("Visited path", visitedNodes);

        if (!moveIsNotOutOfBound && !checkIfSquareHasBeenVisited) {
          queue.push(knightMovements[i]);

          // console.log(queue);
        }
      }

      const checkIfKnightMovesHasEndPath = knightMovements.some(
        (knightMoves) => JSON.stringify(knightMoves) === JSEndPosition,
      );

      if (JSCurrentPosition === JSEndPosition || checkIfKnightMovesHasEndPath) {
        console.log(queue);

        console.log(visitedNodes);

        return "You found the end path";
      } else {
        queue.shift();

        visitedNodes.push(currentPosition);
      }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
