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
    new Product("Sabbia lavata", 27.90),
    new Product("Sabbia asciutta", 40.80),
    new Product("Miscela di ghiaia",28.70),
    new Product("Misto cementato", 39.10)
]

var areaProducts = [
    new Product("Pavimento Corallo in PVC 0.8mm", 4.30),
    new Product("Pavimento Corallo in PVC 2.0mm", 9.60),
    new Product("Mosaico Pasta di Vetro", 36.80)
]

var quantityProducts = [
    new Product("Piastrella in PVC", 3.70),
    new Product("Colla al Quarzo formato 5kg", 4.90),
    new Product("Mosaico Foglia", 18.50)
]


var catalogueProducts = [
    { Name: "volume", Data: volumeProducts },
    { Name: "area", Data: areaProducts },
    { Name: "pezzo", Data: quantityProducts }]



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