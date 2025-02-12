
// menu icon
const menuIcon = document.querySelector('#menu-icon');
const displayNav = document.querySelector('nav');

menuIcon.addEventListener('click', ()=>{
    displayNav.classList.toggle('active')
    menuIcon.classList.toggle('bx-x');
});

// Navbar active link

const activeLink = document.querySelectorAll('header nav a');

activeLink.forEach((navlink) =>{

    navlink.addEventListener('click', ()=>{

        activeLink.forEach(otherlink =>{

            otherlink.classList.remove('active');
        });
        navlink.classList.add('active');

        menuIcon.classList.remove('bx-x');
        displayNav.classList.remove('active')
    });
});



// stand-out buttons function

const resumeBtn = document.querySelectorAll(".resume-btn");

resumeBtn.forEach((btn, idx) => {
    btn.addEventListener('click', ()=>{

        const resumeDetails = document.querySelectorAll('.resume-detail')

        resumeBtn.forEach(btn =>{
            btn.classList.remove('active')
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});



// show more content functon

const moreBtn = document.querySelectorAll('.more-btn');
const lessBtn = document.querySelectorAll('.less-btn');
const moreContent = document.querySelectorAll('.read-more-content');

moreBtn.forEach((more, idx) => {
  more.addEventListener('click', () => {
    moreContent[idx].style.display = 'block';
    moreBtn[idx].style.display = 'none';
    lessBtn[idx].style.display = 'block';
  });
  scrollTo(0,0);
});

lessBtn.forEach((less, idx) => {
  less.addEventListener('click', () => {
    moreContent[idx].style.display = 'none';
    moreBtn[idx].style.display = 'block';
    lessBtn[idx].style.display = 'none';
  });
  scrollTo(0,0);
});



// navigation

const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');


let index = 0;
const activePortfolio =()=>{
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail =>{
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active')
}

arrowRight.addEventListener('click', ()=>{
    if(index < 4){
        index++;
        arrowLeft.classList.remove('disabled');
    }else{
        index = 4;
        arrowRight.classList.add('disabled');
    }
    activePortfolio();
});

arrowLeft.addEventListener('click', ()=>{
    if(index > 1){
        index--
        arrowRight.classList.remove('disabled');
    }else{
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    activePortfolio();
});


// pop up
const popUp = document.querySelector('.pop-up-container');
const closePopUp = document.querySelector('.bx-x');
const emailBtn = document.querySelector('.email-btn');
const gitLinkBtn = document.querySelectorAll('.live-github .bxl-github');

closePopUp.addEventListener('click', ()=>{
    popUp.classList.add('active');
});

gitLinkBtn.forEach(gitBtn =>{
    gitBtn.addEventListener('click', ()=>{
        popUp.classList.remove('active');
    });
});


emailBtn.addEventListener('click', ()=>{
    popUp.classList.add('active');
});

// footer date
const footerDate = document.querySelector('.date');
const date = new Date().getFullYear();
footerDate.innerHTML = date;