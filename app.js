function convertir() {
    let entrada = prompt("Ingresa la temperatura en grados Celsius (°C):");
    let c = Number(entrada);

    // Validación: revisa si está vacío o si no es un número (isNaN)
    while (entrada === null || entrada.trim() === "" || isNaN(c)) {
        alert("¡ERROR! Por favor ingresa un número válido.");
        entrada = prompt("Ingresa la temperatura en Celsius (°C):");
        c = Number(entrada);
    }

    // Fórmulas de conversión
    let k = c + 273.15;
    let f = (c * 1.8) + 32;

    // Impresión en consola
    console.log(`Grados Kelvin: ${k}`);
    console.log(`Grados Fahrenheit: ${f}`);

    // Impresión en el DOM
    document.getElementById("res").innerHTML = 
        `<p><strong>Grados Kelvin:</strong> ${k}</p>
         <p><strong>Grados Fahrenheit:</strong> ${f}</p>`;
}