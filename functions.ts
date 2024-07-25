
function probar(a: string, b: string): string {
    return a + b;
}


// Cuando sabemos que una funcion no va a retornar nada nunca podemos tiparlo asi
function throwError(message: string): never {
    throw new Error(message);
}




// Maneras de tipar arrow-functions

const sumar = (a: number, b: number): number => {
    return a + b;
}

const restar: (a: number, b: number) => number = (a, b) => {
    return a - b;
}