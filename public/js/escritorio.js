console.log('Escritorio HTML');
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Obtener el valor del parámetro "nombre"
const nombre = urlParams.get('escritorio');
console.log(nombre);
Usuario.textContent = nombre

const socket = io();

let cantidad = 0;

socket.on('connect', () => {
    console.log("Conexión establecida con el servidor");
})

socket.on("ticketIncrementado", (ticketCounter) => {
    console.log(`Ticket incrementado a: ${ticketCounter}`);
    lblPendientes.textContent = ticketCounter;
});



atenderTicket.addEventListener('click', () => {
    const audio = new Audio('./audio/new-ticket.mp3')
    console.log("Botón clickeado");
    audio.play();
    socket.emit("Atender",(disminuir)=>{
        lblPendientes.textContent = disminuir
    })

    socket.emit("Atendidos", atender.textContent, (cantidadAtendido) => {
        console.log(`Atendidos: ${cantidadAtendido}`);
        atender.textContent = cantidadAtendido;
    });
}
)

socket.on('TicketDisminuye', (ticketAtendido) => {
    console.log(`Ticket atendido: ${ticketAtendido}`);
    // Actualizar la interfaz de usuario con el nuevo ticket atendido
    lblPendientes.textContent = ticketAtendido;
});

socket.emit("escritorio", nombre)


