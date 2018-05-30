for (var count = 50; count > -1; count--){
searchFor = "TileNo" + count;
var tile = document.getElementById(searchFor);
if (tile !==null) {

var isVis = tile.getAttribute("presVisible");
var isDis = tile.getAttribute("Visible");
if (isVis === "0"){
    tile.style.display = "none";
}
if (isDis === "1"){
    tile.style.display = "none";
}
}
}