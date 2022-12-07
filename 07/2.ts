const input = Deno.readTextFileSync('./input.txt')
  .split('\n$ ')
  .map((line: string) => {
  if (line.startsWith('cd')) {
    return line.split(' ') 
  }
  if (line.startsWith('ls')){
    return ['ls', line.split('\n').slice(1).map(e => e.split(' '))]
  }
  })

class Dir {
  dirs?: any
  name: string
  parent: Dir | null
  files?: { size: number, files?: [] }
  dirSize: number
  constructor(name: string, parent: Dir | null){
    this.name = name  
    // this.dirs = {}
    this.parent = parent
    // this.files = {
    //   size: 0,
    //   files: []
    // }
    this.dirSize = 0 
  }

  setContents(arr: []) {
    if (!this.dirs && !this.files){
      this.dirs = {}
      this.files = { size: 0 }
      for (const e of arr){
        if (e[0] === 'dir'){
          this.dirs[e[1]] = new Dir(e[1], this)
        }
        else if (e[0]){
          this.files.size += Number(e[0])
        }
      }
    }
  }

  getSize() {
    let size = this.files.size 
      for (const key in this.dirs){
        size += this.dirs[key].getSize()
      }
    if (size >= 1_035_571){ 
      result = Math.min(result, size) 
    }
    // console.log(this.name, size)
    return size
  }

}


const lines = input.slice(1)
let result = Infinity

const root = new Dir('root', null)
let curr = root

for (const line of lines) {
  if (line[0] === 'ls') {
    curr.setContents(line[1])
  }
  else if (line[1] === '..'){
    curr = curr.parent
  }
  else {
    if (!curr.dirs[line[1]]){
      curr.dirs[line[1]] = new Dir(line[1], curr)
    }
    curr = curr.dirs[line[1]]
  }
}

root.getSize()
console.log('min: ', 30000000 - (70000000 - root.getSize()))
console.log('result: ', result)
