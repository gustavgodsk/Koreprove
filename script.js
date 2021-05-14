






const categoryInfoContainer = document.getElementById("categoryInfoContainer");
const categoriesDiv = document.getElementById("categoriesDiv");
const categoryTitle = document.getElementById("categoryTitle");
const subcatSpan = document.getElementById("subcatSpan");
const refDiv = document.getElementById("refDiv");
const qstDiv = document.getElementById("qstDiv");
const catDiv = document.getElementById("catDiv");
const qstCategory = document.getElementById("qstCategory");
const qstProblem = document.getElementById("qstProblem");


let currentCategory = "all";

const categoryArray = [
  "ansvar",
  "styreapparat",
  "bremser",
  "lygter-og-reflekser",
  "ruder-og-spejle",
  "motor-og-udstødning",
  "nyttige-oplysninger"
]

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

function check(element){
  element.checked = true;
}

//Når man trykker på knappen
function shuffle(category){
  console.log(category);
  if (document.getElementById("catInfoDiv")){catDiv.removeChild(catInfoDiv);}
  qstDiv.style.display = "inline";
  refDiv.style.display = "none";
  catDiv.style.display = "none";
}

//Når man skifter kategori
function changeCategory(category){
  qstDiv.style.display = "none";
  if (document.getElementById("catInfoDiv")){catDiv.removeChild(catInfoDiv);}
  

  //Hvis man vælger den samme kategori igen
  if (category == currentCategory){
    refDiv.style.display = "inline";
    catDiv.style.display = "none";
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
    refDiv.style.display = "none";

    //updateCategoryInfo(category);
    parseXml(category);
    catDiv.style.display = "inline";

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

function parseXml(categoryId){
  let xmlContent = "";
  let catDiv = document.getElementById("catDiv");
  const xmlDiv = document.createElement("div");
  xmlDiv.id = "catInfoDiv";
  xmlDiv.className = "marginBottom"
  catDiv.appendChild(xmlDiv);
  fetch("questions.xml").then((response) => {
    response.text().then((xml) => {
      xmlContent = xml;
      let parser = new DOMParser();
      let xmlDOM = parser.parseFromString(xmlContent, "application/xml");
      let categories = xmlDOM.querySelectorAll("category");

      const categoryIndex = categoryArray.indexOf(categoryId);
      let category = categories[categoryIndex];
      let tags = category.children;

      
      let h2 = document.createElement("h2");
      h2.textContent = tags[0].innerHTML;
      xmlDiv.appendChild(h2);
      

      //console.log(tags[1])

      for (let i = 0; i < tags[1].children.length; i++){

        const subTitle = document.createElement("label");
        subTitle.className = "showMore subcatSpan";
        subTitle.setAttribute("for", "_" + i);
        subTitle.textContent = tags[1].children[i].innerHTML;

        const mrgnTop = document.createElement("div");
        mrgnTop.className = "mrgnTop";
        xmlDiv.appendChild(mrgnTop);

        xmlDiv.appendChild(subTitle);
        const input = document.createElement("input");
        input.id = "_" + i;
        input.setAttribute("type", "checkbox");
        xmlDiv.appendChild(input);


        const tempDiv = document.createElement("div");
        xmlDiv.appendChild(tempDiv);

        let checkboxes = catInfoDiv.querySelectorAll("input");

        checkboxes.forEach(element => {
          element.checked = true;
        })

        for (let ii = 0; ii < tags[2+i].children.length; ii++){
          //If element has children
          if (tags[2+i].children[ii].children.length > 0){
            const ul = document.createElement("ul")
            ul.className = "catUl";
            for (let iii = 0; iii < tags[2+i].children[ii].children.length; iii++){
              if (iii == 0){
                const pb = document.createElement("p");
                pb.className = "boldtext";
                const b = document.createElement("b");
                b.textContent = tags[2+i].children[ii].children[iii].innerHTML;
                pb.appendChild(b);
                tempDiv.appendChild(pb);
              }
              else {
                const li = document.createElement("li");
                li.textContent = tags[2+i].children[ii].children[iii].innerHTML;
                ul.appendChild(li);
              }
            }
            tempDiv.appendChild(ul);
          }
          else {
            const p = document.createElement("p");
            p.textContent = tags[2+i].children[ii].innerHTML;
            tempDiv.appendChild(p);
          }
        }
      }
    })
  })
}




//      ---- Legacy ----
/*
//Når man skifter kategori og informationerne skal ændres
function updateCategoryInfo(category){


  //Create outer div and append to catDiv
  const catInfoDiv = document.createElement("div");
  catInfoDiv.id = "catInfoDiv";
  catInfoDiv.className = "marginBottom"
  catDiv.appendChild(catInfoDiv);

  const categoryi = category.split("-").join("");
  const catTitle = catObj[categoryi].catTitle;
  const catSubTitle = catObj[categoryi].catSubTitle;
  const catSubInfo = catObj[categoryi].catSubInfo;

  const title = document.createElement("h2")
  title.textContent = catTitle;
  if (catSubTitle.length < 2){title.style.marginBottom = "20px"}
  catInfoDiv.appendChild(title)

  catSubTitle.forEach((el, indx) => {

    if (catSubTitle.length > 1){
    const subTitle = document.createElement("span");
    subTitle.className = "subcatSpan";
    subTitle.textContent = el;
    const mrgnTop = document.createElement ("div");
    mrgnTop.className = "mrgnTop";
    mrgnTop.appendChild(subTitle);
    catInfoDiv.appendChild(mrgnTop)
    }
    catSubInfo[indx].forEach(elem => {
      if (Array.isArray(elem)){
        const ul = document.createElement("ul");
        ul.className = "catUl";
        elem.forEach((element, index) => {
          if (index == 0){
            const pb = document.createElement("p");
            pb.className = "boldtext";
            const b = document.createElement("b");
            b.textContent = element;
            pb.appendChild(b);
            catInfoDiv.appendChild(pb);
          }
          else {
            const li = document.createElement("li");
            li.textContent = element;
            ul.appendChild(li);
          }
        })
        catInfoDiv.appendChild(ul);
      }
      else {
        const p = document.createElement("p");
        p.textContent = elem;
        catInfoDiv.appendChild(p);
      }
    })
  })
}

*/