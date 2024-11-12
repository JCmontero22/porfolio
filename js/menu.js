const hamburguer = document.querySelector('.iconoMenu');
const menu = document.querySelector('.menuNavegacion');

console.log(hamburguer);
console.log(menu);


hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread");
})

window.addEventListener('click', e=> {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {
        menu.classList.toggle("spread");
    }
});