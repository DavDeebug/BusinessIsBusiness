// Il body della table preventivo è un array js

var quotationItems = [];

// ogni elemento verrà inserito in un td
// i td grafici sono la rappresentazione di un oggetto 'record'

function Record(qty, tp, discount, fp) {
    // il name lo ricava dal prototype
    // lo unit price lo ricava dal prototype
    this.quantity = qty;
    this.totalPrice = tp;
    this.discountPercentage = discount;
    this.finalPrice = fp;
    return this;
}

// catena di delegazione
Record.prototype.__proto__ = Product.prototype;

function AddToQuotation(customizedProduct) {

    var inputQuantity = $("#totalQuantity").val();
    var inputTotalPrice = $("#totalPrice").val();
    var inputDiscountPercentage = $("#discount").val();
    var inputFinalPrice = $("#finalPrice").Val();

    var newItem = new Record(inputQuantity, inputTotalPrice, inputDiscountPercentage, inputFinalPrice);
    quotationItems.push(newItem);
}
