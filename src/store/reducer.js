/**
 * Created by eugene on 04.05.2017.
 */
import initialState from './../store/initialState'

let reducer = function reducer(state = initialState, action) {
    switch (action.type) {
        case 'TOOLTIP_COORDINATE_SET' : return {
            tooltipCoords: action.tooltipCoords
        };

        default : return state
    }
};

export default reducer