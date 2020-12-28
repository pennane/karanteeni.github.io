/*
    Oon pahoillani tästä koodista, ja kaikesta.
*/

let currentCharacter;
let lostTimestamp;

const jome = document.querySelector(".jome");
const game = document.querySelector("#game");

function loadJSON(path) {
    let req = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        try {
            req.overrideMimeType("application/json");
            req.open("GET", path, true);

            req.onreadystatechange = () => {
                if (req.readyState == 4 && req.status == "200") {
                    let response = JSON.parse(req.responseText);
                    return resolve(response);
                }
            };

            req.send(null);
        } catch (err) {
            return reject();
        }
    });
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setElementVisibility(element, state) {
    if (typeof state === "undefined") {
        return;
    }

    if (state == true) {
        element.style.display = "";
        element.style.pointerEvents = "auto";
    } else {
        element.style.display = "none";
        element.style.pointerEvents = "none";
    }
}

function setInitialVisibilities() {
    setElementVisibility(document.querySelector(".jome"), false);
    setElementVisibility(document.querySelector(".character-menu"), false);
    setElementVisibility(document.querySelector(".score"), false);
    setElementVisibility(document.querySelector(".end-screen"), false);
}

function gameCharacterDiv(character) {
    let body = document.createElement("div");
    body.className = "character";
    let image = document.createElement("img");
    let name = document.createElement("span");
    name.textContent = character.nimi;
    image.src = "https://visage.surgeplay.com/full/" + character.uuid;
    body.appendChild(image);
    body.appendChild(name);
    body.addEventListener('click', () => {
        currentCharacter = character.uuid;
        jome.style.backgroundImage = "url(https://visage.surgeplay.com/frontfull/" + currentCharacter + ")";
        setElementVisibility(document.querySelector(".character-menu"), false);
        setElementVisibility(document.querySelector(".starting-screen"), true);
    });
    return body;
}

function createCharacterMenu(characters) {
    try {
        let destination = document.querySelector(".character-menu");
        Object.keys(characters).forEach(function (type) {
            let parent = document.createElement("div");
            parent.className = "character-type";
            let head = document.createElement("div");
            head.className = "type-head";
            let body = document.createElement("div");
            body.className = "characters";
            let typeCharacters = characters[type];
            let heading = document.createElement("span");
            heading.textContent = type;
            head.appendChild(heading);
            typeCharacters.forEach(character => {
                body.appendChild(gameCharacterDiv(character));
            });
            parent.appendChild(head);
            parent.appendChild(body);
            destination.appendChild(parent);
        });
    } catch (err) {
        console.error("ERROR" + err);
    }
}

