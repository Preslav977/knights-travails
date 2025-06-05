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

      const JSCurrentPosition = JSON.stringify(queue[0].coordinates);

      // console.log(JSCurrentPosition);

      const JSEndPosition = JSON.stringify([s, e]);

      // console.log("First element in the queue: ", queue[0]);

      if (queue.length !== 0) {
        const [x, y] = currentPosition.coordinates;

        knightMovements = allPossibleMoves([x, y]);
      }

      for (let i = 0; i < knightMovements.length; i++) {
        let moveIsNotOutOfBound = checkIfNotOutOfBounds(knightMovements[i]);

        if (
          !moveIsNotOutOfBound &&
          !Object.hasOwn(visitedNodes, `[${knightMovements[i]}]`.toString())
        ) {
          const newParentPosition = {
            parent: currentPosition,
            coordinates: knightMovements[i],
          };

          queue.push(newParentPosition);

          // console.log(queue);
        }
      }

      const endPositionInMoves = queue.some(
        (moves) => JSON.stringify(moves.coordinates) === JSEndPosition,
      );

      if (JSCurrentPosition === JSEndPosition || endPositionInMoves) {
        console.log(queue);
      } else {
        queue.shift();

        if (currentPosition.parent === null) {
          Object.assign(visitedNodes, {
            [`[${currentPosition.coordinates}]`]: null,
          });
        } else {
          Object.assign(visitedNodes, {
            [`[${currentPosition.coordinates}]`]: `[${currentPosition.parent.coordinates}]`,
          });
        }
      }
    }
  }
}

console.log(knightMoves([0, 0], [7, 7]));
