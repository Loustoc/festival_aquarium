const IS_SHOP = true;
const achat = {
  nombre:0,
  quoi:""
};
const ACHETER_BUTTON = document.querySelectorAll(".acheter");

let caddie_img;
let caddie_svg_html;
let elem_cart;
let pastille;
let contenu_caddie = [0,0,0,0];
const nb_1 = document.getElementById("combien1");
const nb_2 = document.getElementById("combien2");
const nb_3 = document.getElementById("combien3");
const nb_4 = document.getElementById("combien4");
const array_nb = [nb_1,nb_2,nb_3,nb_4];

const nb_produit = document.querySelectorAll(".combien");

const init_caddie = () => {
  caddie_img = document.getElementById("cart_img");
  console.log("caddie_img " + caddie_img);
  setTimeout(() => {
    caddie_svg_html = caddie_img.contentDocument;
    console.log("caddie_svg_html " + caddie_svg_html);
    elem_cart = caddie_svg_html.getElementById("cart");
    pastille = caddie_svg_html.getElementById("pastille");

    console.log("elem_cart " + elem_cart);
  }, 1000);
};

const ajout_panier = (i,nombre) => {
  if (i==0){

    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "gourde";
    contenu_caddie[0] = objet;

  }
  else if (i==1){

    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "tote bag";
    contenu_caddie[1] = objet;

  }
  else if (i==2){
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "sweat shirt";
    contenu_caddie[2] = objet;


  }
  else if (i==3){
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "T-Shirt";
    contenu_caddie[3] = objet;

  }

}

const cart_anim = () => {
  if (contenu_caddie != [0,0,0,0])
  {
    pastille.style.opacity = 1;
  }
  elem_cart.classList.toggle("anim");
  setTimeout(() => {
    elem_cart.classList.toggle("anim");
  }, 2000);
};

ACHETER_BUTTON.forEach((bouton_achat) => {
  bouton_achat.addEventListener("click", (e) => {
    for (i=0;i<ACHETER_BUTTON.length;i++){

      if (ACHETER_BUTTON[i] == e.target)
      {
        console.log(i);
        ajout_panier(i,parseInt(array_nb[i].value));
      }
    }
    cart_anim();
  });
});
