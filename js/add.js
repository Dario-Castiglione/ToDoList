import {render, API} from "./utils.js"


const add = () => {
    const container = document.querySelector("#container")

    render(container, `
    <div>
        <h3>Aggiungi To Do</div>
        <form id="create">

            <div class="row">
                <label for="title">Titolo:</label>
                <input type="text" id ="title" name="title"></input>
                </div>


            <div class="row">
                <label for="expires">Scadenza:</label>
                <input type="date" min="2021" value="2021" id ="expires" name="expires"></input>
            </div>


            <button>Salva</button>
        </form>
    </div>`)

    const form = document.querySelector("#create")
    form.addEventListener("submit", (event) => {
        event.preventDefault();


        const toDo = {
            title: event.target.title.value,
            expires: event.target.expires.value,
            completed: false
            
        }

        console.log(toDo)
        fetch(API,{ 
            method: 'POST',
            body: JSON.stringify(toDo),
            headers: {
                "Content-Type" : "application/json"
            }
        });
         
    });
};


export{ add }