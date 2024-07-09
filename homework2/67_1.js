const submitButton = document.querySelector('input[type=button]')

submitButton.addEventListener('click', () => {
    const inputName = document.querySelector('input[name=imie]')
    const inputSurname = document.querySelector('input[name=nazwisko]')
    const inputCity = document.querySelector('select[name=miasto]')
    const inputTech = document.querySelectorAll('input[type=checkbox]')
    const inputJob = document.querySelectorAll('input[type=radio]')
    const inputTextArea = document.querySelector('textarea[name=uwagi]')

    const arrayOfTech = []
    let isFullyCorrect = true
    let noJobPicked = false

    for (node of inputTech) {
        if (node.checked) {
            arrayOfTech.push(node.value)
        }
    }

    let pickedJob = ''
    for (node of inputJob) {
        if (node.checked) {
            pickedJob = node.value
            break
        }
    }

    if (pickedJob === '') {
        isFullyCorrect = false
        noJobPicked = true
    }
    

    const resultName = document.querySelector('#imie')
    const resultSurname = document.querySelector('#nazwisko')
    const resultCity = document.querySelector('#miasto')
    const resultTech = document.querySelector('#technologie')
    const resultJob = document.querySelector('#stanowisko')
    const resultTextArea = document.querySelector('#uwagi')

    // Walidacja
    const nameError = document.querySelector('#error_imie')
    const surnameError = document.querySelector('#error_nazwisko')
    const cityError = document.querySelector('#error_miasto')
    const techError = document.querySelector('#error_technologia')
    const jobError = document.querySelector('#error_stanowisko')

    const mapOfSingleInputs = new Map([
        [inputName, nameError],
        [inputSurname, surnameError],
        [inputCity, cityError],
    ])

    for (const [input, errorElement] of mapOfSingleInputs) {
        errorElement.innerHTML = ''
        if (!input.value) {
            errorElement.innerHTML = 'Blad!'
            isFullyCorrect = false
        }
    }

    if (arrayOfTech.length === 0) {
        isFullyCorrect = false
        techError.innerHTML = 'Blad!'
    } else {
        techError.innerHTML = ''
    }

    if (noJobPicked) {
        jobError.innerHTML = 'Blad!'
    } else {
        jobError.innerHTML = ''
    }


    if (isFullyCorrect) {
        resultName.innerHTML = inputName.value
        resultSurname.innerHTML = inputSurname.value
        resultCity.innerHTML = inputCity.value
        resultTech.innerHTML = arrayOfTech.join(' ')
        resultJob.innerHTML = pickedJob
        resultTextArea.innerHTML = inputTextArea.value
    }
})