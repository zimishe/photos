/**
 * Created by eugene on 04.05.2017.
 */
import React, { Component } from 'react'
// eslint-disable-next-line
import store from './../store/store'

import ImageTopPanel from './imageTopPanel'
import Tooltip from './tooltip'

class Image extends Component {
    render() {
        let tooltips = this.props.tooltips,
            coords = tooltips.coords;

        return (
            <div className="image">
                <div className="image__tooltips">
                    {(coords.length > 0) && coords.map((el, i) =>
                        <Tooltip key={i}
                                 coords={el}
                                 editTooltipText={this.props.editTooltipText}
                        />
                    )}
                </div>
                <img src={this.props.src} alt="some" />
                <ImageTopPanel
                    imageDelete={this.props.imageDelete}
                    imageEdit={this.props.imageEdit}
                    imageID={this.props.id}
                />
                <a className="image__create-tooltip" onClick={this.props.createTooltip.bind(this, this.props.id)}>T</a>
            </div>
        )
    }
}

export default Image