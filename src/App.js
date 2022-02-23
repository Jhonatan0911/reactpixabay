import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import Characters  from './componentes/Character';
import Buscador from './componentes/Buscador';
import Pagination from './componentes/Pagination';

function App() {

  var state = " ";
  var pag = 1;

  function paginaAnterior() {
    let pagina = pag;

    if(pagina === 1 ) return null;

    pagina -= 1;

    pag = pagina;
    consultaApi();
  }

  function paginaSiguiente() {
    let pagina = pag;
    console.log(pagina);


    pagina = pagina + 1;

    pag = pagina;

    console.log(pag);
    consultaApi();
  }
  
  function datosBusqueda(termino) {
    state = termino;
    console.log(state);
    consultaApi();
  }

  function consultaApi() {
    const urlB = 'https://pixabay.com/api/?key=25839045-809b64a8b48695c9127b61dde&q='+state+'&per_page=12&page='+pag;
    console.log(urlB)
    fetchCharacters(urlB);

  }

  const [characters, setCharacters] = useState([]);

  const api = "https://pixabay.com/api/?key=25839045-809b64a8b48695c9127b61dde&q=&per_page=12"

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
