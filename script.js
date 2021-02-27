const bookmarkBtn = document.getElementById('bookmark-project-btn');
const bookmarkText = document.getElementById('bookmark-text');
const backProjectBtn = document.getElementById('back-project-btn');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeHamburger = document.getElementById('close-hamburger');
const innerContainer = document.getElementById('inner-container');
const mobileNavBar = document.getElementById('mobile-nav-bar');
const modalContainer = document.getElementById('modal-container');
const modalCloseBtn = document.getElementById('modal-close-btn');
const navBar = document.getElementById('nav-bar');
const pledgeRadios = document.querySelectorAll('.pledge-radio');
const pledgeSubmitBtn = document.querySelectorAll('.pledge-submit-btn');
const rewardBtns = document.querySelectorAll('.reward-btn');
const thankYouContainer = document.getElementById('thank-you-container');
const thankYouBtn = document.getElementById('thank-you-btn');

bookmarkBtn.addEventListener('click', e => {
    bookmarkBtn.classList.toggle('active');
    if (bookmarkBtn.classList.contains('active')) {
        bookmarkText.innerHTML = `Bookmarked`;
    } else {
        bookmarkText.innerHTML = `Bookmark`;
    }
});

backProjectBtn.addEventListener('click', () => {
    modalContainer.classList.add('show');
});

modalCloseBtn.addEventListener('click', () => {
    modalContainer.classList.remove('show');
});

pledgeRadios.forEach(button => {
    button.addEventListener('click', e => {
        pledgeRadios.forEach(btn => {
            let sectionElement = btn.parentElement.parentElement.parentElement.parentElement;
            console.log(sectionElement)
            if (btn.checked) {
                sectionElement.classList.add('selected');
            } else {
                sectionElement.classList.remove('selected');
            }
        });

        if (button.id == 'no-reward') {
            modalContainer.classList.remove('show');
            thankYouContainer.classList.add('show');
        }
    });
});

rewardBtns.forEach(button => {
    button.addEventListener('click', e => {
        modalContainer.classList.add('show');
        
        if (button.classList.contains('item-1-reward')) {
            document.querySelector('.item-1').scrollIntoView(true);
            document.querySelector('.item-2 #reward-25').click();
        } else if (button.classList.contains('item-2-reward')) {
            document.querySelector('.item-2').scrollIntoView(true);
            document.querySelector('.item-3 #reward-75').click();
        }
    });
});

pledgeSubmitBtn.forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        modalContainer.classList.remove('show');
        thankYouContainer.classList.add('show');
        
        const element = innerContainer.getBoundingClientRect().top + window.pageYOffset + (-110) ;
        window.scrollTo({ top: element, behavior: 'smooth' })
    })
})

thankYouBtn.addEventListener('click', () => {
    thankYouContainer.classList.remove('show');
});

hamburgerIcon.addEventListener('click', () => {
    mobileNavBar.classList.add('show');
    navBar.classList.add('active');
});

closeHamburger.addEventListener('click', () => {
    mobileNavBar.classList.remove('show');
    navBar.classList.remove('active');
})

