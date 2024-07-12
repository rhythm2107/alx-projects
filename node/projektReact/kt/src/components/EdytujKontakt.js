import React, { Component } from 'react'

class EdytujKontakt extends Component {

    state = {
        data: JSON.parse(localStorage.getItem("KT")),
        id: this.props.match.params.id
    }

    aktualizujDane = () => {
        this.state.data[this.state.id].imie = document.querySelector("#imie").value
        this.state.data[this.state.id].nazwisko = document.querySelector("#nazwisko").value
        this.state.data[this.state.id].telefon = document.querySelector("#telefon").value
        this.state.data[this.state.id].email = document.querySelector("#email").value

        localStorage.setItem("KT", JSON.stringify(this.state.data))

        window.location.href = "/"
    }

    render() {
        return (
            <div>
                <p>
                    Imię:<br />
                    <input type="text" id="imie" defaultValue={this.state.data[this.state.id].imie} />
                </p>
                <p>
                    Nazwisko:<br />
                    <input type="text" id="nazwisko" defaultValue={this.state.data[this.state.id].nazwisko} />
                </p>
                <p>
                    Telefon:<br />
                    <input type="text" id="telefon" defaultValue={this.state.data[this.state.id].telefon} />
                </p>
                <p>
                    Email:<br />
                    <input type="text" id="email" defaultValue={this.state.data[this.state.id].email} />
                </p>
                <p>
                    <button onClick={this.aktualizujDane}>Zapisz nowe dane</button>
                    <button>Anuluj</button>
                </p>
            </div>
        )
    }

}
export default EdytujKontakt;