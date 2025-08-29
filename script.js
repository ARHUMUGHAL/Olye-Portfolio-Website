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
    heroboxH1Content.forEach(function (elem) {
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
        stagger: 0.08
    })

    gsap.to('.content p.hero-description', {
        y: '-50px',
        duration: .5,
        opacity: 1,
        delay: 1
    })

    gsap.to('.image-container', {
        opacity: 1,
        scale: 1,
        duration: 1
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

function ServicesSectionAnimation(){
    gsap.to('.service-container .heading h1', {
    x: '200px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        start: '5% top',
        end: '15% bottom'
    }
})

gsap.to('.service-container .service-box', {
    y: '-200px',
    opacity: 1,
    duration: 1,
    scrollTrigger: {
        start: '5% top',
        end: '15% bottom'
    },
    stagger: 0.09
})

const digitalBrandingService = document.querySelector('.service-container .top-row .digital-branding')
const digitalBrandingShine = document.querySelector(".service-box-shine")
const digitalBrandingArrow = document.querySelector('.service-container .top-row .digital-branding .digitalbranding-header i')


digitalBrandingService.addEventListener('mouseenter',function(){
    gsap.to(digitalBrandingService,{
        scale : 1.03,
        duration : 1,
    })
    gsap.to(digitalBrandingArrow,{
        transform : 'rotate(90deg)'
    })
    gsap.to(digitalBrandingShine,{
        // x : '820px',
        width : '400px',
        height : '400px',
        borderRadius : '500px',
        duration : 1
    })
})

digitalBrandingService.addEventListener('mouseleave',function(){
    gsap.to(digitalBrandingService,{
        scale : 1,
        duration : 1,
    })
        gsap.to(digitalBrandingArrow,{
        transform : 'rotate(45deg)'
    })
        gsap.to(digitalBrandingShine,{
        // x : '-50px',
        width : '20px',
        height : '20px',
        duration : 1
    })
})

const visualIdentityService = document.querySelector('.service-container .top-row .visual-identity')
const visualIdentityShine = document.querySelector(".service-box-shine-visual")
const visualIdentityArrow = document.querySelector('.service-container .top-row .visual-identity .visualidentity-header i')


visualIdentityService.addEventListener('mouseenter',function(){
    gsap.to(visualIdentityService,{
        scale : 1.03,
        duration : 1,
    })
    gsap.to(visualIdentityArrow,{
        transform : 'rotate(90deg)'
    })
    gsap.to(visualIdentityShine,{
        // x : '820px',
        width : '400px',
        height : '400px',
        borderRadius : '500px',
        duration : 1
    })
})

visualIdentityService.addEventListener('mouseleave',function(){
    gsap.to(visualIdentityService,{
        scale : 1,
        duration : 1,
    })
        gsap.to(visualIdentityArrow,{
        transform : 'rotate(45deg)'
    })
        gsap.to(visualIdentityShine,{
        // x : '-50px',
        width : '20px',
        height : '20px',
        duration : 1
    })
})

const userResearchService = document.querySelector('.service-container .bottom-row .user-research')
const userResearchShine = document.querySelector(".service-box-shine-user-research")
const userResearchArrow = document.querySelector('.service-container .bottom-row .user-research .userresearch-header i')


userResearchService.addEventListener('mouseenter',function(){
    gsap.to(userResearchService,{
        scale : 1.03,
        duration : 1,
    })
    gsap.to(userResearchArrow,{
        transform : 'rotate(90deg)'
    })
    gsap.to(userResearchShine,{
        // x : '820px',
        width : '400px',
        height : '400px',
        borderRadius : '500px',
        duration : 1
    })
})

userResearchService.addEventListener('mouseleave',function(){
    gsap.to(userResearchService,{
        scale : 1,
        duration : 1,
    })
        gsap.to(userResearchArrow,{
        transform : 'rotate(45deg)'
    })
        gsap.to(userResearchShine,{
        // x : '-50px',
        width : '20px',
        height : '20px',
        duration : 1
    })
})



const artDirectionService = document.querySelector('.service-container .bottom-row .art-direction')
const artDirectionShine = document.querySelector(".service-box-shine-art-direction")
const artDirectionArrow = document.querySelector('.service-container .bottom-row .art-direction .artdirection-header i')


artDirectionService.addEventListener('mouseenter',function(){
    gsap.to(artDirectionService,{
        scale : 1.03,
        duration : 1,
    })
    gsap.to(artDirectionArrow,{
        transform : 'rotate(90deg)'
    })
    gsap.to(artDirectionShine,{
        // x : '820px',
        width : '400px',
        height : '400px',
        borderRadius : '500px',
        duration : 1
    })
})

artDirectionService.addEventListener('mouseleave',function(){
    gsap.to(artDirectionService,{
        scale : 1,
        duration : 1,
    })
        gsap.to(artDirectionArrow,{
        transform : 'rotate(45deg)'
    })
        gsap.to(artDirectionShine,{
        // x : '-50px',
        width : '20px',
        height : '20px',
        duration : 1
    })
})
}
ServicesSectionAnimation()

function WorkSectionAnimation(){
    const WorkSectionHeader = document.querySelector('.Works .work-container .content-header')

gsap.to(WorkSectionHeader,{
    y : '-50px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        start : '22% 50%',
        end : '23% 60%'
    }
})


gsap.to('.work-container .sub-work-category',{
    y : '-25%',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        start : '23% 50%'
    },
    stagger : 0.15

})
}
WorkSectionAnimation()

function AboutSectionAnimation(){
    gsap.to('.about-me-heading h1',{
    x : '150px',
    opacity : 1,
    duration : 1,
    scrollTrigger :{
        start : '43% 50%',
        end : '44% 55%'
    }
})

gsap.to('.about-me-container .about-sub-content',{
    y : '-150px',
    duration : 1,
    stagger : 0.15,
    opacity : 1,
    scrollTrigger : {
        start : '44% 50%',
    }
})


gsap.to('.about-btn .sub-btn',{
    y : '-50px',
    duration : 1,
    stagger : 0.15,
    opacity : 1,
    scrollTrigger : {
        start : '62% 50%'
    }
})
}
AboutSectionAnimation()

function ReviewSectionAnimation(){
    gsap.to('.testimonail-header h1',{
    x : '200px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        start : '66% 50%'
    }
})


gsap.to('.review',{
    y : '-150px',
    duration : 1,
    opacity : 1,
    scrollTrigger:{
        start : '68% 50%'
    },
    stagger : 0.15

})

}
ReviewSectionAnimation()

function ArticleSectionAnimation(){
    gsap.to('.article-header h1',{
    x : '200px',
    duration : 1,
    opacity : 1,
    scrollTrigger : {
        start : '75% 50%'
    }
})


gsap.to('.article',{
    y : '-150px',
    duration : 1,
    opacity : 1,
    scrollTrigger:{
        start : '78% 50%'
    },
    stagger : 0.15
})
}
ArticleSectionAnimation()

function ContactSectionAnimation(){
    
gsap.to('.work-bar p',{
    x : '-1000px',
    duration : 10,
    repeat : -1
})

gsap.to('.contact-content',{
    x : '200px',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        start : '88% 50%'
    }
})

gsap.to('.contact-form',{
    x : '-200px',
    duration : 1,
    opacity : 1,
    scrollTrigger :{
        start : '88% 50%'
    }
})

}
ContactSectionAnimation()