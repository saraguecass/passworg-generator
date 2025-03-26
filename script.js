document.addEventListener("DOMContentLoaded", () => {
    const passwordField = document.getElementById("password");
    const generateBtn = document.getElementById("generate-btn");
    const copyBtn = document.getElementById("copy-btn");
    const lengthInput = document.getElementById("password-length");

    generateBtn.addEventListener("click", generatePassword);
    copyBtn.addEventListener("click", copyToClipboard);

    lengthInput.addEventListener("input", () => {  // método que te permite agregar "escuchas" o "controladores" de eventos a un elemento de la página
        let value = parseInt(lengthInput.value);
        if (value < 6) lengthInput.value = 6;
        if (value > 20) lengthInput.value = 20;
    });

    function generatePassword () {
        const length = parseInt(lengthInput.value);
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*^(){}+-[]"
        let password= "";

        for(let i=0; i<length; i++){
            const randomindex = Math.floor(Math.random() * chars.length);
            password += chars[randomindex];
        }

        passwordField.value= password;
        animateButton(generateBtn);
    }

    function copyToClipboard() {
        if(passwordField.value) {
            passwordField.select();
            document.execCommand("copy");

            copyBtn.innerHTML = "<i class='fas fa-check''></i>"

            setTimeout(() => {
                copyBtn.innerHTML = "<i class='fas fa-copy''></i>"
            }, 1500)
        }
    }

    function animateButton (button) {
        button.style.transform = "scale(0.9)";

        setTimeout (() => {
            button.style.transform = "scale(1)";
        },150);
    }

    generatePassword();

});