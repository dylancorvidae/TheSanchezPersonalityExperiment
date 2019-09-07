const URL = 'https://rickandmortyapi.com/api/character';

export function getCharacters(options) {
    const page = options.page || 1;
    const search = options.search;

    const url = `${URL}}?character=${search || ''}`;
    return fetch(url)
        .then(response => response.json())
        .then(results => {
            return {
                count: 100 * page,
                results: results
            };
        });
}