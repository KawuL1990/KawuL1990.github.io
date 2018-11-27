export let setLocalStorage = (kye, value) => {
    return window.localStorage.setItem(kye, value)
}

export let getLocalStorage = (kye) => {
    return window.localStorage.getItem(kye)
}