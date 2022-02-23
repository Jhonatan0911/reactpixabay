import React from 'react'

const Pagination = props => {
    return (
        <div className="row mx-auto">
            <div className="col py-3 mx-auto">
                <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
                <button  onClick={props.paginaSiguiente} type="button" className="btn btn-info">Siguiente &rarr;</button>
            </div>
        </div>
    )
}

export default Pagination;
