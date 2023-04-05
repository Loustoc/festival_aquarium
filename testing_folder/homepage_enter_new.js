//COMMENCE PAR LES YEUX OUVERTS

setTimeout(function() {
    document.querySelector(".video_init").classList.add("fadeout_vid");
    setTimeout(function() {
      document.querySelector(".video_init").remove();
      setTimeout(function() {
        document.querySelector(".cache_home").classList.add("fadeout_vid");
        setTimeout(function() {
          document.querySelector(".cache_home").remove();
    
         }, 100);
       }, 100);
     }, 500);
  }, 2500);

var a = document.getElementById("logo");
var paup;
var pos = 0;
a.addEventListener("load", function () {
  setTimeout(function () {ouvrepaup()},3000)
  
});

//OUVERTURE INITIALE DES PAUPIERES

function ouvrepaup(){
  var svgDoc = a.contentDocument;
  paup = svgDoc.getElementById("paupieres");
  paupmove = setInterval(cligne,3000);
}


//FIN OUVERTURE INITIALE DES PAUPIERES

//CLIGNEMENT DES PAUPIERES TOUTES LES 3 SEC
function cligne(){
  paupfermecligne = setInterval(fermecligne,5);
}


function fermecligne(){
  if (pos<=80){
    pos+=1;
    paup.style.transform = `translateY(${pos}px)`;
  }
  else{
    clearTimeout(paupfermecligne);
    paupouvrecligne = setInterval(ouvrecligne,5);
  }
}

function ouvrecligne(){
  if (pos>=0){
    pos-=1;
    paup.style.transform = `translateY(${pos}px)`;
  }
  else{
    clearTimeout(paupouvrecligne);
  }
}
//FIN CLIGNEMENT DES PAUPIERES TOUTES LES 3 SEC
