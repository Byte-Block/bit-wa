export const fetchShows = (resolve) => {
    return fetch('http://api.tvmaze.com/shows')
        .then(response => response.json())
        .then(data => {
            resolve(data);
            console.log(data);
        })
        .catch(error => {
            alert(error);
        });
}