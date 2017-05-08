/**
 * Created by eugene on 05/05/17.
 */

import store from './../store/store'
import { setTooltipCoords } from './../actions/setTooltipCoordinate'

export function activateTooltipArea(i, id, target) {
    target.classList.contains('image__tooltip--selecting') ?
        target.classList.remove('image__tooltip--selecting') :
    target.classList.add('image__tooltip--selecting');

    let imagesData = store.getState().tooltips,
        dataToSet = [...imagesData],
        coords = dataToSet[i].coords,
        tooltip = {};
    
    target.addEventListener('click', (e) => {
        let coordsToAdd = {
            left: e.offsetX - 10,
            top: e.offsetY - 10
        };

        console.log('et', e.target.parentNode)

        if (!target.classList.contains('image__tooltip--adding-text') &&
            !e.target.parentNode.classList.contains('image__show-preview') &&
            !e.target.parentNode.classList.contains('image__edit--toggle') &&
            !e.target.parentNode.classList.contains('image__remove') &&
            (e.target.parentNode.nodeName !== 'LABEL') &&
            !e.target.classList.contains('image__tooltip') &&
            (e.target.name !== 'tooltip_text') &&
            (e.target.nodeName !== 'BUTTON') &&
                target.classList.contains('image__tooltip--selecting'))  {

            coords.push(coordsToAdd);

            target.classList.add('image__tooltip--adding-text');

            tooltip.id = id;
            tooltip.coords = coords;
            tooltip.text = dataToSet[i].text;

            dataToSet[i] = tooltip;

            store.dispatch(setTooltipCoords(dataToSet));
        }

        if (e.target.classList.contains('image__tooltip')) {
            e.target.parentNode.classList.add('image__tooltip--editing');
            e.target.nextSibling.classList.remove('image__tooltip__text--hidden');
        }
    });
}
