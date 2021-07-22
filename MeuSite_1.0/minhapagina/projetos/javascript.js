/* MENU RESPONSIVO*/    
const $btnMobile = document.getElementById('btn_mobile')

function togglemenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

$btnMobile.addEventListener('click', togglemenu);
//--------------------------------------------------------------------------


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









//const expand_Link = $card.addEventListener('mouseenter', toggleLink);
//    const recue_Link = $card.addEventListener('mouseleave', toggleLink);




