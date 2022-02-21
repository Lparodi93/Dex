let selector = 0;
let poke;
let inPoke;
let pokeName;
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
    { id: "12", name: "BUTTERFLY", type: "Bicho", desc: "Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas" }
];

alert("Bienvenidos a la Pokedex");
init();

//----------------------------------------------FUNCIONES---------------------------------------------->
function init() {
    selector = parseInt(prompt("ingrese 1 para buscar Pokémon por nombre o 2 para buscar por número. 3 para ver referencia"));
    pokeBusqueda();
}

function pokeBusqueda() {
    if (selector === 1) {
        do {
            inPoke = prompt("Ingresa nombre de Pokémon");
            miPoke = kanto.find(item => item.name.toLocaleUpperCase() === inPoke.toLocaleUpperCase());
            dataPoke();

        }
        while (!miPoke)

    } else if (selector === 2) {
        do {
            inPoke = prompt("Ingrese número de Pokémon");
            miPoke = kanto.find(item => item.id === inPoke);
            dataPoke();
        }
        while (!miPoke);

    } else if (selector === 3) {
        const body = document.body;
        const tittle = document.createElement("h1");
        tittle.textContent = "Referencia Pokedex"
        body.appendChild(tittle);

        for (const pokemon of kanto) {
            let list = document.createElement("p");
            list.textContent = JSON.stringify(pokemon.id + " " + pokemon.name)
            body.appendChild(list);
        }

    } else {
        alert("El dato no es válido")
        init();
    }
}

function dataPoke() {

    if (kanto.includes(miPoke)) {
        const body = document.body;
        const description = document.createElement("p");
        description.innerHTML = miPoke.name + "<br>" + "El pokemón tipo" + " " + miPoke.type + ":" + " " + miPoke.desc + ".";
        body.appendChild(description);
    }
    else {
        miPoke = null;
        pokeBusqueda();
    }

}
