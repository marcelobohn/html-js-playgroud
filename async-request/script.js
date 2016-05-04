function assyncRequest(href)
{
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.overrideMimeType("application/json");  
    xmlhttp.open("GET", href, false);
    xmlhttp.send(null);
    var json = JSON.parse(xmlhttp.responseText);
    console.log(json);
    $.each(json, function(i, field){
        $("div").append(field + " " + i);
    });    
    return json;
}

function assyncRequestjQuery(url) {
    $.getJSON(url, function(result){
        console.log(result);
        $.each(result, function(i, field){
            $("div").append(i + ": " + field);
        });
    });
}

function findProduct(productId) 
{
    // var text = assyncRequest('http://192.168.1.195:3000/product?chave='+productId);
    var text = assyncRequestjQuery('http://192.168.1.195:3000/product?chave='+productId);
    //console.log(text.chave);
    return text;
}

$(document).ready(function(){
    $("#btnPesquisa").click(function(){
        $("#descProduct").html(findProduct($('#idProduct').val()));
    });
});