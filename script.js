const logo = document.querySelector('.logo h1')

gsap.to(logo,{
    x : '200px',
    duration : 2,
})

gsap.to('nav ul',{
    x : '-720px',
    duration : 2
})