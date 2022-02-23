import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Characters  from './componentes/Character';
import Buscador from './componentes/Buscador';
import Pagination from './componentes/Pagination';

function App() {

  // Hooks
  const [characters, setCharacters] = useState([]);
  // Api
  const api = "https://pixabay.com/api/?key=25839045-809b64a8b48695c9127b61dde&q="


  // Objetos con los atributos necesarios para la busqueda
  var dataBusqueda = {
    termino: "",
    pag: 0,
  };

  function paginaAnterior() {
    let pagina = dataBusqueda.pag;
    if(pagina === 1 ) return null;
    pagina -= 1;
    dataBusqueda.pag = pagina;
    consultaApi();
  }

  function paginaSiguiente() {
    let pagina = dataBusqueda.pag;
    pagina += 1;
    dataBusqueda.pag = pagina;
    consultaApi();
  }
  
  function datosBusqueda(termino) {
    dataBusqueda.termino = termino;
    consultaApi();
  }

  function consultaApi() {
    api = api+dataBusqueda.termino+'&per_page=12&page='+dataBusqueda.pag;
    console.log(api)
    fetchCharacters(api);
  }

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.hits))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(api);
  }, [])


  return (
    <>
      <Navbar brand="React pixebay"></Navbar>
      <div className="container">
        <Buscador datosBusqueda={datosBusqueda}></Buscador>
        <Characters characters={characters}></Characters>
        <Pagination paginaSiguiente={paginaSiguiente} paginaAnterior={paginaAnterior}></Pagination>
      </div>
    </>

  );
}

export default App;
