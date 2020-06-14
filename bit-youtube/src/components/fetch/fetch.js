const key = 'AIzaSyBYd_8ZckBo_ODE6SGVTBaJL-VVwbxJMYY';

export const fetchYoutubeVideos = (q) => {

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${q}&key=${key}`)
        .then(response =>
            response.json());
}

export const fetchSingleVideoById = (videoId) => {
    return fetch(`https://www.youtube.com/embed/${videoId}`)
}

