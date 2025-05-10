function toggleMenu() {
    const menu = document.getElementById('slideMenu');
    if (menu.style.right === '0px') {
        menu.style.right = '-250px';
    } else {
        menu.style.right = '0px';
        
    }
}
