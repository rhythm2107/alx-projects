document.querySelector("#utworz").addEventListener('click', () => {
    utworzUsun("JS2", "VBN", 5)
})

document.querySelector("#odczytaj").addEventListener('click', () => {
    odczyt("JS2")
})

document.querySelector("#usun").addEventListener('click', () => {
    utworzUsun("JS2")
})


const odczyt = (nazwa) => {
    let ciastka = document.cookie.split('; ')
    for (let ciastko of ciastka) {
        let ciastkoSplit = ciastko.split("=")

        if (ciastkoSplit[0] == nazwa) {
            console.log(ciastkoSplit[1])
            break
        }
    }
}

const utworzUsun = (nazwa, wartosc="", dni=0) => {
    let d = new Date()
    d.setTime(d.getTime() + (dni * 24 * 60 * 60 * 1000))
    document.cookie = `${nazwa}=${wartosc};expires=${d.toUTCString()}`
}