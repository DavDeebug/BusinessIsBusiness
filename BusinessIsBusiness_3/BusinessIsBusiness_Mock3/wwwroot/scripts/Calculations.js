function SetUnitPrice(product) {
    var unitPrice = $(product).attr("unitPrice");
    $("#unitPrice").val(unitPrice);
}

function CalculateQuotation(product) {
    var productType = $(product).attr("class");

    var unitPrice = $(product).attr("unitPrice");
    var discountPercentage = ($("#discount").val() == "") ? 0 : $("#discount").val();

    var totalQuantity = GetTotalQuantity(productType);
    var totalPrice = GetTotalPrice(unitPrice, totalQuantity);
    var quotationPrice = GetQuotationPrice(totalPrice, discountPercentage);

    
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
    return +totalQuantity;
}

function GetTotalPrice(price, quantity) {
    var tp = +((price * quantity).toFixed(2));
    $("#totalPrice").val(tp);
    return +(tp.toFixed(2));
}

function GetQuotationPrice(total, discountPercentage) {
    var fp = +((total - (total * discountPercentage / 100)).toFixed(2));
    $("#finalPrice").val(fp);
    return +(fp.toFixed(2));
}

function getVolumeValue() {
    var l = $("#volumeLength").val();
    var h = $("#volumeHeight").val();
    var w = $("#volumeWidth").val();
    return +((l * h * w).toFixed(2));
}

function getAreaValue() {
    var l = $("#areaLength").val();
    var h = $("#areaHeight").val();
    return +((l * h).toFixed(2));
}

function getAmount() {
    var i = $("#quantity").val();
    return +i;
}