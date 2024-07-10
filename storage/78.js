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

const getFreshData = (key) => {
    let daneStorage = localStorage.getItem(key)
    let daneParsed = JSON.parse(daneStorage)
    return daneParsed
}


const showData = () => {
    let daneParsed = getFreshData("KT")
    if (daneParsed !== null) {
        const daneDiv = document.querySelector("div#dane")
        daneDiv.innerHTML = ''
        const ul = document.createElement("ul")
        daneDiv.appendChild(ul)

        for (let [index, object] of daneParsed.entries()) {
            const li = document.createElement("li")
            li.innerHTML = `${object.imie}, ${object.nazwisko}, ${object.telefon} <a href="#" onclick="deleteData(${index})">usun</a>`
            ul.appendChild(li)
        }
    }
}

const deleteData = (index) => {
    let daneParsed = getFreshData("KT")
    if (daneParsed !== null) {
        daneParsed.splice(index, 1)
        let newDaneJSON = JSON.stringify(daneParsed)
        localStorage.setItem("KT", newDaneJSON)
        showData()
    }
}

document.querySelector("#dodaj").addEventListener('click', () => {
    let imie = document.querySelector('#imie').value;
    let nazwisko = document.querySelector('#nazwisko').value;
    let telefon = document.querySelector('#telefon').value;

    let osoba = new Osoba(imie, nazwisko, telefon);

    let daneStorage = localStorage.getItem("KT");

    let dane = [];
    if (daneStorage !== null) {
        dane = JSON.parse(daneStorage);
    }

    dane.push(osoba);
    localStorage.setItem("KT", JSON.stringify(dane));

    showData();
});

showData()