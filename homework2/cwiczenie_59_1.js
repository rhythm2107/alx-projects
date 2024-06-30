let correctCount = 0

for (let i = 0; i < 10; i++) {
    const arrayOfSigns = ['-', '+', '*']
    let randomIndex = Math.floor(Math.random() * 3)
    let randomNumberOne = Math.floor(Math.random() * 10 + 1)
    let randomNumberTwo = Math.floor(Math.random() * 10 + 1)
    let randomSign = arrayOfSigns[randomIndex]
    let correctAnswer

    if (randomSign === '-') {
        correctAnswer = randomNumberOne - randomNumberTwo
    } else if (randomSign === '+') {
        correctAnswer = randomNumberOne + randomNumberTwo
    } else if (randomSign == '*') {
        correctAnswer = randomNumberOne * randomNumberTwo
    }

    let playerAnswer = Number(prompt(`Ile to jest ${randomNumberOne} ${randomSign} ${randomNumberTwo}`))

    if (playerAnswer === correctAnswer) {
        correctCount++
    }
}

console.log(`Na 10 pytan, odpowiedziales na ${correctCount} poprawnie i ${10-correctCount} blednie!`)