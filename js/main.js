const linkSource = "https://wa.me/55"

const request =
    fetch(
        "https://sheetdb.io/api/v1/nq9vc1103vfu3"
    ).then((response) => {
        return response.json()
    }).then(jsonBody => {

        for (let i = 0; i < jsonBody.length; i++) {
            document.querySelector(".app").innerHTML += `
            <a target="_blank" href="${linkSource+jsonBody[i].numero}">
            <span class="numero"> ${jsonBody[i].numero} </span>
            <span class="bairro">${jsonBody[i].bairro}</span>
            <span class="nome">${jsonBody[i].nome}</span>
            </a> <br/>
            `
        }
        console.log(jsonBody)
    })