function onGetDatosuma(){
    const input1 = document.getElementById("Input1").value; 
    const input2 = document.getElementById("Input2").value;
    const resultadosuma = sumaDosNumeros(input1,input2);
    console.log('resultado suma '+resultadosuma);
    alert('La suma es: '+resultadosuma);
}

function sumaDosNumeros(a,b){
    const numero1 = parseInt(a);
    const numero2 = parseInt(b);
    const suma = numero1 + numero2;
    return suma;
}

