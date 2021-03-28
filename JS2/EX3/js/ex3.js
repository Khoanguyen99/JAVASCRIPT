var listName = []
while (true) {
    var Name = prompt("Enter name: ")
    if (Name == ""){
        break;
    } else {
        listName.push(Name);
    }
}
listName.sort()
document.writeln(listName)