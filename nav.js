setTimeout(function () {
  document.querySelector("nav").classList.remove("invisible");
  document.querySelector(".logo_container").classList.remove("invisible");
  // document.querySelector("video").play();
//   setTimeout(function () {
//     document.querySelector(".bloc_container").classList.remove("invisible");
//     document.querySelector(".bloc_containerdeux").classList.remove("invisible");
//     //play vid auto
        
     
       
      
//   }, 1000);
}, 1000);

setInterval(checkvid, 10);
function checkvid(){

    if ( !document.querySelector("video").playing == true)
    {
  document.querySelector("video").play();

    }
}

// function vague_apropos() {
//   console.log("vague");
//   document.getElementById("about_wave").classList.add("visible_wave_about");
//   var posy = 0;
//   vaguemove = setInterval(monte, 10);
//   function monte() {
//     if (posy <= 700 && posy <= 40) {
//       posy = posy + 3;
//       document.getElementById(
//         "about_wave"
//       ).style.transform = `translateX(${posy}px)`;
//     } else if (posy <= 700 && posy <= 500) {
//       posy = posy + 2;
//       document.getElementById(
//         "about_wave"
//       ).style.transform = `translateX(${posy}px)`;
//     } else if (posy <= 700 && posy <= 600) {
//       posy = posy + 1;
//       document.getElementById(
//         "about_wave"
//       ).style.transform = `translateX(${posy}px)`;
//     } else {
//       clearInterval(vaguemove);
//     }
//   }
// }

window.addEventListener("scroll", function (e) {
  if (window.innerWidth >= 429) {
    var a = 100;
    if (document.documentElement.scrollTop > 0) {
      document.querySelector(".logo_nav").classList.add("scrolled");
      document.querySelector("#languette").classList.add("scrolled_languette");
    } else {
      document.querySelector(".logo_nav").classList.remove("scrolled");
      document
        .querySelector("#languette")
        .classList.remove("scrolled_languette");
    }
  }

  // if (document.documentElement.scrollTop >= 300) {
  //   document.querySelector(".bloc_container").style.transform =
  //     "translateX(-2000px)";
  //   document.querySelector(
  //     ".bloc_containerdeux"
  //   ).style.transform = `translate(-90vw,${
  //     document.documentElement.scrollTop - a
  //   }px)`;
  // } else if (document.documentElement.scrollTop <= 30) {
  //   document.querySelector(
  //     ".bloc_container"
  //   ).style.transform = `translate(0px,${document.documentElement.scrollTop}px)`;
  //   document.querySelector(
  //     ".bloc_containerdeux"
  //   ).style.transform = `translate(5vw,0px)`;
  // } else if (
  //   document.documentElement.scrollTop >= 30 &&
  //   document.documentElement.scrollTop <= 300
  // ) {
  //   if (
  //     document.querySelector(".bloc_container").getBoundingClientRect().x <=
  //     -1800
  //   ) {
  //     document.querySelector(
  //       ".bloc_containerdeux"
  //     ).style.transform = `translate(-90vw,${
  //       document.documentElement.scrollTop - a
  //     }px)`;
  //   }
  // }
});
var navopen = 0;
window.addEventListener("click", function (e){
  if (
    document.querySelector(".circles_container")
    .classList.contains("mobile_nav_active") && !e.target.classList.contains("logo_container")){
      toggle_menu();
      }
});

document
  .querySelector(".logo_container")
  .addEventListener("click", toggle_menu);

  function toggle_menu(){
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
      // document.querySelector(".lineup_circle").classList.add("lineup_circle_init");
      // document.querySelector(".about_circle").classList.add("about_circle_init");
      // document.querySelector(".billetterie_circle").classList.add("billet_circle_init");

      document.querySelector(".flou_nav_open").classList.toggle("flou_active");
      document.querySelector(".circles_container").classList.add("circle_init");
      document.querySelector("html").classList.toggle("scroll_disabled");
      document
        .querySelector(".circles_container")
        .classList.toggle("mobile_nav_active");
      document.querySelector("#about_curve").classList.toggle("menu_active");
      document.querySelector("#l").classList.toggle("menu_active");
      document.querySelector("#b").classList.toggle("menu_active");
      setTimeout(function () {
        $(b).arctext({ radius: 80, dir: -1 });
        $(about_curve).arctext({ radius: 200, dir: -1 });
        $(l).arctext({ radius: 100, dir: -1 });
      }, 800);
      if (
        !document
          .querySelector(".circles_container")
          .classList.contains("mobile_nav_active")
      ) {
        document
          .querySelector("#about_curve")
          .classList.toggle("menu_active_visible");
        document.querySelector("#l").classList.toggle("menu_active_visible");
        document.querySelector("#b").classList.toggle("menu_active_visible");
      } else if (
        init == 0 &&
        document
          .querySelector(".circles_container")
          .classList.contains("mobile_nav_active")
      ) {
        setTimeout(function () {
          document
            .querySelector("#about_curve")
            .classList.toggle("menu_active_visible");
          document.querySelector("#l").classList.toggle("menu_active_visible");
          document.querySelector("#b").classList.toggle("menu_active_visible");
        }, 300);
      } else {
        setTimeout(function () {
          document
            .querySelector("#about_curve")
            .classList.toggle("menu_active_visible");
          document.querySelector("#l").classList.toggle("menu_active_visible");
          document.querySelector("#b").classList.toggle("menu_active_visible");
        }, 900);
      }
    }
  }

// window.addEventListener("click", function (e) {
//   if (!e.target.classList.contains("about")) {
//     document.getElementById("about_wave").classList.add("invisible_wave_about");
//     setTimeout(function () {
//       document
//         .getElementById("about_wave")
//         .classList.remove("visible_wave_about");
//       document.getElementById("about_wave").style.transform =
//         "translate(0px 0px)";
//       document
//         .getElementById("about_wave")
//         .classList.remove("invisible_wave_about");
//     }, 1000);
//   }
 
// });

// function lineup(){
//   document.querySelector(".lineup_article").classList.toggle("lineup_visible");
// }

