const container_prog_jours = document.querySelector(".container_jours");
const container_prog_jour = document.querySelector(".container_jour");
const select_jour18 = document.querySelector(".select18");
const select_jour17 = document.querySelector(".select17");
let artistes_donnees = "";
const URL = "/programme.json";
let jour_selected = 17;
//POUR EVITER DEPASSEMENT + BOUTONS COLLES
let decalage_images = 40;
//TODO: CHANGER ANIMATION (faire pour chaque image) -> changer structure : ne pas effacer tout le contenu mais uniquement les images.

const repartition = () => {
  let images = document.querySelectorAll(".img_artiste_prog");
  let height_block = window.innerHeight - 210;
  let width_block = window.innerWidth;
  if (height_block < width_block) {
    if (2 * ((width_block - 20) / 3) < height_block) {
      images.forEach((image) => {
        image.style.height = `${(width_block - 30 - decalage_images) / 3}px`;
        container_prog_jour.style.width = `${
          (width_block + 30 + decalage_images)
        }px`;
        container_prog_jour.style.height = `${
          (width_block - 30 - decalage_images) * 2/3
        }px`;
      });
    } else {
      images.forEach((image) => {
        image.style.height = `${(height_block - 30 - decalage_images) / 2}px`;
        container_prog_jour.style.width = `${
          (height_block + 30 + decalage_images) * 3/2
        }px`;
        container_prog_jour.style.height = `${
          (height_block - 30 - decalage_images)
        }px`;
      });
    }
  } else {
    if (2 * (height_block / 3) < width_block - 10) {
      images.forEach((image) => {
        image.style.height = `${(height_block - 30 - decalage_images) / 3}px`;
      });
      container_prog_jour.style.width = `${
        (height_block + 30 + decalage_images) * 2/3
      }px`;
      container_prog_jour.style.height = `${
        (height_block - 30 - decalage_images)
      }px`;
      console.log("cas 1");
    } else {
      console.log("cas 2");

      images.forEach((image) => {
        image.style.height = `${(width_block - 30 - decalage_images) / 2}px`;
      });
      container_prog_jour.style.width = `${
        (width_block + 30 + decalage_images)
      }px`;
      container_prog_jour.style.height = `${
        (width_block - 30 - decalage_images) * 3/2
      }px`;
    }
  }
};

const handleLoadImg = () => {
  container_prog_jour.classList.toggle("invisible");
  setTimeout(() => {
    container_prog_jour.classList.toggle("invisible");
  }, 1000);
  // let artistes_spin = document.querySelectorAll(".artiste_programme");
  // artistes_spin.forEach((artiste) => {
  //   artiste.classList.toggle("artiste_loading");
  // });
  // setTimeout(() => {artiste.classList.toggle("artiste_loading");},1000);
};

const addartistes = () => {
  handleLoadImg();
  setTimeout(() => {
    container_prog_jour.innerHTML = "";
    if (jour_selected == 18) {
      for (i = 0; i < artistes_donnees.jours[1].artistes.length; i++) {
        artiste = document.createElement("div");
        artiste.classList.add("artiste_programme");
        artiste_img = document.createElement("img");
        artiste_img.src = artistes_donnees.jours[1].artistes[i].url;
        container_prog_jour.appendChild(artiste);
        artiste.appendChild(artiste_img);
        artiste_img.classList.add("img_artiste_prog");
      }
    } else {
      for (i = 0; i < artistes_donnees.jours[0].artistes.length; i++) {
        artiste = document.createElement("div");
        artiste.classList.add("artiste_programme");
        artiste_img = document.createElement("img");
        artiste_img.src = artistes_donnees.jours[0].artistes[i].url;
        container_prog_jour.appendChild(artiste);
        artiste.appendChild(artiste_img);
        artiste_img.classList.add("img_artiste_prog");
      }
    }
    repartition();
  }, 1000);
};

const store = (data) => {
  console.log(data.jours);
  artistes_donnees = data;
  addartistes();
};

const init = async () => {
  let data = await fetch(URL, {}).then((res) => {
    console.log(res);
    return res.json();
  });

  console.log(data);
  store(data);
};

init();
window.addEventListener("resize", repartition);

select_jour17.addEventListener("click", () => {
  console.log("coucou");
  if (jour_selected != 17) {
    jour_selected = 17;
    select_jour17.classList.toggle("selected_jour_programme");
    select_jour18.classList.toggle("selected_jour_programme");
    addartistes();
  }
});
select_jour18.addEventListener("click", () => {
  if (jour_selected != 18) {
    select_jour17.classList.toggle("selected_jour_programme");
    select_jour18.classList.toggle("selected_jour_programme");
    jour_selected = 18;
    addartistes();
  }
});
