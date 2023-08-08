import React, { Component } from "react";

class App extends Component{
    state = {
        count: 0,
    }

    increaseOne = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    resetAll = () => {
        this.setState({
            count: 0,
        })
    }

    decreasOne = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }
    render(){
        return(
            <div className="app-container">
            <h1>Counter in React</h1>
            <div className="counter">
                <div className="counter-body">{this.state.count}</div>
                <div className="counter-footer">
                    <button onClick={this.increaseOne}>+</button>
                    <button onClick={this.resetAll}>&#8635;</button>
                    <button onClick={this.decreasOne}>-</button>
                </div>
            </div>
        </div>
        )
    }
}

export default App;