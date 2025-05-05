import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function ramdonExcuse() {
  
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  const whoIndexRamdon = Math.floor(Math.random() * who.length)
  const actionIndexRamdon = Math.floor(Math.random() * action.length)
  const whatIndexRamdon = Math.floor(Math.random() * what.length)
  const whenIndexRamdon = Math.floor(Math.random() * when.length)

  const excuse = '${who[whoIndexRamdon]} ${action[actionIndexRamdon]} ${what[whatIndexRamdon]} ${when[whenIndexRamdon]}'

  return excuse
}

window.onload = function () {
  const p = document.getElementById("excuse")
  const excuse = ramdonExcuse()
  p.innerHTML = ramdonExcuse()
};
