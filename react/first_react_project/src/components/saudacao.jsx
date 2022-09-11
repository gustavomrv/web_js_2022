import React from "react"

export default class Saudacao extends React.Component {
    render() {
        const { tipo, nome} = this.props
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} /> 
                <input type="text" placeholder="Nome..." value={nome} />
            </div>  
        )
    }
}