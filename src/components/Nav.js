import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
      <nav>
          <ul>{/*  Sustituiremos por NavLink */}
              <a href={'.'} className='activo'>Inicio</a>
              <a href={'.'}>Ventas</a>
              <a href={'.'}>Soporte</a>
          </ul>
      </nav>
    )
  }
}

export default Nav