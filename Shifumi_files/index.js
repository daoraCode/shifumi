console.log('Hello Shifumi');
alert('Bienvenue dans le jeu Shifumi!');

var img1 = document.getElementById('image1');
img1.setAttribute('src', 'stone.png');

var img3 = document.getElementById('image2');
img3.setAttribute('src', 'paper.png');

var img3 = document.getElementById('image3');
img3.setAttribute('src', 'scissors.png');

function randomSign(choiceNumber) {
  // var gameSign = ['null', 'stone', 'paper', 'scissors'];

  var min = 1;
  var max = 3;
  var total = 0;
  var result = [];
  for (var i = 0; i < choiceNumber; i++) {
    var random = Math.floor(Math.random() * (max - min + 1) + min);
    result.push(random);
    total += random;
  }

  var player1 = choiceNumber();
  var player2 = choiceNumber();

  if (player1 > player2) {
    console.log(`Joueur 1 a gagné ${player1} > ${player2}`);
  } else if (player1 < player2) {
    console.log(`Joueur 2 a gagné ${player2} > ${player1}`);
  } else {
    console.log('égalité');
  }

  console.log(`${result.join(' + ')} = ${total}`);
  return total;
}