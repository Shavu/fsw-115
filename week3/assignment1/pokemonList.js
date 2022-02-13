//how to create a requst (xhr)
// What parts of teh is object are impartnat for our request

// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.open 
// xhr.send example  "https://pokeapi.co/api/v2/"
// xhr.responseText 

const xhr = new XMLHttpRequest()
//Method        //url                             //Async?
xhr.open("GET", "https://swapi.dev/api/people/1"), true
xhr.send()
xhr.



    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
            let data = JSON.parse(xhr.responseText)
            console.log(data)
            showData(data)
        } else if (xhr.readyState === 4 && xhr.status !== 200) {
            console.log(xhr.responseText)
        }
    }
function showData(data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {
        const character = document.createElement("h1")
        character.textContent = data.name
        document.body.appendChild(character)
    }
}

//xhr.readyState
    // 1 - request was sent
    // 2
    // 3
    // 4 -

//xhr.status
    // 404 - not found
    // 201 - everything succuessfully
    // 500 - something broke on the server