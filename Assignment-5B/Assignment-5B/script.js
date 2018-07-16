//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

window.onload=function() {
	
  document.getElementById("button").enabled = false;
  document.getElementById("button").style.backgroundColor = "grey";
  document.getElementById("button").style.borderColor="grey"
  document.getElementById("ddRow1").style.display = "none";
  document.getElementById("ddRow2").style.display = "none";
  document.getElementById("ddRow3").style.display = "none";

}

function changeColor(){
if(document.getElementById("checkBox1").checked){
document.getElementById("myRow1").style.backgroundColor="yellow"
}
else{
	document.getElementById("myRow1").style.backgroundColor="white"
}


if(document.getElementById("checkBox2").checked){
document.getElementById("myRow2").style.backgroundColor="yellow"
}
else{
	document.getElementById("myRow2").style.backgroundColor="white"
}


if(document.getElementById("checkBox3").checked){
document.getElementById("myRow3").style.backgroundColor="yellow"
}
else{
	document.getElementById("myRow3").style.backgroundColor="white"
}


if(!document.getElementById("checkBox1").checked && 
   (!document.getElementById("checkBox2").checked) && 
   (!document.getElementById("checkBox3").checked)){
    document.getElementById("button").style.backgroundColor="grey"
	document.getElementById("button").style.borderColor="grey"
	document.getElementById("button").enabled = false;
}
else{
	document.getElementById("button").style.borderColor="orange"
	document.getElementById("button").style.backgroundColor="orange"
	document.getElementById("button").enabled = true;
}

}



var imgArrow1 = document.getElementById("imgArrow1");
var imgArrow2 = document.getElementById("imgArrow2");
var imgArrow3 = document.getElementById("imgArrow3");


imgArrow1.onclick = function(){
    if(document.getElementById("ddRow1").style.display == "none"){
document.getElementById("ddRow1").style.display = "table-row";
}
else{
	document.getElementById("ddRow1").style.display = "none";
}
}

imgArrow2.onclick = function(){
    if(document.getElementById("ddRow2").style.display == "none"){
document.getElementById("ddRow2").style.display = "table-row";
}
else{
	document.getElementById("ddRow2").style.display = "none";
}
}

imgArrow3.onclick = function(){
    if(document.getElementById("ddRow3").style.display == "none"){
document.getElementById("ddRow3").style.display = "table-row";
}
else{
	document.getElementById("ddRow3").style.display = "none";
}
}






 



