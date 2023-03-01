import * as moduloMatematicas from './modulos/controller.js'
import chalk from 'chalk';



const sum = moduloMatematicas.suma(1, 2)
console.log(sum)

const multiplicacion = moduloMatematicas.multiplica(4, 5)
console.log(multiplicacion)


console.log(chalk.green(multiplicacion(1, 2), sum(4, 5)))