var oSelect = document.getElementsByClassName("select")[0];
var oResult = document.getElementsByClassName("result")[0];
var oJd = document.getElementsByClassName("jd")[0];
var oSt = document.getElementsByClassName("st")[0];
var oBu = document.getElementsByClassName("bu")[0];
var oPlayer = document.getElementsByClassName("player")[0];
var oFinal = document.getElementsByClassName("final")[0];
var oNpc = document.getElementsByClassName("npc")[0];
var oBtn = document.getElementById("btn");
var oCount = document.getElementById("count");

var nSelect = "";
var num = 0;
oJd.onclick = function(){
    nSelect = 1;
    var nComputer = Math.floor(Math.random()*3 + 1);
    caiquan(nSelect,nComputer);
}
oSt.onclick = function(){
    nSelect = 2;
    nComputer = Math.floor(Math.random()*3 + 1);
    caiquan(nSelect,nComputer);  
}
oBu.onclick = function(){
    nSelect = 3;
    nComputer = Math.floor(Math.random()*3 + 1); 
    caiquan(nSelect,nComputer);
}
function caiquan(nSelect,nComputer){
    bijiao(nSelect,nComputer);
    oSelect.style.display="none";
    oResult.style.display="flex";
    oBtn.style.display="block";
    oPlayer.innerHTML = shoushi(nSelect);
    oFinal.innerHTML = bijiao(nSelect,nComputer);
    oNpc.innerHTML = shoushi(nComputer);
    if(bijiao(nSelect,nComputer) == "胜"){
        num++;
    }
    oCount.innerHTML = num;   
}
oBtn.onclick = function(){
    oSelect.style.display = "flex";
    oResult.style.display = "none";
    this.style.display = "none";
}
function bijiao(player,npc){
    if(player == npc){
        var res = "平";
    }else if(player < npc){
        if(player==1&&npc==3){
           res = "胜";
        }else{
            res = "负";
        }
    }else{
        if(player==3&&npc==1){
            res="负";
        }else{
            res = "胜";
        }
    }
    return res;
}
function shoushi(val){
    switch (val) {
        case 1:
            var hand = "剪刀";
            break;
        case 2:
            hand = "石头";
            break;    
        default:
            hand = "布";
            break;
    }
    return hand;
}