/**
 * Created by eugene on 04.05.2017.
 */

export function editImage(imagesToSet) {
    return {
        type: 'IMAGE_EDITED', imagesToSet: imagesToSet
    }
}
