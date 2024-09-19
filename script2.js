const personalData = {
    "Nombre": "Esteban",
    "Apellido": "Prado",
    "Edad": "20",
    "Ciudad": "Cali",
    "Nacionalidad": "Colombiana",
    "Email": "juan.prado07@usc.edu.co",
    "image": "https://www.usc.edu.co/wp-content/uploads/2023/03/Logo_Universidad_Santiago_de_Cali_USC-1.png" // Imagen de ejemplo
  };
  
  // Función para mostrar los datos personales
  function renderPersonalInfo(data) {
    const personalInfoContainer = document.getElementById('personal-info-container');
  
    const personalCard = document.createElement('div');
    personalCard.classList.add('personal-info-card');
  
    personalCard.innerHTML = `
        <img src="${data.image}" alt="Profile Image">
        <h2>${data.Nombre} ${data.Apellido}</h2>
        <p>Edad: ${data.Edad}</p>
        <p>Ciudad: ${data.Ciudad}</p>
        <p>Nacionalidad: ${data.Nacionalidad}</p>
        <p>Correo: ${data.Email}</p>
    `;
  
    personalInfoContainer.appendChild(personalCard);
  }
  
  // Llamada a la función para mostrar la información personal
  renderPersonalInfo(personalData);