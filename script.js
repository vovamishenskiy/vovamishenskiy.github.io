document.addEventListener('DOMContentLoaded', function () {
    const pic = document.querySelector('.rotate-container');

    window.addEventListener('load', (event) => {
        setTimeout(() => {
            pic.classList.add('rotate');
        }, '2000');
    })
})