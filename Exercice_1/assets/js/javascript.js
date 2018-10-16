//Clic sur le bouton jouer, execution des fonctions
$('#shifumi').click(function() {
  //Choix du joueur
  var player = document.querySelector('input[name=choice]:checked').value;
  var randomNumber = Math.floor(Math.random()*3);
  var computer;
  var result;

  //Choix de l'ordinateur
  if (randomNumber == 0) {
    computer = "Pierre";
  }
  else if (randomNumber == 1) {
    computer = "Feuille";
  }
  else {
    computer = "Ciseaux";
  }

  //Comparaison des résultats, stocké dans $result
  if ((computer == "Pierre" && player == "Ciseaux") || (computer == "Feuille" && player == "Pierre") || (computer == "Ciseaux" && player == "Feuille")) {
    result = "Tu as perdu !";
  }
  else if (computer == player) {
    result = "C'est un match nul !";
  }
  else {
    result = "Tu as gagné !";
  }

  alert ("Player : " + player + "\nComputer : " + computer + "\n" + result);
});
