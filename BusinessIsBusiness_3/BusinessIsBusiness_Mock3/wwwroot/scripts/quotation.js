// Il body della table preventivo è un array js

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

function Record(id, name, up, qty, tp, discount, fp) {
    Product.call(this, name, up);
    this.id = id;
    this.quantity = qty;
    this.totalPrice = tp;
    this.discountPercentage = discount;
    this.finalPrice = fp;
}

Record.prototype = Object.create(Product.prototype);

function AddToQuotation(customizedProduct) {

    var recordId = 'rec' + counter++;
    var name = customizedProduct.getProductName();
    var price = customizedProduct.getUnitPrice();

    var inputQuantity = $("#totalQuantity").val();
    var inputTotalPrice = $("#totalPrice").val();
    var inputDiscountPercentage = ($("#discount").val() == "") ? 0 : $("#discount").val();
    var inputFinalPrice = $("#finalPrice").val();

    var newItem = new Record(recordId, name, price, inputQuantity, inputTotalPrice, inputDiscountPercentage, inputFinalPrice);
    quotationItems.push(newItem);
    //console.log('ho creato un nuovo record');

    //return newItem;

    //counter++;
    CreateGraphicRow();

    function CreateGraphicRow() {
        var content = $("tbody");

        var row = $("<tr></tr>")
            .addClass('quotation-row')
            .attr('id', `${recordId}`)
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
                    <button type="button" class="btn btn-default up"><span class="glyphicon glyphicon-circle-arrow-up"></span></button>
                    <button type="button" class="btn btn-default down"><span class="glyphicon glyphicon-circle-arrow-down"></span></button>
                    <button type="button" class="btn btn-default edit"><span class="glyphicon glyphicon-edit"></span></button>
                    <button type="button" class="btn btn-default remove"><span class="glyphicon glyphicon-trash"></span></button>
                </div>
               </td>`)
            .appendTo(row);
}


    $("tbody").find("tr:last .up").click(function (event) {
        var currentRow = $(this).closest("tr");
        var firstRowId = $(this).parents("tbody").find('tr:first').attr('id');

        if (currentRow.attr("id") === firstRowId){
            alert("Non è possibile spostare più in alto la prima riga!")
        } else {
            MoveUpRow(currentRow);
        }
    });
    $("tbody").find("tr:last .down").click(function (event) {
        var currentRow = $(this).closest("tr");
        var lastRowId = $(this).parents("tbody").find('tr:last').attr('id');

        if (currentRow.attr("id") === lastRowId) {
            alert("Non è possibile spostare più in basso l'ultima riga!")
        } else {
            MoveDownRow(currentRow);
        }
    });



    $(".edit").click(function (event) {
        currentRow = $(this).closest("tr");

    });

    $("tbody").find("tr:last .remove").click(function (event) {
        var currentRow = $(this).closest("tr");
        var itemIndex = quotationItems.map(function (x) { return x.id }).indexOf(currentRow.attr('id'));

        if (itemIndex > -1) {
            quotationItems.splice(itemIndex, 1);
        }

        currentRow.remove();
    });

    function MoveUpRow(row) {
        var $elem1 = $(row),
            $elem2 = $(row.prev()),
            $placeholder = $("<tr><td></td></tr>");
        $elem2.after($placeholder);

        $elem1.after($elem2);
        $placeholder.replaceWith($elem1);
    }

    function MoveDownRow(row) {
        var $elem1 = $(row),
            $elem2 = $(row.next()),
            $placeholder = $("<tr><td></td></tr>");
        $elem1.after($placeholder);

        $elem2.after($elem1);
        $placeholder.replaceWith($elem2);
    }


}

    //// DA RIMUOVERE
    //var x = $("tbody  tr");
    //console.log("Ho creato un nuovo record, ora ne ho" + x.length);

    //$("#groups").hide();



//function AddRow(item) {
//    var content = $("tbody");

//    var row = $("<tr/>")
//        .appendTo(content);

//    $.each(item, function (i) {
//        var definition = $("<td/>")
//            .text(item[i])
//            .appendTo(row);
//    });

//    //mi aggiunge colonne in più
//};
