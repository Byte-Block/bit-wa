const fetchRandomUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then(response => response.json());
}

export { fetchRandomUsers };