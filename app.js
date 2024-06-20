/*Llamados al DOM */
let tituloH1 = document.querySelector('h1');
let parrafoP = document.querySelector('p');

/*Variables globales*/
let numeroSecreto =0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;


const condicionesIniciales = () => {
    numeroSecreto = generarNumeroAleatorio();
    crearElementoHtml(tituloH1,'Juego del numero secreto');
    crearElementoHtml(parrafoP,`Indica un numero del 1 al ${numeroMaximo}`);
    intentos = 1;
    
}


const generarNumeroAleatorio = () =>{
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(numeroAleatorio);
    console.log(numerosSorteados);
    if (numerosSorteados.length == numeroMaximo) {
        crearElementoHtml(parrafoP, `Ya se sortearon los ${numeroMaximo} posibles`);
    } else {
        if (numerosSorteados.includes(numeroAleatorio)) {
            return generarNumeroAleatorio();
        } else {
            numerosSorteados.push(numeroAleatorio);
            return numeroAleatorio
        }
    }
    
}


const crearElementoHtml = (elementoHtml,texto) => elementoHtml.innerHTML = texto;


const validarIntento = () => {
    let numeroUsuario = parseInt(document.querySelector('#valor').value);

    if (numeroUsuario === numeroSecreto) {
        crearElementoHtml(parrafoP,`!Acertaste en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}¡`);
        document.querySelector('#reiniciar').disabled = false;
    } else if(numeroUsuario<numeroSecreto){
        crearElementoHtml(parrafoP,'El numero secreto es mayor');
    }else{
        crearElementoHtml(parrafoP,'El numero secreto es menor');
    }
    intentos ++;
    limpiarImputs();
}


const limpiarImputs = () => document.querySelector('#valor').value = '';


const reiniciarJuego = () =>{

    condicionesIniciales();
    limpiarImputs();
    document.querySelector('#reiniciar').disabled = true;
}




condicionesIniciales();


