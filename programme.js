const countainer_prog_jours = document.querySelector(".container_jours");
const countainer_prog_jour = document.querySelector(".container_jour");
const jour17 = document.querySelector(".prog_17");
const jour18 = document.querySelector(".prog_18");
const URL = "/programme.json";
let jour_selected = 17;
const repartition = () =>{
    let images = document.querySelectorAll(".img_artiste_prog");
    let height_block = window.innerHeight - 210;
    let width_block = window.innerWidth;
    if (height_block < width_block){
        if(2*((width_block-20) / 3) < height_block){
            images.forEach(image =>{
                image.style.height = `${(width_block - 30) / 3}px`;
            });

        }
        else {
            images.forEach(image =>{
                image.style.height = `${(height_block - 30) / 2}px`;
        })

    }
    }
    else{
        if(2*((height_block) / 3) < width_block - 10){
            images.forEach(image =>{
                image.style.height = `${(height_block - 30) / 3}px`;
            });
            console.log("cas 1");

        }
        else {
            console.log("cas 2");

            images.forEach(image =>{
                image.style.height = `${(width_block - 30) / 2}px`;
        })
    }
}
}

const addartistes = (data) =>{

    if (jour_selected == 18){
        for (i=0;i<data.jours[1].artistes.length;i++){
            artiste = document.createElement("div");
            artiste.classList.add("artiste_programme");
            artiste_img = document.createElement("img");
            artiste_img.src = data.jours[1].artistes[i].url;
            countainer_prog_jour.appendChild(artiste);
            artiste.appendChild(artiste_img);
            artiste_img.classList.add("img_artiste_prog");

            }
    }

    else{
        for (i=0;i<data.jours[0].artistes.length;i++){
            artiste = document.createElement("div");
            artiste.classList.add("artiste_programme");
            artiste_img = document.createElement("img");
            artiste_img.src = data.jours[0].artistes[i].url;
            countainer_prog_jour.appendChild(artiste);
            artiste.appendChild(artiste_img);
            artiste_img.classList.add("img_artiste_prog");

            }


    }
    repartition();
}

const init = async () => {
    let data = await fetch(URL, {}).then((res) => {
      console.log(res);
      return res.json();
    });
  
    console.log(data);
    addartistes(data);
  };

  init();
  window.addEventListener("resize", repartition);
