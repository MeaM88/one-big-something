const hamburgerMenu = document.querySelector('.toggle-btn-nav');
const colorMenu = document.querySelector('.color-toggle-links');
let menuItems = document.querySelectorAll('.menu-item');

//open en sluit het hamburger mennu 


hamburgerMenu.addEventListener('click', () => {
   colorMenu.classList.toggle('menu-visible')
});

//klik op de kleur knop en de achtergrond veranderd in de betreffende kleur. En het menu sluit zich weer.

for (let i = 0; i < menuItems.length; i++)
    menuItems[i].addEventListener('click', function () {
        let btnStyle = getComputedStyle(this);
        let btnBackgroundColor = btnStyle['backgroundColor'];
        document.body.style.backgroundColor = btnBackgroundColor;

        colorMenu.classList.remove('menu-visible')
    });


// dank voor de feedback. Dat scheelt een hoop om te zien wat er allemaal kan. 
// geloof dat het nu wél voor elkaar is. 
// heb van alles omgegeooid in de code maar nu werkt de toggle iig wel helemaal
// wat ik lastig vind is dat er zo veel verschillende manieren zijn om de code te schrijven
// dus meerdere manieren zijn goed. Hopelijk deze ook ;-)