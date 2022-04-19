import React from "react";
import Nav from "./components/Nav";
import ClientesDashboard from "./pages/ClientesDashboard";

class App extends React.Component {

  clientes = [
    { nombre: 'Gas Natural', cif: 'A12345678' },
    { nombre: 'Iberdrola', cif: 'A87654321' },
    { nombre: 'Jazztel', cif: 'B12345678' },
    { nombre: 'BBVA', cif: 'C12345678' },
  ] 

  titulo = 'Listado de clientes';

    render() {
      return (
        <>
          <Nav />
          <ClientesDashboard clientes={this.clientes} titulo={this.titulo}/>
        </>
      )
    }
}

export default App;