fetch("https://hp-api.onrender.com/api/characters")
.then(result => result.json())
.then(json => consumirLista(json));

function consumirLista(json){
    var lista = document.getElementById("lista");

    json.forEach(objeto => {
        var div = document.createElement("div");
        div.classList.add("item");
        var h2 = document.createElement("h2");
        h2.textContent = objeto.name == "" ? "Não possui tal informação" : objeto.name;
        var p = document.createElement("p");
        p.textContent = "Casa em Hogwarts: " + (objeto.house == "" ? "Não possui tal informação" :  objeto.house);
        var p2 = document.createElement("p");
        p2.textContent = "Aniversário: " +  (objeto.dateOfBirth == null ? "Não possui tal informação" : objeto.dateOfBirth);
        var p3 = document.createElement("p");
        p3.textContent = "Patrono: " + (objeto.patronus == "" ? "Não possui tal informação" : objeto.patronus);

        div.append(h2);
        div.append(p);
        div.append(p2);
        div.append(p3);
        lista.append(div);
    });
}