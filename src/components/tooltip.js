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
                <form className="image__tooltip__text">
                    <input type="text" name="tooltip_text" />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default Tooltip