function zoomProjeto(){
    const popup = document.querySelector('.popup-projeto');
    popup.style.display = 'block';
    
    
}

function fecharZoomProjeto(){    
    const popup = document.querySelector('.popup-projeto');
    popup.style.display = 'none';
}

function acessarRepositorio(){
   const win = window.open('https://github.com/LucasIankoski/SnakeGame', '_blank')
   win.focus()
}
