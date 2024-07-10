class Osoba {
    imie;
    nazwisko;
    telefon;

    constructor(imie, nazwisko, telefon) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.telefon = telefon;
    }
}

const showData = () => {
    let daneStorage = localStorage.getItem("KT")
    let daneParsed = JSON.parse(daneStorage)

    if (daneParsed !== null) {
        const daneDiv = document.querySelector("div#dane")
        const ul = document.createElement("ul")
        daneDiv.appendChild(ul)

        for (let object of daneParsed) {
            const li = document.createElement("li")
            li.textContent = `${object.imie}, ${object.nazwisko}, ${object.telefon}`
            ul.appendChild(li)
        }
    }
    
}

document.querySelector("#dodaj").addEventListener('click', () => {
    let imie = document.querySelector('#imie').value
    let nazwisko = document.querySelector('#nazwisko').value
    let telefon = document.querySelector('#telefon').value

    let osoba = new Osoba(imie, nazwisko, telefon);

    let daneStorage = localStorage.getItem("KT")

    let dane = [];
    if (daneStorage !== null) {
        dane = JSON.parse(daneStorage)
    }

    dane.push(osoba)
    localStorage.setItem("KT", JSON.stringify(dane))

    const daneDiv = document.querySelector("div#dane ul")
    if (daneDiv === null) {
        showData()
    } else {
        const li = document.createElement("li")
        li.textContent = `${osoba.imie}, ${osoba.nazwisko}, ${osoba.telefon}`
        daneDiv.appendChild(li)
    }
})

showData()