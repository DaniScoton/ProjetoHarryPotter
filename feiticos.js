fetch("https://hp-api.onrender.com/api/spells")
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
        p.textContent = objeto.description;
        div.append(h2);
        div.append(p);
        lista.append(div);
    });
}