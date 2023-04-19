setTimeout(function () {
  document.querySelector("nav").classList.remove("invisible");
  document.querySelector(".logo_container").classList.remove("invisible");
}, 1000);

setInterval(checkvid, 10);
function checkvid() {
  if (!document.querySelector("video").playing == true) {
    document.querySelector("video").play();
  }
}

// window.addEventListener("scroll", function (e) {
//   if (window.innerWidth >= 429) {
//     var a = 100;
//     if (document.documentElement.scrollTop > 0) {
//       document.querySelector(".logo_nav").classList.add("scrolled");
//       document.querySelector("#languette").classList.add("scrolled_languette");
//     } else {
//       document.querySelector(".logo_nav").classList.remove("scrolled");
//       document
//         .querySelector("#languette")
//         .classList.remove("scrolled_languette");
//     }
//   }
// });
var navopen = 0;
window.addEventListener("click", function (e) {
  // console.log(e.target);

  if (
    document
      .querySelector(".circles_container")
      .classList.contains("mobile_nav_active") &&
    !e.target.classList.contains("logo_container") &&
    !e.target.classList.contains("burger_mobile")
  ) {
    console.log("coucou");

    toggle_menu();
  }
});

document
  .querySelector(".logo_container")
  .addEventListener("click", toggle_menu);
document.querySelector(".burger_mobile").addEventListener("click", toggle_menu);

function playAnimationBurger() {
  console.log("test anim");
  const svgatorObject = document.getElementById("animated-burger");
  const svgatorDocument = svgatorObject.contentDocument;
  const svgatorElement = svgatorDocument.getElementById("bottom");
  const svgatorElement2 = svgatorDocument.getElementById("top");
  const svgatorElement3 = svgatorDocument.getElementById("middle");

  svgatorElement.classList.toggle("rotation_bottom");
  svgatorElement2.classList.toggle("rotation_top");
  svgatorElement3.classList.toggle("invisible");
}

function toggle_menu() {
  playAnimationBurger();
  console.log("fonc lancée");

  if (window.innerWidth >= 429) {
    window.scrollBy(0, -1 * document.documentElement.scrollTop);
  } else {
    var init = 1;
    if (
      document
        .querySelector(".circles_container")
        .classList.contains("circle_init")
    ) {
      init = 0;
    }

    // console.log("1");

    document.querySelector(".flou_nav_open").classList.toggle("flou_active");
    document.querySelector(".circles_container").classList.add("circle_init");
    document.querySelector("html").classList.toggle("scroll_disabled");
    document
      .querySelector(".circles_container")
      .classList.toggle("mobile_nav_active");
    document.querySelector("#about_curve").classList.toggle("menu_active");
    // document.querySelector("#l").classList.toggle("menu_active");
    document.querySelector("#b").classList.toggle("menu_active");
    document.querySelector("#bou").classList.toggle("menu_active");
    document.querySelector("#p").classList.toggle("menu_active");

    setTimeout(function () {
      // console.log("2");

      $(b).arctext({ radius: 60, dir: -1 });
      $(bou).arctext({ radius: 100, dir: -1 });

      $(about_curve).arctext({ radius: 150, dir: -1 });
      $(p).arctext({ radius: 80, dir: -1 });

      // $(l).arctext({ radius: 100, dir: -1 });
    }, 800);
    if (
      !document
        .querySelector(".circles_container")
        .classList.contains("mobile_nav_active")
    ) {
      // console.log("3");

      document
        .querySelector("#about_curve")
        .classList.toggle("menu_active_visible");
      // document.querySelector("#l").classList.toggle("menu_active_visible");
      document.querySelector("#bou").classList.toggle("menu_active_visible");
      document.querySelector("#p").classList.toggle("menu_active_visible");

      document.querySelector("#b").classList.toggle("menu_active_visible");
    } else if (
      init == 0 &&
      document
        .querySelector(".circles_container")
        .classList.contains("mobile_nav_active")
    ) {
      // console.log("4");

      setTimeout(function () {
        document
          .querySelector("#about_curve")
          .classList.toggle("menu_active_visible");
        // document.querySelector("#l").classList.toggle("menu_active_visible");
        document.querySelector("#bou").classList.toggle("menu_active_visible");
        document.querySelector("#p").classList.toggle("menu_active_visible");

        document.querySelector("#b").classList.toggle("menu_active_visible");
      }, 300);
    } else {
      // console.log("5");

      setTimeout(function () {
        document
          .querySelector("#about_curve")
          .classList.toggle("menu_active_visible");
        // document.querySelector("#l").classList.toggle("menu_active_visible");
        document.querySelector("#bou").classList.toggle("menu_active_visible");
        document.querySelector("#p").classList.toggle("menu_active_visible");
        document.querySelector("#b").classList.toggle("menu_active_visible");
      }, 900);
    }
  }
}

//Normal : 1/5/2
//Anormal :  1/5/1/3/2
