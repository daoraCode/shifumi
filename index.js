console.log('Hello Shifumi');

// je récupère la div depuis le DOM (html)
var containerIA = document.getElementById('containerIA');
document.body.appendChild(containerIA);
var imgIA = document.getElementById('imgIA');
imgIA.setAttribute('src', 'stone.png');

// je récupère la div depuis le DOM (html)
var containerPlayer = document.getElementById('containerPlayer');
document.body.appendChild(containerPlayer);
var imgPlayer = document.getElementById('img');
imgPlayer.setAttribute('src', 'stone.png');
// Game start with stone by default

function choiceIARandom() {
  var array = ['stone', 'paper', 'scissors'];
  var random = Math.floor(Math.random() * 3);
  if (array[random] === 'stone') {
    imgIA.setAttribute('src', 'stone.png');
  } else if (array[random] === 'paper') {
    imgIA.setAttribute('src', 'paper.png');
  } else if (array[random] === 'scissors') {
    imgIA.setAttribute('src', 'scissors.png');
  }
  var arrayChoiceIA = array[random];
  return arrayChoiceIA;
}

// fonction prends 2 paramètres afin de comparer deux valeurs
function versusShifumi(myChoice, iAChoice) {

  if (myChoice === 'stone' && iAChoice === 'paper') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!");
  } else if(myChoice === 'stone' && iAChoice === 'scissors') {
    console.log('VOUS AVEZ GAGNÉ!');
  } else if(myChoice === 'stone' && iAChoice === 'stone') {
    console.log('DRAW!');
  } else if(myChoice === 'paper' && iAChoice === 'scissors') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!");
  } else if(myChoice === 'paper' && iAChoice === 'stone') {
    console.log('VOUS AVEZ GAGNÉ!');   
  } else if(myChoice === 'paper' && iAChoice === 'paper') {
    console.log("DRAW!"); 
  } else if(myChoice === 'scissors' && iAChoice === 'stone') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!");
  } else if(myChoice === 'scissors' && iAChoice === 'paper') {
    console.log('VOUS AVEZ GAGNÉ!'); 
  } else if(myChoice === 'scissors' && iAChoice === 'scissors') {
    console.log('DRAW');
  }

}

function player(playerChoice) {
  switch (playerChoice) {
    case 'stone':
      imgPlayer.setAttribute('src', './stone.png');
      break;
    case 'paper':
      imgPlayer.setAttribute('src', './paper.png');
      break;
    case 'scissors':
      imgPlayer.setAttribute('src', './scissors.png');
      break;
    default:
      console.log('DRAW');
  }
  var choiceIA = choiceIARandom();
  versusShifumi(playerChoice, choiceIA);
}

