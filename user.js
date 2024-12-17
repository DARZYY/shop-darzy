const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')


console.log(id)

let url = "https://my-json-server.typicode.com/Salamandra19977/marketplace"
let productArray = []
let profile = document.getElementById("profile")



fetch(`${url}/users/${id}`)
    .then(async function(response){
        let user  = await response .json()
        console.log(user)
        
    profile.innerHTML = `
    <h1>Name:${user.name}</h1>
    <h1>Surname:${user.surname}</h1>
    <img id="image" src="${user.photo_url}">
    <h1>Balance:${user.balance}</h1>
    
    `
})