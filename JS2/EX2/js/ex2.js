var n = parseInt(prompt("Enter value n(rows): "))
var m = parseInt(prompt("Enter value m(column): "))
// Bai1

var matrix= new Array (n)
for (var i=0;i<matrix.length;i++){
    matrix[i] = new Array(m);
};
// Bai2
var enterValues = function (nameArray) {
    for (var i=0; i< nameArray.length; i++) {
        for(var j=0; j<nameArray[i].length; j++){
            nameArray[i][j] = prompt("Enter Values for Array: ");
        };
    };
};
// Bai3
var printArray = function () {
    document.writeln("Bai 1.3: " + matrix.slice()); 
}

// Bai4
var sumArrays = function (nameArray) {
    result=0
    for (var i=0;i<(nameArray.length);i++) {
        for (var j=0;j<(nameArray[i].length);j++){
            result = result + nameArray[j];
        }    
    }
}
document.writeln("Bai 1.4: " + sumArrays); 

// Bai5
var searchNumber = parseInt(prompt("Please Enter Value: "))
    var a = matrix.filter(num => num == searchNumber);
    if (!isNaN(a)) {
        document.writeln("Bai 1.3: " + "Value exist in array" + "<br>");
    } else {
        document.writeln("Bai 1.3: " + "Value not exist in array" + "<br>");
    }

// Bai6
var a = matrix.slice();
var sortedArray = a.sort(function(a,b){
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
        document.writeln("Bai 1.7: " +sumArrays)
        break;
    case 5:
        document.writeln("Bai 1.7: " +sortedArray)
        break;
    default:
        document.writeln("Bai 1.7: Please check number")

}
