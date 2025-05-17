function submitForm() {
    const phone = document.getElementById('phone').value;
    if (!phone || phone.length < 8) {
      alert("Veuillez entrer un numéro valide.");
      return;
    }
    alert("Merci pour votre participation ! Bonne chance 🍀");
    document.getElementById('phone').value = "";
  }
