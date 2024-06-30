const arrayOfNumbers = new Array()

// Helper function for counting Odd and Even numbers
function countEvenOdd(numberArray) {
    let evenCount = 0
    let oddCount = 0
    for (number of numberArray) {
        if (number % 2 === 0) {
            evenCount++
        } else if (number % 2 === 1) {
            oddCount++
        }
    }
    return [evenCount, oddCount]
}

// Helper function for calculating Min and Max number of an Array
function minMaxNumber(numberArray) {
    let minNumber = numberArray[0]
    let maxNumber = numberArray[0]

    for (number of numberArray) {
        if (number < minNumber) {
            minNumber = number
        }

        if (number > maxNumber) {
            maxNumber = number
        }
    }
    return [minNumber, maxNumber]
}

// Helper function fo calcualting sum and average
function calculateSumAndAverage(numberArray) {
    let sum = 0
    let average = 0

    for (number of numberArray) {
        sum += number
    }

    average = sum / numberArray.length
    return [sum, average]
}


// Main function for displaying statistics of chosen numbers
function displayStatistics(numberArray) {
    let numberCount = numberArray.length
    let [arraySum, arrayAverage] = calculateSumAndAverage(numberArray)
    let [evenCount, oddCount] = countEvenOdd(numberArray)
    let [minNumber, maxNumber] = minMaxNumber(numberArray)
    
    console.log(`Sum: ${arraySum}\nLength: ${numberCount}\nAverage: ${arrayAverage}\nEven Count: ${evenCount}\nOdd Count: ${oddCount}\nMin Number: ${minNumber}\nMax Number: ${maxNumber}`)
}

while (true) {
    number = Number(prompt("Podaj liczbe"))

    if (number === 0) {
        break
    }

    if (number > 0 && number % 1 === 0) {
        arrayOfNumbers.push(number)
    } else {
        console.log("Podana liczba musi byc liczbac calkowita i byc wieksza niz zero!")
    }
}

displayStatistics(arrayOfNumbers)