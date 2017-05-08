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
        parentEditing = document.querySelector('.image__tooltip--editing'),
        // eslint-disable-next-line
        formData = new FormData(e.target),
        tooltip = {};

    let coords = dataToSet[i].coords,
        text = dataToSet[i].text,
        index = Array.from(document.querySelectorAll('.image__tooltip__text')).indexOf(e.target);

    let editedText = [...text];

    if (parentEditing == null) {
        text.push(textToSet);
        tooltip.text = text;
    }   else {
        editedText[index] = textToSet;
        tooltip.text = editedText;
    }

    tooltip.id = id;
    tooltip.coords = coords;

    dataToSet[i] = tooltip;

    store.dispatch(setTooltipCoords(dataToSet));

    (parentImage !== null) && parentImage.classList.remove('image__tooltip--adding-text');
    (parentEditing !== null) && parentEditing.classList.remove('image__tooltip--editing');
    e.target.classList.add('image__tooltip__text--hidden');
}