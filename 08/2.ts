const input = Deno.readTextFileSync('./input.txt')
  .split('\n').slice(0,-1)
  .map((e: string) => e.split('').map(Number))
console.log(input)

const grid = input

let max = 0

for (const rowIStr in grid) {
  const rowIndex = Number(rowIStr)
  if (rowIndex === 0 || rowIndex === grid.length - 1) continue
  
  const row = grid[rowIndex]

  for (const colIStr in row) {
    const colIndex = Number(colIStr)

    if (colIndex === 0 || colIndex === row.length - 1) continue
    const tree = row[colIndex]
    
    // top
    let t = rowIndex - 1
    while (t > 0 && grid[t][colIndex] < tree){ t-- }
    const topDist = rowIndex - t

    // left
    let l = colIndex - 1
    while (l > 0 && grid[rowIndex][l] < tree){ l-- }
    const leftDist = colIndex - l
    
    // right
    let r = colIndex + 1
    while (r < row.length - 1 && grid[rowIndex][r] < tree){ r++ }
    const rightDist = r - colIndex

    // bot
    let b = rowIndex + 1
    while (b < grid.length - 1 && grid[b][colIndex] < tree){ b++ }
    const botDist = b - rowIndex

    const score = topDist * leftDist * rightDist * botDist
    max = Math.max(score, max)
  }

}

console.log(max)
