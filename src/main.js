import { fetchPlumbers, getState, fetchServiceRequest, fetchRequest } from "./dataAccess.js";
4












fetchRequest()
.then(() => {

   const state = getState()
    console.log(state)


    document.querySelector("#main").innerHTML += state.plumbers.map(x => `<h1>${x.name}</h1>`).join("")
    document.querySelector("#main").innerHTML += state.serviceRequests.map(x => `<h1>${x.description}</h1>`).join("")

})

