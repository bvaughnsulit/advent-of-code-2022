const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  // .map((e: string) => e ? Number(e) : undefined )
console.log(input)

const lines = input
let sum = 0

for (const line of lines) {
  let c1 = line.slice(0, line.length / 2).split('').map(e => [e, ''])
  const c2 = line.slice(line.length / 2)

  c1 = new Map(c1)
  let item 

  for (let i = 0; i < c2.length; i++){
    if (c1.has(c2[i])){
      item = c2[i].charCodeAt()
      break;
    }
  }
  
  let priority

  if (item < 91){ priority = item - 38}
  else if (item > 96) { priority = item - 96 }
  sum += priority | 0
}

console.log(sum)

