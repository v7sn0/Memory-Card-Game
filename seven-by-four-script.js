let cardsContainer = document.querySelector(".cards-container")
let cards = document.querySelectorAll(".not-selected")
let endScreen = document.querySelector(".end-screen")

let randomIndex
let fruitPicture

let picsArray = [
  "fruit-images/apple.png",
  "fruit-images/banana.png",
  "fruit-images/berry.png",
  "fruit-images/watermelon.png",
  "fruit-images/kiwi.png",
  "fruit-images/mango.png",
  "fruit-images/apple.png",
  "fruit-images/banana.png",
  "fruit-images/berry.png",
  "fruit-images/watermelon.png",
  "fruit-images/kiwi.png",
  "fruit-images/mango.png",
  "fruit-images/blueberry.png",
  "fruit-images/fig.png",
  "fruit-images/pear.png",
  "fruit-images/grapes.png",
  "fruit-images/pomegranate.png",
  "fruit-images/orange.png",
  "fruit-images/strawberry.png",
  "fruit-images/pineapple.png",
  "fruit-images/blueberry.png",
  "fruit-images/fig.png",
  "fruit-images/pear.png",
  "fruit-images/grapes.png",
  "fruit-images/pomegranate.png",
  "fruit-images/orange.png",
  "fruit-images/strawberry.png",
  "fruit-images/pineapple.png",
]

clonedArr = [...picsArray]

setTimeout(() => {
  cards.forEach((card) => {
    card.classList.add("starting-peek")
  })
}, 1000)

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
  selectedCard.classList.remove("starting-peek")
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
          firstSelectedCard.classList.add("starting-peek")
          secondSelectedCard.classList.add("not-selected")
          secondSelectedCard.classList.add("starting-peek")
          firstSelectedCard.classList.remove("selected")
          secondSelectedCard.classList.remove("selected")
          counter = 0
          chanceCounter--
          if (chanceCounter === 0) {
            console.log(chanceCounter)
            console.log("lost")
            setTimeout(() => {
              location.replace("game-over-page.html")
            }, 1000)
          }
        }, 1000)
      }
    }

    if (matchCounter === 14) {
      console.log("you won")
      setTimeout(() => {
        location.replace("level-completed-page.html")
      }, 1000)
    }
  })
})
