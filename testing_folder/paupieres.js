var a = document.getElementById("logo");
var paup;
var pos = 0;
a.addEventListener("load", function () {
  setTimeout(function () {ouvrepaup()},500)
  
});

function ouvrepaup(){
  var svgDoc = a.contentDocument;
  paup = svgDoc.getElementById("paupieres");
  paupmove = setInterval(ouvrepaupstep,20);
}

function ouvrepaupstep(){
  if (pos>=-25){
    pos-=1;
    paup.style.transform = `translateY(${pos}px)`;
  }
  else{
    clearTimeout(paupmove);
  }
}