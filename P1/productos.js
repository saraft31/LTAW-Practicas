//Constantes de los botones
const bCasco = document.getElementById('cascosyprotec');
const bTablas = document.getElementById('tablas');
const bFija= document.getElementById('fija');
const bBotas= document.getElementById('botas');

//oculto los productos inicialmente
document.getElementById('cascos').style.display = 'none';
document.getElementById('botaS').style.display = 'none';

bCasco.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('cascos').style.display = 'block';
    document.getElementById('botaS').style.display = 'none';
}

bTablas.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('cascos').style.display = 'none';
    document.getElementById('botaS').style.display = 'none';
}

bFija.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('cascos').style.display = 'none';
    document.getElementById('botaS').style.display = 'none';
}

bBotas.onclick = () => {
    
    console.log("activo deslizadores");
    document.getElementById('cascos').style.display = 'none';
    document.getElementById('botaS').style.display = 'block';
}