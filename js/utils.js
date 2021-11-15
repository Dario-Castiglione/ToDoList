/**
 * Project REST API endpoint
 */
const API = "https://edgemony-backend.herokuapp.com/todos";


/**
 * Render some content
 */
const render = (container, content) => {
    container.innerHTML = content;
}

export {
    API, render
}