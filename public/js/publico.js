const socket = io();
let nombrecontar = 0;
socket.on('connect', () => {
    console.log("Conexión establecida con el servidor");
})
socket.on("AdendidosCantidad", cantidadAtendido=>{
//     ticket_publico1.textContent = cantidadAtendido
//     ticket_publico2.textContent = cantidadAtendido
//     ticket_publico3.textContent = cantidadAtendido
//  ticket_publico4.textContent =cantidadAtendido
//     console.log(cantidadAtendido)

})




socket.on("nameUsuario", (nombrenew) => {
    // console.log(`Nombre del usuarion en publico: ${nombrenew}`);
    console.log('Nuevo nombre de escritorio recibido:', nombrenew);
    nombrecontar++

    if (nombrecontar === 1) {
        lblEscritorio4.textContent = nombrenew
        ticket_publico4.textContent = nombrecontar
    } else if (nombrecontar === 2) {
        lblEscritorio3.textContent = nombrenew
        ticket_publico3.textContent = nombrecontar
    } else if (nombrecontar === 3) {
        lblEscritorio2.textContent = nombrenew
        ticket_publico2.textContent = nombrecontar
    } else if (nombrecontar == 4) {
        lblEscritorio1.textContent = nombrenew
        ticket_publico1.textContent = nombrecontar
    }


})

// socket.on("num", contarescritorios => {
//     console.log(`Numero, ${contarescritorios}`);
//     lblEscritorio1.textContent = contarescritorios
//     lblEscritorio2.textContent = contarescritorios
// })     