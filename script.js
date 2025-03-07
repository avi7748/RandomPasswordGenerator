let options = {
    uppercase: false,
    numbers: false,
    specialChars: false,
    length: 12
};

function showStep(stepId) {
    document.getElementById(stepId).style.display = "block";
}

function setOption(type, value, currentStep, nextStep) {
    options[type] = value;
    document.getElementById(currentStep).style.display = "none";

    if (nextStep === "generatePassword") {
        generatePassword();
    } else {
        showStep(nextStep);
    }
}

function updateLength() {
    document.getElementById("lengthValue").innerText = document.getElementById("lengthSlider").value;
}

function generatePassword() {
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let specialChars = "!@#$%^&*()_+{}[]<>?";

    let characters = lowercase;
    if (options.uppercase) characters += uppercase;
    if (options.numbers) characters += numbers;
    if (options.specialChars) characters += specialChars;

    if (characters.length === 0) {
        alert("Please select at least one option!");
        return;
    }

    let password = "";
    for (let i = 0; i < options.length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password;

    document.getElementById("generateAgain").style.display = "block";
}

function resetGenerator() {
    
    options = {
        uppercase: false,
        numbers: false,
        specialChars: false,
        length: 12
    };


    document.getElementById("password").value = "";
    document.getElementById("generateAgain").style.display = "none";
    
    showStep('step1');
}
