const btnCountAge = document.querySelector('button');
const birthday = document.getElementById('birthday');
btnCountAge.addEventListener('click', calculateAge);

function calculateAge() {
const birthdayValue = birthday.value;
if (birthdayValue === '') {
alert("Proszę wpisać datę urodzenia");
} else {
    const now = new Date();
    const birthdayDate = new Date(birthdayValue);
    console.log(now);
    console.log(birthdayValue);
    let age = now.getFullYear() - birthdayDate.getFullYear();   
    if (now.getMonth() < birthdayDate.getMonth() || (now.getMonth() === birthdayDate.getMonth() && now.getDate() < birthdayDate.getDate())) {
        age--;
    }
    document.getElementById("result").textContent = `Twój wiek to: ${age}`;
}
}
