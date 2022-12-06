const input = Deno.readTextFileSync('./input.txt')
console.log(input)

const s = input 


let lenUnique = 0
const map = new Map()
let i

for (i = 0; i < s.length; ++i){
  if (lenUnique === 14) break;
  const lastOcc = map.get(s[i])
  if (lastOcc == undefined || lastOcc < i - lenUnique){
    lenUnique++
  }
  else {
    lenUnique = i - lastOcc
  }

  // console.log(i, lenUnique, map)
  map.set(s[i], i)
}

console.log(i)
