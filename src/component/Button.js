import React from "react"
import PropTypes from "prop-types"
import style from "./Button.css"

class Button extends React.Component {
    handleClick = () => {
        this.props.clickHandler(this.props.name)
    }                                     

    render() {
        const className = [    
            style['component-button'],
            style[this.props.color ? "color" : ""],
            style[this.props.wide ? "wide" : ""],
        ]
        return (
            <div className={className.join(" ").trim()}>
                <button onClick={this.handleClick}>{this.props.name}</button>
            </div>
        )
    }
}
Button.propTypes = {
    name: PropTypes.string,
    color: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
}

export default Button