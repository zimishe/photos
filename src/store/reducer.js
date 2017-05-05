/**
 * Created by eugene on 04.05.2017.
 */
import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOOLTIP_COORDINATE_SET' : return {
            tooltipCoords: action.tooltipCoords
        };

        case 'IMAGE_DELETED' : return {
            tooltipCoords: state.tooltipCoords,
            images: action.imagesToSet
        };
        
        case 'IMAGE_EDITED' : return {
            tooltipCoords: state.tooltipCoords,
            images: action.imagesToSet
        };

        default : return state
    }
};

export default reducer