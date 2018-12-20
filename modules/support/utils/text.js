
export function makeShort(text, limit = 20) {
    text = text.slice(0, limit);
    let spacePosition = text.lastIndexOf(' ');
    if (!spacePosition) {
        return text;
    }

    return text.slice(0, spacePosition);
}
