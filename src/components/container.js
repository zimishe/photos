import React, { Component } from 'react'
import './../../assets/css/style.css'

import { connect } from 'react-redux'
import store from './../store/store'

import Image from './image'
import AddPhoto from './addPhoto'
import { setCountry } from './../actions/setCountry'

const mapDispatchToProps = function (dispatch) {
    return {
        dispatch,
        someHandler: function () {
            console.log('store before', store.getState());
            store.dispatch(setCountry(2));
            console.log('store after', store.getState())
        },
        uploadHandler: function (e) {
            e.preventDefault();
            console.log('upload handler');
        }
    }
};

const mapStateToProps = function () {
    return {
        data : store.getState()
    }
};

class Container extends Component {
    render() {
        return (
            <div className="photos">
                <AddPhoto uploadHandler={this.props.uploadHandler.bind(this)}/>
                <div className="photos__list">

                </div>
                <Image createTooltip={this.props.someHandler.bind(this)} />
                <button onClick={this.props.someHandler.bind(this)}>click me</button>
            </div>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
