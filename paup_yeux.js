var a;
var paup_cont = document.getElementById("logo");
var mouseposx;
var mouseposy;
var eyeg;
var eyed;
var sizelogo = 20;
let facteur = 1;
//COMMENCE PAR LES YEUX OUVERTS

var paup;
var pos = 0;
paup_cont.addEventListener("load", function () {
  setTimeout(function () {
    ouvrepaup();
  }, 3000);
});

//OUVERTURE INITIALE DES PAUPIERES

function ouvrepaup() {
  var svgDoc = paup_cont.contentDocument;
  paup = svgDoc.getElementById("paupieres");
  paupmove = setInterval(cligne, 3000);
}

//FIN OUVERTURE INITIALE DES PAUPIERES

//CLIGNEMENT DES PAUPIERES TOUTES LES 3 SEC
function cligne() {
  paupfermecligne = setInterval(fermecligne, 5);
}

function fermecligne() {
  if (pos <= 80) {
    pos += 1;
    paup.style.transform = `translateY(${pos}px)`;
  } else {
    clearTimeout(paupfermecligne);
    paupouvrecligne = setInterval(ouvrecligne, 5);
  }
}

function ouvrecligne() {
  if (pos >= 0) {
    pos -= 1;
    paup.style.transform = `translateY(${pos}px)`;
  } else {
    clearTimeout(paupouvrecligne);
  }
}
//FIN CLIGNEMENT DES PAUPIERES TOUTES LES 3 SEC

document.addEventListener("mousemove", (event) => {
  var eventDoc, doc, body;

  event = event || window.event; // IE-ism

  // If pageX/Y aren't available and clientX/Y are,
  // calculate pageX/Y - logic taken from jQuery.
  // (This is to support old IE)
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX =
      event.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    event.pageY =
      event.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);
  }
  mouseposx = event.pageX;
  mouseposy = event.pageY;
  // console.log(mouseposx);
  console.log(mouseposy);

  lookat();
});

function lookat() {
  
  if (home_page) {
    a = paup_cont;
    facteur = 0;
  } else {
    a = document.getElementById("logo_enter");
  }

  console.log(a);
  var svgDoc = a.contentDocument;
  var eyed = svgDoc.getElementById("eyed");
  var eyeg = svgDoc.getElementById("eyeg");
  var blangx =
    svgDoc.getElementById("blancg").getBoundingClientRect().x +
    svgDoc.getElementById("blancg").getBoundingClientRect().width / 2 +
    window.innerWidth / 2 -
    ((sizelogo / 100) * window.innerWidth) / 2;
  var blany =
    svgDoc.getElementById("blancg").getBoundingClientRect().y -
    svgDoc.getElementById("blancg").getBoundingClientRect().height / 2 +
    facteur * (window.innerHeight / 2 - sizelogo / 2);

  var blandx =
    svgDoc.getElementById("blancd").getBoundingClientRect().x +
    svgDoc.getElementById("blancd").getBoundingClientRect().width / 2 +
    window.innerWidth / 2 -
    ((sizelogo / 100) * window.innerWidth) / 2;
  // console.log(blangx);

  var axisy = mouseposy - blany;
  var axisxdroite = mouseposx - blandx;
  var axisxgauche = mouseposx - blangx;
  if (mouseposy <= blany) {
    console.log("dessus");
  } else if (mouseposy >= blany) {
    console.log("dessous");
  }
  var variationd = Math.sqrt(100 / (axisxdroite * axisxdroite + axisy * axisy));
  var variationdx = variationd * axisxdroite;
  var variationdy = variationd * axisy;

  eyed.style.transform = `translate(${variationdx}px,${variationdy}px)`;

  var variationg = Math.sqrt(100 / (axisxgauche * axisxgauche + axisy * axisy));
  var variationgx = variationg * axisxgauche;
  var variationgy = variationg * axisy;

  eyeg.style.transform = `translate(${variationgx}px,${variationgy}px)`;
}
