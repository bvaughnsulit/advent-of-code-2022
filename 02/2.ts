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
  'B' : 'p',
  'C' : 's',
}


const outcomeValues = {
  'X' : 0,
  'Y' : 3,
  'Z' : 6,
}

const calculateShape = (opp: string, outcome: string) => {
  for (const shape in shapes){
    if (shapes[shape][opp] === outcomeValues[outcome]) return shape
  }
}

const calculateScore = (opp: string, you: string) => {
  const shapeScore = shapes[you]['score']
  const outcomeScore = shapes[you][opp] 
  return shapeScore + outcomeScore
}

console.log(calculateShape(input[0][0], input[0][1]))

let total = 0

for (const round of input) {
  if (round.length === 2) {
    const opp = cipher[round[0]]
    const you = calculateShape(opp, round[1])
    total += calculateScore(opp, you)
  }
}

console.log(total)
