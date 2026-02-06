const btn4by4 = document.querySelector("#btn-4-by-4")
const btn6by6 = document.querySelector("#btn-6-by-6")
const btn8by8 = document.querySelector("#btn-8-by-8")

let cardsContainer = document.querySelector(".four-by-four-container")
let cards = document.querySelectorAll(".square")
//let firstHalfCards = document.querySelectorAll(".square")
let secondHalfCards = document.querySelectorAll(".second-half")
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
//let secondHalfArray = [...originalPicsArray]

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

/* let counter = 0

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (counter === 0 && ) {
      console.log(card)
      counter++
    } else if (counter === 1) {
      console.log("hehe")
      //counter++
    } else {
      counter = 0
    }
  })
}) */
