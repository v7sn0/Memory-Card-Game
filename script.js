const btn4by4 = document.querySelector("#btn-4-by-4")
const btn6by6 = document.querySelector("#btn-6-by-6")
const btn8by8 = document.querySelector("#btn-8-by-8")

let cardsContainer = document.querySelector(".four-by-four-container")
let cards = document.querySelectorAll(".square")

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

let halfPicsArr = [
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
    fruitPicture.style.width = "150px"
    clonedArray.splice(randomIndex, 1)
    card.appendChild(fruitPicture)
  })
})

let counter = 0
let chanceCounter = 0
let firstSelectedCard
let secondSelectedCard
let firstPic
let secondPic

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("selected")
    if (
      counter === 0 &&
      card.classList.contains("selected") &&
      card.classList.contains("square")
    ) {
      firstSelectedCard = card
      firstPic = card.innerHTML
      firstSelectedCard.classList.remove("square")
      console.log(firstPic)
      counter++
    } else if (
      counter === 1 &&
      card.classList.contains("selected") &&
      card.classList.contains("square")
    ) {
      secondSelectedCard = card
      secondPic = card.innerHTML
      secondSelectedCard.classList.remove("square")
      console.log(secondPic)
      counter++
      if (firstPic === secondPic) {
        console.log("reached")
        firstSelectedCard.classList.remove("not-selected")
        secondSelectedCard.classList.remove("not-selected")
        firstSelectedCard.classList.remove("square")
        secondSelectedCard.classList.remove("square")
        console.log(secondSelectedCard.classList)
        counter = 0
      } else {
        firstSelectedCard.classList.add("not-selected")
        secondSelectedCard.classList.add("not-selected")
        firstSelectedCard.classList.remove("selected")
        secondSelectedCard.classList.remove("selected")
        counter = 0
        chanceCounter++
      }
      if (chanceCounter === 3) {
        console.log("you lost")
      }
    }
  })
})
