// Función para registrar logs
function registrarLog(mensaje, tipo = "info") {
    const logsDiv = document.getElementById('logs');
    const logEntry = document.createElement('p');
    logEntry.style.color = tipo === "error" ? "red" : tipo === "warning" ? "orange" : "green";
    logEntry.textContent = `[${new Date().toISOString()}] [${tipo.toUpperCase()}] ${mensaje}`;
    logsDiv.appendChild(logEntry);
    console[tipo](mensaje);
}

// Funciones de la app
function saludar() {
    document.getElementById('resultado').textContent = '¡Hola desde CI/CD! 🔴🔴';
    registrarLog("Saludar ejecutado correctamente.");
}

function error() {
    document.getElementById('resultado').textContent = '¡Ups! Algo salió mal. 🔴🔴';
    registrarLog("Error forzado por el usuario.", "error");
    throw new Error("Error forzado para probar los logs.");
}

// Función para sumar (con logs)
function sumar(a, b) {
    if (a < 0 || b < 0) {
        registrarLog(`Intento de sumar números negativos: ${a} + ${b}`, "warning");
        throw new Error("No se pueden sumar números negativos.");
    }
    const resultado = a + b;
    registrarLog(`Sumar ejecutado: ${a} + ${b} = ${resultado}`);
    return resultado;
}

// Exportar funciones para pruebas
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { sumar, saludar, error, registrarLog };
}
