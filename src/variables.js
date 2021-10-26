// declaration variable type
var numberType;
var stringType;
var boolType;
var stringArray = ["item1", "item2"];
var numberArray = [1, 2, 3, 4];
// initilazition variable
numberType = 10.5;
stringType = "burak";
boolType = false;
console.warn("numberType", numberType.valueOf());
console.warn("stringType", stringType.valueOf());
console.warn("booelanType", boolType.valueOf());
for (var index in stringArray) {
    console.warn("StringArray index:", index + "value:", stringArray[index]);
}
numberArray.forEach(function (index, value) {
    console.warn("NumberArray Index: ", index, "value:", value.valueOf());
});
