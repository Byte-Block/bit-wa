export const fetchGifs = (q) => {
    return fetch(`https://api.giphy.com/v1/gifs/search?api_key=WwgdlVODiEbEtuu1y6JtPKRMHZXqHPSP&q=${q}&limit=25&offset=0&rating=G&lang=en`)
        .then(response => response.json())
}
