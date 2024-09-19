const container = document.getElementById('character-container');

// Función para obtener los personajes de la API
async function fetchCharacters() {
    try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
        renderCharacters(data.results);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}
// Función para crear las cartas de personajes
function renderCharacters(characters) {
    container.innerHTML = ''; 
    // Limpiar el contenedor antes de renderizar
    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.classList.add('character-card');
        characterCard.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
        `;

        characterCard.addEventListener('click', () => {
            // Guardar los datos del personaje en localStorage o pasar el ID en la URL
            localStorage.setItem('selectedCharacter', JSON.stringify(character));
            window.location.href = 'Episodios.html'; // Redirigir a la página de detalles
        });

        container.appendChild(characterCard);
    });
}
// Llamar a la función para obtener y mostrar los personajes
fetchCharacters();