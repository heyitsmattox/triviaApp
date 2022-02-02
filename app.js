const game = document.querySelector("#game");
const score = document.querySelector("#score");

const film = 11;
const levels = ["easy", "medium", "hard"];

function addGenre(genre) {
  const column = document.createElement("div");
  column.classList.add("genre-column");
  column.innerHTML = "this is a genre";
  //Apend is a JS method -- append puts the column inside the id of "game"
  game.append(column);

  levels.forEach((level) => {
    const card = document.createElement('div')
    card.classList.add('card')
    column.append(card)

    if (level === 'easy') {
        card.innerHTML = 100
    }
    if (level === 'medium') {
        card.innerHTML = 200
    }
    if (level === 'hard') {
        card.innerHTML = 300
    }

    fetch(
      `https://opentdb.com/api.php?amount=10&category=${genre}&difficulty=${level}&type=multiple`
    )
    .then(response => response.json())
    .then(data => { 
        console.log(data)
        card.setAttribute('data-question', data.results[0].question)
        card.setAttribute('data-answer', data.results[0].correct_answer)
        //check original code as they had .getInnerHTML - but mine throws error
        card.setAttribute('data-value', card.innerHTML)
    })
    card.addEventListener('click', flipCard)

  })

}



addGenre(film);


function flipCard() {
    console.log('clicked!')
}