const state ={
    plumbers: [],
    serviceRequests: []
}

export const fetchRequest = () => {
   return fetchPlumbers()
    .then(fetchServiceRequest)
}
export const fetchPlumbers = () => {

    return fetch(`http://localhost:8088/plumbers`) // location of said heist
    .then(dirtyMoney => dirtyMoney.json())              //dirty money => clean money (.json())
    .then(cleanMoney => {                        // take clean money => Do stuff with it
        // console.log(cleanMoney)
        state.plumbers = cleanMoney
    })
}

export const fetchServiceRequest = () => {

    return fetch(`http://localhost:8088/serviceRequests`) // location of said heist
    .then(dirtyMoney => dirtyMoney.json())              //dirty money => clean money (.json())
    .then(cleanMoney => {                        // take clean money => Do stuff with it
        // console.log(cleanMoney)
        state.serviceRequests = cleanMoney
    })
}


export const getState = () => ({...state})