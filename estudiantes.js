const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'estudiantes.json');

function registrarEstudiante(nombres, codigo) {
    // Leer archivo JSON existente
    let estudiantes = [];
    if (fs.existsSync(filePath)) {
        estudiantes = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }

    // Añadir nuevo estudiante
    estudiantes.push({ nombres, codigo });

    // Guardar en el archivo
    fs.writeFileSync(filePath, JSON.stringify(estudiantes, null, 2));
    console.log('Estudiante registrado:', { nombres, codigo });
}

// Ejemplo de 5 usuarios
registrarEstudiante('Juan Pérez', '123456');
registrarEstudiante('Ana González', '234567');
registrarEstudiante('Carlos Ruiz', '345678');
registrarEstudiante('María López', '456789');
registrarEstudiante('Pedro Martínez', '567890');
