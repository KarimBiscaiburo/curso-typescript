// Por defecto cuando definimos un array y no especificamos el tipo, se crea como un array que nunca va a tener nada
const languages = []
languages.push("PHP")

// Podemos definir los tipos de varias maneras
const colores: Array<string> = []
colores.push("marron")

const numeros: number[] = []
numeros.push(1)

// Tambien podemos indicar que pueden tener varios tipos de datos
const caracteres: (string | number)[] = [];
caracteres.push("A")
caracteres.push(2)


type CellValue = "X" | "O" | ""
// A esto se le llama "tuble" o "tuplas" y permite determinar el tamañno de un tipo o arreglo
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
    ["X", "O", "X"],
    ["X", "O", "X"],
    ["X", "O", "X"]
]