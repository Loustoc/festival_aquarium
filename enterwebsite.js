const cache_home = document.querySelector(".cache_home");

setTimeout(function () {
  document.querySelector("#festival_typo").classList.remove("invisible");
  document.querySelector(".logo_enter_container").classList.remove("invisible");
  document.querySelector(".enter_container").classList.remove("invisible");
}, 1000);

function open_website() {
  let anim = document.createElement("video");
  anim.src = "anim.webm";
  anim.classList.add("anim_intro");
  document.querySelector(".container_enter").classList.add("slide_off");
  setTimeout(function () {
    document.body.appendChild(anim);
    anim.play();
    setTimeout(function () {
      anim.classList.add("fadeout_vid");
      cache_home.classList.add("invisible");
      cache_home.style.zIndex = -9999;
      setTimeout(function () {
        document.querySelector(".container_enter").remove();
        document.querySelector(".cache_home").remove();
      }, 1000);
    }, 3000);
    // setTimeout(function (){ window.open("./frontpage.html","_self")},4000)
  }, 1000);
}
