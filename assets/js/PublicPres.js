for (var count = parseInt(document.getElementsByClassName("col-md-3 col-md-4 col-sm-6 col-xs-12").length); count > -1; count--){
searchFor = "TileNo" + count;
var tile = document.getElementById(searchFor);
var isVis = tile.getAttribute("presVisible");
if (isVis === "0"){
    tile.style.display = "none";
}
}