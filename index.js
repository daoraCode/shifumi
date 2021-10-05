console.log('Hello Shifumi');

var containerIA = document.getElementById('containerIA');
document.body.appendChild(containerIA);
var imgIA = document.getElementById('imgIA');
imgIA.setAttribute('src', 'stone.png');

var containerPlayer = document.getElementById('containerPlayer');
document.body.appendChild(containerPlayer);
var imgPlayer = document.getElementById('img');
imgPlayer.setAttribute('src', 'stone.png');
// Game start with stone by default

function choiceIA() {
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

function player(myChoice) {
  switch (myChoice) {
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

  var lastChoiceIA = choiceIA();

  if (lastChoiceIA === 'stone' && myChoice === 'scissors') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!");
  } else if(myChoice === 'stone' && lastChoiceIA === 'scissors') {
    console.log('VOUS AVEZ GAGNÉ!');
  } else if(lastChoiceIA === 'scissors' && myChoice === 'paper') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!");
  } else if(myChoice === 'scissors' && lastChoiceIA === 'paper') {
    console.log('VOUS AVEZ GAGNÉ!');   
  } else if(lastChoiceIA === 'paper' && myChoice === 'stone') {
    console.log("VOUS AVEZ PERDU, L'IA À GAGNÉ!"); 
  } else if(myChoice === 'paper' && lastChoiceIA === 'stone') {
    console.log('VOUS AVEZ GAGNÉ!'); 
  } else if(myChoice === 'stone' && lastChoiceIA === 'stone') {
    console.log('DRAW');
  } else if(myChoice === 'scissors' && lastChoiceIA === 'scissors') {
    console.log('DRAW');
  } else if(myChoice === 'paper' && lastChoiceIA === 'paper') {
    console.log('DRAW');
  }

  // if(myChoice === 5) {
    
  // }

  // if(lastChoiceIA === 5) {

  // }
}
