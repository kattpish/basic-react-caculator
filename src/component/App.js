import React from "react"
import Display from "./Display"
import ButtonPanel from "./ButtonPanel"
import calculate from "../logic/calculate"
import style from "./App.css"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            next: null,
            total: null,
            operation: null,
        }
    }

    handleClick = buttonName => {
        this.setState(calculate(this.state, buttonName))
    }

    render() {
        return (
            <div className={style.App}>
             <Display value={this.state.next || this.state.total || "0"} />
             <ButtonPanel clickHandler={this.handleClick} />
            </div>
        )
    }
}
export default App
