const submitBtn = document.querySelector('ion-button')
const answerOne = document.getElementById('answer-1')
const answerTwo = document.getElementById('answer-2')
const answerThree = document.getElementById('answer-3')
const answerFour = document.getElementById('answer-4')
const answerFive = document.getElementById('answer-5')
const resultScore = document.getElementById('result')

async function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Alert';
    alert.subHeader = 'Important message';
    alert.message = 'Make sure to answer all of the questions!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    await alert.present();
}

submitBtn.addEventListener("click", function() {

    let count = 0
    let quizAnswers = [answerOne.value, answerTwo.value, answerThree.value, answerFour.value, answerFive.value]
    const answers = ['3', '4', 'Philippines', 'Facebook', 'Ionic']

    if (answerOne.value === '' || answerTwo.value === '' || answerThree.value === '' || answerFour.value === '' || answerFive.value === '') {
        presentAlert()
    } else {
        for (let i = 0; i < quizAnswers.length; i++) {
            if (quizAnswers[i] === answers [i])
                count++
        }
    }

    console.log(count)

    const resultElement = document.createElement('ion-card')
    resultElement.innerHTML = `    
    <ion-card-header>
        <ion-card-title>Quiz Result: ${count}/5</ion-card-title>
        <ion-card-subtitle>Have a great day!</ion-card-subtitle>
    </ion-card-header>    
    `
    resultScore.appendChild(resultElement)

})