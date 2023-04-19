const ACHETER_BUTTON = document.querySelectorAll(".acheter");
let caddie_img;
let caddie_svg_html;
let elem_cart;
const init_caddie = () =>{

   caddie_img = document.getElementById("cart_img");
   console.log("caddie_img "+caddie_img);
   setTimeout(()=>{
    caddie_svg_html = caddie_img.contentDocument;
   console.log("caddie_svg_html "+caddie_svg_html);

    elem_cart = caddie_svg_html.getElementById("cart");
   console.log("elem_cart "+elem_cart);
  },1000);
   
}

const cart_anim = ()=>{
  elem_cart.classList.toggle("anim");
  setTimeout(() => {
    elem_cart.classList.toggle("anim");
  }, 2000);
}

ACHETER_BUTTON.forEach((bouton_acheter) => {
  bouton_acheter.addEventListener("click", () => {
    console.log("test");
    cart_anim();
  });
});
