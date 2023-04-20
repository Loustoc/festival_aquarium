const IS_SHOP = true;
const achat = {
  nombre: 0,
  quoi: "",
};
const ACHETER_BUTTON = document.querySelectorAll(".acheter");
const panier = document.querySelector(".panier");
const navButtons = document.querySelectorAll(".nav_button");
const close_panier = document.querySelector(".close_panier_fenetre");
const acc = document.querySelectorAll(".accessories");
const clothes = document.querySelectorAll(".clothes");
const cont_produits = document.querySelector(".container_produits");

let caddie_img;
let caddie_svg_html;
let elem_cart;
let pastille;
let boutons_close;
let contenu_caddie = [0, 0, 0, 0, 0];
const nb_1 = document.getElementById("combien1");
const nb_2 = document.getElementById("combien2");
const nb_3 = document.getElementById("combien3");
const nb_4 = document.getElementById("combien4");
const nb_5 = document.getElementById("combien5");

const array_nb = [nb_1, nb_2, nb_3, nb_4, nb_5];

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
const maj_panier = () => {
  panier.innerHTML = "";
  for (i = 0; i < contenu_caddie.length; i++) {
    if (contenu_caddie[i] != 0) {
      console.log("test");
      let article_panier = document.createElement("div");
      article_panier.classList.add("article_panier");
      panier.appendChild(article_panier);
      article_panier.innerHTML = `<h2>${contenu_caddie[i].quoi}</h2> <img class="panier_close" data-produit="${i}" src="img/close.svg">`;
    }
  }
  boutons_close = document.querySelectorAll(".panier_close");
  boutons_close.forEach((close) => {
    close.addEventListener("click", (e) => {
      console.log("closed");
      contenu_caddie[e.target.dataset.produit] = 0;
      cart_anim();
      console.log(contenu_caddie);
      maj_panier();
    });
  });
};

const ajout_panier = (i, nombre) => {
  if (i == 0) {
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "Gourde";
    contenu_caddie[0] = objet;
  } else if (i == 1) {
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "Tote-Bag";
    contenu_caddie[1] = objet;
  } else if (i == 2) {
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "Coque pour Smartphone";
    contenu_caddie[2] = objet;
  } else if (i == 3) {
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "Sweat Shirt";
    contenu_caddie[3] = objet;
  } else if (i == 4) {
    let objet = Object.create(achat);
    objet.nombre = nombre;
    objet.quoi = "T-Shirt";
    contenu_caddie[4] = objet;
  }

  maj_panier();
};

const cart_anim = () => {
  if (!contenu_caddie.every((item) => item === 0)) {
    pastille.style.opacity = 1;
  } else {
    pastille.style.opacity = 0;
  }
  elem_cart.classList.toggle("anim");
  setTimeout(() => {
    elem_cart.classList.toggle("anim");
  }, 2000);
};

ACHETER_BUTTON.forEach((bouton_achat) => {
  bouton_achat.addEventListener("click", (e) => {
    for (i = 0; i < ACHETER_BUTTON.length; i++) {
      if (ACHETER_BUTTON[i] == e.target) {
        ajout_panier(i, parseInt(array_nb[i].value));
      }
    }
    cart_anim();
  });
});

document.querySelectorAll("li").forEach((bouton) => {
  bouton.addEventListener("click", (e) => {
    if (e.currentTarget == document.querySelectorAll("li")[0]) {
      panier.classList.toggle("panier_invisible");
      close_panier.classList.toggle("panier_invisible");
    } else if (e.currentTarget == document.querySelectorAll("li")[1]) {
      acc.forEach((accessoire) => {
        setTimeout(() => {
          accessoire.classList.toggle("produit_invisible");
        }, 500);
      });
      cont_produits.classList.toggle("invisible");
      setTimeout(() => {
        cont_produits.classList.toggle("invisible");
      }, 1000);
    } else if (e.currentTarget == document.querySelectorAll("li")[2]) {
      clothes.forEach((vet) => {
        setTimeout(() => {
          vet.classList.toggle("produit_invisible");
        }, 500);
      });
      cont_produits.classList.toggle("invisible");
      setTimeout(() => {
        cont_produits.classList.toggle("invisible");
      }, 1000);
    }
    bouton.classList.toggle("clicked");
  });
});

close_panier.addEventListener("click", () => {
  panier.classList.toggle("panier_invisible");
  close_panier.classList.toggle("panier_invisible");
  document.querySelectorAll("li")[0].classList.toggle("clicked");
});
