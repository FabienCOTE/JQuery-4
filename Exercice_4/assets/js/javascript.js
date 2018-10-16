$("#button").click(check);
//fonction check
function check(e) {
  e.preventDefault();
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var birthDay = $("#birthDay").val();
  var birthPlace = $("#birthPlace").val();
  var job = $("#job").val();
  var society = $("#society").val();
  var correct = 0;
  var incorrect = 0;
  var regexText = /^[a-zA-ZÀ-ÿ]+([-'\s][a-zA-ZÀ-ÿ]+)?$/;
  var regexDate = /^[\d]{4}(-[\d]{2}){2}$/;

  if (regexText.test(firstName) == false) {
    var msgOne = "Votre prénom n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgOne = "Prénom valide";
  }

  if (regexText.test(lastName) == false) {
    var msgTwo = "Votre nom n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgTwo = "Nom valide";
  }

  if (regexDate.test(birthDay) == false) {
    var msgThree = "Votre date de naissance n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgThree = "Date de naissance valide";
  }

  if (regexText.test(birthPlace) == false) {
    var msgFour = "Votre lieu de naissance n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgFour = "Lieu de naissance valide";
  }

  if (regexText.test(job) == false) {
    var msgFive = "Votre emploi occupé n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgFive = "Emploi occupé valide";
  }

  if (regexText.test(society) == false) {
    var msgSix = "Votre société n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgSix = "Société valide";
  }

  //Transformation date française
  var dateFr = birthDay.split('-');
  dateFr = dateFr.reverse();
  dateFr = dateFr.join('-');

  if (incorrect > 1) {
    alert("Formulaire invalide\n\n" + msgOne + "\n" + msgTwo + "\n" + msgThree + "\n" + msgFour + "\n" + msgFive + "\n" + msgSix);
  }

  if (correct == 6) {
    $('#result').html(firstName + " " + lastName + ", né le " + dateFr + " à " + birthPlace + ", actuellement " + job + " à " +society);
  }

};
