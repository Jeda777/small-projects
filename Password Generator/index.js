const passwordText = document.querySelector('#password');
const inputs = Array.from(document.querySelectorAll('input'));
const copyBtn = document.querySelector('#copy-btn');
const generateBtn = document.querySelector('#generate');
let password = '';
let passwordLength = 12;
let lowercase = true;
let uppercase = true;
let numbers = true;
let symbols = false;
inputs.map((i) => {
    i.addEventListener('change', (e) => {
        const target = e.target;
        if (target.id === 'number') {
            passwordLength = Number(target.value);
        }
        else if (target.id === 'lowercase') {
            lowercase = target.checked;
        }
        else if (target.id === 'uppercase') {
            uppercase = target.checked;
        }
        else if (target.id === 'numbers') {
            numbers = target.checked;
        }
        else if (target.id === 'symbols') {
            symbols = target.checked;
        }
    });
});
generateBtn.addEventListener('click', () => {
    generatePassword();
});
const generatePassword = () => {
    if ((!lowercase && !uppercase && !numbers && !symbols) || passwordLength < 1)
        return alert(`You can't do that`);
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = lowercaseChars.toUpperCase();
    const numberChars = '0123456789';
    const symbolChars = '~`!@#$%^&*()-_=+[{]}|;:",<.>/?/*';
    let charset = [];
    if (lowercase) {
        if (charset.length !== 0) {
            charset = [...charset, ...lowercaseChars.split('')];
        }
        else {
            charset = [...lowercaseChars.split('')];
        }
    }
    if (uppercase) {
        if (charset.length !== 0) {
            charset = [...charset, ...uppercaseChars.split('')];
        }
        else {
            charset = [...uppercaseChars.split('')];
        }
    }
    if (numbers) {
        if (charset.length !== 0) {
            charset = [...charset, ...numberChars.split('')];
        }
        else {
            charset = [...numberChars.split('')];
        }
    }
    if (symbols) {
        if (charset.length !== 0) {
            charset = [...charset, ...symbolChars.split('')];
        }
        else {
            charset = [...symbolChars.split('')];
        }
    }
    password = '';
    for (let i = 0; i < passwordLength; i++) {
        const char = charset[Math.floor(Math.random() * charset.length)];
        password += char;
    }
    passwordText.innerText = password;
};
copyBtn.addEventListener('click', () => {
    if (navigator.clipboard)
        navigator.clipboard.writeText(password);
});
