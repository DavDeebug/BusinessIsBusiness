//function Product(name, price) {
//    this.ProductName = name;
//    this.UnitPrice = price;

//    return this;
//}

function Product(name, price) {
    this.ProductName = name;
    this.UnitPrice = price;
}

Product.prototype.getProductName = function () {
    return this.ProductName;
};

Product.prototype.getUnitPrice = function () {
    return this.UnitPrice;
};



var volumeProducts = [
    new Product("Prodotto1", 7),
    new Product("Prodotto2", 5),
    new Product("Prodotto3", 2),
    new Product("Prodotto4", 4)
]

var areaProducts = [
    new Product("Prodotto5", 8),
    new Product("Prodotto6", 9),
    new Product("Prodotto7", 3)
]

var quantityProducts = [
    new Product("Prodotto8", 18),
    new Product("Prodotto9", 10),
    new Product("Prodotto0", 1)
]



var catalogueProducts = [
    { Name: "volume", Data: volumeProducts },
    { Name: "area", Data: areaProducts },
    { Name: "pezzo", Data: quantityProducts }]

// popoliamo il dropdown
function PopulateDropDown() {


    var content = $('ul.dropdown-menu')
    $.each(catalogueProducts, function (i) {
        var headLi = $('<li/>')
            .addClass('dropdown-header')
            .text('Raggruppamento per ' + catalogueProducts[i].Name)
            .appendTo(content);

        $.each(catalogueProducts[i].Data, function (num) {
            var li = $('<li/>')
                .appendTo(content);
            var aaa = $('<a/>')
                .addClass(catalogueProducts[i].Name)
                .attr('data-target', '#prova')
                .attr('data-toggle', 'modal')
                .attr('href', '#')
                // provo ad aggiungere un id
                .attr('id', (catalogueProducts[i].Name + "Item" + num))
                // provo ad assegnare al link direttamente il prezzo unitario
                // leggendolo dall'array js
                .attr('unitPrice', (catalogueProducts[i].Data[num].UnitPrice))
                // provo ad aggiungere direttamente il riferimento al prodotto in array
                .prop('linkedProduct', (catalogueProducts[i].Data[num]))
                .text(catalogueProducts[i].Data[num].ProductName)
                .appendTo(li);
        })

        if (i != catalogueProducts.length) {
            var divider = $('<li/>')
                .addClass('divider')
                .appendTo(content);
        }

    });

}