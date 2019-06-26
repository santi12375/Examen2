import React, { Component } from 'react'
import heroeService from '../../services/heroeService'

export class Heroes extends Component{

state = {
    heroes: []
}

state2 = {
    clasificacion: []
}

//Componente tipo clase
componentDidMount() {
    this.setState({
        heroes: heroeService.getHeroes()
    });
}

render() {
    const heroes = this.state.heroes;
    return (
        <React.Fragment>

            <h1 className="animated fadeIn fast">Segundo examen (16%)</h1>
            <hr />
            <p className="animated fadeIn">
                <p><h2 className="animated fadeIn fast">Indicaciones:</h2></p>
                <div>
                    <ol>
                        <li>Descargar todo el proyecto de Heroes-React.</li>
                        <li>En este espacio, usted debe crear una página que tenga que ver con su proyecto de clase.</li>
                        <li>Entre los integrantes del proyecto no pueden existir paginas iguales, ni similares.</li>
                        <li>El proyecto completo debe adicionarse al GitHub.</li>
                        <li>En un documento ubicado en el Google Drive cada uno escribirá el enlace suministrado por GitHub para una posterior descarga.</li>
                        <li>El contenido de la página como mínimo debe tener algo similar a la página de "Heroes"; es decir, varias imagenes, enlaces, divisiones, lo que usted considere pertinente para ganarse un 5.0.</li>
                        <li>A las 12 m. del día de hoy debe estar el enlace en el Google Drive.</li>
                    </ol>
                </div>
            </p>

            <h1>Los Memes en diversos contextos</h1>
                <hr></hr>
                <div className="card-columns d-flex flex-column align-items-center">
                    {/*Tarjeta de los héroes*/}

                    {heroes.map(heroe => {
                        return (
                            <div className="card animated fadeIn fast">
                            <img src={heroe.img} alt={heroe.nombre} className="card-img-top img-fluid" />
                            <div className="card-body">
                            <h4 className="card-title">{heroe.nombre}</h4>
                            <p className="card-text">{heroe.bio}</p>
                        </div>
                    </div>
                        )
                    })}

                   <div class="Clasificacion col-5 contenedor inline">
                       <h2>Clasificacion de los memes</h2>
                       <p>Normalmente se clasifican los memes en dos grupos: Humor común Y Humor negro</p>
                       

                    </div>
                    
                </div>
                <div class="heehee d-flex justify-content-between" >
                {heroes.map(heroe => {
                            return (
                                <div className="card animated fadeIn fast">
                                <img src={heroe.img} alt={heroe.nombre} className="card-img-top img-fluid" />
                                <div className="card-body">
                                <h4 className="card-title">{heroe.nombre}</h4>
                                <p className="card-text">{heroe.bio}</p>
                            </div>
                        </div>
                            )
                        })}
                </div>
        </React.Fragment>
    )
}
}

export default Heroes