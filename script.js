const form = document.querySelector('form');
const calculateBtn = document.querySelector('#calculateBtn');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);
    const bmi = weight / Math.pow(height / 100, 2);
    let status;

    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = 'Normal';
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obesity';
    }

    resultDiv.innerHTML = `Your BMI is <strong>${bmi.toFixed(1)}</strong> which means You are <strong>${status}</strong>`;
});
