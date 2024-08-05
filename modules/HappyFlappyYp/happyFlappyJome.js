/*
    Oon pahoillani tästä koodista, ja kaikesta.
*/

const API_URL =
  'https://raw.githubusercontent.com/Karanteeni/karanteeni.github.io/master/data/operators.json'
const IMAGE_URL = 'https://visage.surgeplay.com/full/'
const FRONT_IMAGE_URL = 'https://visage.surgeplay.com/frontfull/'
const CHARACTER_CLASS = 'character'
const CHARACTER_MENU_SELECTOR = '.character-menu'
const STARTING_SCREEN_SELECTOR = '.starting-screen'
const END_SCREEN_SELECTOR = '.end-screen'
const SCORE_SELECTOR = '.score'
const JOME_SELECTOR = '.jome'
const GAME_SELECTOR = '#game'
const PIPE_SELECTOR = '.pipe'
const PIPE_PARENT_SELECTOR = '.pipe-parent'
const SCORE_AMOUNT_SELECTOR = '.score-amount'
const HAPPY_FLAPPY_ID = '#HappyFlappyYp'
const OPEN_CHARACTER_MENU_SELECTOR = '.open-character-menu'
const CLOSE_CHARACTER_MENU_SELECTOR = '.close-character-menu'
const START_GAME_SELECTOR = '.start-game'
const PLAYER_INITIAL = {
  size: 120,
  x: 150,
  y: 100,
  acceleration: 0
}
const PIPE_ANIMATION_DURATION = 3000
const PLAYER_ACCELERATION = -5
const GRAVITY = 0.21
const PLAYER_MAX_Y = 900
const PLAYER_MIN_Y = -50
const RANDOM_MIN = 25
const RANDOM_MAX = 300

let currentCharacter
let lostTimestamp

const jomeElement = document.querySelector(JOME_SELECTOR)
const gameElement = document.querySelector(GAME_SELECTOR)

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function setElementVisibility(element, visible) {
  if (element) {
    element.style.display = visible ? '' : 'none'
    element.style.pointerEvents = visible ? 'auto' : 'none'
  }
}

function initialVisibilities() {
  return [
    JOME_SELECTOR,
    CHARACTER_MENU_SELECTOR,
    SCORE_SELECTOR,
    END_SCREEN_SELECTOR
  ].forEach((selector) =>
    setElementVisibility(document.querySelector(selector), false)
  )
}

function createGameCharacterElement(character) {
  const body = document.createElement('div')
  body.className = CHARACTER_CLASS

  const image = document.createElement('img')
  image.src = `${IMAGE_URL}${character.uuid}`

  const name = document.createElement('span')
  name.textContent = character.nimi

  body.append(image, name)

  body.addEventListener('click', () => {
    currentCharacter = character.uuid
    jomeElement.style.backgroundImage = `url(${FRONT_IMAGE_URL}${currentCharacter})`
    setElementVisibility(document.querySelector(CHARACTER_MENU_SELECTOR), false)
    setElementVisibility(document.querySelector(STARTING_SCREEN_SELECTOR), true)
  })

  return body
}

function createCharacterMenu(characters) {
  const destination = document.querySelector(CHARACTER_MENU_SELECTOR)
  if (destination) {
    Object.entries(characters).forEach(([type, characters]) => {
      const parent = document.createElement('div')
      parent.className = 'character-type'

      const head = document.createElement('div')
      head.className = 'type-head'

      const heading = document.createElement('span')
      heading.textContent = type
      head.appendChild(heading)

      const body = document.createElement('div')
      body.className = 'characters'

      characters.forEach((character) =>
        body.appendChild(createGameCharacterElement(character))
      )

      parent.append(head, body)
      destination.appendChild(parent)
    })
  }
}

function resetDOM() {
  document
    .querySelectorAll(PIPE_PARENT_SELECTOR)
    .forEach((pipe) => pipe.remove())
  document
    .querySelectorAll(SCORE_AMOUNT_SELECTOR)
    .forEach((el) => (el.textContent = '0'))

  setElementVisibility(document.querySelector(STARTING_SCREEN_SELECTOR), false)
  setElementVisibility(document.querySelector(END_SCREEN_SELECTOR), false)
  setElementVisibility(document.querySelector(SCORE_SELECTOR), true)
  setElementVisibility(jomeElement, true)
}

function acceleratePlayer(state, player) {
  if (!state.lost) player.acceleration = PLAYER_ACCELERATION
}

function collides(pipe, player) {
  const rect = pipe.getBoundingClientRect()
  return !(
    rect.y + rect.height < player.y ||
    rect.y > player.y + player.size ||
    rect.x + rect.width < player.x ||
    rect.x > player.x + player.size
  )
}

function anyCollision(player) {
  return Array.from(document.querySelectorAll(PIPE_SELECTOR)).some((pipe) =>
    collides(pipe, player)
  )
}

