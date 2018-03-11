﻿// Il body della table preventivo è un array js

var quotationItems = [];
var counter = 0;

// ogni elemento verrà inserito in un td
// i td grafici sono la rappresentazione di un oggetto 'record'

//function Record(qty, tp, discount, fp) {
//    // il name lo ricava dal prototype
//    // lo unit price lo ricava dal prototype
//this.quantity = qty;
//this.totalPrice = tp;
//this.discountPercentage = discount;
//this.finalPrice = fp;
//    return this;
//}

// catena di delegazione
//Record.prototype.__proto__ = Product.prototype;

function Record(name, up, qty, tp, discount, fp) {
    Product.call(this, name, up);
    this.quantity = qty;
    this.totalPrice = tp;
    this.discountPercentage = discount;
    this.finalPrice = fp;
}

Record.prototype = Object.create(Product.prototype);

function AddToQuotation(customizedProduct) {

    var name = customizedProduct.getProductName();
    var price = customizedProduct.getUnitPrice();

    var inputQuantity = $("#totalQuantity").val();
    var inputTotalPrice = $("#totalPrice").val();
    var inputDiscountPercentage = ($("#discount").val() == "") ? 0 : $("#discount").val();
    var inputFinalPrice = $("#finalPrice").val();

    var newItem = new Record(name, price, inputQuantity, inputTotalPrice, inputDiscountPercentage, inputFinalPrice);
    quotationItems.push(newItem);
    console.log('ho creato un nuovo record');

    //return newItem;

    //counter++;
    var content = $("tbody");

    var row = $("<tr></tr>")
        .addClass('quotation-row')
        .attr('id', `rec${counter++}`)
        .attr('position', 0)
        .appendTo(content);

    var definitions = row
        .html(`<td>${name}</td>
               <td>${price}</td>
               <td>${inputQuantity}</td>
               <td>${inputTotalPrice}</td>
               <td>${inputDiscountPercentage}</td>
               <td>${inputFinalPrice}</td>
               <td>
                <div class="btn-group" id="groups">
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-up"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-circle-arrow-down"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-edit"></span></button>
                    <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-trash"></span></button>
                </div>
               </td>`)
        .appendTo(row);

    //$("#groups").hide();

}

function AddRow(item) {
    var content = $("tbody");

    var row = $("<tr/>")
        .appendTo(content);

    $.each(item, function (i) {
        var definition = $("<td/>")
            .text(item[i])
            .appendTo(row);
    });

    //mi aggiunge colonne in più
};
