const input = Deno.readTextFileSync('./input.txt')
  .split('\n\n').map(e => e.split('\n'))
  // .map((e: string) => e ? Number(e) : undefined )

const stacksStr = input[0].reverse()

const stacks = []
const start = 1
const interval = 4

for (let i in stacksStr) {
  const line = stacksStr[i]
  for (let col = start; col < line.length; col += interval){
    if (i === '0') { stacks.push([]) }
    else {
      const stackIndex = (col - start) / interval
      if (line[col] !== ' ') stacks[stackIndex].push(line[col])
    }
  }
}

const moves = input[1].map(e => {
  if (e) {
    const data = new RegExp(/^move (\d*) from (\d) to (\d)$/)
    return data.exec(e).slice(1).map(Number)
  } 
})

let result = ''

for (const move of moves){
  if (move) {
    const count = move[0]
    const fromStack = stacks[move[1] - 1] 
    const toStack = stacks[move[2] - 1] 

    for (let i = 0; i < count; i++){
      toStack.push(fromStack.pop())
    }
  }
}

stacks.forEach(e => result += e.findLast(() => true))

console.log(stacks)
console.log(result)
