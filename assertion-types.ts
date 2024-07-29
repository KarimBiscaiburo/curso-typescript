// Cuando nosotros intentamos obtener un elemento del DOM, por defecto TypeScript nos devuelve un elemento Element (o null), que seria el elemento mas general de todos
const canvas = document.querySelector(".canva")

// Podemos tener estos dos errores
canvas.getContext("2d")

// En caso que primero verifiquemos que exista este elemento "canvas"
canvas?.getContext("2d")

// Este error se debe a que TypeScript no puede reconocer que tipo de elemento va a recibir, ya que como no funciona en tiempo de ejecucion, nunca va a saberlo

// Maneras de solucionarlo:

// En comparacion con el video, debe haber una version mas nueva que incorpore esta solucion
// Cuando lo seleccionamos por el tipo de elemento general, es capaz de interpretar el elemento que es
const otroCanvas: null | HTMLCanvasElement = document.querySelector("canvas")

// Como el tipo de dato es inferido puede ser que no encuentre el elemento y devuelva null, por eso tendriamos que evaluar primero su existenciad
otroCanvas.getContext("2d")
otroCanvas?.getContext("2d")

// Si tratamos de hacerlo asi vamos a tener error dado que una de los posibles datos es null (en caso que no encuentre el elemento)
const otroCanvas2: HTMLCanvasElement = document.querySelector("canvas")
otroCanvas2.getContext("2d") 

// Una manera y sin errores es esta:
const otroCanvas3 = document.querySelector("canvas") as HTMLCanvasElement

// Pero hay que volver a tener en cuenta que puede ser null
if (otroCanvas3 !== null) otroCanvas3.getContext("2d")

// Volvemos a tener el mismo problema
const otroCanvas4 = document.querySelector("canvas") as HTMLCanvasElement | null

// Pero hay que volver a tener en cuenta que puede ser null
otroCanvas4.getContext("2d")

// Solucion
if (otroCanvas4 !== null) otroCanvas4.getContext("2d")
otroCanvas4?.getContext("2d")


// Como sabe TypeScript que realmente esta recuperando un elemento <canvas />?
const otroCanvas5 = document.querySelector("canvas")
if(otroCanvas5 instanceof HTMLCanvasElement) {
    otroCanvas5.getContext("2d");
}
