import React, { Component } from 'react'

export class ClientesDashboard extends Component {

    constructor(props) {
        super(props); // Obligatorio cuando usamos el constructor
        this.state = {
            isShowHelp: false
        }
        // this.handleShowHelp = this.handleShowHelp.bind(this); no es necesaria con llamada mediante callback
    }

    handleShowHelp() {
        this.setState({isShowHelp: !this.state.isShowHelp});
    }

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
                                <tr key={cliente.cif}>
                                    <td>{cliente.nombre}</td>
                                    <td>{cliente.cif}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {   
                    this.state.isShowHelp ? 
                        <>
                            <button onClick={() => this.handleShowHelp()}>Ocultar ayuda</button>
                            <div className='help'>
                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                            </div> 
                        </>
                    : 
                        // <button onClick={this.handleShowHelp}>Ver ayuda</button> Alternativa
                        <button onClick={() => this.handleShowHelp()}>Ver ayuda</button>
                }
            </div>
        )
    }
}

export default ClientesDashboard