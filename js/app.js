import { API} from "./utils.js"
import { List } from "./List.js"
import {add} from "./add.js"





document.addEventListener("DOMContentLoaded", () => {
    fetch(API)
        .then((response) => response.json())
        .then ((data) => List(data))
       

    
    
})