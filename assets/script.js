function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass); //classList adiciona uma classe ao elemento
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';           
    if(body.classList.contains(darkModeClass)){ //contais verifica se tem o item especificado em parênteses dentro da class
        button.innerHTML = lightMode;          // innerHTML seleciona o HTML do item que é 'dark-mode'
        h1.innerHTML = darkMode + ' ON';          
        return;
    }
        button.innerHTML = darkMode;               
        h1.innerHTML = lightMode + ' ON';
    

}
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

console.log(body);

button.addEventListener('click', changeMode); // addEventListener adiciona uma funcionalidade
    
    // .classList.contains('btn-success');  verifica se contem calsse
   // .classList.remove('btn-danger');     remove uma classe
  // .classList.add('btn-success');       adiciona uma classe