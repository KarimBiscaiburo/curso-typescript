// Los enums nos sirven para cuando necesitamos definir varias variables que nos sirvan como estados de algo por ejemplo:
const iniciando = "iniciando"
const cargando = "cargando"
const exito = "exito"
const error = "error"

// Esto mismo podemos hacer con los enums

// Por defecto cada variable va a contener el valor como si fuera una posicion, es decir:
/* 
    Iniciando = 0
    Cargando = 1
    etc...
*/
// enum Estados { Iniciando, Cargando, Exito, Error }


// Pero podemos determinar el numero de la primera posicion
// enum Estados { Iniciando = 2, Cargando, Exito, Error }
/* 
    Iniciando = 2
    Cargando = 3
    etc...
*/

// O sino podemos darle otros valores, pero ahora si o si tendremos que darle uno a cada variable
enum Estados { Iniciando = "Init", Cargando = "Loading", Exito = "Success", Error = "Error" }
/* 
    Iniciando = "Init"
    Cargando = "Loading"
    etc...
*/

// Como se muestra arriba, cuando el compilador de TypeScript transpila a JS, todas estas variables se inicializan
// Pero hay una manera de hacer que no se creen hasta que realmente se les asigne un valor (esto sirve para que el codigo este un poco mas optimizado)

const enum Tallas { Chica, Mediana, Grande }

const small = Tallas.Chica

