let compturn = () => Math.floor(Math.random() * 3)

function fillchoice(num, name) {
  let choice = ["&#9994;", "&#9995;", "&#9996;"];
  let element = document.getElementById(name);
  element.innerHTML = choice[num];
}

function increment(result) {
  let element = document.getElementById(result);
  let currval = Number(element.innerHTML);
  element.innerHTML = currval + 1;
}

function bgfill(result, color) {
  let element = document.getElementById(result);
  element.style.backgroundColor = color;
}

function Playround(p_move) {
  bgfill("play_play", "");
  bgfill("comp_play", "");

  fillchoice(p_move, "play_play");
  let c_move = compturn();
  fillchoice(c_move, "comp_play");

  let result = p_move - c_move;
  switch (result) {
    case 0: //draw - same choice
      increment("result_draw");
      bgfill("play_play", "lightblue");
      bgfill("comp_play", "lightblue");
      break;
    case -2: //Rock to Scissor
    case 1: //Paper to Rock or Scissor to Paper
      increment("result_win");
      bgfill("play_play", "lightgreen");
      break;
    default:
      increment("result_lose");
      bgfill("comp_play", "lightgreen");
      break;
  }
}