import React, { Component } from 'react'

class ListaKontaktow extends Component {

    state = {

        dane: JSON.parse(localStorage.getItem("KT"))
    }

    render() {
        return (
            <div>

                <table border="1">
                    <tr>
                        <th>Imie</th>
                        <th>Nazwisko</th>
                        <th>Telefon</th>
                        <th>Email</th>
                    </tr>

                    {this.state.dane.map((v, i) =>
                        <tr>
                            <td>{v.imie}</td>
                            <td>{v.nazwisko}</td>
                            <td>{v.telefon}</td>
                            <td>{v.email}</td>
                            <td>
                                <a href={`/usun/${i}`}>usun</a>
                            </td>
                            <td>
                                <a href={`/edytuj/${i}`}>edytuj</a>
                            </td>
                        </tr>
                    )}
                </table>

            </div>
        )
    }

}
export default ListaKontaktow;