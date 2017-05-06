/**
 * Created by eugene on 05/05/17.
 */

import React, { Component } from 'react'

class Tooltip extends Component {
    render() {
        let style = {
            left: this.props.coords.left+'px',
            top: this.props.coords.top+'px'
        };

        return (
            <div className="image__tooltip__wrap" style={style}>
                <div className="image__tooltip"></div>
                <form className="image__tooltip__text" onSubmit={this.props.editTooltipText}>
                    <input type="text" name="tooltip_text" required />
                    <button>Add</button>
                </form>
                <div className="image__tooltip__preview">
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Tooltip