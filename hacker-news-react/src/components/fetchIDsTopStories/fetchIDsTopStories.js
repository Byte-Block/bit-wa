const fetchIDsTopStories = () => {
   return fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

export { fetchIDsTopStories };