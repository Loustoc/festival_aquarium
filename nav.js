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

});
var navopen = 0;
window.addEventListener("click", function (e) {
  if (
    document
      .querySelector(".circles_container")
      .classList.contains("mobile_nav_active") &&
    !e.target.classList.contains("logo_container")
  ) {
    toggle_menu();
  }
});

document
  .querySelector(".logo_container")
  .addEventListener("click", toggle_menu);

function toggle_menu() {
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
   
    document.querySelector(".flou_nav_open").classList.toggle("flou_active");
    document.querySelector(".circles_container").classList.add("circle_init");
    document.querySelector("html").classList.toggle("scroll_disabled");
    document
      .querySelector(".circles_container")
      .classList.toggle("mobile_nav_active");
    document.querySelector("#about_curve").classList.toggle("menu_active");
    document.querySelector("#l").classList.toggle("menu_active");
    document.querySelector("#b").classList.toggle("menu_active");
    document.querySelector("#bou").classList.toggle("menu_active");
    document.querySelector("#p").classList.toggle("menu_active");

    setTimeout(function () {
      $(b).arctext({ radius: 60, dir: -1 });
      $(bou).arctext({ radius: 100, dir: -1 });

      $(about_curve).arctext({ radius: 200, dir: -1 });
      $(p).arctext({ radius: 80, dir: -1 });

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
      document.querySelector("#bou").classList.toggle("menu_active_visible");
      document.querySelector("#p").classList.toggle("menu_active_visible");

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
        document.querySelector("#bou").classList.toggle("menu_active_visible");
        document.querySelector("#p").classList.toggle("menu_active_visible");

        document.querySelector("#b").classList.toggle("menu_active_visible");
      }, 300);
    } else {
      setTimeout(function () {
        document
          .querySelector("#about_curve")
          .classList.toggle("menu_active_visible");
        document.querySelector("#l").classList.toggle("menu_active_visible");
        document.querySelector("#bou").classList.toggle("menu_active_visible");
        document.querySelector("#p").classList.toggle("menu_active_visible");
        document.querySelector("#b").classList.toggle("menu_active_visible");
      }, 900);
    }
  }
}

