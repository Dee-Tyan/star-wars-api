//fetch(starwars_api).then(res => res.json()).then(data => console.log(data)).catch((err) => console.log(err))
const starwars_api = "https://swapi.dev/api/people";
let body = document.body;
fetch(starwars_api)
  .then((res) => res.json())
  .then((data) => main(data.results))
  .catch((error) => console.log(error));

let container = document.createElement("div");
container.className = "overall";
//let displayBio = document.getElementById("current") //to make it dynamic, set it to a map function

function main(array) {
  array.forEach((current) => {
    console.log(current.name);
    const currentImage = document.createElement("img");
    currentImage.src = `/images/${current.name}.jpeg`;
    currentImage.className = "debbie";

    const currentTitle = document.createElement("h4");
    currentTitle.innerText = current.name;
    currentTitle.addEventListener("click", showBio);

    const currentGender = document.createElement("p");
    currentGender.innerText = "Gender:" + current.gender;

    const currentAge = document.createElement("p");
    currentAge.innerText = "Age:" + current.birth_year;

    const currentSkin = document.createElement("p");
    currentSkin.innerText = "Look:" + current.skin_color;
    
    const currentHeight = document.createElement("p");
    currentHeight.innerText = "Height:" + current.height;

    const currentMass = document.createElement("p");
    currentMass.innerText = "Mass:" + current.mass;


    const swCharacter = document.createElement("div");
    swCharacter.className = "character";
    swCharacter.appendChild(currentImage);
    swCharacter.appendChild(currentTitle);
    

    const bio = document.createElement("div");
    bio.id = current.name;
    bio.className = "profile";
    bio.appendChild(currentAge);
    bio.appendChild(currentGender);
    bio.appendChild(currentSkin);
    bio.appendChild(currentHeight);
    bio.appendChild(currentMass);


    console.log(bio);
    swCharacter.appendChild(bio);
    container.appendChild(swCharacter);
    body.appendChild(container);
  });

  let bottom = document.createElement("footer");
  bottom.textContent = "2022 © Deborah Oyegue";
  body.appendChild(bottom);
}


let openProfileId = null; 

function showBio(event) {
  const clickedElement = event.target;
  const currentProfile = clickedElement.nextSibling;
  if (openProfileId) {
    document.getElementById(openProfileId).style.height = "0px";
  }
  if (openProfileId === currentProfile.id) {
    openProfileId = null;
    return;
  }
  currentProfile.style.height = "200px";
  openProfileId = currentProfile.id;
}


main(starwars_api);

// module.exports = main()
