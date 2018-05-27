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
  bgfill("play_play", "#E2D4CE");
  bgfill("comp_play", "#E2D4CE");

  fillchoice(p_move, "play_play");
  let c_move = compturn();
  fillchoice(c_move, "comp_play");

  let result = p_move - c_move;
  switch (result) {
    case 0: //draw - same choice
      increment("result_draw");
      bgfill("play_play", "#DCA386  ");
      bgfill("comp_play", "#DCA386");
      break;
    case -2: //Rock to Scissor
    case 1: //Paper to Rock or Scissor to Paper
      increment("result_win");
      bgfill("play_play", "#94BF5C");
      break;
    default:
      increment("result_lose");
      bgfill("comp_play", "#94BF5C");
      break;
  }

  let win_count = Number(document.getElementById("result_win").innerHTML);
  let lose_count = Number(document.getElementById("result_lose").innerHTML);
  let final_result = document.getElementById("final_result");
  let final_row = document.getElementById("final_row");

  if (final_result.innerHTML === "") {
    if (win_count >= 10) {
      final_result.innerHTML = "<h1>You Win!</h1>";
      final_row.style.visibility = "visible";
    } else if (lose_count >= 10) {
      final_result.innerHTML = "<h1>You Lose!</h1>";
      final_row.style.visibility = "visible";
    }
  }
}