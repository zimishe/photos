/**
 * Created by eugene on 05/05/17.
 */

import React, { Component } from 'react'

class Tooltip extends Component {
    render() {
        let text = this.props.text;

        function checkText() {
            if (text !== undefined) {
                return (
                    <div className="image__tooltip__preview">
                        <p>{text}</p>
                    </div>
                )
            }
        }

        let style = {
            left: this.props.coords.left+'px',
            top: this.props.coords.top+'px'
        };

        return (
            <div className="image__tooltip__wrap" style={style}>
                <div className="image__tooltip" />
                <form className="image__tooltip__text" onSubmit={this.props.editTooltipText}>
                    <input type="text" name="tooltip_text"
                           required autoFocus
                           defaultValue={(text !== undefined) ? text : ''} />
                    <button>Save</button>
                </form>
                { checkText() }
            </div>
        )
    }
}

export default Tooltip