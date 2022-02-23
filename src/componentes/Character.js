import React from 'react'

const Characters = ({characters = []}) => {
  return (
    <div className="row">
        {
            characters.map((item, index) =>(
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <div className="card" style={{minWidth: "200px"}}>
                        <img src={item.largeImageURL} alt="" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title mb-2">{item.user}</h5>
                            <p className="card-text">{item.likes} Me gusta </p>
                            <p className="card-text">{item.views} Vistas </p>

                            <a href={item.largeImageURL} target="_blank" className="btn btn-primary btn-block"> Ver imagen </a>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
export default Characters
