const input = Deno.readTextFileSync('./input.txt')
  .split('\n')
  .map((e: string) => e.split(' '))
console.log(input)

const shapes = {
  'r' : {
    'r' : 3,
    'p' : 0,
    's' : 6,
    'score': 1,
  },
  'p' : {
    'r' : 6,
    'p' : 3,
    's' : 0,
    'score': 2,
  },
  's' : {
    'r' : 0,
    'p' : 6,
    's' : 3,
    'score': 3,
  },
}

const cipher = {
  'A' : 'r',
  'X' : 'r',
  'B' : 'p',
  'Y' : 'p',
  'C' : 's',
  'Z' : 's',
}




const calculateScore = (opp: string, you: string) => {
  you = cipher[you]
  opp = cipher[opp]
  const shapeScore = shapes[you]['score']
  const outcomeScore = shapes[you][opp] 
  return shapeScore + outcomeScore
}

let total = 0

for (const round of input) {
  if (round.length === 2) {
    total += calculateScore(round[0], round[1])
  }
}

console.log(total)
