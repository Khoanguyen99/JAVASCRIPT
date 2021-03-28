var $ = function () {
    return document.getElementById(id);
}

var calculateDis = function (customer, subtotal) {
    var discountPercent=0;
    switch (customer) {
        case "regular":
            if (subtotal < 100){
                percent = 0;
            } else if (subtotal >=100 && subtotal < 250) {
                percent = 0.1;
            } else if (subtotal >=250 && subtotal < 500) {
                percent = 0.25;
            } else if (subtotal >= 500) {
                percent = 0.3
            }
            break;
        case "loyal":
            percent = 0.3;
            break;
        case "honored":
            percent = subtotal < 500 ? 0.4 : 0.5;
            break;
        default:
            percent = 0;
            break;
    }
    return percent;
}

var processEntries = function () {
    var customerType = $("type").value;
    var subtotal = $("subtotal").value;
    
    discountPercent = calculateDis(customerType, subtotal);

    discountAmount = subtotal * discountPercent;
    invoiceTotal = subtotal - discountAmount;

    $("subtotal").value = subtotal.toFix(2);
    $("percent").value = percent.toFix(2);
    $("amount").value = amount.toFix(2);
    $("total").value = total.toFix(2);

}

window.onload = function (){
    $("calculate").onclick = calculateDis;
    $("type").focus();
}