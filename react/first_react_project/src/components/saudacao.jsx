import React from "react"

export default class Saudacao extends React.Component {
    
    state = {
        tipo: "Oi",
        nome: "Gustest"
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value})
    }

    render() {
        const { tipo, nome} = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr />
                <input type="text" placeholder="Tipo..." value={tipo} 
                onChange={e => this.setTipo(e)} /> 
                <input type="text" placeholder="Nome..." value={nome} />
            </div>  
        )
    }
}