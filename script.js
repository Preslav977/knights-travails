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

console.log(checkIfNotOutOfBounds([0, 0]));
