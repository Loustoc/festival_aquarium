var a = document.getElementById("logo");
var mouseposx;
var mouseposy;
var eyeg;
var eyed;
var sizelogo = 30;



a.addEventListener("load", function () {
  var svgDoc = a.contentDocument;
  var eyed = svgDoc.getElementById("eye_droite");
  var eyeg = svgDoc.getElementById("eye_gauche");
});

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
  // console.log(mouseposy);

  lookat();
});

function lookat() {
  var svgDoc = a.contentDocument;
  var eyed = svgDoc.getElementById("eye_droite");
  var eyeg = svgDoc.getElementById("eye_gauche");
  var blangx =
    svgDoc.getElementById("blanc_x5F_gauche").getBoundingClientRect().x +
    svgDoc.getElementById("blanc_x5F_gauche").getBoundingClientRect().width / 2 + (window.innerWidth)/2 - (sizelogo/100*window.innerWidth)/2;
  var blany =
    svgDoc.getElementById("blanc_x5F_gauche").getBoundingClientRect().y +
    svgDoc.getElementById("blanc_x5F_gauche").getBoundingClientRect().height /
      2;
  var blandx =
    svgDoc.getElementById("blanc_x5F_droite").getBoundingClientRect().x +
    svgDoc.getElementById("blanc_x5F_droite").getBoundingClientRect().width / 2+ (window.innerWidth)/2 - (sizelogo/100*window.innerWidth)/2;
    console.log(blangx);

  var axisy = mouseposy - blany;
  var axisxdroite = mouseposx - blandx;
  var axisxgauche = mouseposx - blangx;

  var variationd = Math.sqrt(15 / (axisxdroite * axisxdroite + axisy * axisy));
  var variationdx = variationd * axisxdroite;
  var variationdy = variationd * axisy;

  eyed.style.transform = `translate(${variationdx}px,${variationdy}px)`;

  var variationg = Math.sqrt(15 / (axisxgauche * axisxgauche + axisy * axisy));
  var variationgx = variationg * axisxgauche;
  var variationgy = variationg * axisy;

  eyeg.style.transform = `translate(${variationgx}px,${variationgy}px)`;
}
