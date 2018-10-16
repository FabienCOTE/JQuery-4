$("#button").click(check);

//fonction check
function check() {
  var firstName = $("#firstName").val();
  var lastName = $("#lastName").val();
  var phone = $("#phone").val();
  var email = $("#email").val();
  var regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-zA-Z]{2,4}$/;
  var regexPhone = /^[\d]{10}$/;
  var regexText = /^[a-zA-ZÀ-ÿ]+([-'\s][a-zA-ZÀ-ÿ]+)?$/;
  var correct = 0;
  var incorrect = 0;

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

  if (regexPhone.test(phone) == false) {
    var msgThree = "Votre téléphone n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgThree = "Téléphone valide";
  }

  if (regexMail.test(email) == false) {
    var msgFour = "Votre mail n'est pas valide";
    incorrect++;
  } else {
    correct++;
    var msgFour = "Mail valide";
  }

  if (correct == 4) {
    alert("Formulaire valide\n\nPrénom : " + firstName + "\nNom : " + lastName + "\nTéléphone : " + phone + "\nMail : " + email );
  }

  if (incorrect > 1) {
    alert("Formulaire invalide\n\n" + msgOne + "\n" + msgTwo + "\n" + msgThree + "\n" + msgFour);
  }

};
