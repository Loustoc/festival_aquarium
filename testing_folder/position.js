function pos_init() {
    setTimeout(function() {
        decal_festival = 0.5*0.5*document.getElementById("festival_typo").getBoundingClientRect().height;
        top_logo = document.getElementById("logo").getBoundingClientRect().bottom;
        height_logo = document.getElementById("logo").getBoundingClientRect().height;
        
        decal = height_logo+top_logo+decal_festival+30;
        document.getElementById("festival_typo").style.transform = `translateY(${decal}px)`;
      }, 2500);

}
addEventListener("resize", (event) => {pos()});

function pos() {
        decal_festival = 0.5*0.5*document.getElementById("festival_typo").getBoundingClientRect().height;
        top_logo = document.getElementById("logo").getBoundingClientRect().bottom;
        height_logo = document.getElementById("logo").getBoundingClientRect().height;
        
        decal = height_logo+top_logo+decal_festival+30;
        document.getElementById("festival_typo").style.transform = `translateY(${decal}px)`;
}



