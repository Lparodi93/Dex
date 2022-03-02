let miPoke;

const kanto = [
    { id: "1", name: "BULBASAUR", type: "Planta/Veneno", desc: "Este pokemon nace con una semilla en el lomo que crece con el paso del tiempo" },
    { id: "2", name: "IVYSAUR", type: "Planta/Veneno", desc: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras" },
    { id: "3", name: "VENASAUR", type: "Planta/Veneno", desc: "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol" },
    { id: "4", name: "CHARMANDER", type: "Fuego", desc: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola" },
    { id: "5", name: "CHARMELEON", type: "Fuego", desc: "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras" },
    { id: "6", name: "CHARIZARD", type: "Fuego/Volador", desc: "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer." },
    { id: "7", name: "SQUIRTLE", type: "Agua", desc: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble" },
    { id: "8", name: "WARTORTLE", type: "Agua", desc: "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón" },
    { id: "9", name: "BLASTOISE", type: "Agua", desc: "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón" },
    { id: "10", name: "CATERPIE", type: "Bicho", desc: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos" },
    { id: "11", name: "METAPOD", type: "Bicho", desc: "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar" },
    { id: "12", name: "BUTTERFLY", type: "Bicho", desc: "Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas" },
    { id: "25", name: "PIKACHU", type: "Eléctrico", desc: "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas" }
];


init();
const arrayJ = JSON.stringify(kanto);
localStorage.setItem("save", arrayJ);

let listKanto = localStorage.getItem("save");
let list = JSON.parse(listKanto);

console.log(list);


function dataPoke() {
    let container = document.querySelector("#container");

    if (kanto.includes(miPoke)) {
        const body = document.container;
        const description = document.createElement("p");
        description.className = "info";
        description.innerHTML = miPoke.name + "<br>" + "El pokemón tipo" + " " + miPoke.type + ":" + " " + miPoke.desc + ".";
        container.appendChild(description);
    }
    reinicio();
}

function reinicio() {
    const body = document.container;
    const boton = document.createElement("button")
    boton.className = "reset";
    boton.innerHTML = "Reiniciar";
    container.appendChild(boton);

    boton.onclick = function () {
        const data = document.querySelector(".info");
        data.remove();
        boton.remove();
        init();
    }
}

function init() {
    let busqueda = document.querySelector("#buscar");
    if (busqueda != null) {
        busqueda.addEventListener("search", () => {
            miPoke = kanto.find(item => item.name.toLocaleUpperCase() === busqueda.value.toLocaleUpperCase());
            dataPoke();
        })
    }
}