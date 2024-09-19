const animalsData = [
    {
        "especie": "Elefante",
        "peso": "6000",
        "altura": "33",
        "extinto": "No",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVmTNnCsWBOEymCGguIz8vqw_Ozfs60iS1A&s"
    },
    {
        "imagen": "https://www.ngenespanol.com/wp-content/uploads/2022/09/tigre-de-bengala-el-gran-felino-de-las-selvas-de-la-india.jpg",
        "especie": "Tigre de Bengala",
        "extinto": "No",
        "peso": 220,
        "altura": 90
    },
    {
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2fn5kgfc58wI3WBg9wo1drLYhAZCM-bYsQ&s",
        "especie": "Delfín Mular",
        "extinto": "No",
        "peso": 150,
        "altura": 300
    },
    {
        "imagen": "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg.webp",
        "especie": "Panda Gigante",
        "extinto": "No",
        "peso": 120,
        "altura": 120
    },
    {
        "imagen": "https://zooguadalajaramxa.imgix.net/animal/187/foto-three.jpeg",
        "especie": "León Africano",
        "extinto": "No",
        "peso": 190,
        "altura": 110
    },
    {
        "imagen": "https://seaturtle-world.com/wp-content/uploads/laud.jpg",
        "especie": "Tortuga laúd",
        "extinto": "No",
        "peso": 500,
        "altura": 140
    },
    {
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeaCvobO_lm5exIfMIdj-C2VTNWodsg3xYZA&s",
        "especie": "Rinoceronte de Sumatra",
        "extinto": "No",
        "peso": 800,
        "altura": 150
    },
    {
        "imagen": "https://c4.wallpaperflare.com/wallpaper/390/338/433/animal-pangolin-mammal-wildlife-wallpaper-preview.jpg",
        "especie": "Pangolín",
        "extinto": "No",
        "peso": 10,
        "altura": 50
    },
    {
        "imagen": "https://images.ecestaticos.com/mQLVi2TmMXf2-aWOUA2xieXzkW0=/0x0:2272x1515/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8d3%2F6bb%2F357%2F8d36bb357027f929d1533909fc5984dc.jpg",
        "especie": "Lince Ibérico",
        "extinto": "No",
        "peso": 13,
        "altura": 70
    },
    {
        "imagen": "https://e3.365dm.com/23/02/1600x900/skynews-dodo-flightless-bird_6042966.jpg?20230201103835",
        "especie": "Dodo",
        "extinto": "Si",
        "peso": "Sin datos",
        "altura": "Sin datos"
    },
    {
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPy5s8UDTib3HXjpSa42ujhrGWCw8KKK3DqlR5GmjSkARaIUgK86gY34iPuE9ghRhRxmU&usqp=CAU",
        "especie": "Quagga",
        "extinto": "Si",
        "peso": "Sin datos",
        "altura": "Sin datos"
    },
    {
        "especie": "Ballena Azul",
        "peso": "150000",
        "altura": "30",
        "extinto": "No",
        "imagen": "https://www.barrameda.com.ar/wp-content/uploads/2019/11/ballena-azul.jpg"
    },
]

// Función para mostrar las cartas de animales
function renderAnimalCards(animals) {
    const animalContainer = document.getElementById('animal-container');
    
    animalContainer.innerHTML = ''; // Limpiar el contenedor antes de renderizar

    animals.forEach(animal => {
        const animalCard = document.createElement('div');
        animalCard.classList.add('animal-card');

        animalCard.innerHTML = `
            <img src="${animal.imagen}">
            <h2>${animal.especie}</h2>
            <p>Peso: ${animal.peso}</p>
            <p>Altura: ${animal.altura}</p>
            <p>Extinto: ${animal.extinto}</p>
        `;

        animalContainer.appendChild(animalCard);
    });
}

// Llamada a la función para mostrar las cartas de animales
renderAnimalCards(animalsData);