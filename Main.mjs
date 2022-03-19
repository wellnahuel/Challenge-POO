import * as readline from 'node:readline';
import { stdin , stdout, exit } from 'node:process';

import Password from './Password.mjs'


const rl = readline.createInterface({
  input: stdin,
  output: stdout
});

let pwd
let isStrong

rl.question("Ingrese una contraseña: ",  (answer) => { //Ingreso de la contraseña
  pwd = new Password(answer)
  isStrong = pwd.esFuerte()
  if (isStrong) {
    console.log(`Felicitaciones! Su contraseña ${answer} es fuerte y ha sido registrada!`)
    rl.close()
  } else {
    rl.setPrompt("Su contraseña no es fuerte. Intente con otra: ")
    rl.prompt()
  }
});

rl.on("line", (input) => {
  pwd = new Password(input)
  isStrong = pwd.esFuerte()
  if (isStrong) {
    console.log(`Felicitaciones! Su contraseña ${input} es fuerte y ha sido registrada!`)
    exit()
  } else {
    rl.setPrompt("Su contraseña no es fuerte. Intente con otra: ")
    rl.prompt()
  }
})


