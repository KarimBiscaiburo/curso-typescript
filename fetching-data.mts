// Por defecto cuando hacemos peticiones de tipo fetch, Typescript no sabe identificar cual es el tipo de la respuesta

// Esto si entiende que va a ser de tipo "Response" porque es lo que devuelve el fetch
const response = await fetch("http://unejemplodeurl.com")

// Pero esto ya lo toma como un tipo "any" por lo que el autocompletado no lo vamos a tener
const result = await response.json()

// Una solucion es (si tenemos la forma de ver la respuesta que nos da el servidor cuando hacemos la peticion) ir a una pagina como https://app.quicktype.io/ y que directamente nos de los tipos que puede tener el json de la respuesta, asi despues podemos tratar a la respuesta como uno de los tipos que nos haya devuelto

type RespuestaDeApi = {
    items: Object[]
}

const resultado = await response.json() as RespuestaDeApi