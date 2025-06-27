function NavbarAnimation() {
    const logo = document.querySelector('.logo h1')

    gsap.to(logo, {
        x: '200px',
        duration: 2,
    })

    gsap.to('nav ul', {
        x: '-720px',
        duration: 2
    })

    const navBtn = document.querySelector('nav ul li.nav-btn')
    const navBtnShine = document.querySelector('.nav-btn-shine')

    navBtn.addEventListener('mouseenter', function () {

        navBtn.style.transform = 'scale(1.05)'
        gsap.to(navBtnShine, {
            x: '200px',
            duration: 1
        })
    })

    navBtn.addEventListener('mouseleave', function () {
        navBtn.style.transform = 'scale(1)'
        gsap.to(navBtnShine, {
            x: '-50px',
            duration: .5
        })
    })
}
NavbarAnimation()




function HeroboxAnimation() {
    const span = document.querySelector('.content span p')
    const heroboxH1 = document.querySelector('.content h1')
    const heroboxH1Content = heroboxH1.textContent.split(' ')
    let heroboxH1Word = ''
    heroboxH1Content.forEach(function(elem){
        heroboxH1Word += `<span class="hero-heading-span">${elem}</span>`
    })

    heroboxH1.innerHTML = heroboxH1Word
    



    gsap.to(span, {
        y: '-80px',
        duration: .5
    })

    gsap.from('.content h1 span', {
        y: '150px',
        duration: .5,
        delay: .5,
        stagger : 0.08
    })

    gsap.to('.content p.hero-description', {
        y: '-50px',
        duration: .5,
        opacity: 1,
        delay: 1
    })

    gsap.to('.image-container',{
        opacity : 1,
        scale : 1,
        duration : 1
    })


    gsap.to('.buttons', {
        y: '-50px',
        duration: .5,
        opacity: 1,
        delay: 1.5
    })

    const tl = gsap.timeline();

    tl.to('.identity-1', {
        x: '-40px',
        y: '40px',
        duration: 2,
        repeat: -1,
        yoyo: true
    }, 'a')

    tl.to('.identity-2', {
        x: '40px',
        y: '-40px',
        duration: 2,
        repeat: -1,
        yoyo: true
    }, 'a')
}

HeroboxAnimation()
