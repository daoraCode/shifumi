console.log('Hello Shifumi');
// alert('Bienvenue dans le jeu Shifumi!');

var img = document.getElementById('img');
var imgIA = document.getElementById('imgIA');

function stone() {
  var choices = [img, imgIA];
  var choice1;
  choice1 = img.setAttribute('src', 'stone.png');
  choice2 = imgIA.setAttribute('src', 'stone.png');
}

function paper() {
    var choices = [img, imgIA];
    var choice1;
    choice1 = img.setAttribute('src', 'paper.png');
    choice2 = imgIA.setAttribute('src', 'stone.png');
}

function scissors() {
    var choices = [img, imgIA];
    var choice1;
    choice1 = img.setAttribute('src', 'scissors.png');
    choice2 = imgIA.setAttribute('src', 'stone.png');
}
