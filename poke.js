let dex = document.querySelector("#container");
let busqueda = document.querySelector(".buscar");
let data = document.querySelector(".description");
let textType = document.querySelector(".textType")
let descriptionType = document.querySelector(".descriptionType")
let btnAgua = document.querySelector(".btnAgua");
let btnFuego = document.querySelector(".btnFuego");
let btnPlanta = document.querySelector(".btnPlanta");
let btnBicho = document.querySelector(".btnBicho");
let btnElectrico = document.querySelector(".btnElectrico");


let miPoke;
let tipo;

const kanto = [
    { id: "#001", name: "BULBASAUR", type: "Planta/Veneno", desc: "Este pokemon nace con una semilla en el lomo que crece con el paso del tiempo" },
    { id: "#002", name: "IVYSAUR", type: "Planta/Veneno", desc: "Cuando le crece bastante el bulbo del lomo, pierde la capacidad de erguirse sobre las patas traseras" },
    { id: "#003", name: "VENASAUR", type: "Planta/Veneno", desc: "La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz del sol" },
    { id: "#004", name: "CHARMANDER", type: "Fuego", desc: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola" },
    { id: "#005", name: "CHARMELEON", type: "Fuego", desc: "Este Pokémon de naturaleza agresiva ataca en combate con su cola llameante y hace trizas al rival con sus afiladas garras" },
    { id: "#006", name: "CHARIZARD", type: "Fuego", desc: "Escupe un fuego tan caliente que funde las rocas. Causa incendios forestales sin querer." },
    { id: "#007", name: "SQUIRTLE", type: "Agua", desc: "Cuando retrae su largo cuello en el caparazón, dispara agua a una presión increíble" },
    { id: "#008", name: "WARTORTLE", type: "Agua", desc: "Se lo considera un símbolo de longevidad. Los ejemplares más ancianos tienen musgo sobre el caparazón" },
    { id: "#009", name: "BLASTOISE", type: "Agua", desc: "Para acabar con su enemigo, lo aplasta con el peso de su cuerpo. En momentos de apuro, se esconde en el caparazón" },
    { id: "#010", name: "CATERPIE", type: "Bicho", desc: "Para protegerse, despide un hedor horrible por las antenas con el que repele a sus enemigos" },
    { id: "#011", name: "METAPOD", type: "Bicho", desc: "Como en este estado solo puede endurecer su coraza, permanece inmóvil a la espera de evolucionar" },
    { id: "#012", name: "BUTTERFLY", type: "Bicho", desc: "Aletea a gran velocidad para lanzar al aire sus escamas extremadamente tóxicas" },
    { id: "#025", name: "PIKACHU", type: "Electrico", desc: "Cuanto más potente es la energía eléctrica que genera este Pokémon, más suaves y elásticas se vuelven las bolsas de sus mejillas" }
];

busqueda.addEventListener("search", () => {
    miPoke = kanto.find(item => item.name.toLocaleUpperCase() === busqueda.value.toLocaleUpperCase());
    if (kanto.includes(miPoke)) {
        data.innerHTML = miPoke.name + "<br>" + "El pokemón tipo" + " " + miPoke.type + ":" + " " + miPoke.desc + ".";
        dex.appendChild(data);

        Toastify ({
            text: miPoke.id +" " +miPoke.name+ " " + miPoke.type,
            duration: 3000,
            gravity:top,
            position: "left",
            className: "noti",
            destination: "https://www.pokemon.com/el/"
        }).showToast();
    }
})

btnAgua.onclick = function () {
    tipo = "Agua";
    const filtro = kanto.filter(tipos => tipos.type === tipo);
    descriptionType.innerHTML = filtro.map((filtro) => "<br>" + filtro.name);
    descriptionType.appendChild(descriptionType);
}

btnFuego.onclick = function () {
    tipo = "Fuego";
    const filtro = kanto.filter(tipos => tipos.type === tipo);
    descriptionType.innerHTML = filtro.map((filtro) => "<br>" + filtro.name);
    descriptionType.appendChild(descriptionType);
}

btnPlanta.onclick = function () {
    tipo = "Planta/Veneno";
    const filtro = kanto.filter(tipos => tipos.type === tipo);
    descriptionType.innerHTML = filtro.map((filtro) => "<br>" + filtro.name);
    descriptionType.appendChild(descriptionType);
}

btnBicho.onclick = function () {
    tipo = "Bicho";
    const filtro = kanto.filter(tipos => tipos.type === tipo);
    descriptionType.innerHTML = filtro.map((filtro) => "<br>" + filtro.name);
    descriptionType.appendChild(descriptionType);
}

btnElectrico.onclick = function () {
    tipo = "Electrico";
    const filtro = kanto.filter(tipos => tipos.type === tipo);
    descriptionType.innerHTML = filtro.map((filtro) => "<br>" + filtro.name);
    descriptionType.appendChild(descriptionType);
}



