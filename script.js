const btn4by4 = document.querySelector("#btn-4-by-4")
const btn6by6 = document.querySelector("#btn-6-by-6")
const btn8by8 = document.querySelector("#btn-8-by-8")

let cardsContainer = document.querySelector(".four-by-four-container")
let cards = document.querySelectorAll(".not-selected")
let endScreen = document.querySelector(".end-screen")

let randomIndex
let fruitPicture

let picsArray = [
  "4-by-4-imgs/apple.png",
  "4-by-4-imgs/banana.png",
  "4-by-4-imgs/berry.png",
  "4-by-4-imgs/watermelon.png",
  "4-by-4-imgs/kiwi.png",
  "4-by-4-imgs/mango.png",
  "4-by-4-imgs/strawberry.png",
  "4-by-4-imgs/pineapple.png",
  "4-by-4-imgs/apple.png",
  "4-by-4-imgs/banana.png",
  "4-by-4-imgs/berry.png",
  "4-by-4-imgs/watermelon.png",
  "4-by-4-imgs/kiwi.png",
  "4-by-4-imgs/mango.png",
  "4-by-4-imgs/strawberry.png",
  "4-by-4-imgs/pineapple.png",
]

let clonedArray = [...picsArray]

window.addEventListener("load", () => {
  cards.forEach((card) => {
    randomIndex = Math.floor(Math.random() * clonedArray.length)
    fruitPicture = document.createElement("img")
    fruitPicture.setAttribute("src", clonedArray[randomIndex])
    //fruitPicture.style.width = "150px"
    clonedArray.splice(randomIndex, 1)
    card.appendChild(fruitPicture)
  })
})

let counter = 0
let chanceCounter = 3
let matchCounter = 0
let chancesLeft
let chancesLabel = document.querySelector("#chances-label")
let firstSelectedCard
let secondSelectedCard
let firstPic
let secondPic

chancesLabel.textContent = chanceCounter
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (
      counter === 0 &&
      card.classList.contains("not-selected") &&
      chanceCounter >= 1
    ) {
      firstSelectedCard = card
      firstPic = card.innerHTML
      firstSelectedCard.classList.remove("not-selected")
      card.classList.add("selected")
      console.log(firstPic)
      counter++
    } else if (
      counter === 1 &&
      card.classList.contains("not-selected") &&
      chanceCounter >= 1
    ) {
      secondSelectedCard = card
      secondPic = card.innerHTML
      secondSelectedCard.classList.remove("not-selected")
      card.classList.add("selected")
      console.log(secondPic)
      counter++
      if (firstPic === secondPic) {
        console.log(secondSelectedCard.classList)
        matchCounter++
        counter = 0
      } else {
        setTimeout(() => {
          chancesLabel.textContent = chanceCounter - 1
          firstSelectedCard.classList.add("not-selected")
          secondSelectedCard.classList.add("not-selected")
          firstSelectedCard.classList.remove("selected")
          secondSelectedCard.classList.remove("selected")
          counter = 0
          chanceCounter--
          if (chanceCounter === 0) {
            console.log(chanceCounter)
            console.log("lost")
          }
        }, 1000)
      }
    }

    if (matchCounter === 8) {
      console.log("you won")
    }
  })
})
