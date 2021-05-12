const categoryInfoContainer = document.getElementById("categoryInfoContainer");
const categoriesDiv = document.getElementById("categoriesDiv");

let currentCategory = "all";

const categoryImgArray = [
  document.getElementById("ansvar"),
  document.getElementById("styreapparat"),
  document.getElementById("bremser"),
  document.getElementById("lygter-og-reflekser"),
  document.getElementById("ruder-og-spejle"),
  document.getElementById("motor-og-udstødning"),
  document.getElementById("nyttige-oplysninger")
]

const categoryTipArray = [
  document.getElementById("ansvar-Tip"),
  document.getElementById("styreapparat-Tip"),
  document.getElementById("bremser-Tip"),
  document.getElementById("lygter-og-reflekser-Tip"),
  document.getElementById("ruder-og-spejle-Tip"),
  document.getElementById("motor-og-udstødning-Tip"),
  document.getElementById("nyttige-oplysninger-Tip")
]

categoryImgArray.forEach(el => {
  el.addEventListener("mouseenter", () => {
    el.style.transform = "scale(1.2)";
    categoryTipArray[categoryImgArray.indexOf(el)].style.visibility = "visible";
  })
  el.addEventListener("mouseout", () => {
    if (el.id !== currentCategory){ el.style.transform = "scale(1)";}
    categoryTipArray[categoryImgArray.indexOf(el)].style.visibility = "hidden";
  })
})

function shuffle(category){
  console.log(category);
}

function changeCategory(category){
  categoryInfoContainer.style.width = categoriesDiv.style.width;
  //Hvis man vælger den samme kategori igen
  if (category == currentCategory){
    //Alle kategorier
    categoryImgArray.forEach(el => {
      el.style.filter = "brightness(100%)"; 
      el.style.transform = "scale(1)"
      el.style.background = "rgba(0, 0, 0, 0)";
    })
    currentCategory = "all";
  }
  //Hvis man vælger en ny kategori
  else {
    currentCategory = category;
    categoryImgArray.forEach(el => {
      //Alle andre kategorier
      if (el.id !== currentCategory){ 
        el.style.filter = "brightness(50%)"; 
        el.style.transform = "scale(1)";
        el.style.background = "rgba(0, 0, 0, 0.5)";
      }
      //Den kategori man har valgt
      else { 
        el.style.filter = "brightness(100%)"; 
        el.style.transform = "scale(1.2)";
        el.style.background = "rgba(0, 0, 0, 0)";
      }
    })
  }

}