// Simulador de logs para el navegador
function iniciarSimuladorLogs() {
    console.log("🔍 Sistema de logs activado. Registrando cada 5 segundos...");
    
    setInterval(() => {
        const tipos = ["info", "warning", "error"];
        const tipo = tipos[Math.floor(Math.random() * tipos.length)];
        const mensajes = {
            info: "La aplicación está funcionando correctamente.",
            warning: "Advertencia: Alto uso de memoria.",
            error: "Error crítico: ¡La base de datos no responde!"
        };
        
        // Registrar en la interfaz
        if (typeof registrarLog !== 'undefined') {
            registrarLog(mensajes[tipo], tipo);
        }
        
        // Registrar en consola
        console[tipo === "error" ? "error" : tipo === "warning" ? "warn" : "log"](mensajes[tipo]);
    }, 5000);
}

// Iniciar cuando la página cargue
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarSimuladorLogs);
} else {
    iniciarSimuladorLogs();
}
