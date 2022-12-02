const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  .map((e: string) => e ? Number(e) : undefined )
console.log(input)
