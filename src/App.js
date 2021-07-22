import React, { Component } from 'react'

// import Header from "./components/Header"
// import Footer from "./components/Footer"
// import MainContent from "./components/MainContent"


class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        // bind do metodo

        this.handleClick = this.handleClick.bind(this)
    }

    // posso colocar os metodos aqui

    handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
            </div>
        )
    }
}

export default App