var oBtn1 = document.getElementById("btn1");
var oBtn2 = document.getElementById("btn2");
var oBtn3 = document.getElementById("btn3");
var oLink = document.getElementsByTagName("link")[0];
var sHref = oLink.href.substring(oLink.href.indexOf("index"),)
oBtn1.onclick = function(){
   oLink.href="index.css";
};
oBtn2.onclick = function(){
   oLink.href="index1.css";
};
oBtn3.onclick = function(){
   oLink.href="index2.css";
};