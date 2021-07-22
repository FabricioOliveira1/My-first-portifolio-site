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

const $card = document.querySelector('.card');
const $button_link = document.querySelector('.button_link');

function toggleLink(toggleLink){
    $button_link.classList.toggle('active');
}

const expand_Link = $card.addEventListener('mouseenter', toggleLink);
const recue_Link = $card.addEventListener('mouseleave', toggleLink);

})()
