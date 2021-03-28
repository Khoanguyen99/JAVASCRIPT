// Bai1
var number = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10]

// Bai2
var printNumber = []
for (var i in number){
    printNumber+=number[i]  + " ";
}
document.writeln("Bai 1.2: " + printNumber + "<br>")

// Bai3
var searchNumber = parseInt(prompt("Please Enter Value: "))
    var a = number.find(num => num === searchNumber);
    if (!isNaN(a)) {
        document.writeln("Bai 1.3: " + "Value exist in array" + "<br>");
    } else {
        document.writeln("Bai 1.3: " + "Value not exist in array" + "<br>");
    }


// Bai4
var maxNumber = 0
for (var i in number){
    if (number[i] > maxNumber){
        maxNumber = number[i]
    }
}
document.writeln("Bai 1.4: " + maxNumber + "<br>")

// Bai5
var sumArray = 0
for (var i in number){
    sumArray = sumArray + number[i]
}
document.writeln("Bai 1.5: " + sumArray + "<br>")

// Bai6
var sortedArray = number.sort(function(a,b){
    return b-a;
})
document.writeln("Bai 1.6: " + sortedArray + "<br>")

// Bai7
var valueToRun = parseInt(prompt("Please enter a number (1-Print Array, 2-Search a member, 3-Find Maximum Number, 4-Sum of Array, 5-Sort of Array): "))
switch (valueToRun) {
    case 1:
        document.writeln("Bai 1.7: " + printNumber)
        break;
    case 2:
        document.writeln("Bai 1.7: " +searchNumber)
        break;
    case 3:
        document.writeln("Bai 1.7: " +maxNumber)
        break;
    case 4:
        document.writeln("Bai 1.7: " +sumArray)
        break;
    case 5:
        document.writeln("Bai 1.7: " +sortedArray)
        break;
    default:
        document.writeln("Bai 1.7: Please check number")
}