(function () {
    document.addEventListener('click', burgerInit)

    function burgerInit(e) {
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__link')
        const burgerModalLink = e.target.closest('.modal__link')
        if (burgerModalLink) return
        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 1180) return
        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }


    // modal__book 
    const modalBook = document.querySelector('.modal__book')
    const modalBookButton = document.querySelector('.modal__link')

    modalBookButton.addEventListener('click', openBookModal)
    modalBook.addEventListener('click', closeBookModal)

    function openBookModal(e) {
        e.preventDefault()
        document.body.classList.toggle('body--opened-modal__book')
    }

    function closeBookModal(e) {
        e.preventDefault()

        const target = e.target

        if (target.closest('.modal__book-cancel') || target.classList.contains('modal__book')) {
            document.body.classList.remove('body--opened-modal__book')
        }
    }

    // strip

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const half = document.body.scrollHeight / 2;
        document.querySelector('.strip').classList.toggle('strip--visible', scrolled >= half);
    });

})()