const input = Deno.readTextFileSync('./input.txt')
  .split('\n').slice(0,-1)
  .map((e: string) => Number(e))
console.log(input)
