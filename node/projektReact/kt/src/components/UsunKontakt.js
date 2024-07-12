import React, { Component } from 'react'

class UsunKontakt extends Component {

    state = {
        data: JSON.parse(localStorage.getItem("KT")),
        id: this.props.match.params.id
    }

    wrocNaGlowna = () => {
        window.location.href = "/"
    }

    usunKontakt = () => {
        this.state.data.splice(this.state.id, 1)
        localStorage.setItem("KT", JSON.stringify(this.state.data))

        window.location.href = "/"
    }

    render() {
        return (
            <div>
               <p>Czy na pewno chcesz usunac ponizszy kontakt?</p>
               <p>Imie: {this.state.data[this.state.id].imie}</p> 
               <p>Nazwisko: {this.state.data[this.state.id].nazwisko}</p>
               <button onClick={this.usunKontakt}>Tak</button>
               <button onClick={this.wrocNaGlowna}>Nie</button>
            </div>
        )
    }

}
export default UsunKontakt;