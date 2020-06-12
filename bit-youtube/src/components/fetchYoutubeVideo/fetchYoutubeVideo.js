export const fetchYoutubeVideo = (q) => {
    const key = 'AIzaSyBYd_8ZckBo_ODE6SGVTBaJL-VVwbxJMYY';

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${key}`)
        .then(response =>
            response.json());
}

