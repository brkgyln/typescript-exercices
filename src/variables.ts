/** declaration variable type */

let numberType: number
let stringType: string
let boolType: boolean
let stringArray: string[] = ["item1", "item2"]
let numberArray: number[] = [10, 20, 30, 40]

/** initilazition variable */
numberType = 10.5
stringType = "burak"
boolType = false

/** output */
console.warn(
  "numberType",
  "type:",
  typeof numberType,
  "value:",
  numberType.valueOf()
)
console.warn(
  "stringType",
  "type:",
  typeof stringType,
  "value:",
  stringType.valueOf()
)
console.warn(
  "booelanType",
  "type:",
  typeof boolType,
  "value:",
  boolType.valueOf()
)
for (var index in stringArray) {
  console.warn("StringArray index: ", index + " value:", stringArray[index])
}
numberArray.forEach((el, i) => {
  console.warn("NumberArray Index: ", i + " value:", el.valueOf())
})
