function generatePassword() {
    var length = 8;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var password = "";
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    document.getElementById("password").textContent = password;
  }