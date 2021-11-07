var learntext=document.getElementById("learntext");
var learnimg=document.getElementById("learnimg");
var earntext=document.getElementById("earntext");
var earnimg=document.getElementById("earnimg");
document.getElementById("learnimg").onclick=function(){
    if(learntext.style.display=="block"){
        learntext.style.display="none";
        learnimg.style.marginTop="180px";
        learnimg.style.transition="0.5s"
    }
    else{
        learntext.style.display="block";
        learnimg.style.marginTop="0px";
    }
}
document.getElementById("earnimg").onclick=function(){
    if(earntext.style.display=="block"){
        earntext.style.display="none";
        earnimg.style.marginTop="180px";
        earnimg.style.transition="0.5s"
    }
    else{
        earntext.style.display="block";
        earnimg.style.marginTop="0px";
    }
}