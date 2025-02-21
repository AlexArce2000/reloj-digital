const mostrarReloj = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    console.log(`${hr}:${min}:${seg}`)
    document.getElementById('hora').innerHTML=`${hr}`;
    document.getElementById('min').innerHTML=`${min}`;
    document.getElementById('seg').innerHTML=`${seg}`;


    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado'];
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes} ${fecha.getFullYear()}`;
    document.getElementById('diaSemana').innerHTML =`${diaSemana}`;
    document.getElementById('dia').innerHTML =`${dia}`;
    document.getElementById('mes').innerHTML =`${mes}`;
    document.getElementById('anio').innerHTML =`${anio}`;


    document.getElementById('contenedor').classList.toggle('animar') 
}

setInterval(mostrarReloj,1000);

const formatoHora = (hora)=>{
    if (hora < 10) {
        hora = '0'+hora;
    }
    return hora;
}
