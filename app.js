const game = document.querySelector("#game");
const score = document.querySelector("#score");

const film = 11;
const levels = ["easy", "medium", "hard"];

function addGenre() {
  const column = document.createElement("div");
  column.classList.add("genre-column");
  column.innerHTML = "this is a genre";
  //Apend is a JS method -- append puts the column inside the id of "game"
  game.append(column);

  levels.forEach((level) => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=11&difficulty=${level}&type=multiple`
    );
  });
}

addGenre();
