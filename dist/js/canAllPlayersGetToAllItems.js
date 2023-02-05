function canAllPlayersGetToAllItems(matrix) {
  const ROW = matrix.length;
  const COL = matrix[0].length;
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  function dfs(matrix, row, col, visited) {
    visited[row][col] = true;

    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (newRow >= 0 && newRow < ROW && newCol >= 0 && newCol < COL && !visited[newRow][newCol] && matrix[newRow][newCol] !== 'w') {
        dfs(matrix, newRow, newCol, visited);
      }
    }
  }

  const visited1 = Array(ROW)
    .fill(0)
    .map(() => Array(COL).fill(false));
  const visited2 = Array(ROW)
    .fill(0)
    .map(() => Array(COL).fill(false));

  dfs(matrix, 0, 0, visited1);
  dfs(matrix, ROW - 1, COL - 1, visited2);

  for (let row = 0; row < ROW; row++) {
    for (let col = 0; col < COL; col++) {
      if (matrix[row][col] === 'f' && (!visited1[row][col] || !visited2[row][col])) {
        return false;
      }
    }
  }
  return true;
}
