let bodyBg = document.getElementById('topClass');
let docText = document.getElementById('newFile');
let btn = document.querySelector('#changeBtn');

let darkMode = () => {

    bodyBg.classList.toggle('wrapper');
    
}

btn.addEventListener('click', darkMode);