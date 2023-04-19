const cache_home = document.querySelector(".cache_home");
const isAppleDevice = true;

var home_page = false;
setTimeout(function () {
  document.querySelector("#festival_typo").classList.remove("invisible");
  document.querySelector(".logo_enter_container").classList.remove("invisible");
  document.querySelector(".enter_container").classList.remove("invisible");
}, 1000);

function open_website() {
  let anim = document.createElement("img");
  if (isAppleDevice) {
    anim.classList.add("fadein_vid");
    document.body.appendChild(anim);
    anim.src = "/img/anim.gif";
    setTimeout(function () {
      anim.classList.remove("fadein_vid");
    }, 1000);
  } else {
    anim.src = "/img/anim.webm";
    document.body.appendChild(anim);
    anim.play();
  }
  anim.classList.add("anim_intro");
  document.querySelector(".container_enter").classList.add("slide_off");
  setTimeout(function () {
    home_page = true;
    setTimeout(function () {
      anim.classList.add("fadeout_vid");
      cache_home.classList.add("invisible");
      cache_home.style.zIndex = -9999;
      setTimeout(function () {
        document.querySelector(".container_enter").remove();
        document.querySelector(".cache_home").remove();
      }, 1000);
    }, 2000);
  }, 1000);
}

const testNav = () => {
  if (
    !navigator.userAgent.match(/iPhone/i) &&
    !navigator.userAgent.match(/iPad/i) &&
    !(navigator.userAgent.indexOf("Mac OS X") != -1)
  ) {
    isAppleDevice = false;
    document.querySelector(".start_article").style.minHeight =
      "-webkit-fill-available";
  }
   if (navigator.userAgent.match(/Android/i)){
    document.querySelector(".info_visible").style.transform = "transform: translate(0px, calc((var(--vh, 1vh)*100) / 2 - 50%))";
    document.querySelector(".info_bubble").style.transform = "transform: translate(-140vw, calc((var(--vh, 1vh)*100) / 2 - 50%))";
  }
  else {
    document.querySelector(".info_visible").style.transform = "transform: translate(0px, calc((var(--vh, 1vh)*100) / 2 - 50% + 100))";
    document.querySelector(".info_bubble").style.transform = "transform: translate(-140vw, calc((var(--vh, 1vh)*100) / 2 - 50% + 100))";
  }
};

testNav();

const testGif = () => {
  let anim = document.createElement("img");
  anim.classList.add("anim_intro");

  document.body.appendChild(anim);
  anim.src = "/img/anim.gif";
};
