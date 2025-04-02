

const hamburgerMenuButton = document.querySelector('.hamburger-menu-button');
const hamburgerMenuImage = document.querySelector('.hamburger-menu-image');
const hamburgerMenuCloseImage = document.querySelector('.hamburger-menu-close-image')
const hamburgerDropDownContent = document.querySelector('.hamburger-dropdown-content');
const dropDownLinkList = document.querySelector('.dropdown-link-list');


//Listens for dropdownbutton and shows menu on click
hamburgerMenuButton.addEventListener('click', () => {
    if (hamburgerDropDownContent.classList.contains('openMenu')) {
        hamburgerDropDownContent.classList.remove('openMenu');
        hamburgerMenuImage.style.display = 'block'
        hamburgerMenuCloseImage.style.display = 'none';

    }
    else {
        hamburgerDropDownContent.classList.add('openMenu');
        hamburgerMenuImage.style.display = 'none'
        hamburgerMenuCloseImage.style.display = 'block';

   }
})


//Listens for menu presses and closes menu on click
const dropdownMenuLink = document.querySelectorAll('.dropdown-link');

dropdownMenuLink.forEach(link => {
    link.addEventListener('click', () => {
        hamburgerDropDownContent.classList.remove('openMenu');
        hamburgerMenuImage.style.display = 'block'
        hamburgerMenuCloseImage.style.display = 'none';
    })
});