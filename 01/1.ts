const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  .map((e: string) => e ? Number(e) : undefined )
console.log(input)


const findMax = (items: (number | undefined)[]) => {
  const top = [-Infinity, -Infinity, -Infinity] 
  let currTotal = 0
  
  for (const e of items){
    if (e !== undefined){ currTotal += e }
    else {
      // max = Math.max(currTotal, max)
      if (currTotal > top[0]) {
        top[0] = currTotal
        top.sort()
      }
      currTotal = 0
    }
  }

  return top.reduce((acc, curr) => acc + curr)
}

console.log(findMax(input))
