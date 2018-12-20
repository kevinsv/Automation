function normalizeText(text) {
    let lowerCaseText = text.toLowerCase();
    let upperCaseText = text.toUpperCase();

    return `translate(
        translate(normalize-space(text()),' ', ''),
        '${upperCaseText}',
        '${lowerCaseText}'
    )`;
}

export function textSelector(text) {
    return `${normalizeText(text)}='${text.toLowerCase().replace(/\s/g, '')}'`;
}

export function containsTextSelector(text) {
    return `contains(${normalizeText(text)},'${text.toLowerCase().replace(/\s/g, '')}')`;
}