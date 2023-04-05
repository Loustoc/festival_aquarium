// document.querySelector(".start_article").style.transform = `translateY(-${window.innerHeight - document.querySelector(".start_article").getBoundingClientRect().top - 90 }px`;

// document.querySelector(".start_article").style.transform = `translateY(-${document.querySelector(".start_article").getBoundingClientRect().top}px`;

document.querySelector("main").style.transform = `translateY(-${
  document.querySelector("main").getBoundingClientRect().top
}px`;

// document.querySelector(".last_wave").style.transform = `translateY(
// ${window.innerHeight - document.querySelector(".last_wave").getBoundingClientRect().bottom})+px`;
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

var scrolling = 0;
var y_start=0;
var offset_y=0;
var current_state = 0;
window.addEventListener("touchstart", (e) => {
    y_start = e.touches[0].pageY;
}
);

window.addEventListener("touchmove", (e) => {
  if (scrolling == 0) {
    offset_y = y_start - e.touches[0].pageY;
    console.log(offset_y);
    if (offset_y<0 && current_state!=0){
        current_state--;
        if (current_state==0){
            for (let i=0; i<4;i++){
    document.querySelector("main").classList.remove("main_scroll"+i);}
            }
    else{
        for (let i=0; i<4;i++){
            document.querySelector("main").classList.remove("main_scroll"+i);}
            document.querySelector("main").classList.toggle("main_scroll"+current_state);}

    }
//test
    else{
        if (current_state != 1){
        current_state++
        document.querySelector("main").classList.toggle("main_scroll"+current_state);
        document.querySelector("main").classList.toggle("main_scroll"+current_state-1);


        }
    }
    scrolling = 1;
    console.log(e.deltaY);
    setTimeout(function () {
      scrolling = 0;
    }, 1500);
}
  });
