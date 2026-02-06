const btn4by4 = document.querySelector("#btn-4-by-4")
const btn6by6 = document.querySelector("#btn-6-by-6")
const btn8by8 = document.querySelector("#btn-8-by-8")

let cardsContainer = document.querySelector(".four-by-four-container")
let firstHalfCards = document.querySelectorAll(".first-half")
let secondHalfCards = document.querySelectorAll(".second-half")
let randomIndex
let fruitPicture

let originalPicsArray = [
  "4-by-4-imgs/apple.png",
  "4-by-4-imgs/banana.png",
  "4-by-4-imgs/berry.png",
  "4-by-4-imgs/watermelon.png",
  "4-by-4-imgs/kiwi.png",
  "4-by-4-imgs/mango.png",
  "4-by-4-imgs/strawberry.png",
  "4-by-4-imgs/pineapple.png",
]

let firstHalfArray = [...originalPicsArray]
let secondHalfArray = [...originalPicsArray]

window.addEventListener("load", () => {
  firstHalfCards.forEach((card) => {
    randomIndex = Math.floor(Math.random() * firstHalfArray.length)
    fruitPicture = document.createElement("img")
    fruitPicture.setAttribute("src", firstHalfArray[randomIndex])
    fruitPicture.style.width = "150px"
    firstHalfArray.splice(randomIndex, 1)
    card.appendChild(fruitPicture)
  })

  secondHalfCards.forEach((card) => {
    randomIndex = Math.floor(Math.random() * secondHalfArray.length)
    fruitPicture = document.createElement("img")
    fruitPicture.setAttribute("src", secondHalfArray[randomIndex])
    fruitPicture.style.width = "150px"
    secondHalfArray.splice(randomIndex, 1)
    card.appendChild(fruitPicture)
  })
})
