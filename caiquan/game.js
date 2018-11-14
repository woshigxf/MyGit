//获取对象
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

//初始化 玩家数据、电脑数据以及胜利次数
var nSelect = 0, nComputer = 0, num = 0;

//事件绑定
oJd.onclick = function(){
    nSelect = 1;
    nComputer = nRandom();
    caiquan(nSelect,nComputer);
}
oSt.onclick = function(){
    nSelect = 2;
    nComputer = nRandom();
    caiquan(nSelect,nComputer);  
}
oBu.onclick = function(){
    nSelect = 3;
    nComputer = nRandom(); 
    caiquan(nSelect,nComputer);
}
oBtn.onclick = function(){
    oSelect.style.display = "flex";
    oResult.style.display = "none";
    this.style.display = "none";
}

//创建功能函数
//获取电脑出的拳，创建一个1到3随机数
function nRandom(){
    return Math.floor(Math.random()*3 + 1);
}
//根据玩家和电脑的数据来修改页面样式
function caiquan(nSelect,nComputer){
    var nfinal = bijiao(nSelect,nComputer);
    oSelect.style.display="none";
    oResult.style.display="flex";
    oBtn.style.display="block";
    oPlayer.className = oNpc.className = oFinal.className = "";
    oPlayer.className = "player b"+nSelect;
    oFinal.className = "final b"+nfinal;
    oNpc.className = "npc b"+nComputer;
    if(nfinal == 1){
        num++;
    }
    oCount.innerHTML = num;   
}
//计算猜拳结果，返回相应数值
function bijiao(player,npc){
    // res的值 1:胜 2:平 3:负
    if(player == npc){
        var res = 2;
    }else if(player < npc){
        res = player==1&&npc==3?1:3;
    }else{
        res = player==3&&npc==1?3:1;
    }
    return res;
}