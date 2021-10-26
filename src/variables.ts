/** declaration variable type */

let numberType: number
let stringType: string
let boolType: boolean
let stringArray: string[] = ["item1", "item2"]
let numberArray: number[] = [1, 2, 3, 4]

/** initilazition variable */
numberType = 10.5
stringType = "burak"
boolType = false

/** output */
console.warn("numberType", numberType.valueOf())
console.warn("stringType", stringType.valueOf())
console.warn("booelanType", boolType.valueOf())
for (var index in stringArray) {
  console.warn("StringArray index: ", index + "value: ", stringArray[index])
}
numberArray.forEach((index, value) => {
  console.warn("NumberArray Index: ", index + "value:", value.valueOf())
})
