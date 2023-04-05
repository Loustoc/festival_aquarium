
setTimeout(function() {
    document.querySelector(".video_init").classList.add("fadeout_vid");
    setTimeout(function() {
      document.querySelector(".video_init").remove();
      setTimeout(function() {
        document.querySelector(".cache_home").classList.add("fadeout_vid");
        setTimeout(function() {
          document.querySelector(".cache_home").remove();
          setTimeout(function() {
            document.querySelector("#festival_typo").classList.remove("invisible");
            document.querySelector(".logo_container").classList.remove("invisible");
            document.querySelector(".enter_container").classList.remove("invisible");
      
           }, 1000);
         }, 100);
       }, 100);
     }, 500);
  }, 2500);

function open_website(){
    console.log("open_website");
    document.querySelector(".container_enter").classList.add("slide_off");
    setTimeout(function() {
    window.open("./frontpage.html","_self")},1000)
}