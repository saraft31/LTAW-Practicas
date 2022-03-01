//Constantes de los botones
const bCasco = document.getElementById('cascos');
const bTablas = document.getElementById('tablas');
const bFija= document.getElementById('fija');
const bBotas= document.getElementById('botas');

//oculto los productos inicialmente
document.getElementById('productos').style.display = 'none';
//document.getElementById('invertidores').style.display = 'none';

bCasco.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('productos').style.display = 'block';
    //document.getElementById('invertidores').style.display = 'none';
}

bTablas.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('productos').style.display = 'none';
    //document.getElementById('invertidores').style.display = 'none';
}

bFija.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('productos').style.display = 'none';
    //document.getElementById('invertidores').style.display = 'none';
}

bBotas.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('productos').style.display = 'none';
    //document.getElementById('invertidores').style.display = 'none';
}