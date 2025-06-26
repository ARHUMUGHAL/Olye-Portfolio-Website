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
}
NavbarAnimation()


const span = document.querySelector('.content span p')

gsap.to(span,{
    y : '-80px',
    duration : .5
})

gsap.to('.content h1',{
    y : '-50px',
    duration : .5,
    opacity : 1,
    delay : .5
})

gsap.to('.content p.hero-description',{
    y : '-50px',
    duration : .5,
    opacity : 1,
    delay : 1
})


gsap.to('.buttons',{
    y : '-50px',
    duration : .5,
    opacity : 1,
    delay : 1.5
})

const tl = gsap.timeline();

tl.to('.identity-1',{
    x : '-40px',
    y : '40px',
    duration : 2,
    repeat : -1,
    yoyo : true
}, 'a')

tl.to('.identity-2',{
    x : '40px',
    y : '-40px',
    duration : 2,
    repeat : -1,
    yoyo : true
}, 'a')
