import React from 'react'

const TarjetaClasificacion = ({clasif}) => {
    return (

        <div className="card animated fadeIn fast">
        <img src={clasif.img} alt={clasif.nombre} className="card-img-top img-fluid" />
        <div className="card-body">
        <h4 className="card-title">{clasif.nombre}</h4>
        <p className="card-text">{clasif.bio}</p>
        <p className="card-text">
            <small className="text-muted">{clasif.aparicion}</small>
        </p>
        <button type="button" className="btn btn-outline-primary btn-block">
            Ver más...
        </button>
    </div>
</div>
    )
}

export default TarjetaClasificacion;