console.log('%c HI', 'color: firebrick')

const imageUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const dogImageContainerDiv = document.getElementById('dog-image-container')
const dogSelec = document.querySelector("#breed-dropdown")
const dogBreeds = document.getElementById('dog-breeds')
const allList = document.querySelectorAll("li")
const liveList = document.getElementsByTagName('li')

fetch(imageUrl)
.then(resp => resp.json())
.then((responseObj) => {
    
    responseObj.message.forEach((url) => {
        turnUrlToHtml(url)
    })
})

function turnUrlToHtml(url) {
    let image = document.createElement("img")
    image.src = url
    dogImageContainerDiv.append(image)
}

fetch(breedUrl)
.then(r => r.json())
.then((response) => {
    let allTheKeys = Object.keys(response.message)
    allTheKeys.forEach((name) => {
        turnNameToHtml(name)
    })
})

function turnNameToHtml(name) {
    let newLi = document.createElement("li")
    newLi.innerText = name 
    newLi.className = "dogName"
    dogBreedsUL.append(newLi)
}

dogBreedsUL.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("dogName")) {
        evt.target.style.color = "red"
    evt.target.style.backgroundColor = "blue"
}
})

dogSelect.addEventListener("change", (evt) => {
    let chosenLetter = evt.target.value
    let allDogLis = document.querySelectorAll("li.dogName")
  
    allDogLis.forEach((li) => {
      if (li.innerText.startsWith(chosenLetter)) {
        li.style.display = ""
      } else {
        li.style.display = "none"
      }
    })
  
  })