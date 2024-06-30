const arrayOfRandomNumbers = new Array()

for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 100 + 1)
    arrayOfRandomNumbers.push(randomNumber)
}

function sortArray(arrayOfNumbers) {
    const sortedArray = new Array()

    while (arrayOfNumbers.length !== 0) {
        let smallestNumber = arrayOfNumbers[0]
        let smallestNumberIndex = 0

        for (const [index, number] of arrayOfNumbers.entries()) {
            if (number < smallestNumber) {
                smallestNumber = number
                smallestNumberIndex = index
            }
        }

        sortedArray.push(smallestNumber)
        arrayOfNumbers.splice(smallestNumberIndex, 1)
    }
    return sortedArray
}

const sortedArray = sortArray(arrayOfRandomNumbers)
console.log(sortedArray)