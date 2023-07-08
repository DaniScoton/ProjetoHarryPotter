fetch("https://hp-api.onrender.com/api/characters")
.then(result => result.json())
.then(json => consumirLista(json));

function consumirLista(json){
    var lista = document.getElementById("lista");

    json.forEach(objeto => {
        var div = document.createElement("div");
        div.classList.add("item");
        var h2 = document.createElement("h2");
        h2.textContent = objeto.name;
        var p = document.createElement("p");
        p.textContent = objeto.house;
        var p2 = document.createElement("p");
        p2.textContent = objeto.dateOfBirth;
        var p3 = document.createElement("p");
        p3.textContent = objeto.patronus;

        var stringCasa = "Casa em Hogwarts: "
        var stringAniversario = "Aniversário: "
        var stringPatrono = "Patrono: "

        div.append(h2);
        div.append(stringCasa, p);
        div.append(stringAniversario, p2);
        div.append(stringPatrono, p3);
        lista.append(div);
    });
}