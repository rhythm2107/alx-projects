import React, { Component } from 'react'

class DodajKontakt extends Component {

    dodajKontakt = () => {
        let kontakt = {
            imie: document.querySelector("#imie").value,
            nazwisko: document.querySelector("#nazwisko").value,
            telefon: document.querySelector("#telefon").value,
            email: document.querySelector("#email").value,
        }


        let daneStorage = localStorage.getItem("KT");



        let dane = [];
        if (daneStorage != null) {
            dane = JSON.parse(daneStorage);
        }

        dane.push(kontakt)
        localStorage.setItem("KT", JSON.stringify(dane));
        window.location.href = "/"

    }

    wrocNaGlowna = () => {
        window.location.href = "/"
    }

    render() {
        return (
            <div>
                <p>
                    Imię:<br />
                    <input type="text" id="imie" />
                </p>
                <p>
                    Nazwisko:<br />
                    <input type="text" id="nazwisko" />
                </p>
                <p>
                    Telefon:<br />
                    <input type="text" id="telefon" />
                </p>
                <p>
                    Email:<br />
                    <input type="text" id="email" />
                </p>
                <p>
                    <button onClick={this.dodajKontakt}>Zapisz nowe dane</button>
                    <button onClick={this.wrocNaGlowna}>Anuluj</button>
                </p>

            </div>
        )
    }

}
export default DodajKontakt;