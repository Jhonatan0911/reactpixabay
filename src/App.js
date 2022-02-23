import React, {useEffect, useState, Component} from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Characters  from './componentes/Character';
import Buscador from './componentes/Buscador';
import Pagination from './componentes/Pagination';

// useEffect(() => {
//   this.datosBusqueda();
// }, [])

const [characters, setCharacters] = useState([]);

class App extends Component {

  state = {
    termino: ' ',
    imagenes : [],
    pagina:''
  }
  

  paginaAnterior = () =>{
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina-=1;
    this.setState({pagina},()=>{
      this.consultarApi();
    });
  }
  paginaSiguiente = () =>{
    let pagina = this.state.pagina;
    pagina+=1;
    this.setState({pagina}, ()=>{
      this.consultarApi();
    });
  }

  
  consultarApi = () =>{
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=25838828-7a5ac27d64c7e99873e9e5729&q=${termino}&per_page=30&page=${pagina}`;
     
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.hits))
      .catch(error => console.log(error))
  }


  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, ()=>{
      this.consultarApi();
    })
  }


  render() {

    return (
      this.consultarApi(),

      <>
        <Navbar brand="React pixebay"></Navbar>
        <div className="container">
          <Buscador datosBusqueda={this.datosBusqueda}></Buscador>
          <Characters characters={this.characters}></Characters>
          <Pagination paginaSiguiente={this.paginaSiguiente} paginaAnterior={this.paginaAnterior}></Pagination>
        </div>
      </>

    );
  }
}

export default App;
