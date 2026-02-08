let cardsContainer = document.querySelector(".cards-container")
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
  "4-by-4-imgs/apple.png",
  "4-by-4-imgs/banana.png",
  "4-by-4-imgs/berry.png",
  "4-by-4-imgs/watermelon.png",
  "4-by-4-imgs/kiwi.png",
  "4-by-4-imgs/mango.png",
  "4-by-4-imgs/blueberry.png",
  "4-by-4-imgs/fig.png",
  "4-by-4-imgs/pear.png",
  "4-by-4-imgs/grapes.png",
  "4-by-4-imgs/pomegranate.png",
  "4-by-4-imgs/orange.png",
  "4-by-4-imgs/strawberry.png",
  "4-by-4-imgs/pineapple.png",
  "4-by-4-imgs/blueberry.png",
  "4-by-4-imgs/fig.png",
  "4-by-4-imgs/pear.png",
  "4-by-4-imgs/grapes.png",
  "4-by-4-imgs/pomegranate.png",
  "4-by-4-imgs/orange.png",
  "4-by-4-imgs/strawberry.png",
  "4-by-4-imgs/pineapple.png",
]

clonedArr = [...picsArray]

window.addEventListener("load", () => {
  cards.forEach((card) => {
    randomIndex = Math.floor(Math.random() * clonedArr.length)
    fruitPicture = document.createElement("img")
    fruitPicture.setAttribute("src", clonedArr[randomIndex])
    clonedArr.splice(randomIndex, 1)
    card.appendChild(fruitPicture)
    chancesLabel.textContent = chanceCounter
  })
})

let counter = 0
let chanceCounter = 3
let matchCounter = 0

let chancesLabel = document.querySelector("#chances-label")
let firstSelectedCard
let secondSelectedCard
let firstPic
let secondPic

const selectCard = (card, selectedCard) => {
  selectedCard = card
  selectedPic = card.innerHTML
  selectedCard.classList.remove("not-selected")
  card.classList.add("selected")
  if (counter === 0) {
    firstPic = card.innerHTML
    firstSelectedCard = selectedCard
  } else if (counter === 1) {
    secondPic = card.innerHTML
    secondSelectedCard = selectedCard
  }
  counter++
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (
      counter === 0 &&
      card.classList.contains("not-selected") &&
      chanceCounter >= 1
    ) {
      selectCard(card, firstSelectedCard)
    } else if (
      counter === 1 &&
      card.classList.contains("not-selected") &&
      chanceCounter >= 1
    ) {
      selectCard(card, secondSelectedCard)
      if (firstPic === secondPic) {
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

    if (matchCounter === 14) {
      console.log("you won")
    }
  })
})
