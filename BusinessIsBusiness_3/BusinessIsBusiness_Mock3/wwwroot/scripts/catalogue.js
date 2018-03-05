var volumeProducts = [
    { ProductName: "Prova1", UnitPrice: 7 },
    { ProductName: "Prova2", UnitPrice: 5 },
    { ProductName: "Prova3", UnitPrice: 2 },
    { ProductName: "Prova4", UnitPrice: 4 }
]
var areaProducts = [
    { ProductName: "Prova5", UnitPrice: 7 },
    { ProductName: "Prova6", UnitPrice: 7 },
    { ProductName: "Prova7", UnitPrice: 3 }
]

var quantityProducts = [
    { ProductName: "Prova8", UnitPrice: 18 },
    { ProductName: "Prova9", UnitPrice: 10 },
    { ProductName: "Prova0", UnitPrice: 1 }
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
