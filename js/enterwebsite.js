const cache_home = document.querySelector(".cache_home");
var isAppleDevice = true;
var isMobileDevice = false;
var classvisible;
var classbubble;
var userAgent = new UserAgent().parse(navigator.userAgent);
const cont_anim = document.querySelector(".cont_anim");
var home_page = false;
setTimeout(function () {
  document.querySelector("#festival_typo").classList.remove("invisible");
  document.querySelector(".logo_enter_container").classList.remove("invisible");
  document.querySelector(".enter_container").classList.remove("invisible");
}, 1000);

function open_website() {
  if (isAppleDevice) {
    let anim = document.createElement("img");

    anim.classList.add("fadein_vid");
    cont_anim.appendChild(anim);
    anim.src = "/img/anim.gif";
    setTimeout(function () {
      anim.classList.remove("fadein_vid");
    }, 1000);
    anim.classList.add("anim_intro");
    document.querySelector(".container_enter").classList.add("slide_off");
    setTimeout(function () {
      home_page = true;
      setTimeout(function () {
        anim.classList.add("fadeout_vid");
        document.querySelector(".cont_anim").classList.add("scale_cont");
        cache_home.classList.add("invisible");
        cache_home.style.zIndex = -9999;
        setTimeout(function () {
          document.querySelector(".container_enter").remove();
          document.querySelector(".cache_home").remove();
          document.querySelector(".cont_anim").remove();

        }, 1000);
      }, 2000);
    }, 1000);
  } else {
    let anim = document.createElement("video");
    anim.src = "/anim.webm";
    anim.classList.add("vid_intro");
    document.body.appendChild(anim);
    anim.play();
    anim.classList.add("anim_intro");
    document.querySelector(".container_enter").classList.add("slide_off");
    setTimeout(function () {
      home_page = true;
      setTimeout(function () {
        anim.classList.add("fadeout_vid");
        document.querySelector(".cont_anim").classList.add("scale_cont");
        cache_home.classList.add("invisible");
        cache_home.style.zIndex = -9999;
        setTimeout(function () {
          document.querySelector(".container_enter").remove();
          document.querySelector(".cache_home").remove();
          document.querySelector(".cont_anim").remove();
        }, 1000);
      }, 2000);
    }, 1000);
  }
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

  if (userAgent.isMobile) {
    isMobileDevice = true;
    document.querySelectorAll(".info_bubble").forEach((info) => {
      info.classList.add("info_bubble_mobile");
    });
    document.querySelectorAll(".info_bubble_mobile").forEach((info) => {
      info.classList.remove("info_bubble");
    });
    classvisible = "info_bubble_mobile_visible";
    classbubble = "info_bubble_mobile";
  } else {
    classvisible = "info_visible";
    classbubble = "info_bubble";
  }
};

testNav();

const testGif = () => {
  let anim = document.createElement("img");
  anim.classList.add("anim_intro");

  document.body.appendChild(anim);
  anim.src = "/img/anim.gif";
};
