
document.onkeydown=function(e){  
        var keynum = e.keycode || e.which;
        var keychar = String.fromCharCode(keynum);
        var numcheck = /\d/;
        console.log(!numcheck.test(keychar))
        
}