async function runGame(options) {
    lostTimestamp = Date.now();
    [...document.querySelectorAll('.pipe-parent')].forEach(pipe => {
        pipe.remove()
    });

    [...document.querySelectorAll(".score-amount")].forEach(el => {
        el.textContent = 0;
    });

    setElementVisibility(document.querySelector(".starting-screen"), false);
    setElementVisibility(document.querySelector(".end-screen"), false);
    setElementVisibility(document.querySelector(".score"), true);
    setElementVisibility(document.querySelector(".jome"), true);

    let player = {
        size: 120,
        x: 150,
        y: 100,
        acceleration: 0
    };
    let state = {
        lost: false,
        pipes: [],
        points: 0
    };

    window.addEventListener("keypress", event => {
        event.preventDefault();
        if (event.key !== " ") return;
        acceleratePlayer()
    });

    document.querySelector('#HappyFlappyYp').addEventListener("click", event => {
        if (event.button !== 0) return;
        acceleratePlayer()
    });

    function acceleratePlayer() {
        if (state.lost) return;
        player.acceleration = -5;
    }

    function isPipeCollide(pipe) {
        let __pipe = pipe
        pipe = pipe.getBoundingClientRect();
        pipe.y = __pipe.offsetTop
        return !(
            pipe.y + pipe.height < player.y ||
            pipe.y > player.y + player.size ||
            pipe.x + pipe.width < player.x ||
            pipe.x > player.x + player.size
        );
    }

    function checkCollisions() {
        return [...document.querySelectorAll(".pipe")].some(pipe =>
            isPipeCollide(pipe)
        );
    }

    function checkPassed() {
        [...document.querySelectorAll(".not-passed")].forEach(pipe => {
            let rect = pipe.getBoundingClientRect();

            if (rect.x + rect.width / 2 < player.x) {
                state.points++;
                pipe.classList.toggle("not-passed", false);
                [...document.querySelectorAll(".score-amount")].forEach(el => {
                    el.textContent = state.points;
                });
            }
        });
    }

    function removePipe(event) {
        state.pipes.shift();
        event.target.remove();
        createPipe();
    }

    function resetPipes() {
        [...document.querySelectorAll(".pipe-parent")].forEach(pipe => {
            pipe.remove();
        });
        state.pipes = [];
    }

    function createPipe(delay, timestamp) {
        let parent = document.createElement("div");
        let random = randomInteger(25, 300);
        parent.className = "pipe-parent not-passed";
        let upper = document.createElement("div");
        upper.className = "pipe upper";
        upper.style.height = random + "px";
        let lower = document.createElement("div");
        lower.className = "pipe lower";
        parent.appendChild(upper);
        parent.appendChild(lower);
        parent.addEventListener("animationend", removePipe);

        if (delay) {
            setTimeout(() => {
                if (lostTimestamp !== timestamp) return;
                state.pipes.push(parent);
                game.appendChild(parent);
            }, delay);
        } else {
            state.pipes.push(parent);
            game.appendChild(parent);
        }
    }

    function animate(time, lastTime) {
        player.acceleration += 0.21;
        player.y += player.acceleration;

        if (!state.lost && (player.y > 450 || checkCollisions())) {
            state.lost = true;
            jome.classList.toggle("down", true);
        }

        if (!state.lost) {
            checkPassed();
        }

        if (player.y < -50) {
            player.y = -50;
        }

        if (player.y > 900) {
            player.y = 1000;
            player.acceleration = 0;
            lostTimestamp = Date.now();
            resetPipes();
            jome.classList.toggle("down", false);
            setElementVisibility(document.querySelector(".end-screen"), true);
        } else {
            animationRequest = requestAnimationFrame(newTime => animate(newTime, time));
        }

        jome.style.top = player.y + "px";

        if (player.acceleration < 0) {
            jome.classList.toggle("up", true);
        } else {
            jome.classList.toggle("up", false);
        }

    }

    createPipe();
    createPipe(3000, lostTimestamp);
    animationRequest = requestAnimationFrame(animate);
}

let characterLoadFailed = null;

setInitialVisibilities();
fetch("https://karanteeni.net/modules/Operators/operators.json")
    .then(data => data.json())
    .then(data => {
        createCharacterMenu(data);
    })
    .catch(err => {
        console.error("Failed to retrieve gamecharacters. Only jomeee available");
        [...document.querySelectorAll('.open-character-menu')].forEach(el => {
            setElementVisibility(el, false)
        })
    });
[...document.querySelectorAll(".close-character-menu")].forEach(el => {
    el.addEventListener("click", () => {
        setElementVisibility(document.querySelector(".character-menu"), false);
        setElementVisibility(document.querySelector(".starting-screen"), true);
    });
});
[...document.querySelectorAll(".open-character-menu")].forEach(el => {
    el.addEventListener("click", () => {
        setElementVisibility(document.querySelector(".character-menu"), true);
        setElementVisibility(document.querySelector(".starting-screen"), false);
        setElementVisibility(document.querySelector(".end-screen"), false);
        setElementVisibility(document.querySelector(".score"), false);
    });
});
[...document.querySelectorAll(".start-game")].forEach(el => {
    el.addEventListener("click", () => {
        runGame();
    });
});
