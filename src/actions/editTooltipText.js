/**
 * Created by eugene on 06.05.2017.
 */
import store from '../store/store'
import { setTooltipCoords } from './../actions/setTooltipCoordinate'

export function editTooltipText(i, id, e) {
    e.preventDefault();

    let tooltips = store.getState().tooltips,
        dataToSet = [...tooltips],
        textToSet = e.target.firstChild.value,
        formData = new FormData(e.target),
        tooltip = {};

    let coords = dataToSet[i].coords;

    tooltip.id = id;
    tooltip.coords = coords;
    tooltip.text = textToSet;

    dataToSet[i] = tooltip;
    store.dispatch(setTooltipCoords(dataToSet));

    console.log('store2', store.getState().tooltips);
}