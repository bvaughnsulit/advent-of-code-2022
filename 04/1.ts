const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  .map((e: string) => {
    if (e) {
    return e.split(',')
    .map(n => n.split('-').map(Number))
  }
})
const pairs = input
console.log(pairs)

let count = 0

for (const pair of pairs) {
  if (!pair) continue
  pair.sort((a,b) => a[0] - b[0])
  const a = pair[0]
  const b = pair[1]
  if (
    (a[0] < b[0] && a[1] > b[1]) ||
    a[0] === b[0] ||
    a[1] === b[1]
  ) { count++ }
  console.log(a, b, count)
}

console.log(count)

// 33-62,26-62
// 49-89,49-88
// 2-4,3-92
// 7-98,7-98
