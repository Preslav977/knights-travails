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

  const visitedNodes = {};

  let parentPosition = { parent: null, coordinates: [x, y] };

  const checkIfStartPathIsNotOutOfBounds = checkIfNotOutOfBounds([x, y]);

  const checkIfEndPathIsNotOutOfBounds = checkIfNotOutOfBounds([s, e]);

  if (checkIfStartPathIsNotOutOfBounds || checkIfEndPathIsNotOutOfBounds) {
    throw new Error("Knight is out of bounds");
  } else {
    queue.push(parentPosition);

    while (queue.length !== 0) {
      let knightMovements = allPossibleMoves([x, y]);

      let currentPosition = queue[0];

      // const JSCurrentPosition = JSON.stringify(queue[0]);

      // console.log(JSCurrentPosition);

      // const JSEndPosition = JSON.stringify([s, e]);

      // console.log("First element in the queue: ", queue[0]);

      knightMovements = allPossibleMoves([x, y]);

      for (let i = 0; i < knightMovements.length; i++) {
        let moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

        // parentPosition.parent = currentPosition;

        // console.log()

        if (
          !moveIsNotOutOfBound &&
          !Object.hasOwn(visitedNodes, `[${knightMovements[i]}]`)
        ) {
          const newParentPosition = {
            parent: currentPosition,
            coordinates: knightMovements[i],
          };

          queue.push(newParentPosition);
          // parentPosition.parent = currentPosition;
          // currentPosition.coordinates = knightMovements[i];
          // queue.push(currentPosition);
          console.log(queue);
        }
      }

      // if (JSCurrentPosition === JSEndPosition) {
      // console.log("Queue: ", queue[6]);
      // console.log(visitedNodes);
      // return queue;
      // } else {
      // queue.shift();

      // visitedNodes.push(currentPosition);

      // console.log("Visited nodes", visitedNodes);
      // }
    }
  }
}

console.log(knightMoves([0, 0], [3, 3]));
