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
        parentImage = document.querySelector('.image__tooltip--adding-text'),
        // eslint-disable-next-line
        formData = new FormData(e.target),
        tooltip = {};

        // console.log('txxx', dataToSet[i]);

    let coords = dataToSet[i].coords,
        text = dataToSet[i].text;

    text.push(textToSet);

    tooltip.id = id;
    tooltip.coords = coords;
    tooltip.text = text;

    dataToSet[i] = tooltip;
    store.dispatch(setTooltipCoords(dataToSet));

    parentImage.classList.remove('image__tooltip--adding-text');
    e.target.classList.add('image__tooltip__text--hidden');

    console.log('store2', store.getState().tooltips);
}