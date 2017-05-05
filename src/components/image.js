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
        let id = this.props.id;
        
        function checkTooltips() {
            let images = store.getState().images,
                tooltipsData = images.filter(el => el.id === id)[0];
                
                // console.log('tdata', tooltipsData);
                
            if (tooltipsData.length > 0) {
                tooltipsData.map(el => <Tooltip coords={el.coords} />)                
            }
        }
        
        return (
            <div className="image">
                <div className="image__tooltips">
                    { checkTooltips() }
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