//Fonction click
$("#button").click(function() {

  //Calcul moyenne
  var regexNum = /^[\d]+([,.][\d]+)?$/;
  var numberOne = $("#numberOne").val();
  var numberTwo = ($("#numberTwo").val());
  var numberThree = ($("#numberThree").val());
  var numberFour = ($("#numberFour").val());
  var numberFive = ($("#numberFive").val());
  numberOne = parseFloat(numberOne.replace(",","."));
  numberTwo = parseFloat(numberTwo.replace(",","."));
  numberThree = parseFloat(numberThree.replace(",","."));
  numberFour = parseFloat(numberFour.replace(",","."));
  numberFive = parseFloat(numberFive.replace(",","."));
  var numberAll = (numberOne + numberTwo + numberThree + numberFour + numberFive) /5;

  if (numberOne.length == 0 || numberTwo.length == 0 || numberThree.length == 0 || numberFour.length == 0 || numberFive.length == 0) {
    alert("Veuillez recommencer, un ou plusieurs champs son vide");
  } else if (numberOne > 20 || numberTwo > 20 || numberThree > 20 || numberFour > 20 || numberFive > 20) {
    alert("Veuillez recommencer, un ou plusieurs champs est au dessus de 20");
  } else {
    if (regexNum.test(numberOne) && regexNum.test(numberTwo) && regexNum.test(numberThree) && regexNum.test(numberFour) && regexNum.test(numberFive)) {
      if (numberAll >= 0 && numberAll < 10) {
        var commit = "En dessous de la moyenne.";
      }

      if (numberAll >= 10 && numberAll < 13) {
        var commit = "Moyen";
      }

      if (numberAll >= 13 && numberAll < 16) {
        var commit = "Bien";
      }

      if (numberAll >= 16 && numberAll < 20) {
        var commit = "Très bien";
      }

      if (numberAll == 20) {
        var commit = "Excellent";
      }

      $('#result').html("Votre moyenne est de <b>" + numberAll.toFixed(2) + "</b> : " + commit);

    } else {
      alert("Veuillez recommencer, un ou plusieurs champs ne sont pas valide");
    }
  }
});