function checkPassed(state, player) {
  document.querySelectorAll('.not-passed').forEach((pipe) => {
    const rect = pipe.getBoundingClientRect()
    if (rect.x + rect.width / 2 < player.x) {
      state.points++
      pipe.classList.remove('not-passed')
      document.querySelectorAll(SCORE_AMOUNT_SELECTOR).forEach((el) => {
        el.textContent = state.points.toString()
      })
    }
  })
}

function removePipe(state, event) {
  state.pipes.shift()
  event.target.remove()
  createPipe(state)
}

function resetPipes(state) {
  document
    .querySelectorAll(PIPE_PARENT_SELECTOR)
    .forEach((pipe) => pipe.remove())
  state.pipes = []
}

function createPipe(state, delay, timestamp) {
  const parent = document.createElement('div')
  const random = randomInteger(RANDOM_MIN, RANDOM_MAX)
  parent.className = 'pipe-parent not-passed'

  const upper = document.createElement('div')
  upper.className = 'pipe upper'
  upper.style.height = `${random}px`

  const lower = document.createElement('div')
  lower.className = 'pipe lower'

  parent.append(upper, lower)
  parent.addEventListener('animationend', (event) => removePipe(state, event))

  if (delay && timestamp) {
    setTimeout(() => {
      if (lostTimestamp !== timestamp) return
      state.pipes.push(parent)
      gameElement.appendChild(parent)
    }, delay)
  } else {
    state.pipes.push(parent)
    gameElement.appendChild(parent)
  }
}

function animate(state, player) {
  player.acceleration += GRAVITY
  player.y += player.acceleration

  if (!state.lost && (player.y > 450 || anyCollision(player))) {
    state.lost = true
    jomeElement.classList.add('down')
  }

  if (!state.lost) {
    checkPassed(state, player)
  }

  if (player.y < PLAYER_MIN_Y) {
    player.y = PLAYER_MIN_Y
  }

  if (player.y > PLAYER_MAX_Y) {
    player.y = 1000
    player.acceleration = 0
    lostTimestamp = Date.now()
    resetPipes(state)
    jomeElement.classList.remove('down')
    setElementVisibility(document.querySelector(END_SCREEN_SELECTOR), true)
  } else {
    requestAnimationFrame(() => animate(state, player))
  }

  jomeElement.style.top = `${player.y}px`
  jomeElement.classList.toggle('up', player.acceleration < 0)
}

async function runGame() {
  lostTimestamp = Date.now()

  resetDOM()

  const player = { ...PLAYER_INITIAL }

  const state = {
    lost: false,
    pipes: [],
    points: 0
  }

  createPipe(state)
  createPipe(state, PIPE_ANIMATION_DURATION, lostTimestamp)
  requestAnimationFrame(() => animate(state, player))

  const keyPressHandler = (event) => {
    if (event.key === ' ') {
      event.preventDefault()
      acceleratePlayer(state, player)
    }
  }

  const clickHandler = (event) => {
    if (event.button === 0) {
      acceleratePlayer(state, player)
    }
  }

  window.addEventListener('keypress', keyPressHandler)
  document
    .querySelector(HAPPY_FLAPPY_ID)
    ?.addEventListener('click', clickHandler)

  // Clean up event listeners when game ends
  if (state.lost) {
    window.removeEventListener('keypress', keyPressHandler)
    document
      .querySelector(HAPPY_FLAPPY_ID)
      ?.removeEventListener('click', clickHandler)
  }
}

initialVisibilities()

fetch(API_URL)
  .then((response) => response.json())
  .then((data) => {
    createCharacterMenu(data)
  })
  .catch(() => {
    console.log('Failed to retrieve game characters. Only jomeee available')
    document.querySelectorAll(OPEN_CHARACTER_MENU_SELECTOR).forEach((el) => {
      setElementVisibility(el, false)
    })
  })

document.querySelectorAll(CLOSE_CHARACTER_MENU_SELECTOR).forEach((el) => {
  el.addEventListener('click', () => {
    setElementVisibility(document.querySelector(CHARACTER_MENU_SELECTOR), false)
    setElementVisibility(document.querySelector(STARTING_SCREEN_SELECTOR), true)
  })
})

document.querySelectorAll(OPEN_CHARACTER_MENU_SELECTOR).forEach((el) => {
  el.addEventListener('click', () => {
    setElementVisibility(document.querySelector(CHARACTER_MENU_SELECTOR), true)
    setElementVisibility(
      document.querySelector(STARTING_SCREEN_SELECTOR),
      false
    )
    setElementVisibility(document.querySelector(END_SCREEN_SELECTOR), false)
    setElementVisibility(document.querySelector(SCORE_SELECTOR), false)
  })
})

document.querySelectorAll(START_GAME_SELECTOR).forEach((el) => {
  el.addEventListener('click', () => {
    runGame()
  })
})
