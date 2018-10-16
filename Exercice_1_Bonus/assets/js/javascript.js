//Choix du joueur
var player = $('#player').val();
//Variable score
var computerScore = 0;
var playerScore = 0;


//Clic sur le bouton jouer, execution des fonctions
$('#shifumi').click(function(e) {
  //Chiffre aléatoire
  var randomNumber = Math.floor(Math.random()*3)
  //Choix de l'ordinateur
  if (randomNumber == 0) {
    var computer = "Pierre";
  }
  else if (randomNumber == 1) {
    var computer = "Feuille";
  }
  else {
    var computer = "Ciseaux";
  }

  //Comparaison des résultats, stocké dans $result
  if ((computer == "Pierre" && player == "Ciseaux") || (computer == "Feuille" && player == "Pierre") || (computer == "Ciseaux" && player == "Feuille")) {
    var result = "Tu as perdu !";
    computerScore++;
  }
  else if (computer == player) {
    var result = "C'est un match nul !";
  }
  else {
    var result = "Tu as gagné !";
    playerScore++;
  }

  //Calcul pourcentage
  var playerPercent = 100 - (computerScore / playerScore) * 100;

  $('.left').text("Vous : " + playerScore + "(" + playerPercent + "%)");
  $('.right').text("Ordinateur : " + computerScore);
  $('#result').html("L'ordinateur a joué <b>" + computer + "</b>, " + result);

});
