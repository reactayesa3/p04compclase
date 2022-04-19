import React, { Component } from 'react'

export class ClientesDashboard extends Component {


    render() {
        return (
            <div className='container'>
                <h1>{this.props.titulo}</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>CIF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.clientes.map(cliente => {
                            return (
                                <tr>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.cif}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ClientesDashboard