import React from "react";
import Nav from "./components/Nav";
import ClientesDashboard from "./pages/ClientesDashboard";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clientes: [
        { nombre: 'Gas Natural', cif: 'A12345678' },
        { nombre: 'Iberdrola', cif: 'A87654321' },
        { nombre: 'Jazztel', cif: 'B12345678' },
        { nombre: 'BBVA', cif: 'C12345678' },
      ],
      titulo: 'Listado de clientes',
    }
  }



  componentDidMount() {
    setTimeout(() => { // simulamos una actualización de los datos
      this.setState({clientes: [...this.state.clientes, {nombre: 'Orange', cif: 'A16761712'}]})
    }, 3000)
  }

    render() {
      return (
        <>
          <Nav />
          <ClientesDashboard clientes={this.state.clientes} titulo={this.state.titulo}/>
        </>
      )
    }
}

export default App;