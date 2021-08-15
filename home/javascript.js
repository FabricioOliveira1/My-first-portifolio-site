(function(){

/* MENU RESPONSIVO*/    
const $btnMobile = document.getElementById('btn_mobile')

function togglemenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

$btnMobile.addEventListener('click', togglemenu);
//--------------------------------------------------------------------------

//EFEITO DIGITAÇÃO NA MAIN

function textWriter(element){
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        setTimeout(() => element.innerHTML += letra, 75 * i)
    });
}

const $title = document.querySelector('.main__title');

textWriter($title)
//-----------------------------------------------------------------------------

//EFEITO EXPANÇÃO DO LINK DOS CARDS

var $card = document.querySelectorAll('.card');

//função para adicionar a classe active no link dentro do card
function toggleLink(){ 
    this.querySelector('.button_link').classList.toggle('active')
}

//cada elemnto da nodelist receber um listener

for (var i = 0; i < $card.length; i++){
    var entermouse = $card.item(i).addEventListener('mouseenter', toggleLink);
    var leavemouse = $card.item(i).addEventListener('mouseleave', toggleLink);
}
})()
