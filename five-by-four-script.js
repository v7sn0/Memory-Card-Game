let cards = document.querySelectorAll(".not-selected")
let endScreen = document.querySelector(".end-screen")
const lowerStrip = document.querySelector(".lower-strip")
const body = document.querySelector("#body")

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
  "fruit-images/blueberry.png",
  "fruit-images/fig.png",
  "fruit-images/pear.png",
  "fruit-images/grapes.png",
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
let endMsgDiv
let endMsg
let winFlag
let winLoseVar
let winLosePics
let winLosePic

let exitBtn
let restartBtn
let btnsDiv
let picsDiv

const selectCard = (card, selectedCard) => {
  selectedCard = card
  selectedPic = card.innerHTML
  selectedCard.classList.remove("not-selected")
  selectedCard.classList.remove("starting-peek")
  selectedCard.classList.add("animate__flip")
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

const finishScreen = (flag) => {
  let winLoseMsgs
  if (!flag) {
    winLoseVar = "lost"
    winLoseMsgs = ["Lose", "Haha"]
    winLosePics = ["won-lost-images/fsih.jpg"]
  } else {
    winLoseVar = "won"
    winLoseMsgs = ["Congrats", "You won"]
  }
  endMsgDiv = document.createElement("div")
  picsDiv = document.createElement("div")
  btnsDiv = document.createElement("div")

  endMsgDiv.classList.add("end-msg-div")
  exitBtn = document.createElement("button")
  restartBtn = document.createElement("button")
  winLosePic = document.createElement("img")
  winLosePic.setAttribute("src", winLosePics[0])
  btnsDiv.classList.add("btns-div")
  exitBtn.classList.add("btns")
  restartBtn.classList.add("btns")
  picsDiv.classList.add("pics-div")
  exitBtn.textContent = "Exit"
  restartBtn.textContent = "Restart"
  body.appendChild(endMsgDiv)
  body.appendChild(picsDiv)
  body.appendChild(btnsDiv)
  endMsg = document.createElement("h1")
  endMsg.classList.add(`${winLoseVar}`)
  endMsg.textContent =
    winLoseMsgs[Math.floor(Math.random() * winLoseMsgs.length)]
  endMsgDiv.appendChild(endMsg)
  btnsDiv.appendChild(exitBtn)
  btnsDiv.appendChild(restartBtn)
  picsDiv.appendChild(winLosePic)

  exitBtn.addEventListener("click", () => {
    location.replace("index.html")
  })

  restartBtn.addEventListener("click", () => {
    location.replace("five-by-four.html")
  })
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
          firstSelectedCard.classList.remove("animate__flip")
          secondSelectedCard.classList.remove("selected")
          secondSelectedCard.classList.remove("animate__flip")
          counter = 0
          chanceCounter--
          if (chanceCounter === 0) {
            winFlag = false
            setTimeout(() => {
              cards.forEach((card) => {
                card.remove()
                lowerStrip.remove()
              })
              finishScreen(winFlag)
            }, 1000)
          }
        }, 1000)
      }
    }

    if (matchCounter === 10) {
      winFlag = true
      setTimeout(() => {
        cards.forEach((card) => {
          card.remove()
          lowerStrip.remove()
        })
        finishScreen(winFlag)
      }, 1000)
    }
  })
})
