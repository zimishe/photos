/**
 * Created by eugene on 04.05.2017.
 */
import React, { Component } from 'react'
// eslint-disable-next-line
import store from './../store/store'

import ImageTopPanel from './imageTopPanel'

class Image extends Component {
    render() {
        return (
            <div className="image">
                <ImageTopPanel />
                <a className="image__create-tooltip" onClick={this.props.createTooltip}>T</a>
            </div>
        )
    }
}

export default Image