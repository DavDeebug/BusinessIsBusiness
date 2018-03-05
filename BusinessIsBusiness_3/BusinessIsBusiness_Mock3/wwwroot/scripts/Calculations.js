function CalculateQuotation(product) {
    //var productType // la classe dell'elemento selezionato 
    //var unitPrice = SelectedItem.unitPrice;
    var discountValue = $("#discount").val();

    var totalQuantity = GetTotalQuantity(productType);
    var totalPrice = GetTotalPrice(unitPrice, totalQuantity);
    var quotationPrice = GetQuotationPrice(totalPrice, discountValue);

    
}

function GetTotalQuantity(productType) {
    var totalQuantity;
    switch (productType) {
        case "volume":
            totalQuantity = getVolumeValue();
            break;
        case "area":
            totalQuantity = getAreaValue();
            break;
        case "pezzo":
            totalQuantity = getAmount();
            break;
    }
    $("#totalQuantity").val(totalQuantity);
    return totalQuantity;
}

function GetTotalPrice(price, quantity) {
    var tp = price * quantity;
    $("#totalPrice").val(tp);
    return tp;
}

function GetQuotationPrice(total, discount) {
    var fp = total - discount;
    $("#finalPrice").val(fp);
    return fp;
}

function getVolumeValue() {
    var l = $("#volumeLength").val();
    var h = $("#volumeHeight").val();
    var w = $("#volumeWidth").val();
    return l * h * w;
}

function getAreaValue() {
    var l = $("areaLength").val();
    var h = $("areaHeight").val();
    return l * h;
}

function getAmount() {
    var i = $("#quantity").val();
    return +i;
}