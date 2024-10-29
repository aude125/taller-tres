const fs = require('fs');

// Lista de personas con datos básicos
const personas = [
    { nombre: "Juan Pérez", edad: 30, correo: "juan.perez@example.com" },
    { nombre: "María Gómez", edad: 25, correo: "maria.gomez@example.com" },
    { nombre: "Carlos Sánchez", edad: 28, correo: "carlos.sanchez@example.com" },
    { nombre: "Ana Martínez", edad: 32, correo: "ana.martinez@example.com" },
    { nombre: "Luis Rodríguez", edad: 27, correo: "luis.rodriguez@example.com" },
    { nombre: "Laura Fernández", edad: 24, correo: "laura.fernandez@example.com" },
    { nombre: "Pedro López", edad: 29, correo: "pedro.lopez@example.com" },
    { nombre: "Sofía González", edad: 26, correo: "sofia.gonzalez@example.com" },
    { nombre: "Miguel Torres", edad: 31, correo: "miguel.torres@example.com" },
    { nombre: "Lucía Ramírez", edad: 23, correo: "lucia.ramirez@example.com" },
    { nombre: "Jorge Díaz", edad: 34, correo: "jorge.diaz@example.com" },
    { nombre: "Elena Morales", edad: 22, correo: "elena.morales@example.com" },
    { nombre: "Raúl Castillo", edad: 35, correo: "raul.castillo@example.com" },
    { nombre: "Isabel Vega", edad: 28, correo: "isabel.vega@example.com" },
    { nombre: "Fernando Ruiz", edad: 33, correo: "fernando.ruiz@example.com" },
    { nombre: "Patricia Herrera", edad: 27, correo: "patricia.herrera@example.com" },
    { nombre: "Andrés Mendoza", edad: 30, correo: "andres.mendoza@example.com" },
    { nombre: "Marta Ortiz", edad: 25, correo: "marta.ortiz@example.com" },
    { nombre: "Ricardo Jiménez", edad: 29, correo: "ricardo.jimenez@example.com" },
    { nombre: "Gabriela Navarro", edad: 32, correo: "gabriela.navarro@example.com" }
];

// Crear archivo JSON
fs.writeFile('personas.json', JSON.stringify(personas, null, 4), (err) => {
    if (err) throw err;
    console.log('Archivo JSON creado con éxito.');
});