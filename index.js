console.log('Hello Shifumi');

var containerIA = document.getElementById('containerIA');
document.body.appendChild(containerIA);
var imgIA = document.getElementById('imgIA');
imgIA.setAttribute('src', 'stone.png');
var containerPlayer = document.getElementById('containerPlayer');
document.body.appendChild(containerPlayer);
var imgPlayer = document.getElementById('img');
imgPlayer.setAttribute('src', 'stone.png');

function choiceIA() {
  var array = ['stone', 'paper', 'scissors'];
  var random = Math.floor(Math.random() * 3);
  console.log(random);
  console.log(array[random]);
  if (array[random] === 'stone') {
    imgIA.setAttribute('src', 'stone.png');
  } else if (array[random] === 'paper') {
    imgIA.setAttribute('src', 'paper.png');
  } else if (array[random] === 'scissors') {
    imgIA.setAttribute('src', 'scissors.png');
  }
  console.log(array[random]);
  return array[random];
}

function player(choice) {
  console.log('message parametre choice: ', choice); 
  switch(choice) {
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
  console.log("lastChoiceIA variable : ", lastChoiceIA);
}


function resultScore() {

}

// console.log(player('stone'));

// function scissors() {
//   img.setAttribute('src', 'scissors.png');
// }

// function paper() {
//     var choices = [img, imgIA];
//     var choice1;
//     choice1 = img.setAttribute('src', 'paper.png');
//     choice2 = imgIA.setAttribute('src', 'stone.png');
// }

// function scissors() {
//     var choices = [img, imgIA];
//     var choice1;
//     choice1 = img.setAttribute('src', 'scissors.png');
//     choice2 = imgIA.setAttribute('src', 'stone.png');
// }

// je choisi la pierre

// l'IA choisit entre la pierre, la feuille ou les ciseaux
// if (img) {
// ccondition disant que : si la pierre est choisie, du coup génère moi l'un des 3 symboles : Pierre, feuille, ciseaux
// var imgIA = document.createElement('imgIA');
// var element = document.getElementsByClassName('container-1');
// } else {
//   (alert("DRAW"));
// }

// element.choice1 = img.setAttribute('src', 'stone.png');
// choice2 = imgIA.setAttribute('src', 'stone.png');
