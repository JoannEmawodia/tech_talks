AOS.init();

const dataDoEvento = new Date("Dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60; 

    const diasAteOEvento = Math.floor (distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor ((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor ((distanciaAteOEvento % horaEmMs)/ minutoEmMs);
    const segundosAteOEvento = Math.floor ((distanciaAteOEvento % minutoEmMs) / 1000);

    //console.log(diasAteOEvento);
    //console.log(horasAteOEvento); - o sinal de % retorna os valores decimais do numero.
    //console.log(minutosAteOEvento);
    //console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = ` em ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById ('contador').innerHTML = 'agora'
    }
},1000);