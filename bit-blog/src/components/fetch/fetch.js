export const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
}

export const fetchPostById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
}

export const fetchAuthors = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    )
}