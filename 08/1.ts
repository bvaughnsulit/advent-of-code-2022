const input = Deno.readTextFileSync('./input.txt')
  .split('\n').slice(0,-1)
  .map((e: string) => e.split('').map(Number))
console.log(input)

const grid = input

const topMax = Array(grid[0].length).fill(-Infinity)

const botMaps = []
for (let i = 0; i < grid[0].length; i++) { botMaps.push(new Map) }

let count = 0

for (const rowIndex in grid) {
  
  const row = grid[rowIndex]
  let leftMax = -Infinity
  const rightMap = new Map()


  for (const colIndex in row) {
    let isVisfromTopOrLeft
    const tree = row[colIndex]

    // check if tree is greater than topMax at i
    if (tree > topMax[colIndex]) { 
      // if true, update flag, update topMax at i
      isVisfromTopOrLeft = true
      topMax[colIndex] = tree
    }

    // check if tree is greater than leftMax
    if (tree > leftMax) {
      // if true, update flag, update leftMax
      isVisfromTopOrLeft = true
      leftMax = tree
    }

    // check if tree blocks any to its left 
    rightMap.forEach((val, key, map) => {
      if (tree >= key){
        // add each blocked tree to bot map
        botMaps[val].set(key, rowIndex) 
        // delete blocked trees
        map.delete(key)
      }
    })
    // add tree to rightmap if not already vis from top or left
    if (!isVisfromTopOrLeft) { 
      rightMap.set(tree, colIndex)
    }

    // check if tree blocks any above
    botMaps[colIndex].forEach((val, key, map) => {
      // if true, delete from botmap 
      if (tree >= key){ map.delete(key) }
    })

    // if flag is true, incrememnt count
    if (isVisfromTopOrLeft) { count++ }
    // add sum of trees in rightmap

  }

  count += rightMap.size

}

//add sum of trees in botmap
botMaps.forEach(colMap => { count += colMap.size })

console.log(count)
