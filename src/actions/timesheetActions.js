export function addHour(hour) {
    return { type: 'ADD_HOUR', hour }
}

export function removeHour(hour) {
    return { type: 'REMOVE_HOUR', hour }
}