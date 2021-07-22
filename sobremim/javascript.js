/* MENU RESPONSIVO*/    
const $btnMobile = document.getElementById('btn_mobile')

function togglemenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
};

$btnMobile.addEventListener('click', togglemenu);
//--------------------------------------------------------------------------
