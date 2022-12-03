const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  // .map((e: string) => e ? Number(e) : undefined )

const groups = [] 
let groupTemp = []

input.forEach((e,i) => {
  if (e) { groupTemp.push(e) }
  if (i % 3 === 2) {
    groups.push(groupTemp)
    groupTemp = []
  }
})

let sum = 0

for (const group of groups) {
  const map = new Map(group[0].split('').map(e => [e, 0]))

  let item
  for (let i = 1; i < group.length; i++){
    group[i].split('').forEach(e => {
      if (map.get(e) === i - 1) {
        if (i === group.length - 1) { item = e.charCodeAt() }
        map.set(e, i)
      }
    })
  }

  let priority

  if (item < 91){ priority = item - 38}
  else if (item > 96) { priority = item - 96 }
  sum += priority | 0
}


console.log(sum)
