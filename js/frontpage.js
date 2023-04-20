document.querySelector("main").style.transform = `translateY(-${
  document.querySelector("main").getBoundingClientRect().top
}px`;
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

var scrolling = 0;
var y_start = 0;
var offset_y = 0;
var current_state = 0;
window.addEventListener("touchstart", (e) => {
  y_start = e.touches[0].pageY;
});
const togglenavclosed = ()=>{
setTimeout(()=>{nav_closed = false;},1000);
}

window.addEventListener("touchmove", (e) => {
  if (
    !e.target.parentNode.parentNode.parentNode.classList.contains(classvisible) 
  ) {
    console.log(e.target);
    if (scrolling == 0) {
      offset_y = y_start - e.touches[0].pageY;
      console.log(offset_y);
      if (Math.abs(offset_y) > 5) {
        if (offset_y < 0 && current_state != 0) {
          current_state--;
          if (current_state == 0) {
            for (let i = 0; i < 5; i++) {
              document
                .querySelector("main")
                .classList.remove("main_scroll" + i);
            }
          } else {
            for (let i = 0; i < 5; i++) {
              document
                .querySelector("main")
                .classList.remove("main_scroll" + i);
            }
            document
              .querySelector("main")
              .classList.toggle("main_scroll" + current_state);
          }
        } else {
          if (current_state != 4) {
            current_state++;
            document
              .querySelector("main")
              .classList.toggle("main_scroll" + current_state);
            document
              .querySelector("main")
              .classList.toggle("main_scroll" + current_state - 1);
          }
        }
      }
      scrolling = 1;
      console.log(e.deltaY);
      setTimeout(function () {
        scrolling = 0;
      }, 1300);
    }
  }
});

addEventListener("wheel", (e) => {
  console.log(e.target);
  if (
    !e.target.parentNode.parentNode.parentNode.classList.contains("info") 
  ) {
    // console.log(e.deltaY);
    offset_scroll = e.deltaY;
    if (scrolling == 0) {
      console.log(offset_y);
      console.log("test");

      if (offset_scroll < 0 && current_state != 0) {
        current_state--;
        if (current_state == 0) {
          for (let i = 0; i < 4; i++) {
            document.querySelector("main").classList.remove("main_scroll" + i);
          }
        } else {
          for (let i = 0; i < 4; i++) {
            document.querySelector("main").classList.remove("main_scroll" + i);
          }
          document
            .querySelector("main")
            .classList.toggle("main_scroll" + current_state);
        }
      } else {
        if (current_state != 3) {
          current_state++;
          document
            .querySelector("main")
            .classList.toggle("main_scroll" + current_state);
          document
            .querySelector("main")
            .classList.toggle("main_scroll" + current_state - 1);
        }
      }

      scrolling = 1;
      console.log(e.deltaY);
      setTimeout(function () {
        scrolling = 0;
      }, 1300);
    }
  }
});
function boutique() {
  window.open("/boutique.html", "_blank")
}
function apropos() {
  current_state = 2;
  for (let i = 0; i < 4; i++) {
    document.querySelector("main").classList.remove("main_scroll" + i);
  }
  document
    .querySelector("main")
    .classList.toggle("main_scroll" + current_state);
    nav_closed = true;
    togglenavclosed();

}

function programme() {
  current_state = 1;
  for (let i = 0; i < 4; i++) {
    document.querySelector("main").classList.remove("main_scroll" + i);
  }
  document
    .querySelector("main")
    .classList.toggle("main_scroll" + current_state);
    nav_closed = true;
    togglenavclosed();
}

function billetterie() {
  current_state = 3;
  for (let i = 0; i < 4; i++) {
    document.querySelector("main").classList.remove("main_scroll" + i);
  }
  document
    .querySelector("main")
    .classList.toggle("main_scroll" + current_state);
    nav_closed = true;
    togglenavclosed();


}

function engagement() {
  document.querySelector(".engag").classList.toggle(classvisible);
}

function about_fest() {
  document.querySelector(".about_fest").classList.toggle(classvisible);
}
function programme_pdf(){
  window.open("./Programmation.pdf", "_blank");

}
function reco() {
  window.open("./precautions_et_recommandations.pdf", "_blank");
}

function carte() {
  window.open("./carte_festival.pdf", "_blank");
}

function close_info(e) {
  console.log(e.target);
  e.target.parentNode.parentNode.classList.toggle(classvisible);
}

function choixdate(e) {
  if (e.target.innerHTML == 17) {
    document.querySelector(".chosen_date").classList.remove("date_deux");
  } else {
    document.querySelector(".chosen_date").classList.add("date_deux");
  }
}

const liste_pass = document.querySelectorAll(".pass");

window.addEventListener("click", (e) => {
  if (
    e.target == liste_pass[0] ||
    e.target.parentNode == liste_pass[0] ||
    e.target.parentNode.parentNode == liste_pass[0]
  ) {
    document.querySelector(".achat1").classList.remove("achat_invisible");

    liste_pass[0].classList.remove("deselected_pass");
    liste_pass[0].classList.add("selected_pass");
    liste_pass[1].classList.add("deselected_pass");
    document.querySelector(".deselected_pass").setAttribute('data-before', 'JOURNEE');

    liste_pass[1].classList.remove("selected_pass");
    document.querySelector(".achat2").classList.add("achat_invisible");
  } else if (
    e.target == liste_pass[1] ||
    e.target.parentNode == liste_pass[1] ||
    e.target.parentNode.parentNode == liste_pass[1] ||
    e.target.parentNode.parentNode.parentNode == liste_pass[1]
  ) {
    document.querySelector(".achat2").classList.remove("achat_invisible");

    liste_pass[1].classList.remove("deselected_pass");
    liste_pass[1].classList.add("selected_pass");
    liste_pass[0].classList.add("deselected_pass");
    liste_pass[0].classList.remove("selected_pass");
    document.querySelector(".deselected_pass").setAttribute('data-before', '2 JOURS');

    document.querySelector(".achat1").classList.add("achat_invisible");
  }
});

const pastilles = document.querySelectorAll(".choix_conso_pastille");

const prix_slide = document.querySelectorAll(".subcont");

function troisconsos(e) {
  if (e.target.parentNode.parentNode == liste_pass[0]) {
    pastilles[0].style.transform = `translate(calc(${
      document.querySelectorAll(".choix_conso")[0].getBoundingClientRect().width
    }px - 63px),-3px`;
    pastilles[0].style.width = `
68px`;
    prix_slide[0].style.transform = `translate(-100%)`;
  } else {
    pastilles[1].style.transform = `translate(calc(${
      document.querySelectorAll(".choix_conso")[1].getBoundingClientRect().width
    }px - 63px),-3px`;
    pastilles[1].style.width = `
68px`;
    prix_slide[1].style.transform = `translate(-100%)`;
  }
}

function pasconsos(e) {
  if (e.target.parentNode.parentNode == liste_pass[0]) {
    pastilles[0].style.transform = `translate(-10px,-3px)`;
    pastilles[0].style.width = `100px`;
    prix_slide[0].style.transform = `translate(0%)`;
  } else {
    pastilles[1].style.transform = `translate(-10px,-3px)`;
    pastilles[1].style.width = `100px`;
    prix_slide[1].style.transform = `translate(0%)`;
  }
}
