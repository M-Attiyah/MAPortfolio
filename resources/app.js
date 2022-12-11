const header = document.querySelector('header');

window.addEventListener('scroll', e => {
    if (document.body.scrollTop >= 60 || document.documentElement.scrollTop >= 60) {
        header.classList.add('colored')
        header.classList.remove('transparent')
    } else {
        header.classList.remove('colored')
        header.classList.add('transparent')
    }
})