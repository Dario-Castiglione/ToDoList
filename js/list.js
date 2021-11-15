import{ render } from "./utils.js"
import{ add } from "./add.js"
function List(data){
    const elements = data.map((item)=>
    `<li><label><input 
        type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
      /> ${item.title}  <strong>||Scadenza: </strong><input type="date" id ="date" name ="date"  value="${item.expires}" readonly></label></li>`
    ).join("")

    const container = document.querySelector("#container");
    render(container, `<p>
        Elenco To Do:</p>
        <ul>
        ${elements}</ul>

        <button id="add">Aggiungi </button>
        `)


        console.log(data)
        const btn = document.querySelector("#add")
        btn.addEventListener("click", add) 
};


export {List} ;