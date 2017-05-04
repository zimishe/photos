/**
 * Created by eugene on 04.05.2017.
 */

export function deleteImage(imagesToSet) {
    return {
        type: 'IMAGE_DELETED', imagesToSet: imagesToSet
    }
}
