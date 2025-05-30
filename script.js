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

  // console.log(knightMovements);

  const checkIfStartPathIsNotOutOfBounds = checkIfNotOutOfBounds([x, y]);

  const checkIfEndPathIsNotOutOfBounds = checkIfNotOutOfBounds([s, e]);

  if (checkIfStartPathIsNotOutOfBounds || checkIfEndPathIsNotOutOfBounds) {
    throw new Error("Knight is out of bounds");
  } else {
    queue.push([x, y]);

    while (queue.length !== 0) {
      // const currentPosition = queue[0];

      // const [x, y] = queue;

      // console.log([x, y]);

      let knightMovements = allPossibleMoves([x, y]);

      // console.log("Current position", currentPosition);

      for (let i = 0; i < knightMovements.length; i++) {
        const moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

        const currentPosition = queue[0];

        const JSCurrentPosition = JSON.stringify(queue[0]);

        const JSEndPosition = JSON.stringify([s, e]);

        if (!moveIsNotOutOfBound) {
          queue.push(knightMovements[i]);

          // console.log("Queue", queue);

          if (
            JSCurrentPosition === JSEndPosition
            // !visitedNodes.includes(currentPosition)
          ) {
          } else {
            queue.shift();

            // console.log("Queue", queue);

            // console.log("Front of the queue", queue[0]);

            visitedNodes.push(currentPosition);

            // console.log("Visited nodes", visitedNodes);

            const [x, y] = queue;

            console.log([x, y]);

            knightMovements = allPossibleMoves([x, y]);

            console.log(visitedNodes);
          }
        }
      }
    }
    return visitedNodes;
  }
}

console.log(knightMoves([0, 0], [3, 3]));
